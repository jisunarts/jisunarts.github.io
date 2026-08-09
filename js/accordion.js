/* ==========================================================================
   js/accordion.js — 그 자리에서 펼치는 아코디언 (사이트 공용)

   쓰는 법: 마크업만 갖추면 됩니다.
     <div class="acc" data-open="false">
       <button class="acc-head" data-acc-toggle aria-expanded="false"> 제목 <span class="acc-mark">+</span></button>
       <div class="acc-panel" data-acc-panel> … </div>
     </div>
   그리고 Accordion.bind(부모요소) 한 번.

   · 궤적(홈) · 프로젝트 접기 글 · 크레딧이 모두 이 함수를 씁니다.
   ========================================================================== */

var Accordion = (function () {

  function set(box, open) {
    const btn = box.querySelector("[data-acc-toggle]");
    box.dataset.open = String(open);
    if (btn) {
      btn.setAttribute("aria-expanded", String(open));
      const mark = btn.querySelector(".acc-mark");
      if (mark) mark.textContent = open ? "−" : "+";
    }
  }

  function bind(root) {
    if (!root) return;
    root.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-acc-toggle]");
      if (!btn || !root.contains(btn)) return;
      const box = btn.closest("[data-open]");
      if (!box) return;
      set(box, box.dataset.open !== "true");
    });
  }

  /* 마크업 한 벌을 만들어 주는 도우미 (문자열) */
  function block(label, panelHtml, cls) {
    return '<div class="acc ' + (cls || "") + '" data-open="false">' +
      '<button type="button" class="acc-head" data-acc-toggle aria-expanded="false">' +
        "<span>" + label + "</span>" +
        '<span class="acc-mark" aria-hidden="true">+</span>' +
      "</button>" +
      '<div class="acc-panel" data-acc-panel>' + panelHtml + "</div>" +
    "</div>";
  }

  return { bind: bind, set: set, block: block };
})();
