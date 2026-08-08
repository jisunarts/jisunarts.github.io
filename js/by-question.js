/* ==========================================================================
   js/by-question.js — 질문으로 보기
   기록 · 자료집 · 글 · 사진 네 데이터에서 태그를 모아 구름으로 보여주고,
   태그를 고르면 data/tags.js 의 그 질문과 함께 해당 항목들을 한자리에 모읍니다.
   주소에 ?tag=… 을 붙이면 그 태그가 바로 열립니다.
   ========================================================================== */

(function byQuestion() {

  const cloud  = document.getElementById("tag-cloud");
  const result = document.getElementById("tag-result");
  if (!cloud || !result) return;

  /* --- 네 데이터를 하나의 목록으로 --------------------------------------- */

  const SOURCE = {
    now:       { ko: "지금",   en: "Now" },
    archive:   { ko: "기록",   en: "Archive" },
    documents: { ko: "자료집", en: "Documents" },
    writing:   { ko: "글",     en: "Writing" },
    photos:    { ko: "사진",   en: "Photographs" }
  };

  const items = [];

  function add(source, o) { items.push(Object.assign({ source: source }, o)); }

  if (typeof NOW !== "undefined") {
    NOW.forEach(function (it) {
      add("now", {
        tags: it.tags || [],
        title: { ko: it.title_ko, en: it.title_en || it.title_ko },
        meta: [it.year, it.role].filter(Boolean).join(" · "),
        url: it.page || it.url || null,
        external: !it.page && Boolean(it.url)
      });
    });
  }

  if (typeof ARCHIVE !== "undefined") {
    ARCHIVE.forEach(function (it) {
      const type = (typeof TYPES !== "undefined" && TYPES[it.type]) || null;
      add("archive", {
        tags: it.tags || [],
        title: { ko: it.title_ko, en: it.title_en || it.title_ko },
        meta: [it.year, type ? type.en : it.type].filter(Boolean).join(" · "),
        url: it.url || null, external: true
      });
    });
  }

  if (typeof DOCUMENTS !== "undefined") {
    DOCUMENTS.forEach(function (it) {
      add("documents", {
        tags: it.tags || [],
        title: { ko: it.title_ko, en: it.title_en || it.title_ko },
        meta: it.year || "",
        url: it.url || null, external: true
      });
    });
  }

  if (typeof WRITING !== "undefined") {
    WRITING.forEach(function (it) {
      const full = it.kind === "full" && it.slug;
      add("writing", {
        tags: it.tags || [],
        title: { ko: it.title, en: it.title },
        meta: [it.date, it.media].filter(Boolean).join(" · "),
        url: full ? "read.html?slug=" + encodeURIComponent(it.slug) : (it.url || null),
        external: !full
      });
    });
  }

  if (typeof PHOTOS !== "undefined") {
    PHOTOS.forEach(function (it) {
      add("photos", {
        tags: it.tags || [],
        title: { ko: it.title_ko, en: it.title_en || it.title_ko },
        meta: [it.category, it.year].filter(Boolean).join(" · "),
        url: it.link || "photos.html",
        external: Boolean(it.link)
      });
    });
  }

  /* --- 태그 모으기 ------------------------------------------------------- */

  const counts = {};
  items.forEach(function (it) {
    (it.tags || []).forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
  });

  /* 사전 순서를 먼저, 사전에 없는 태그는 뒤에 */
  const dict = (typeof TAG_QUESTIONS !== "undefined") ? TAG_QUESTIONS : [];
  const known = dict.map(function (t) { return t.tag; });
  const extra = Object.keys(counts).filter(function (t) { return known.indexOf(t) < 0; });
  const order = known.concat(extra).filter(function (t) { return counts[t]; });

  function questionOf(tag) {
    const found = dict.filter(function (t) { return t.tag === tag; })[0];
    return found ? found.question : null;
  }

  /* 태그는 개수와 상관없이 모두 같은 크기입니다 (개수는 옆에 작게) */
  cloud.innerHTML = order.map(function (tag) {
    return '<button type="button" class="qb-tag" ' +
      'data-tag="' + esc(tag) + '" aria-pressed="false">' +
      esc(tag) + '<span class="qb-tag-n tnum">' + counts[tag] + "</span>" +
    "</button>";
  }).join("");

  /* --- 고른 태그 보여주기 ------------------------------------------------ */

  function draw(tag) {
    cloud.querySelectorAll(".qb-tag").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.tag === tag));
    });

    if (!tag || !counts[tag]) {
      result.innerHTML =
        '<p class="qb-hint" data-ko="태그를 하나 고르면, 그 질문에 이어진 작업들이 모입니다." ' +
          'data-en="Choose a tag to gather the work connected to its question.">' +
          "태그를 하나 고르면, 그 질문에 이어진 작업들이 모입니다.</p>";
      return;
    }

    const picked = items.filter(function (it) { return (it.tags || []).indexOf(tag) >= 0; });
    const question = questionOf(tag);

    const groups = Object.keys(SOURCE).map(function (key) {
      const rows = picked.filter(function (it) { return it.source === key; });
      if (!rows.length) return "";

      return '<section class="qb-group">' +
        '<h3 class="qb-group-title">' +
          "<span " + bi(SOURCE[key]) + ">" + esc(SOURCE[key].ko) + "</span>" +
          '<span class="meta tnum">' + rows.length + "</span>" +
        "</h3>" +
        '<ul class="qb-list">' + rows.map(function (it) {
          const cells =
            '<span class="qb-title" ' + bi(it.title) + ">" + esc(it.title.ko) + "</span>" +
            (it.url && it.external ? '<span class="qb-arrow" aria-hidden="true">↗</span>' : "") +
            '<span class="qb-meta">' + esc(it.meta) + "</span>";

          if (!it.url) return '<li class="qb-item"><div class="qb-row is-plain">' + cells + "</div></li>";

          return '<li class="qb-item"><a class="qb-row" href="' + esc(it.url) + '"' +
            (it.external ? ' target="_blank" rel="noopener"' : "") + ">" + cells + "</a></li>";
        }).join("") + "</ul>" +
      "</section>";
    }).join("");

    result.innerHTML =
      '<div class="qb-question">' +
        '<p class="meta">' + esc(tag) + '<span class="qb-total tnum"> · ' + picked.length + "</span></p>" +
        "<h2>" + esc(question || tag) + "</h2>" +
      "</div>" + groups;

    /* 언어 전환이 방금 그린 글자에도 적용되도록 */
    if (typeof applyLang === "function") applyLang(document.body.dataset.lang || "ko");
  }

  cloud.addEventListener("click", function (e) {
    const btn = e.target.closest(".qb-tag");
    if (!btn) return;
    const same = btn.getAttribute("aria-pressed") === "true";
    draw(same ? null : btn.dataset.tag);
    if (!same) result.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  draw(param("tag"));
})();
