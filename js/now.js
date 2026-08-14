/* ==========================================================================
   js/now.js — 지금(Now)
   data/now.js 의 NOW 를 '공연'과 '프로젝트' 두 묶음으로 나눠 그립니다.
   소제목은 홈의 '01 궤적'과 같은 모양입니다.

   · page 가 있으면 사이트 안 페이지 (같은 창, → 표시)
   · url  이 있으면 외부 링크 (새 탭, ↗ 표시)
   · cover 가 없으면 사진 없이 제목·연도만
   · 공연은 제목 아래 artist 와 role, 프로젝트는 role 만
   ========================================================================== */

(function renderNow() {

  const mount = document.getElementById("now-mount");
  if (!mount || typeof NOW === "undefined") return;

  /* 위에서부터 순서대로 — 공연, 그다음 프로젝트.
     묶음을 가르는 값은 한글 그대로 쓰고, 화면 이름은 layout.js 의 CATEGORY 가 정합니다. */
  const GROUPS = [{ key: "공연" }, { key: "프로젝트" }];

  function card(it) {
    const title = { ko: it.title_ko, en: it.title_en || it.title_ko };
    const inside = Boolean(it.page);
    const href = it.page || it.url || null;

    const cover = it.cover
      ? '<span class="now-cover"><img src="' + esc(asset(it.cover)) + '" alt="" loading="lazy"></span>'
      : "";

    const mark = href
      ? '<span class="now-arrow" aria-hidden="true">' + (inside ? "→" : "↗") + "</span>"
      : "";

    /* 공연은 작가·안무가 → 역할, 프로젝트는 역할 → 협력 */
    const credits = [it.category === "공연" ? it.artist : "", it.role,
                     it.category === "공연" ? "" : it.partner]
      .filter(Boolean)
      .map(function (line) {
        return '<span class="now-credit" ' + bi(line) + ">" + esc(koOf(line)) + "</span>";
      })
      .join("");

    const inner =
      cover +
      '<span class="now-body">' +
        (it.year ? '<span class="now-year tnum">' + esc(it.year) + "</span>" : "") +
        '<span class="now-title" ' + bi(title) + ">" + esc(it.title_ko) + "</span>" + mark +
        credits +
        (it.summary
          ? '<span class="now-summary" ' + bi(it.summary) + ">" + esc(koOf(it.summary)) + "</span>"
          : "") +
      "</span>";

    const body = href
      ? '<a class="now-card" href="' + esc(href) + '"' +
          (inside ? "" : ' target="_blank" rel="noopener"') + ">" + inner + "</a>"
      : '<div class="now-card is-plain">' + inner + "</div>";

    /* 카드에 링크가 걸려 있지 않은 항목의 바깥 링크 */
    const extra = ((it.detail && it.detail.links) || []).map(function (l) {
      return '<a class="now-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        esc(l.label) + "</a>";
    }).join("");

    const tags = (it.tags || []).map(function (t) {
      const label = (typeof tagLabel === "function") ? tagLabel(t) : { ko: t, en: t };
      return '<a class="now-tag" href="by-question.html?tag=' + encodeURIComponent(t) + '" ' +
        bi(label) + ">" + esc(label.ko) + "</a>";
    }).join("");

    return '<li class="now-item' + (it.cover ? "" : " no-cover") + '"' +
      (it.id ? ' id="' + esc(it.id) + '"' : "") + ">" +
      body +
      (extra ? '<div class="now-links">' + extra + "</div>" : "") +
      (tags ? '<div class="now-tags">' + tags + "</div>" : "") +
    "</li>";
  }

  mount.innerHTML = GROUPS.map(function (g, i) {
    const rows = NOW.filter(function (it) { return it.category === g.key; })
      .slice()
      .sort(function (a, b) { return (a.order || 999) - (b.order || 999); });
    if (!rows.length) return "";

    return '<section class="now-group">' +
      '<div class="home-sec-head">' +
        '<span class="section-num meta tnum">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h2 " + bi(catLabel(g.key)) + ">" + esc(koOf(catLabel(g.key))) + "</h2>" +
      "</div>" +
      '<ul class="now-grid">' + rows.map(card).join("") + "</ul>" +
    "</section>";
  }).join("");

  /* 개수 — 페이지 맨 아래 */
  const count = document.getElementById("now-count");
  if (count) {
    count.setAttribute("data-ko", "진행 중 " + NOW.length + "건");
    count.setAttribute("data-en", NOW.length + " in progress");
    count.textContent = "진행 중 " + NOW.length + "건";
  }
})();
