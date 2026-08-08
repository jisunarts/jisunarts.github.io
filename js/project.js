/* ==========================================================================
   js/project.js — 개별 프로젝트 페이지 (projects/{slug}.html)
   <body data-project="ganghwa" data-base="../"> 를 보고
   data/projects.js 에서 그 프로젝트를 찾아 그립니다.
   ========================================================================== */

(function renderProject() {

  const mount = document.getElementById("project-mount");
  if (!mount || typeof PROJECTS === "undefined") return;

  const slug = document.body.dataset.project;
  const p = PROJECTS[slug];

  if (!p) {
    mount.innerHTML = '<p class="read-missing">프로젝트를 찾을 수 없습니다.</p>';
    return;
  }

  document.title = p.title + " — 박지선 Park Jisun";

  /* 사진 — { src, span? } 목록. span 이 있는 사진은 오른쪽 격자에도 나옵니다. */
  const photoDir  = (p.photos && p.photos.dir) || (p.gallery && p.gallery.dir) || "";
  const photoData = (p.photos && p.photos.items) ||
                    ((p.gallery && p.gallery.files || []).map(function (f) { return { src: f }; }));
  const photoLabel = (p.photos && p.photos.label) || (p.gallery && p.gallery.label) ||
                     { ko: "사진", en: "Photographs" };
  const photoCredit = (p.photos && p.photos.credit) || "";
  const gallery = photoData.map(function (m) { return BASE + photoDir + m.src; });

  /* width·height 를 미리 적어 두면 사진이 뜨기 전에도 자리가 잡힙니다 */
  function size(m) {
    return (m && m.w && m.h) ? ' width="' + m.w + '" height="' + m.h + '"' : "";
  }

  /* 소제목 한 줄 */
  function head(label) {
    return '<h2 class="pj-label" ' + bi(label) + ">" + esc(label.ko) + "</h2>";
  }

  let html = "";

  /* 머리 ---------------------------------------------------------------- */
  html +=
    '<header class="pj-head">' +
      (p.back
        ? '<p><a class="pj-back" href="' + BASE + esc(p.back.href) + '" ' + bi(p.back) + ">" +
            esc(p.back.ko) + "</a></p>"
        : "") +
      '<p class="pj-eyebrow">' + esc(p.eyebrow || "") + "</p>" +
      "<h1>" + esc(p.title) + "</h1>" +
      (p.credit ? '<p class="pj-credit">' + esc(p.credit) + "</p>" : "") +
      (p.role
        ? '<p class="pj-role"><span class="pj-role-label" ' + bi(p.role.label) + ">" +
            esc(p.role.label.ko) + "</span>" + esc(p.role.text) + "</p>"
        : "") +
    "</header>";

  /* 대표 이미지 ---------------------------------------------------------- */
  if (p.hero) {
    html +=
      '<figure class="pj-hero">' +
        '<img src="' + BASE + esc(p.hero.src) + '" alt="' + esc(p.hero.caption || p.title) + '">' +
        (p.hero.caption ? "<figcaption>" + esc(p.hero.caption) + "</figcaption>" : "") +
      "</figure>";
  }

  /* 포스터 (여러 장을 나란히) -------------------------------------------- */
  if (p.posters && p.posters.files && p.posters.files.length) {
    html += '<section class="pj-section">' + head(p.posters.label) +
      '<ul class="pj-posters">' +
        p.posters.files.map(function (f) {
          return '<li><img src="' + BASE + esc(f.src) + '" alt="' + esc(f.alt || "") + '" ' +
            'loading="lazy">' +
            (f.caption ? '<span class="pj-poster-cap">' + esc(f.caption) + "</span>" : "") +
          "</li>";
        }).join("") +
      "</ul></section>";
  }

  /* 오른쪽 미디어 격자 ---------------------------------------------------
     media: [{ src, span, caption }, { type:"video", src, span }]
     span 1~4 = 4칸 격자에서 차지하는 칸 수                                */
  const spanned = photoData
    .map(function (m, i) { return { src: photoDir + m.src, span: m.span, caption: m.caption,
                                    w: m.w, h: m.h, i: i }; })
    .filter(function (m) { return m.span; });

  const mediaItems = (p.media || []).concat(spanned);

  let mediaHtml = "";
  if (mediaItems.length) {
    mediaHtml = '<ul class="pj-media">' + mediaItems.map(function (m) {
      const span = Math.min(4, Math.max(1, parseInt(m.span, 10) || 1));
      let inner;

      if (m.type === "video") {
        const local = window.location.protocol === "file:";
        inner = (m.src && !local)
          ? '<span class="pj-media-video"><iframe src="' + esc(m.src) + '" ' +
              'title="' + esc(m.caption || p.title) + '" ' +
              'allow="encrypted-media; picture-in-picture; web-share" ' +
              'referrerpolicy="strict-origin-when-cross-origin" ' +
              'allowfullscreen loading="lazy"></iframe></span>'
          : '<a class="pj-media-video is-link" href="' + esc(m.watch || m.src || "#") + '" ' +
              'target="_blank" rel="noopener">' +
              '<span class="pj-play" data-ko="▶ 영상 보기" data-en="▶ Watch">▶ 영상 보기</span></a>';
      } else {
        inner = '<img src="' + BASE + esc(m.src) + '" alt="' + esc(m.alt || "") + '"' +
          size(m) + ' loading="lazy">';
      }

      return '<li data-span="' + span + '">' + inner +
        (m.caption ? '<span class="pj-media-cap">' + esc(m.caption) + "</span>" : "") +
      "</li>";
    }).join("") + "</ul>";
  }

  /* 공연 회차 ------------------------------------------------------------ */
  if (p.runs && p.runs.rows && p.runs.rows.length) {
    html += '<section class="pj-section">' + head(p.runs.label) +
      '<ul class="pj-runs">' +
        p.runs.rows.map(function (r) {
          return "<li>" +
            '<span class="pj-run-date tnum">' + esc(r.dates) + "</span>" +
            '<span class="pj-run-time tnum">' + esc(r.time || "") + "</span>" +
            '<span class="pj-run-venue">' + esc(r.venue || "") + "</span>" +
          "</li>";
        }).join("") +
      "</ul>" +
      (p.runs.note ? '<p class="pj-run-note">' + esc(p.runs.note) + "</p>" : "") +
    "</section>";
  }

  /* 본문 ---------------------------------------------------------------- */
  (p.sections || []).forEach(function (s) {
    html += '<section class="pj-section">' + head(s.label) +
      '<div class="pj-body">' +
        s.paras.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      "</div></section>";
  });

  /* 접어 두는 글 (안무가 노트 등) ---------------------------------------- */
  if (p.note) {
    html += '<section class="pj-section"><details class="pj-note">' +
      "<summary " + bi(p.note.label) + ">" + esc(p.note.label.ko) + "</summary>" +
      '<div class="pj-body">' +
        p.note.paras.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      "</div></details></section>";
  }

  /* 크레딧 -------------------------------------------------------------- */
  if (p.credits && p.credits.rows && p.credits.rows.length) {
    html += '<section class="pj-section">' + head(p.credits.label) +
      '<ul class="pj-credits">' +
        p.credits.rows.map(function (r) {
          return "<li><span class=\"pj-credit-role\">" + esc(r[0]) + "</span>" +
            '<span class="pj-credit-name">' + esc(r[1]) + "</span></li>";
        }).join("") +
      "</ul></section>";
  }

  /* 후원 ---------------------------------------------------------------- */
  if (p.support) {
    html += '<section class="pj-section">' + head(p.support.label) +
      '<p class="pj-support">' + esc(p.support.text) + "</p></section>";
  }

  /* 참가자 -------------------------------------------------------------- */
  if (p.participants) {
    html += '<section class="pj-section">' + head(p.participants.label) +
      '<ul class="pj-parts">' +
        p.participants.lines.map(function (l) {
          return "<li>" + esc(l.name) +
            (l.aff ? ' <span class="pj-aff">' + esc(l.aff) + "</span>" : "") + "</li>";
        }).join("") +
      "</ul></section>";
  }

  /* 영상 ----------------------------------------------------------------
     내 컴퓨터에서 파일로 열면(file://) 유튜브가 임베드를 막습니다(오류 153).
     그때는 썸네일과 '트레일러 보기' 링크를 대신 놓고,
     인터넷에 올린 뒤에는 자동으로 영상이 페이지 안에서 재생됩니다. */
  if (p.video) {
    const id    = p.video.id;
    const embed = p.video.embed || (id ? "https://www.youtube-nocookie.com/embed/" + id : null);
    const watch = p.video.watch || (id ? "https://youtu.be/" + id : null);
    const thumb = p.video.thumb || (id ? "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg" : null);
    const local = window.location.protocol === "file:";

    let video = "";

    if (embed && !local) {
      video = '<div class="pj-video"><iframe src="' + esc(embed) + '" ' +
        'title="' + esc(p.video.title || p.title) + '" ' +
        'allow="encrypted-media; picture-in-picture; web-share" ' +
        'referrerpolicy="strict-origin-when-cross-origin" ' +
        'allowfullscreen loading="lazy"></iframe></div>';
    } else if (watch) {
      video =
        '<a class="pj-video-link" href="' + esc(watch) + '" target="_blank" rel="noopener">' +
          (thumb ? '<img src="' + esc(thumb) + '" alt="" loading="lazy">' : "") +
          '<span class="pj-play" data-ko="▶ 트레일러 보기" data-en="▶ Watch the trailer">' +
            "▶ 트레일러 보기</span>" +
        "</a>";
    }

    if (video) html += '<section class="pj-section">' + head(p.video.label) + video + "</section>";
  }

  /* 자료집 · 웹사이트 ---------------------------------------------------- */
  if (p.links) {
    html += '<section class="pj-section">' + head(p.links.label) +
      '<div class="pj-links">' +
        p.links.items.map(function (l) {
          return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" ' + bi(l) + ">" +
            esc(l.ko) + "</a>";
        }).join("") +
      "</div></section>";
  }

  /* 사진 ---------------------------------------------------------------- */
  let galleryHtml = "";
  if (gallery.length) {
    galleryHtml = '<section class="pj-section pj-photos">' +
      '<button type="button" class="pj-photos-toggle" id="pj-photos-toggle" ' +
        'aria-expanded="false" aria-controls="pj-slides">' +
        '<span data-ko="사진 전체 보기" data-en="See all photographs">사진 전체 보기</span>' +
        '<span class="tnum"> (' + gallery.length + ")</span>" +
        '<span class="pj-toggle-mark" aria-hidden="true">+</span>' +
      "</button>" +

      '<div class="pj-slides-wrap" id="pj-slides" hidden>' +
        '<ul class="pj-slides" id="pj-slides-track">' +
          gallery.map(function (src, i) {
            return '<li><button type="button" data-shot="' + i + '">' +
              '<img src="' + esc(src) + '" alt=""' + size(photoData[i]) + ' loading="lazy">' +
            "</button></li>";
          }).join("") +
        "</ul>" +
        '<div class="pj-slide-bar">' +
          '<button type="button" class="pj-slide-nav" data-slide="prev" aria-label="이전 사진">←</button>' +
          '<span class="pj-slide-count tnum">1 / ' + gallery.length + "</span>" +
          '<button type="button" class="pj-slide-nav" data-slide="next" aria-label="다음 사진">→</button>' +
        "</div>" +
      "</div>" +
      /* 사진 출처 — 사진 영역 맨 아래 */
      (photoCredit ? '<p class="pj-photo-credit">' + esc(photoCredit) + "</p>" : "") +
    "</section>";
  }

  /* 태그 — 맨 끝 -------------------------------------------------------- */
  if (p.tags && p.tags.length) {
    html += '<section class="pj-section pj-tags-wrap">' +
      head({ ko: "질문 · 태그", en: "Questions · Tags" }) +
      '<div class="pj-tags">' +
        p.tags.map(function (t) {
          return '<a class="qb-tag" href="' + BASE + "by-question.html?tag=" +
            encodeURIComponent(t) + '">' + esc(t) + "</a>";
        }).join("") +
      "</div></section>";
  }

  /* 미디어가 있으면 좌 40% / 우 60% 2단, 없으면 지금까지처럼 한 단 */
  mount.innerHTML = (mediaHtml || galleryHtml)
    ? '<div class="pj-split">' +
        '<div class="pj-col-left">' + html + "</div>" +
        '<div class="pj-col-right">' + mediaHtml + galleryHtml + "</div>" +
      "</div>"
    : html;

  /* 사진 슬라이드 — 접기 / 펼치기, 좌우 이동, 키보드, 스와이프 */
  const toggle = document.getElementById("pj-photos-toggle");
  const wrap   = document.getElementById("pj-slides");
  const track  = document.getElementById("pj-slides-track");

  if (toggle && wrap && track) {
    const countEl = wrap.querySelector(".pj-slide-count");

    function at() {
      const step = track.scrollWidth / gallery.length;
      return Math.min(gallery.length - 1, Math.round(track.scrollLeft / step));
    }
    function go(i) {
      const step = track.scrollWidth / gallery.length;
      track.scrollTo({ left: Math.max(0, Math.min(gallery.length - 1, i)) * step,
                       behavior: "smooth" });
    }

    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      wrap.hidden = !open;
      toggle.querySelector(".pj-toggle-mark").textContent = open ? "−" : "+";
    });

    wrap.addEventListener("click", function (e) {
      const nav = e.target.closest("[data-slide]");
      if (nav) return go(at() + (nav.dataset.slide === "next" ? 1 : -1));

      const shot = e.target.closest("[data-shot]");
      if (shot && typeof Lightbox !== "undefined") {
        Lightbox.open(gallery, p.title, shot, parseInt(shot.dataset.shot, 10));
      }
    });

    track.addEventListener("scroll", function () {
      countEl.textContent = (at() + 1) + " / " + gallery.length;
    }, { passive: true });

    document.addEventListener("keydown", function (e) {
      if (wrap.hidden) return;
      if (e.key === "ArrowLeft")  go(at() - 1);
      if (e.key === "ArrowRight") go(at() + 1);
    });
  }
})();
