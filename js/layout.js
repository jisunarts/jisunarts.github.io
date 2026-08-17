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

/** 값을 { ko, en } 으로 고릅니다.

    데이터에 문자열과 { ko, en } 객체가 섞여 있어도 안전합니다.
    · 문자열   — 아직 영문이 없다는 뜻. 양쪽에 같은 값을 넣어 지금과 똑같이 보입니다.
    · { ko, en } — 그대로. en 이 비어 있으면 ko 를 씁니다.
    덕분에 한 필드씩 번역해 넣어도 되고, 중간 상태에서도 화면이 깨지지 않습니다. */
function pair(v) {
  if (v == null) return { ko: "", en: "" };
  if (typeof v === "string") return { ko: v, en: v };
  return { ko: v.ko || "", en: v.en || v.ko || "" };
}

/** 처음 그릴 때 넣을 글자 (국문). 뒤이어 i18n.js 가 언어를 맞춥니다. */
function koOf(v) { return pair(v).ko; }

/** { ko, en } 객체나 문자열을 data-ko / data-en 속성으로 (i18n.js 가 이걸 보고 바꿈) */
function bi(obj) {
  if (obj == null) return "";
  const t = pair(obj);
  return 'data-ko="' + esc(t.ko) + '" data-en="' + esc(t.en) + '"';
}

/** 주소창의 쿼리 값 읽기 — archive.html?from=2001 등 */
function param(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* --- 헤더 -------------------------------------------------------------- */

/** 하위 폴더(projects/ 등)에 있는 페이지는 <body data-base="../"> 를 붙입니다 */
const BASE = (document.body && document.body.dataset.base) || "";

/* 사진 주소에 붙는 판 번호.
   스크립트·CSS 는 <script src="…?v=…"> 로 캐시를 넘기는데 사진에는 그게 없어서,
   같은 이름으로 사진을 바꾸면 브라우저가 예전 것을 계속 보여 줍니다.
   사진을 갈아 끼운 뒤에는 이 값을 바꿔 주세요. */
const ASSET_V = "20260817a";

/** 사진 주소에 판 번호를 붙입니다. 이미 ? 가 있으면 & 로 잇습니다. */
function asset(path) {
  const p = String(path == null ? "" : path);
  if (!p || /^(https?:|data:)/.test(p)) return p;      /* 외부 주소는 그대로 */
  return p + (p.indexOf("?") < 0 ? "?v=" : "&v=") + ASSET_V;
}

/* 분류 이름 — 값은 한글 그대로 두고(비교·필터용) 화면 이름만 여기서 정합니다.
   '지금'·'사진'·'질문으로 보기' 세 화면이 이 하나를 같이 봅니다. */
const CATEGORY = {
  "공연":     { ko: "공연",     en: "Performances" },
  "프로젝트": { ko: "프로젝트", en: "Projects" },
  "여행기":   { ko: "여행기",   en: "Travels" }
};

/** 분류 key 로 { ko, en } 을 얻습니다. 사전에 없으면 한글이 그대로 나옵니다. */
function catLabel(v) { return CATEGORY[v] || v; }

(function buildHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const current = document.body.dataset.page || "";

  const links = SITE.nav.map(function (item) {
    const active = item.id === current ? ' aria-current="page"' : "";
    return '<a href="' + BASE + esc(item.href) + '"' + active + " " + bi(item) + ">" + esc(koOf(item)) + "</a>";
  }).join("");

  mount.outerHTML =
    '<header class="site-header">' +
      '<div class="wrap header-inner">' +
        '<div class="brand">' +
          '<a href="' + BASE + 'index.html" class="brand-logo" aria-label="박지선 홈">' +
            /* 형광 연두 점 하나 — 모든 페이지가 같은 한 벌을 씁니다.
               모양은 css/style.css 의 .logo-dot 한 곳에서만 정합니다. */
            '<span class="logo-dot" aria-hidden="true"></span>' +
          "</a>" +
        "</div>" +

        '<nav class="nav" id="main-nav" aria-label="주요 메뉴">' +
          /* 배경 사진 — 모바일에서 메뉴를 열 때만 채워 넣습니다 (setMenu 참고) */
          '<img class="menu-bg" alt="" aria-hidden="true">' +
          /* 메뉴가 열렸을 때만 보이는 반전 로고 */
          '<a class="nav-logo" href="' + BASE + 'index.html" aria-label="박지선 홈">' +
            '<span class="logo-dot" aria-hidden="true"></span>' +
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

  /* 메뉴 배경 사진 — 열 때마다 한 장씩 돌아가며 씁니다.
     · 데스크톱에서는 CSS 가 사진을 감추므로 아예 불러오지 않습니다.
     · 사진이 없거나 못 불러와도 파란 바탕은 그대로라 메뉴는 정상 동작합니다. */
  const WALKS = ["walk-1.webp", "walk-2.webp", "walk-3.webp"];

  function setMenuPhoto() {
    const bg = nav.querySelector(".menu-bg");
    if (!bg) return;
    if (window.matchMedia && window.matchMedia("(min-width: 761px)").matches) return;

    // 홈 히어로(img/photos/walking-road.jpg)와 walk-3.webp는 같은 사진(IMG_8757)의
    // 컬러 원본 / 흑백 크롭 버전이라 홈에서는 제외
    const isHome = /(^\/$|index\.html$)/.test(window.location.pathname);
    const pool = isHome ? WALKS.slice(0, 2) : WALKS;

    let i = 0;
    try {
      i = Number(sessionStorage.getItem("walkIdx") || 0) % pool.length;
      sessionStorage.setItem("walkIdx", String((i + 1) % pool.length));
    } catch (e) { /* 저장이 막힌 환경이면 늘 첫 장 */ }

    const next = BASE + "img/menu/" + pool[i];
    if (bg.getAttribute("src") === next) { bg.style.opacity = ""; return; }

    bg.style.opacity = "0";
    bg.onload  = function () { bg.style.opacity = ""; };   /* 값은 CSS 가 정합니다 */
    bg.onerror = function () { bg.removeAttribute("src"); };
    bg.src = next;
  }

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.dataset.open = String(open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) { setMenuPhoto(); document.getElementById("nav-close").focus(); }
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
    return '<a href="' + BASE + esc(item.href) + '" ' + bi(item) + ">" + esc(koOf(item)) + "</a>";
  }).join("");

  const contacts = (SITE.footer.contact || []).map(function (c) {
    return '<a href="' + esc(c.url) + '" rel="noopener">' + esc(c.label) + "</a>";
  }).join("");

  mount.outerHTML =
    '<footer class="site-footer">' +
      '<div class="wrap footer-inner">' +
        '<nav class="footer-nav" aria-label="아래 메뉴">' + links + contacts + "</nav>" +
        '<p class="footer-copy" ' + bi(SITE.footer.copy) + ">" + esc(koOf(SITE.footer.copy)) + "</p>" +
      "</div>" +
    "</footer>";
})();
