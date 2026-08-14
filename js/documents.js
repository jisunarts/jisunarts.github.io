/* ==========================================================================
   js/documents.js — 자료집(Documents)
   data/documents.js 의 DOCUMENTS 를 표지 격자로 그립니다.
   표지를 누르면 그 자료집의 원문(구글 드라이브)이 새 탭에서 열립니다.
   표지 파일이 아직 없으면 제목이 적힌 빈 상자가 대신 놓입니다.
   ========================================================================== */

(function renderDocuments() {

  const mount = document.getElementById("documents-mount");
  if (!mount) return;

  /* --- 준비 확인 -------------------------------------------------------
     이 파일은 layout.js 의 도움 함수와 data 파일을 전제로 합니다.
     그중 하나라도 내려받지 못하면 예전에는 아무 말 없이 빈 화면이 됐습니다.
     여기서는 무엇이 없었는지 콘솔에 남기고, 화면에도 한 줄 띄웁니다.
     (layout.js 자체가 없을 수 있으므로 이 블록은 도움 함수를 쓰지 않습니다.) */
  function needed(list) {
    var missing = [];
    for (var i = 0; i < list.length; i++) if (!list[i].ok) missing.push(list[i].what);
    return missing;
  }
  function bail(mountEl, screen, missing) {
    console.error("[" + screen + "] 화면을 그리지 못했습니다. 없는 것: " + missing.join(", ") +
      " — 스크립트가 모두 내려받아졌는지 확인해 주세요.");
    if (mountEl) {
      mountEl.innerHTML = '<p class="read-missing" ' +
        'data-ko="목록을 불러오지 못했습니다. 새로고침해 주세요." ' +
        'data-en="Could not load this list. Please refresh.">' +
        "목록을 불러오지 못했습니다. 새로고침해 주세요.</p>";
    }
  }

  var _miss = needed([
    { what: "data/documents.js (DOCUMENTS)", ok: typeof DOCUMENTS !== "undefined" },
    { what: "js/layout.js (esc)", ok: typeof esc === "function" },
    { what: "js/layout.js (bi)", ok: typeof bi === "function" },
    { what: "js/layout.js (asset)", ok: typeof asset === "function" }
  ]);
  if (_miss.length) { bail(mount, "자료집", _miss); return; }


  /* --- 프로젝트별로 묶기 ------------------------------------------------
     소제목마다 id 를 달아 documents.html#dance-techlab 로 바로 갈 수 있습니다.
     어느 프로젝트에도 속하지 않는 자료집은 맨 아래 '그 외'로 모입니다.      */

  const DICT = (typeof DOC_PROJECTS !== "undefined") ? DOC_PROJECTS : {};

  function card(doc, anchor) {

    const title = { ko: doc.title_ko, en: doc.title_en || doc.title_ko };

    const cover = doc.cover
      ? '<img src="' + esc(asset(doc.cover)) + '" alt="" loading="lazy">'
      : "";

    return '<li class="doc-item"' + (anchor ? ' id="' + esc(anchor) + '"' : "") + ">" +
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

  /* 계열(project) 묶음은 유지하되 라벨·구분선 없이 하나의 그리드로 이어 붙입니다.
     · 계열 순서는 DOC_PROJECTS 에 적힌 순서 그대로
     · 같은 계열 안에서는 연도 내림차순(최신 먼저)
     · 계열이 행 중간에서 시작해도 그대로 둡니다 (줄바꿈 강제 없음)
     · 데이터의 project 필드는 그대로 두고, 화면에 라벨만 그리지 않습니다      */

  function startYear(d) {
    const m = String(d.year || "").match(/\d{4}/);
    return m ? parseInt(m[0], 10) : 0;
  }

  const order = Object.keys(DICT).filter(function (k) {
    return DOCUMENTS.some(function (d) { return d.project === k; });
  });
  const rest = DOCUMENTS.filter(function (d) { return !d.project || !DICT[d.project]; });

  const rows = [];
  order.forEach(function (k) {
    DOCUMENTS.filter(function (d) { return d.project === k; })
      .slice()
      .sort(function (a, b) { return startYear(b) - startYear(a); })
      .forEach(function (d, i) {
        /* 계열의 첫 자료집이 앵커를 이어받습니다 (documents.html#dance-techlab) */
        rows.push({ doc: d, anchor: i === 0 ? k : null });
      });
  });
  rest.slice()
    .sort(function (a, b) { return startYear(b) - startYear(a); })
    .forEach(function (d, i) { rows.push({ doc: d, anchor: i === 0 ? "etc" : null }); });

  mount.innerHTML = '<ul class="doc-grid">' +
    rows.map(function (r) {
      try { return card(r.doc, r.anchor); }
      catch (e) { console.error("[자료집] 이 항목을 건너뜁니다:", r.doc && r.doc.title_ko, e); return ""; }
    }).join("") +
  "</ul>";

  /* 표지 파일이 없으면 그 이미지는 치우고 대체 상자가 보이게 */
  mount.querySelectorAll(".doc-cover img").forEach(function (img) {
    img.addEventListener("error", function () { img.remove(); });
  });

  /* --- 주소에 #계열 이 있으면 그 자료집으로 이동 -------------------------
     목록은 이 스크립트가 그리므로, 브라우저가 주소의 # 를 처리하는 시점에는
     아직 그 칸이 없습니다. 그려 놓은 다음 여기서 직접 옮겨 줍니다.
     (js/archive.js 의 highlight() 와 같은 방식)                              */
  (function jumpToAnchor() {
    const id = decodeURIComponent((window.location.hash || "").slice(1));
    if (!id) return;
    const item = document.getElementById(id);
    if (!item) return;
    item.classList.add("is-target");
    item.scrollIntoView({ block: "center" });
    setTimeout(function () { item.classList.remove("is-target"); }, 2600);
  })();

  /* 개수 */
  const count = document.getElementById("documents-count");
  if (count) {
    count.setAttribute("data-ko", "전체 " + DOCUMENTS.length + "권");
    count.setAttribute("data-en", DOCUMENTS.length + " publications");
    count.textContent = "전체 " + DOCUMENTS.length + "권";
  }
})();
