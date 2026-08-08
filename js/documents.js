/* ==========================================================================
   js/documents.js — 자료집(Documents)
   data/documents.js 의 DOCUMENTS 를 표지 격자로 그립니다.
   표지를 누르면 그 자료집의 원문(구글 드라이브)이 새 탭에서 열립니다.
   표지 파일이 아직 없으면 제목이 적힌 빈 상자가 대신 놓입니다.
   ========================================================================== */

(function renderDocuments() {

  const mount = document.getElementById("documents-mount");
  if (!mount || typeof DOCUMENTS === "undefined") return;

  mount.innerHTML = DOCUMENTS.map(function (doc) {
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
  }).join("");

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
