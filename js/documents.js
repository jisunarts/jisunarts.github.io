/* ==========================================================================
   js/documents.js — 자료집(Documents)
   data/documents.js 의 DOCUMENTS 를 표지 격자로 그립니다.
   표지를 누르면 그 자료집의 원문(구글 드라이브)이 새 탭에서 열립니다.
   표지 파일이 아직 없으면 제목이 적힌 빈 상자가 대신 놓입니다.
   ========================================================================== */

(function renderDocuments() {

  const mount = document.getElementById("documents-mount");
  if (!mount || typeof DOCUMENTS === "undefined") return;

  /* --- 프로젝트별로 묶기 ------------------------------------------------
     소제목마다 id 를 달아 documents.html#dance-techlab 로 바로 갈 수 있습니다.
     어느 프로젝트에도 속하지 않는 자료집은 맨 아래 '그 외'로 모입니다.      */

  const DICT = (typeof DOC_PROJECTS !== "undefined") ? DOC_PROJECTS : {};

  function card(doc) {

    const title = { ko: doc.title_ko, en: doc.title_en || doc.title_ko };

    const cover = doc.cover
      ? '<img src="' + esc(doc.cover) + '" alt="" loading="lazy">'
      : "";

    return '<li class="doc-item">' +
      '<a href="' + esc(doc.url) + '" target="_blank" rel="noopener">' +

        '<span class="doc-cover">' +
          /* 표지가 없을 때 뒤에서 보이는 자리 */
          '<span class="doc-fallback" ' + bi(title) + ">" + esc(doc.title_ko) + "</span>" +
          cover +
        "</span>" +

        '<span class="doc-title" ' + bi(title) + ">" + esc(doc.title_ko) + "</span>" +
        '<span class="doc-year tnum">' + esc(doc.year) + "</span>" +

      "</a>" +
    "</li>";
  }

  const order = Object.keys(DICT).filter(function (k) {
    return DOCUMENTS.some(function (d) { return d.project === k; });
  });
  const rest = DOCUMENTS.filter(function (d) { return !d.project || !DICT[d.project]; });

  mount.innerHTML = order.map(function (k) {
    const rows = DOCUMENTS.filter(function (d) { return d.project === k; });
    return '<section class="doc-group">' +
      '<h2 class="doc-group-title" id="' + esc(k) + '">' +
        "<span " + bi(DICT[k]) + ">" + esc(DICT[k].ko) + "</span>" +
        '<span class="meta tnum">' + rows.length + "</span>" +
      "</h2>" +
      '<ul class="doc-grid">' + rows.map(card).join("") + "</ul>" +
    "</section>";
  }).join("") +
  (rest.length
    ? '<section class="doc-group">' +
        '<h2 class="doc-group-title" id="etc" data-ko="그 외" data-en="Other">그 외' +
          '<span class="meta tnum">' + rest.length + "</span>" +
        "</h2>" +
        '<ul class="doc-grid">' + rest.map(card).join("") + "</ul>" +
      "</section>"
    : "");

  /* 표지 파일이 없으면 그 이미지는 치우고 대체 상자가 보이게 */
  mount.querySelectorAll(".doc-cover img").forEach(function (img) {
    img.addEventListener("error", function () { img.remove(); });
  });

  /* 개수 */
  const count = document.getElementById("documents-count");
  if (count) {
    count.setAttribute("data-ko", "전체 " + DOCUMENTS.length + "권");
    count.setAttribute("data-en", DOCUMENTS.length + " publications");
    count.textContent = "전체 " + DOCUMENTS.length + "권";
  }
})();
