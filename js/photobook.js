/* ==========================================================================
   js/photobook.js — 스크롤형 포토북
   data/photobook-*.js 의 PHOTOBOOK 을 위에서 아래로 이어 붙입니다.
   사진 외에는 아무 글자도 넣지 않습니다 (캡션·번호·날짜 없음).
   ========================================================================== */

(function renderPhotobook() {

  const mount = document.getElementById("photobook-mount");
  if (!mount || typeof PHOTOBOOK === "undefined") return;

  mount.innerHTML = PHOTOBOOK.items.map(function (m) {
    return '<img src="' + esc(PHOTOBOOK.dir + m.src) + '" alt="" ' +
      'width="' + m.w + '" height="' + m.h + '" loading="lazy" decoding="async">';
  }).join("");

  const back = document.getElementById("photobook-back");
  if (back && PHOTOBOOK.back) {
    back.innerHTML = '<a class="pb-back" href="' + esc(PHOTOBOOK.back.href) + '" ' +
      bi(PHOTOBOOK.back) + ">" + esc(PHOTOBOOK.back.ko) + "</a>";
  }
})();
