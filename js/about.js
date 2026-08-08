/* ==========================================================================
   js/about.js — 소개(About) 페이지
   본문은 문단 안에 링크가 들어가므로, 언어가 바뀔 때마다 다시 그립니다.
   ========================================================================== */

(function renderAbout() {

  const prose = document.getElementById("about-prose");
  const links = document.getElementById("about-links");
  if (!prose || typeof ABOUT === "undefined") return;

  /* [보이는 글자](주소) → 새 탭으로 열리는 링크 */
  function withLinks(text) {
    return esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, url) {
      return '<a class="inline-link" href="' + url + '" target="_blank" rel="noopener">' + label + "</a>";
    });
  }

  function draw(lang) {
    prose.innerHTML = ABOUT.paragraphs.map(function (p) {
      const text = (p[lang] && p[lang].trim()) ? p[lang] : p.ko;
      return "<p>" + withLinks(text) + "</p>";
    }).join("");

    if (links) {
      links.innerHTML = ABOUT.links.map(function (row) {
        const label = esc(row.label[lang] || row.label.ko);

        /* 주소만 있는 줄 — 이름 자체가 링크 (주소는 감춥니다) */
        if (!row.items) {
          return '<p class="links-row">' + anchor(row.url, label) + "</p>";
        }

        /* 값이 있는 줄 — "라벨 — 값 · 값" */
        const values = row.items.map(function (item) {
          return anchor(item.url, esc(item.text));
        }).join('<span class="link-sep" aria-hidden="true"> · </span>');

        return '<p class="links-row">' +
          '<span class="links-label">' + label + "</span>" +
          '<span class="links-dash" aria-hidden="true"> — </span>' +
          values +
        "</p>";
      }).join("");
    }
  }

  /* 메일 주소는 그대로, 나머지는 새 탭 */
  function anchor(url, text) {
    const mail = String(url).indexOf("mailto:") === 0;
    return '<a class="inline-link" href="' + esc(url) + '"' +
      (mail ? "" : ' target="_blank" rel="noopener"') + ">" + text + "</a>";
  }

  /* 한 화면(100vh)을 넘으면 글자를 한 단계 줄여 맞춥니다 */
  function fit() {
    prose.classList.remove("is-tight");
    if (document.documentElement.scrollHeight > window.innerHeight + 4) {
      prose.classList.add("is-tight");
    }
  }

  draw("ko");
  fit();

  document.addEventListener("langchange", function (e) { draw(e.detail.lang); fit(); });
  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
})();
