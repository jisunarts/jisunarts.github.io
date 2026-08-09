/* ==========================================================================
   js/photobook.js — 가로 스크롤 포토북
   data/photobook-*.js 의 PHOTOBOOK 을 왼쪽에서 오른쪽으로 한 줄로 잇습니다.
   사진 외에는 아무 글자도 넣지 않습니다 (캡션·번호·날짜 없음).

   · 마우스 휠 → 가로 스크롤 / 트랙패드 좌우 스와이프 · ← → 키 지원
   · 화면 아래 2px 진행 막대로 지금 위치를 보여줍니다 (숫자 없음)
   ========================================================================== */

(function renderPhotobook() {

  const strip = document.getElementById("photobook-mount");
  if (!strip || typeof PHOTOBOOK === "undefined") return;

  document.body.classList.add("book");

  const back = PHOTOBOOK.back
    ? '<a class="pb-back" href="' + esc(PHOTOBOOK.back.href) + '" ' + bi(PHOTOBOOK.back) + ">" +
        esc(PHOTOBOOK.back.ko) + "</a>"
    : "";

  strip.innerHTML =
    PHOTOBOOK.items.map(function (m) {
      return '<img src="' + esc(PHOTOBOOK.dir + m.src) + '" alt="" ' +
        'width="' + m.w + '" height="' + m.h + '" loading="lazy" decoding="async">';
    }).join("") +
    (back ? '<span class="pb-end">' + back + "</span>" : "");

  /* 진행 막대 */
  const bar = document.getElementById("photobook-progress");
  const fill = bar ? bar.firstElementChild : null;

  function update() {
    if (!fill) return;
    const max = strip.scrollWidth - strip.clientWidth;
    fill.style.width = (max > 0 ? (strip.scrollLeft / max) * 100 : 0) + "%";
  }
  strip.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* 마우스 휠 → 가로 스크롤 (트랙패드 좌우 스와이프는 그대로 둡니다) */
  strip.addEventListener("wheel", function (e) {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;   /* 이미 가로 동작 */
    e.preventDefault();
    strip.scrollLeft += e.deltaY;
  }, { passive: false });

  /* ← → 키 */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    strip.scrollBy({ left: strip.clientWidth * 0.6 * (e.key === "ArrowRight" ? 1 : -1),
                     behavior: "smooth" });
  });
})();
