/* ==========================================================================
   js/photobook.js — 포토북
   data/photobook-*.js 의 PHOTOBOOK 을 읽어 그립니다. 글자는 넣지 않습니다.

   · 데스크톱 : 사진이 한 줄로 이어지는 가로 스크롤 (지금까지와 같음)
   · 모바일   : 한 화면 = 한 페이지로 넘김 (가로 사진 2장 / 세로 사진 1장)
                페이지 조합은 데이터의 pages 배열에 고정돼 있습니다.

   두 모습이 같은 마크업을 씁니다 — 데스크톱에서는 페이지 상자가
   display:contents 가 되어 사진이 그대로 한 줄로 흐릅니다.
   ========================================================================== */

(function renderPhotobook() {

  const strip = document.getElementById("photobook-mount");
  if (!strip || typeof PHOTOBOOK === "undefined") return;

  document.body.classList.add("book");

  const items = PHOTOBOOK.items;
  const pages = PHOTOBOOK.pages ||
    items.map(function (_, i) { return [i + 1]; });   /* 조합이 없으면 한 장씩 */

  function imgTag(n, eager) {
    const m = items[n - 1];
    if (!m) return "";
    return '<img src="' + esc(PHOTOBOOK.dir + m.src) + '" alt="" ' +
      'width="' + m.w + '" height="' + m.h + '" ' +
      'loading="' + (eager ? "eager" : "lazy") + '" decoding="async">';
  }

  const back = PHOTOBOOK.back
    ? '<a class="pb-back" href="' + esc(PHOTOBOOK.back.href) + '" ' + bi(PHOTOBOOK.back) + ">" +
        esc(PHOTOBOOK.back.ko) + "</a>"
    : "";

  strip.innerHTML =
    pages.map(function (page, i) {
      return '<div class="pb-page" data-page="' + i + '" data-n="' + page.length + '">' +
        page.map(function (n) { return imgTag(n, i < 2); }).join("") +
      "</div>";
    }).join("") +
    (back ? '<div class="pb-page pb-end">' + back + "</div>" : "");

  /* 진행 — 데스크톱은 2px 막대, 모바일은 '몇 / 98' */
  const bar   = document.getElementById("photobook-progress");
  const fill  = bar ? bar.firstElementChild : null;
  const count = document.getElementById("photobook-count");
  const total = items.length;

  const boxes = Array.prototype.slice.call(strip.querySelectorAll(".pb-page"));

  function current() {
    const mid = strip.scrollLeft + strip.clientWidth / 2;
    let at = 0;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].offsetLeft <= mid) at = i;
    }
    return at;
  }

  function update() {
    const max = strip.scrollWidth - strip.clientWidth;
    if (fill) fill.style.width = (max > 0 ? (strip.scrollLeft / max) * 100 : 0) + "%";

    if (count) {
      const page = pages[current()];
      const seen = page ? page[page.length - 1] : total;
      count.textContent = seen + " / " + total;
    }
    preload(current());
  }

  /* 옆 페이지를 미리 불러 넘김이 끊기지 않게 */
  function preload(at) {
    [at - 1, at + 1, at + 2].forEach(function (i) {
      const box = boxes[i];
      if (!box) return;
      box.querySelectorAll('img[loading="lazy"]').forEach(function (im) {
        im.loading = "eager";
      });
    });
  }

  strip.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* 마우스 휠 → 가로 이동 (트랙패드 좌우 스와이프는 그대로) */
  strip.addEventListener("wheel", function (e) {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    strip.scrollLeft += e.deltaY;
  }, { passive: false });

  /* ← → 키 */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const at = current() + (e.key === "ArrowRight" ? 1 : -1);
    const box = boxes[Math.max(0, Math.min(boxes.length - 1, at))];
    if (box) strip.scrollTo({ left: box.offsetLeft, behavior: "smooth" });
  });
})();
