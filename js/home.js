/* ==========================================================================
   js/home.js — 홈(index.html)
   히어로(이름 · 네 구절 · 소개 문장 · 사진)와 궤적 네 시기만 그립니다.
   나머지 내용은 상단 메뉴의 각 페이지에 있습니다.
   글과 항목은 data/site.js · data/trajectory.js 에서 읽어옵니다.
   ========================================================================== */

(function renderHome() {

  /* 히어로 ------------------------------------------------------------- */
  const hero = document.getElementById("hero-mount");
  if (!hero) return;

  /* 소개 — 한 줄이 한 문단. 네 줄 그대로 유지됩니다. */
  const lead = SITE.hero.lead.ko.map(function (line, i) {
    return "<p " + bi({ ko: line, en: SITE.hero.lead.en[i] || line }) + ">" + esc(line) + "</p>";
  }).join("");

  /* 왼쪽 — 로고 · 이름 한 줄 · 소개 · 사진 */
  const img = SITE.hero.image;

  hero.innerHTML =
    '<p class="home-logo"><img src="img/logo.svg" alt="" width="26" height="22"></p>' +

    "<h1 class=\"home-name\" " + bi(SITE.name) + ">" + esc(SITE.name.ko) + "</h1>" +
    '<p class="home-kicker" ' + bi(SITE.hero.tagline) + ">" + esc(SITE.hero.tagline.ko) + "</p>" +

    '<div class="home-intro">' + lead + "</div>" +

    '<figure class="home-photo">' +
      '<img src="' + esc(img.src) + '" alt="' + esc(img.alt.ko) + '" ' +
        'data-alt-ko="' + esc(img.alt.ko) + '" data-alt-en="' + esc(img.alt.en) + '">' +
    "</figure>";

  /* 궤적 — data/trajectory.js 의 네 시기.
     한 줄에 연도 · 제목 · 한 줄 요약 · 태그, 누르면 그 시기의 질문이 펼쳐집니다. */
  const traj = document.getElementById("trajectory-mount");
  if (traj && typeof TRAJECTORY !== "undefined") {
    traj.innerHTML = TRAJECTORY.map(function (p, idx) {

      /* "2020–현재" → 영문일 때 "2020–Present" */
      const years = { ko: p.years, en: p.years.replace("현재", "Present") };

      const keys = (p.tags || []).map(function (label) {
        return "<span>" + esc(label) + "</span>";
      }).join("");

      const questions = (p.questions || []).map(function (q, i) {
        return "<li>" +
          '<span class="meta tnum">' + String(i + 1).padStart(2, "0") + "</span>" +
          "<span " + bi(q) + ">" + esc(q.ko) + "</span>" +
        "</li>";
      }).join("");

      const works = p.works_ko
        ? '<span class="meta detail-label" data-ko="대표 활동" data-en="Selected Work">대표 활동</span>' +
          '<p class="detail-body">' + esc(p.works_ko) + "</p>"
        : "";

      return '<li class="index-item" data-open="false">' +
        '<button type="button" class="index-row" id="traj-' + esc(p.id) + '-btn" ' +
          'aria-expanded="false" aria-controls="traj-' + esc(p.id) + '-panel">' +
          '<span class="index-lead meta tnum" ' + bi(years) + ">" + esc(years.ko) + "</span>" +
          "<span>" +
            '<span class="index-title" ' + bi({ ko: p.title_ko, en: p.title_en }) + ">" +
              esc(p.title_ko) +
            "</span>" +
            '<span class="index-sub" ' + bi({ ko: p.essence_ko, en: p.essence_en }) + ">" +
              esc(p.essence_ko) +
            "</span>" +
            (keys ? '<span class="keys">' + keys + "</span>" : "") +
          "</span>" +
          '<span class="index-tail acc-mark meta" aria-hidden="true">+</span>' +
        "</button>" +

        '<div class="index-detail" id="traj-' + esc(p.id) + '-panel" role="region" ' +
          'aria-labelledby="traj-' + esc(p.id) + '-btn">' +
          '<div class="detail-inner">' +
            works +
            '<span class="meta detail-label" data-ko="질문" data-en="Questions">질문</span>' +
            '<ul class="qset">' + questions + "</ul>" +
            /* 설명 — 모바일에서만 펼침 안에 보입니다 (데스크톱은 행에 그대로) */
            '<span class="meta detail-label is-mobile" data-ko="설명" data-en="Summary">설명</span>' +
            '<p class="detail-body is-mobile" ' + bi({ ko: p.essence_ko, en: p.essence_en }) + ">" +
              esc(p.essence_ko) + "</p>" +
            /* 이 시기의 기록으로 */
            '<span class="detail-label"></span>' +
            '<p class="traj-more"><a href="archive.html?period=' + (idx + 1) + '" ' +
              'data-ko="이 시기 기록 보기 →" data-en="See this period in the archive →">' +
              "이 시기 기록 보기 →</a></p>" +
          "</div>" +
        "</div>" +
      "</li>";
    }).join("");

    /* 열고 닫기 — 공용 아코디언(js/accordion.js)과 같은 방식 */
    traj.addEventListener("click", function (e) {
      const btn = e.target.closest(".index-row");
      if (!btn) return;
      const item = btn.parentElement;
      const open = item.dataset.open !== "true";
      if (typeof Accordion !== "undefined") Accordion.set(item, open);
      else { item.dataset.open = String(open); btn.setAttribute("aria-expanded", String(open)); }
      btn.querySelector(".index-tail").textContent = open ? "−" : "+";
    });
  }

})();
