/* ==========================================================================
   js/i18n.js — 국문 / 영문 전환
   화면의 글자 중 data-ko="…" data-en="…" 를 가진 요소를 모두 바꿔 줍니다.
   선택한 언어는 브라우저에 저장되어 다음 방문·다른 페이지에서도 유지됩니다.
   ※ 이 파일은 다른 스크립트들보다 '나중에' 불러와야 합니다.
   ========================================================================== */

const LANG_KEY = "jisun-lang";

function getLang() {
  try {
    return localStorage.getItem(LANG_KEY) === "en" ? "en" : "ko";
  } catch (e) {
    return "ko";               /* 저장이 막힌 환경(Safari 로컬 파일 등) */
  }
}

function setLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* 무시 */ }
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "ko";
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-ko]").forEach(function (el) {
    const value = el.getAttribute("data-" + lang);
    if (value !== null) el.textContent = value;
  });

  /* 사진 설명(alt)도 함께 */
  document.querySelectorAll("[data-alt-ko]").forEach(function (el) {
    const value = el.getAttribute("data-alt-" + lang);
    if (value !== null) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
    btn.setAttribute("aria-pressed", String(btn.dataset.langSet === lang));
  });

  /* 나중에 만들 필터·목록이 다시 그릴 수 있도록 알림 */
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
}

/* KO / EN 버튼 (헤더가 언제 그려지든 동작하도록 위임 방식) */
document.addEventListener("click", function (e) {
  const btn = e.target.closest("[data-lang-set]");
  if (btn) setLang(btn.dataset.langSet);
});

applyLang(getLang());
