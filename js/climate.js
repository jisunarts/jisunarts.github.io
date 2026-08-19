/* ==========================================================================
   js/climate.js — 기후 (강의용 단독 화면)

   data/climate.js 의 CLIMATE 를 단계 → 작업 순으로 그립니다.
   강의 때 화면에 띄우는 장이라 멀리서 읽히도록 글자가 큽니다.
   링크는 모두 새 탭으로 엽니다 — 이 화면을 잃지 않게.
   ========================================================================== */

(function renderClimate() {

  const mount = document.getElementById("climate-mount");
  if (!mount) return;

  /* --- 준비 확인 -------------------------------------------------------
     data 파일이나 layout.js 를 못 내려받으면 예전에는 빈 화면이 됐습니다.
     무엇이 없었는지 콘솔에 남기고 화면에도 한 줄 띄웁니다.
     (layout.js 자체가 없을 수 있으므로 이 블록은 도움 함수를 쓰지 않습니다.) */
  var missing = [];
  if (typeof CLIMATE === "undefined") missing.push("data/climate.js (CLIMATE)");
  if (typeof esc !== "function")      missing.push("js/layout.js (esc)");
  if (typeof koOf !== "function")     missing.push("js/layout.js (koOf)");

  if (missing.length) {
    console.error("[기후] 화면을 그리지 못했습니다. 없는 것: " + missing.join(", ") +
      " — 스크립트가 모두 내려받아졌는지 확인해 주세요.");
    mount.innerHTML = '<p class="read-missing">목록을 불러오지 못했습니다. 새로고침해 주세요.</p>';
    return;
  }

  /* 작업 한 줄 — 연도(왼쪽 고정 열) + 제목. url 이 없으면 링크 없이 글자만. */
  function work(w) {

    const title = esc(koOf(w.title));

    const titleHtml = w.url
      ? '<a class="cl-title" href="' + esc(w.url) + '" target="_blank" rel="noopener">' + title + "</a>"
      : '<span class="cl-title is-plain">' + title + "</span>";

    /* also — 이 작업에 딸려 붙는 작업 한 줄 (예: 〈교토〉 2027 예정) */
    const also = w.also
      ? '<span class="cl-also">' + esc(koOf(w.also)) + "</span>"
      : "";

    /* note — 제목 아래 작은 설명 한 줄 */
    const note = w.note
      ? '<span class="cl-note">' + esc(koOf(w.note)) + "</span>"
      : "";

    return '<li class="cl-work">' +
      '<span class="cl-year tnum">' + esc(koOf(w.year)) + "</span>" +
      '<span class="cl-body">' + titleHtml + also + note + "</span>" +
    "</li>";
  }

  /* 단계 하나 — 개념어(연두 블록) + 그 아래 작업들.
     단계끼리는 선 없이 여백으로만 나눕니다. */
  function stage(s) {
    const works = (s.works || []).map(work).join("");
    return '<section class="cl-stage">' +
      '<h2 class="cl-concept"><span class="cl-mark">' + esc(koOf(s.concept)) + "</span></h2>" +
      '<ul class="cl-works">' + works + "</ul>" +
    "</section>";
  }

  mount.innerHTML = (CLIMATE.stages || []).map(function (s) {
    try { return stage(s); }
    catch (e) { console.error("[기후] 이 단계를 건너뜁니다:", s && s.concept, e); return ""; }
  }).join("");

})();
