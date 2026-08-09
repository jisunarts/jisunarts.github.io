/* ==========================================================================
   js/archive.js — 기록(Archive) 카탈로그 인덱스 표
   data/archive.js 의 ARCHIVE · TYPES 를 읽어 그립니다.

   · 묶음   : TYPES 카테고리별(ORDER 순), 묶음 안에서 시작 연도 최신순
   · 코드   : {분류}{연도 두 자리}·{일련번호}  예) PF26·001
              일련번호는 카테고리마다 001부터, 최신 항목이 001입니다.
   · 행 클릭: url 이 있는 항목만 새 탭으로 열립니다.
   ========================================================================== */

(function renderArchive() {

  const mount = document.getElementById("archive-mount");
  if (!mount || typeof ARCHIVE === "undefined") return;

  /* --- 연도 문자열 읽기 ------------------------------------------------
     "2026" · "2021–26" · "2005–09" · "2014–"(진행 중) 을 모두 처리합니다. */
  function readYear(raw) {
    const s = String(raw || "").trim();
    const first = s.match(/\d{4}/);
    const start = first ? parseInt(first[0], 10) : 0;

    let end = start;
    const dash = s.match(/[–—-]\s*(\d{2,4})?$/);
    if (dash) {
      if (dash[1] === undefined) {
        end = 9999;                                  /* 진행 중 */
      } else if (dash[1].length === 2) {
        end = Math.floor(start / 100) * 100 + parseInt(dash[1], 10);
      } else {
        end = parseInt(dash[1], 10);
      }
    }
    return { start: start, end: end };
  }

  /* --- 카테고리 순서 (프로필 이력 순) ---------------------------------- */
  const ORDER = ["AF", "CA", "PF", "PJ", "IN", "NW", "RS", "CM"];

  /* --- 시기 필터 (홈 궤적에서 ?period=1 로 들어옵니다) ------------------
     시기의 연도 범위와 겹치는 항목을 모두 보여줍니다.
     (예: "2014–" 처럼 지금도 이어지는 일은 그 이후 시기에도 나옵니다.)   */
  function periodRange(p) {
    const nums = String(p.years || "").match(/\d{4}/g) || [];
    return {
      from: nums[0] ? parseInt(nums[0], 10) : 0,
      to:   nums[1] ? parseInt(nums[1], 10) : 9999
    };
  }

  const periodNo = parseInt(param("period"), 10);
  const period = (typeof TRAJECTORY !== "undefined" && periodNo >= 1 && TRAJECTORY[periodNo - 1])
    ? TRAJECTORY[periodNo - 1] : null;
  const range = period ? periodRange(period) : null;

  function inPeriod(y) {
    if (!range) return true;
    return y.start <= range.to && y.end >= range.from;
  }

  /* --- 한 줄 그리기 ----------------------------------------------------- */
  function renderRow(row, idx) {
    const it = row.item;

    /* 코드 — 카테고리 안에서 최신 항목이 001 */
    const yy = String(row.y.start).slice(-2);
    const serial = String(idx + 1).padStart(3, "0");
    const code = it.type + yy + "·" + serial;
    const anchor = it.type + yy + "-" + serial;   /* 주소용 (archive.html#AF20-001) */

    /* links: [{ label, url }, …]  ·  사이트 안 주소면 같은 창(→), 밖이면 새 탭(↗)
       링크가 하나면 행 전체가 열리고, 여럿이면 제목 아래에 라벨을 나열합니다.  */
    const links = it.links || (it.page ? [{ url: it.page }] : []);
    function isInside(u) { return !/^https?:/.test(u); }

    const one = links.length === 1 ? links[0] : null;
    const many = links.length > 1 ? links : null;

    const marks = one
      ? '<span class="cat-link" aria-hidden="true">' + (isInside(one.url) ? "→" : "↗") + "</span>"
      : "";

    const linkList = many
      ? '<span class="cat-links">' + many.map(function (l) {
          const ins = isInside(l.url);
          return '<a href="' + esc(l.url) + '"' + (ins ? "" : ' target="_blank" rel="noopener"') + ">" +
            esc(l.label || "보기") + (ins ? " →" : " ↗") + "</a>";
        }).join("") + "</span>"
      : "";

    const cells =
      '<span class="cat-code tnum">' + esc(code) + "</span>" +
      /* 모바일에서는 연도 열 대신 이것만 보입니다 (예: AF2020) */
      '<span class="cat-code-m tnum">' + esc(it.type + row.y.start) + "</span>" +
      '<span class="cat-title-cell">' +
        '<span class="cat-title" ' + bi({ ko: it.title_ko, en: it.title_en || it.title_ko }) + ">" +
          esc(it.title_ko) +
        "</span>" + marks + linkList +
      "</span>" +
      '<span class="cat-year tnum">' + esc(it.year) + "</span>";

    const rowHtml = one
      ? '<a class="cat-row" href="' + esc(one.url) + '"' +
          (isInside(one.url) ? "" : ' target="_blank" rel="noopener"') + ">" + cells + "</a>"
      : '<div class="cat-row is-plain">' + cells + "</div>";

    return '<li class="cat-item" id="' + anchor + '">' + rowHtml + "</li>";
  }

  /* --- 카테고리로 묶고, 묶음 안에서 최신순 ------------------------------
     시기 필터가 걸려 있으면 그 연도와 겹치는 항목만 남고,
     남은 항목이 없는 카테고리는 통째로 감춥니다. (묶음 구조는 그대로)   */
  const groups = ORDER.map(function (code) {
    const rows = ARCHIVE
      .map(function (item, i) { return { item: item, y: readYear(item.year), i: i }; })
      .filter(function (row) { return row.item.type === code && inPeriod(row.y); })
      .sort(function (a, b) {
        /* order 가 있는 항목이 먼저(오름차순), 없는 항목은 그 뒤에 연도 최신순 */
        const ao = a.item.order, bo = b.item.order;
        if (ao != null && bo != null) return ao - bo;
        if (ao != null) return -1;
        if (bo != null) return 1;
        return (b.y.start - a.y.start) || (b.y.end - a.y.end) || (a.i - b.i);
      });
    return { code: code, type: TYPES[code] || { ko: code, en: code }, rows: rows };
  }).filter(function (g) { return g.rows.length > 0; });

  const total = groups.reduce(function (n, g) { return n + g.rows.length; }, 0);
  const totalAll = ARCHIVE.length;

  /* --- 지금 걸린 필터 표시 ---------------------------------------------- */
  const bar = document.getElementById("archive-filter");
  if (bar) {
    if (period) {
      const label = {
        ko: period.years + " · " + period.title_ko,
        en: period.years.replace("현재", "Present") + " · " + period.title_en
      };
      bar.innerHTML =
        '<span class="cat-filter-label" ' + bi(label) + ">" + esc(label.ko) + "</span>" +
        '<a class="cat-filter-clear" href="archive.html" ' +
          'data-ko="× 전체 보기" data-en="× See all">× 전체 보기</a>';
      bar.hidden = false;
    } else {
      bar.innerHTML = "";
      bar.hidden = true;
    }
  }

  mount.innerHTML = groups.map(function (g) {
    return '<section class="cat-group">' +
      '<h2 class="cat-group-title">' +
        "<span " + bi(g.type) + ">" + esc(g.type.ko) + "</span>" +
        '<span class="meta tnum">' + g.rows.length + "</span>" +
      "</h2>" +
      '<ul class="cat">' + g.rows.map(renderRow).join("") + "</ul>" +
    "</section>";
  }).join("");

  /* --- 주소에 #코드 가 있으면 그 줄로 이동해 잠시 강조 ------------------ */
  (function highlight() {
    const id = decodeURIComponent((window.location.hash || "").slice(1));
    if (!id) return;
    const row = document.getElementById(id);
    if (!row) return;
    row.classList.add("is-target");
    row.scrollIntoView({ block: "center" });
    setTimeout(function () { row.classList.remove("is-target"); }, 2600);
  })();

  /* --- 개수 (페이지 맨 아래) -------------------------------------------- */
  const count = document.getElementById("archive-count");
  if (count) {
    const label = period
      ? { ko: period.years + " · " + total + "항목 (전체 " + totalAll + ")",
          en: period.years.replace("현재", "Present") + " · " + total +
              " entries (of " + totalAll + ")" }
      : { ko: "전체 " + total + "항목", en: total + " entries" };

    count.setAttribute("data-ko", label.ko);
    count.setAttribute("data-en", label.en);
    count.textContent = label.ko;
  }
})();
