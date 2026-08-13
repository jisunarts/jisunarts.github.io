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
    gallery: { ko: "갤러리",        en: "Gallery" },
    book:    { ko: "포토북",        en: "Photobook" }
  };

  /* 분류 — 데이터의 값은 한글 그대로 두고(비교·필터용), 화면에 보이는 이름만 여기서 정합니다.
     js/now.js 의 GROUPS 와 같은 방식입니다. 사전에 없는 값은 한글이 그대로 나옵니다. */
  const CATEGORY = {
    "공연":     { ko: "공연",     en: "Performances" },
    "프로젝트": { ko: "프로젝트", en: "Projects" },
    "여행기":   { ko: "여행기",   en: "Travels" }
  };
  function catLabel(v) { return CATEGORY[v] || v; }

  /* --- 그리드 ---------------------------------------------------------- */

  mount.innerHTML = PHOTOS.map(function (p, i) {
    const title = { ko: p.title_ko, en: p.title_en || p.title_ko };
    const hasGallery = Boolean(p.images && p.images.length);

    const badge = p.page
      ? '<span class="ph-badge" ' + bi(BADGE.book) + ">" + esc(BADGE.book.ko) + "</span>"
      : (hasGallery
        ? '<span class="ph-badge" ' + bi(BADGE.gallery) + ">" + esc(BADGE.gallery.ko) + "</span>"
        : (p.link ? '<span class="ph-badge" ' + bi(BADGE.link) + ">" + esc(BADGE.link.ko) + "</span>" : ""));

    const count = hasGallery
      ? '<span class="ph-count tnum">' + p.images.length + "</span>"
      : "";

    const inner =
      '<span class="ph-cover">' +
        '<img src="' + esc(p.cover) + '" alt="" loading="lazy">' +
        badge + count +
      "</span>" +
      '<span class="ph-title" ' + bi(title) + ">" + esc(p.title_ko) + "</span>" +
      '<span class="ph-meta">' +
        (p.category
          ? "<span " + bi(catLabel(p.category)) + ">" + esc(koOf(catLabel(p.category))) + "</span>"
          : "") +
        (p.year ? '<span class="ph-year tnum"> · ' + esc(p.year) + "</span>" : "") +
      "</span>";

    if (p.page) {
      return '<li class="ph-item"' + (p.id ? ' id="' + esc(p.id) + '"' : "") + ">" +
        '<a class="ph-card" href="' + esc(p.page) + '">' + inner + "</a>" +
      "</li>";
    }
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
