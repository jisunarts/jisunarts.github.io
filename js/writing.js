/* ==========================================================================
   js/writing.js — 글(Writing) 인덱스
   data/writing.js 의 WRITING 을 날짜 · 매체 · 제목 표로 그립니다.

   · kind: article / interview / video → 제목을 누르면 원문이 새 탭에서 열림 (↗)
   · kind: full                        → 사이트 안의 읽기 페이지로 이동
   ========================================================================== */

(function renderWriting() {

  const mount = document.getElementById("writing-mount");
  if (!mount || typeof WRITING === "undefined") return;

  /* 종류 표시 — 기고글은 따로 표시하지 않습니다 */
  const KIND = {
    interview: { ko: "인터뷰", en: "Interview" },
    video:     { ko: "영상",   en: "Video" },
    full:      { ko: "전문",   en: "Full text" }
  };

  /* 최신순 — 같은 해면 날짜 문자열이 늦은 쪽이 먼저 */
  const rows = WRITING.map(function (item, i) { return { item: item, i: i }; })
    .sort(function (a, b) {
      return (b.item.year - a.item.year) ||
             String(b.item.date).localeCompare(String(a.item.date)) ||
             (a.i - b.i);
    });

  mount.innerHTML = rows.map(function (row) {
    const it = row.item;
    const kind = KIND[it.kind];

    const label = kind
      ? '<span class="wr-kind" ' + bi(kind) + ">" + esc(kind.ko) + "</span>"
      : "";

    const mark = (it.kind !== "full" && it.url)
      ? '<span class="wr-arrow" aria-hidden="true">↗</span>'
      : "";

    const cells =
      '<span class="wr-date tnum">' + esc(it.date) + "</span>" +
      '<span class="wr-media">' + esc(it.media) + "</span>" +
      '<span class="wr-title-cell">' +
        '<span class="wr-title">' + esc(it.title) + "</span>" + mark + label +
      "</span>";

    /* 전문은 사이트 안에서, 나머지는 원문으로 */
    if (it.kind === "full" && it.slug) {
      return '<li class="wr-item"><a class="wr-row" href="read.html?slug=' +
        encodeURIComponent(it.slug) + '">' + cells + "</a></li>";
    }
    if (it.url) {
      return '<li class="wr-item"><a class="wr-row" href="' + esc(it.url) +
        '" target="_blank" rel="noopener">' + cells + "</a></li>";
    }
    return '<li class="wr-item"><div class="wr-row is-plain">' + cells + "</div></li>";
  }).join("");

  /* 개수 */
  const count = document.getElementById("writing-count");
  if (count) {
    const full = WRITING.filter(function (w) { return w.kind === "full"; }).length;
    count.setAttribute("data-ko", "전체 " + WRITING.length + "편 · 전문 " + full + "편");
    count.setAttribute("data-en", WRITING.length + " pieces · " + full + " in full");
    count.textContent = "전체 " + WRITING.length + "편 · 전문 " + full + "편";
  }
})();
