/* ==========================================================================
   js/read.js — 읽기 페이지 (read.html?slug=…)
   data/writing-full.js 의 WRITING_FULL 에서 slug 로 본문을 찾아 보여줍니다.
   문단이 '## ' 로 시작하면 소제목이 됩니다.
   ========================================================================== */

(function renderRead() {

  const mount = document.getElementById("read-mount");
  if (!mount || typeof WRITING_FULL === "undefined") return;

  const slug = param("slug");
  const doc = slug ? WRITING_FULL[slug] : null;

  /* 찾지 못했을 때 */
  if (!doc) {
    mount.innerHTML =
      '<p class="read-missing" data-ko="글을 찾을 수 없습니다." ' +
        'data-en="This piece could not be found.">글을 찾을 수 없습니다.</p>' +
      '<p><a class="tlink" href="writing.html" data-ko="글 목록으로" ' +
        'data-en="Back to writing">글 목록으로</a></p>';
    return;
  }

  document.title = doc.title + " — 박지선 Park Jisun";

  const meta = [doc.media, doc.year].filter(Boolean).join(" · ");

  const body = (doc.paras || []).map(function (para) {
    const text = String(para);
    return text.indexOf("## ") === 0
      ? '<h3 class="read-h3">' + esc(text.slice(3)) + "</h3>"
      : "<p>" + esc(text) + "</p>";
  }).join("");

  mount.innerHTML =
    '<header class="read-head">' +
      '<p class="meta"><a class="read-back" href="writing.html" ' +
        'data-ko="← 글" data-en="← Writing">← 글</a></p>' +
      "<h1>" + esc(doc.title) + "</h1>" +
      '<p class="read-meta">' + esc(meta) + "</p>" +
    "</header>" +

    '<div class="read-body">' + body + "</div>" +

    '<p class="read-foot">' +
      '<a class="tlink" href="writing.html" data-ko="글 목록으로" ' +
        'data-en="Back to writing">글 목록으로</a>' +
    "</p>";
})();
