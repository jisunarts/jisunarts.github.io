/* ==========================================================================
   js/photos.js — 사진(Photographs)
   data/photos.js 의 PHOTOS 를 대표 이미지 그리드로 그립니다.

   · link  이 있으면 → 외부 포토북(새 탭), 표지에 '외부 포토북 ↗' 배지
   · images 가 있으면 → 사이트 안 라이트박스 갤러리, 표지에 '갤러리' 배지
   (category 는 지금 화면에만 쓰고, 나중에 필터로 씁니다.)
   ========================================================================== */

(function renderPhotos() {

  const mount = document.getElementById("photos-mount");
  if (!mount || typeof PHOTOS === "undefined") return;

  const BADGE = {
    link:    { ko: "외부 포토북 ↗", en: "Photobook ↗" },
    gallery: { ko: "갤러리",        en: "Gallery" }
  };

  /* --- 그리드 ---------------------------------------------------------- */

  mount.innerHTML = PHOTOS.map(function (p, i) {
    const title = { ko: p.title_ko, en: p.title_en || p.title_ko };
    const hasGallery = Boolean(p.images && p.images.length);

    const badge = hasGallery
      ? '<span class="ph-badge" ' + bi(BADGE.gallery) + ">" + esc(BADGE.gallery.ko) + "</span>"
      : (p.link ? '<span class="ph-badge" ' + bi(BADGE.link) + ">" + esc(BADGE.link.ko) + "</span>" : "");

    const count = hasGallery
      ? '<span class="ph-count tnum">' + p.images.length + "</span>"
      : "";

    const inner =
      '<span class="ph-cover">' +
        '<img src="' + esc(p.cover) + '" alt="" loading="lazy">' +
        badge + count +
      "</span>" +
      '<span class="ph-title" ' + bi(title) + ">" + esc(p.title_ko) + "</span>" +
      '<span class="ph-meta">' + esc(p.category || "") +
        (p.year ? '<span class="ph-year tnum"> · ' + esc(p.year) + "</span>" : "") +
      "</span>";

    if (hasGallery) {
      return '<li class="ph-item"' + (p.id ? ' id="' + esc(p.id) + '"' : "") + ">" +
        '<button type="button" class="ph-card" data-gallery="' + i + '">' + inner + "</button>" +
      "</li>";
    }
    if (p.link) {
      return '<li class="ph-item"' + (p.id ? ' id="' + esc(p.id) + '"' : "") + ">" +
        '<a class="ph-card" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + inner + "</a>" +
      "</li>";
    }
    return '<li class="ph-item"' + (p.id ? ' id="' + esc(p.id) + '"' : "") + '>' +
      '<div class="ph-card is-plain">' + inner + "</div></li>";
  }).join("");

  /* 개수 — 페이지 맨 아래 */
  const count = document.getElementById("photos-count");
  if (count) {
    count.setAttribute("data-ko", "전체 " + PHOTOS.length + "묶음");
    count.setAttribute("data-en", PHOTOS.length + " sets");
    count.textContent = "전체 " + PHOTOS.length + "묶음";
  }

  /* --- 갤러리 열기 (창은 js/lightbox.js 공용) ---------------------------- */

  mount.addEventListener("click", function (e) {
    const card = e.target.closest("[data-gallery]");
    if (!card) return;

    const item = PHOTOS[parseInt(card.dataset.gallery, 10)];
    if (!item || !item.images) return;

    const title = (document.body.dataset.lang === "en" && item.title_en)
      ? item.title_en : item.title_ko;
    Lightbox.open(item.images, title, card);
  });
})();
