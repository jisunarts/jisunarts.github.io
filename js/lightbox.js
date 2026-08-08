/* ==========================================================================
   js/lightbox.js — 사진을 크게 보는 창 (사진 페이지 · 프로젝트 페이지 공용)

   쓰는 법:  Lightbox.open(["img/a.jpg", …], "제목", 눌렀던요소)
   · 좌우 버튼 / ← → 키로 이동, 닫기 버튼 · Esc · 배경 클릭으로 닫힘
   ========================================================================== */

var Lightbox = (function () {

  let lb, lbImg, lbTitle, lbCount;
  let images = [];
  let at = 0;
  let opener = null;

  function build() {
    if (lb) return;

    const holder = document.createElement("div");
    holder.innerHTML =
      '<div class="lb" role="dialog" aria-modal="true" aria-label="사진 보기" hidden>' +
        '<div class="lb-bar">' +
          '<span class="lb-title"></span>' +
          '<span class="lb-count meta tnum"></span>' +
          '<button type="button" class="lb-close" data-lb="close" ' +
            'data-ko="닫기" data-en="Close">닫기</button>' +
        "</div>" +
        '<div class="lb-stage" data-lb="backdrop">' +
          '<button type="button" class="lb-nav" data-lb="prev" aria-label="이전 사진">←</button>' +
          '<img class="lb-img" alt="">' +
          '<button type="button" class="lb-nav" data-lb="next" aria-label="다음 사진">→</button>' +
        "</div>" +
      "</div>";

    lb = holder.firstChild;
    document.body.appendChild(lb);

    lbImg   = lb.querySelector(".lb-img");
    lbTitle = lb.querySelector(".lb-title");
    lbCount = lb.querySelector(".lb-count");

    lb.addEventListener("click", function (e) {
      const what = (e.target.closest("[data-lb]") || {}).dataset;
      if (!what) return;
      if (what.lb === "close") close();
      else if (what.lb === "prev") show(at - 1);
      else if (what.lb === "next") show(at + 1);
      else if (what.lb === "backdrop" && e.target.dataset.lb === "backdrop") close();
    });

    document.addEventListener("keydown", function (e) {
      if (!lb || lb.hidden) return;
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  show(at - 1);
      if (e.key === "ArrowRight") show(at + 1);
    });
  }

  function show(i) {
    at = (i + images.length) % images.length;
    lbImg.src = images[at];
    lbCount.textContent = (at + 1) + " / " + images.length;
    lb.querySelectorAll(".lb-nav").forEach(function (b) {
      b.hidden = images.length < 2;
    });
  }

  function open(list, title, from, start) {
    if (!list || !list.length) return;
    build();
    images = list;
    opener = from || null;
    lbTitle.textContent = title || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    show(start || 0);                 /* 누른 사진부터 열립니다 */
    lb.querySelector(".lb-close").focus();
  }

  function close() {
    lb.hidden = true;
    lbImg.removeAttribute("src");
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  return { open: open, close: close };
})();
