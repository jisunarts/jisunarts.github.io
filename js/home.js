/* ==========================================================================
   js/home.js — 홈(index.html)
   소개 페이지를 홈으로 합쳤습니다. 위에서부터
     이름 · 한 줄 소개 · 산문 6문단(3단) · 연결 · 궤적 네 시기
   글은 data/site.js · data/about.js · data/trajectory.js 에서 읽어옵니다.

   · 산문에 링크가 들어 있어(언어마다 위치가 다름) 언어가 바뀌면 다시 그립니다.
   · 궤적은 가로 4열이고, 패널은 네 열 아래에 '하나만' 둡니다.
     열을 누르면 그 패널의 내용만 갈아 끼웁니다 (한 번에 하나만 열림).
   ========================================================================== */

(function renderHome() {

  const mount = document.getElementById("home-mount");
  if (!mount) return;

  /* --- 준비 확인 (js/now.js 등과 같은 방식) ----------------------------- */
  function needed(list) {
    var missing = [];
    for (var i = 0; i < list.length; i++) if (!list[i].ok) missing.push(list[i].what);
    return missing;
  }
  var _miss = needed([
    { what: "data/site.js (SITE)",         ok: typeof SITE !== "undefined" },
    { what: "data/about.js (ABOUT)",       ok: typeof ABOUT !== "undefined" },
    { what: "js/layout.js (esc)",          ok: typeof esc === "function" },
    { what: "js/layout.js (bi)",           ok: typeof bi === "function" }
  ]);
  if (_miss.length) {
    console.error("[홈] 화면을 그리지 못했습니다. 없는 것: " + _miss.join(", ") +
      " — 스크립트가 모두 내려받아졌는지 확인해 주세요.");
    mount.innerHTML = '<p class="read-missing" ' +
      'data-ko="내용을 불러오지 못했습니다. 새로고침해 주세요." ' +
      'data-en="Could not load this page. Please refresh.">' +
      "내용을 불러오지 못했습니다. 새로고침해 주세요.</p>";
    return;
  }

  /* 지금 언어 — i18n.js 가 body 에 적어 둡니다 */
  function curLang() { return document.body.dataset.lang === "en" ? "en" : "ko"; }
  function pick(o, lang) { return (o && o[lang] && String(o[lang]).trim()) ? o[lang] : (o ? o.ko : ""); }

  /* [보이는 글자](주소) → 새 탭으로 열리는 링크 (js/about.js 와 같은 규칙) */
  function withLinks(text) {
    return esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, url) {
      return '<a class="inline-link" href="' + url + '" target="_blank" rel="noopener">' + label + "</a>";
    });
  }

  function anchor(url, text) {
    const mail = String(url).indexOf("mailto:") === 0;
    return '<a class="inline-link" href="' + esc(url) + '"' +
      (mail ? "" : ' target="_blank" rel="noopener"') + ">" + text + "</a>";
  }

  /* 연결 — data/about.js 의 links 를 적힌 차례 그대로 보여 줍니다.
     항목 이름 없이 값만 나오고, 메일은 같은 창·나머지는 새 탭입니다. */

  /* --- 이름 · 한 줄 · 산문 · 연결 --------------------------------------- */
  function drawTop(lang) {
    const paras = ABOUT.paragraphs.map(function (p) {
      const text = (p[lang] && p[lang].trim()) ? p[lang] : p.ko;
      return "<p>" + withLinks(text) + "</p>";
    }).join("");

    const links = ABOUT.links.map(function (row) {
      return '<p class="links-row">' + anchor(row.url, esc(pick(row, lang))) + "</p>";
    }).join("");

    mount.innerHTML =
      '<h1 class="home-name">' +
        '<span class="home-name-ko">' + esc(SITE.name.ko) + "</span>" +
        '<span class="home-name-en">' + esc(SITE.name.en) + "</span>" +
      "</h1>" +
      '<p class="home-line" ' + bi(SITE.hero.tagline) + ">" +
        esc(pick(SITE.hero.tagline, lang)) + "</p>" +
      '<div class="prose home-prose">' + paras + "</div>" +
      '<div class="home-links links-list">' + links + "</div>";
  }

  /* --- 궤적 — 가로 4열 + 패널 하나 -------------------------------------- */
  const traj = document.getElementById("trajectory-mount");

  function yearsOf(p) { return { ko: p.years, en: p.years.replace("현재", "Present") }; }

  function panelHtml(p, idx, lang) {
    const questions = (p.questions || []).map(function (q, i) {
      return "<li>" +
        '<span class="meta tnum">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<span " + bi(q) + ">" + esc(pick(q, lang)) + "</span>" +
      "</li>";
    }).join("");

    const works = p.works_ko
      ? '<p class="traj-body" ' + bi({ ko: p.works_ko, en: p.works_en || p.works_ko }) + ">" +
          esc(lang === "en" ? (p.works_en || p.works_ko) : p.works_ko) + "</p>"
      : "";

    return '<div class="traj-panel-inner">' +
      "<div>" +
        '<span class="meta traj-label" data-ko="설명" data-en="Summary">' + (lang === "en" ? "Summary" : "설명") + '</span>' +
        '<p class="traj-body" ' + bi({ ko: p.essence_ko, en: p.essence_en }) + ">" +
          esc(lang === "en" ? p.essence_en : p.essence_ko) + "</p>" +
      "</div>" +
      "<div>" +
        '<span class="meta traj-label" data-ko="대표 활동" data-en="Selected Work">' + (lang === "en" ? "Selected Work" : "대표 활동") + '</span>' +
        works +
      "</div>" +
      "<div>" +
        '<span class="meta traj-label" data-ko="질문" data-en="Questions">' + (lang === "en" ? "Questions" : "질문") + '</span>' +
        '<ul class="qset">' + questions + "</ul>" +
        '<p class="traj-more"><a href="archive.html?period=' + (idx + 1) + '" ' +
          'data-ko="이 시기 기록 보기 →" data-en="See this period in the archive →">' +
          (lang === "en" ? "See this period in the archive →" : "이 시기 기록 보기 →") +
          "</a></p>" +
      "</div>" +
    "</div>";
  }

  /* 지금 열려 있는 열 (-1 이면 모두 닫힘). 언어를 바꿔도 유지됩니다. */
  let openIdx = -1;

  function drawTraj(lang) {
    if (!traj || typeof TRAJECTORY === "undefined") return;

    const cols = TRAJECTORY.map(function (p, i) {
      const years = yearsOf(p);
      const on = (i === openIdx);
      return '<button type="button" class="traj-col' + (on ? " is-open" : "") + '" data-i="' + i + '" ' +
        'aria-expanded="' + String(on) + '" aria-controls="traj-panel">' +
        '<span class="traj-year meta tnum" ' + bi(years) + ">" + esc(pick(years, lang)) + "</span>" +
        '<span class="traj-title" ' + bi({ ko: p.title_ko, en: p.title_en }) + ">" +
          esc(lang === "en" ? p.title_en : p.title_ko) + "</span>" +
      "</button>";
    }).join("");

    const panel = openIdx >= 0
      ? '<div class="traj-panel" id="traj-panel">' + panelHtml(TRAJECTORY[openIdx], openIdx, lang) + "</div>"
      : '<div class="traj-panel" id="traj-panel" hidden></div>';

    traj.innerHTML = '<div class="traj-cols">' + cols + "</div>" + panel;
  }

  /* 리스너는 한 번만 답니다 — drawTraj 는 안쪽 HTML 만 갈아 끼웁니다.
     (매번 붙이면 언어를 바꾼 뒤 클릭이 두 번씩 발동합니다.) */
  if (traj) {
    traj.addEventListener("click", function (e) {
      const btn = e.target.closest(".traj-col");
      if (!btn) return;
      const i = parseInt(btn.dataset.i, 10);
      openIdx = (i === openIdx) ? -1 : i;    /* 같은 열을 다시 누르면 닫힘 */
      drawTraj(curLang());
    });
  }

  drawTop(curLang());
  drawTraj(curLang());

  /* 언어가 바뀌면 다시 그립니다. 산문은 문단 안 링크 위치가 언어마다 달라
     data-ko/data-en 으로는 처리할 수 없기 때문입니다.
     ※ 여기서 applyLang() 을 부르면 i18n.js 가 langchange 를 다시 쏘아
        무한히 되풀이됩니다. 그래서 각 글자를 처음부터 그 언어로 그립니다. */
  document.addEventListener("langchange", function (e) {
    const lang = e.detail.lang === "en" ? "en" : "ko";
    drawTop(lang);
    drawTraj(lang);          /* openIdx 가 유지되므로 열려 있던 시기도 그대로 */
  });
})();
