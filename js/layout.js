/* ==========================================================================
   js/layout.js — 모든 페이지가 공유하는 헤더 · 푸터를 만듭니다.
   페이지 HTML에는 <div id="site-header"></div> / <div id="site-footer"></div>
   두 자리만 있으면 됩니다. 메뉴 내용은 data/site.js 에서 읽어옵니다.
   ========================================================================== */

/* --- 작은 도우미 함수 (다른 스크립트에서도 씁니다) --------------------- */

/** HTML 특수문자 escape */
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/** {ko, en} 객체를 data-ko / data-en 속성 문자열로 (i18n.js 가 이걸 보고 바꿈) */
function bi(obj) {
  if (!obj) return "";
  return 'data-ko="' + esc(obj.ko) + '" data-en="' + esc(obj.en) + '"';
}

/** 주소창의 쿼리 값 읽기 — archive.html?from=2001 등 */
function param(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* --- 헤더 -------------------------------------------------------------- */

/** 하위 폴더(projects/ 등)에 있는 페이지는 <body data-base="../"> 를 붙입니다 */
const BASE = (document.body && document.body.dataset.base) || "";

(function buildHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const current = document.body.dataset.page || "";

  const links = SITE.nav.map(function (item) {
    const active = item.id === current ? ' aria-current="page"' : "";
    return '<a href="' + BASE + esc(item.href) + '"' + active + " " + bi(item) + ">" + esc(item.ko) + "</a>";
  }).join("");

  mount.outerHTML =
    '<header class="site-header">' +
      '<div class="wrap header-inner">' +
        '<div class="brand">' +
          '<a href="' + BASE + 'index.html" class="brand-logo" aria-label="박지선 홈">' +
            /* 색을 반전한 페이지에서는 파란 배경에 보이도록 흰 점 로고 */
            '<img src="' + BASE + (document.body.dataset.theme === "invert"
              ? "img/logo-invert.svg" : "img/logo.svg") + '" alt="" width="26" height="22">' +
          "</a>" +
        "</div>" +

        '<nav class="nav" id="main-nav" aria-label="주요 메뉴">' +
          /* 메뉴가 열렸을 때만 보이는 반전 로고 */
          '<a class="nav-logo" href="' + BASE + 'index.html" aria-label="박지선 홈">' +
            '<img src="' + BASE + 'img/logo-invert.svg" alt="" width="26" height="22">' +
          "</a>" +
          '<button type="button" class="nav-close" id="nav-close" aria-label="메뉴 닫기">' +
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
              '<path d="M5 5 L19 19 M19 5 L5 19"/></svg>' +
          "</button>" +
          links +
        "</nav>" +

        '<div class="lang">' +
          '<button type="button" data-lang-set="ko" aria-pressed="false">KO</button>' +
          '<span class="lang-sep" aria-hidden="true">/</span>' +
          '<button type="button" data-lang-set="en" aria-pressed="false">EN</button>' +
        "</div>" +

        '<button type="button" class="nav-toggle" id="nav-toggle" aria-expanded="false" ' +
          'aria-controls="main-nav" aria-label="메뉴">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
            '<path d="M3 6h18 M3 12h18 M3 18h18"/></svg>' +
        "</button>" +
      "</div>" +
    "</header>";

  /* 모바일 메뉴 — 전체 화면 오버레이 */
  const toggle = document.getElementById("nav-toggle");
  const nav    = document.getElementById("main-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.dataset.open = String(open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.getElementById("nav-close").focus();
    else toggle.focus();
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  /* 닫기 버튼 · 항목을 누르면 이동하며 닫힘 */
  nav.addEventListener("click", function (e) {
    if (e.target.closest("#nav-close") || e.target.closest("a")) setMenu(false);
  });

  /* Esc 로도 닫힘 */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setMenu(false);
  });
})();

/* --- 푸터 -------------------------------------------------------------- */

(function buildFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const links = SITE.nav.map(function (item) {
    return '<a href="' + BASE + esc(item.href) + '" ' + bi(item) + ">" + esc(item.ko) + "</a>";
  }).join("");

  const contacts = (SITE.footer.contact || []).map(function (c) {
    return '<a href="' + esc(c.url) + '" rel="noopener">' + esc(c.label) + "</a>";
  }).join("");

  mount.outerHTML =
    '<footer class="site-footer">' +
      '<div class="wrap footer-inner">' +
        '<nav class="footer-nav" aria-label="아래 메뉴">' + links + contacts + "</nav>" +
        '<p class="footer-copy" ' + bi(SITE.footer.copy) + ">" + esc(SITE.footer.copy.ko) + "</p>" +
      "</div>" +
    "</footer>";
})();
