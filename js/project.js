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
  const gallery = photoData
    .filter(function (m) { return m.type !== "video" && m.src; })
    .map(function (m) { return BASE + photoDir + m.src; });

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
    .map(function (m, i) { return { src: m.src ? photoDir + m.src : "", span: m.span,
                                    caption: m.caption, type: m.type, id: m.id,
                                    w: m.w, h: m.h, i: i }; })
    .filter(function (m) { return m.span; });

  const mediaItems = (p.media || []).concat(spanned);

  let mediaHtml = "";
  if (mediaItems.length) {
    mediaHtml = '<ul class="pj-media">' + mediaItems.map(function (m) {
      const span = Math.min(4, Math.max(1, parseInt(m.span, 10) || 1));
      let inner;

      if (m.type === "video") {
        const id = m.id;
        inner = '<button type="button" class="pj-video-facade" data-video="' + esc(id) + '" ' +
            'aria-label="영상 재생">' +
            '<img src="https://img.youtube.com/vi/' + esc(id) + '/maxresdefault.jpg" alt="" ' +
              'width="1280" height="720" loading="lazy">' +
            '<span class="pj-play" aria-hidden="true">▶</span>' +
          "</button>";
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

  /* 접어 두는 글 (안무가 소개 · 작가 소개 등) — 여러 개 가능 ------------- */
  const notes = p.notes || (p.note ? [p.note] : []);
  notes.forEach(function (n) {
    html += '<section class="pj-section"><details class="pj-note">' +
      "<summary " + bi(n.label) + ">" + esc(n.label.ko) + "</summary>" +
      '<div class="pj-body">' +
        n.paras.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      "</div></details></section>";
  });

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
          /* 사이트 안 주소는 최상단 기준이므로 BASE 를 붙이고, 같은 창에서 엽니다 */
          const inside = !/^(https?:|mailto:)/.test(l.url);
          return '<a href="' + (inside ? BASE : "") + esc(l.url) + '"' +
            (inside ? "" : ' target="_blank" rel="noopener"') + " " + bi(l) + ">" +
            esc(l.ko) + "</a>";
        }).join("") +
      "</div></section>";
  }

  /* 사진 ---------------------------------------------------------------- */
  /* 슬라이드 묶음 — 페이지 안에 여러 개 둘 수 있습니다 (연도별 등) */
  const SLIDES = {};
  function slideBlock(id, label, list, sizes) {
    SLIDES[id] = list;
    return '<section class="pj-section pj-photos" data-slides="' + id + '">' +
      '<button type="button" class="pj-photos-toggle" data-photos-toggle ' +
        'aria-expanded="false">' +
        "<span>" + esc(label) + "</span>" +
        '<span class="tnum"> (' + list.length + ")</span>" +
        '<span class="pj-toggle-mark" aria-hidden="true">+</span>' +
      "</button>" +
      '<div class="pj-slides-wrap" hidden>' +
        '<ul class="pj-slides">' +
          list.map(function (src, i) {
            return '<li><button type="button" data-shot="' + i + '">' +
              '<img src="' + esc(src) + '" alt=""' + size((sizes || [])[i]) + ' loading="lazy">' +
            "</button></li>";
          }).join("") +
        "</ul>" +
        '<div class="pj-slide-bar">' +
          '<button type="button" class="pj-slide-nav" data-slide="prev" aria-label="이전 사진">←</button>' +
          '<span class="pj-slide-count tnum">1 / ' + list.length + "</span>" +
          '<button type="button" class="pj-slide-nav" data-slide="next" aria-label="다음 사진">→</button>' +
        "</div>" +
      "</div>" +
    "</section>";
  }

  /* 영상 한 칸 (썸네일 먼저) */
  function videoCell(id, span, caption) {
    return '<li data-span="' + (span || 4) + '">' +
      '<button type="button" class="pj-video-facade" data-video="' + esc(id) + '" ' +
        'aria-label="영상 재생">' +
        '<img src="https://img.youtube.com/vi/' + esc(id) + '/maxresdefault.jpg" alt="" ' +
          'width="1280" height="720" loading="lazy">' +
        '<span class="pj-play" aria-hidden="true">▶</span>' +
      "</button>" +
      (caption ? '<span class="pj-media-cap">' + esc(caption) + "</span>" : "") +
    "</li>";
  }

  let galleryHtml = "";
  const spannedPhotos = spanned.filter(function (m) { return m.type !== "video"; }).length;
  if (gallery.length > spannedPhotos) {
    galleryHtml = slideBlock("all", "사진 전체 보기", gallery,
                             photoData.filter(function (m) { return m.type !== "video" && m.src; })) +
      (photoCredit ? '<p class="pj-photo-credit">' + esc(photoCredit) + "</p>" : "");
  }

  /* ── 연도별 블록 (기후변화 레지던시처럼 해마다 나뉘는 프로젝트) ────── */
  let editionsHtml = "";
  if (p.editions && p.editions.length) {
    editionsHtml = p.editions.map(function (ed) {
      const grid = (ed.grid || []).map(function (m) {
        return '<li data-span="' + (m.span || 1) + '">' +
          '<img src="' + BASE + esc(ed.dir + m.src) + '" alt=""' + size(m) + ' loading="lazy">' +
        "</li>";
      }).join("");

      const all = [];
      for (let i = 1; i <= (ed.total || 0); i++) {
        all.push(BASE + ed.dir + ("0" + i).slice(-2) + ".jpg");
      }

      return '<section class="pj-edition">' +
        '<h3 class="pj-edition-title">' +
          '<span class="tnum">' + esc(ed.year) + "</span> · " + esc(ed.title) +
        "</h3>" +
        '<ul class="pj-media">' +
          (ed.video ? videoCell(ed.video, 4, ed.year + " 기록 영상") : "") +
          grid +
        "</ul>" +
        (all.length ? slideBlock("y" + ed.year, ed.year + " 사진 전체 보기", all) : "") +
      "</section>";
    }).join("");

    if (p.closingVideo) {
      editionsHtml += '<section class="pj-edition"><ul class="pj-media">' +
        videoCell(p.closingVideo.id, p.closingVideo.span || 4, p.closingVideo.caption) +
      "</ul></section>";
    }
    if (photoCredit) editionsHtml += '<p class="pj-photo-credit">' + esc(photoCredit) + "</p>";
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
  const rightHtml = editionsHtml || (mediaHtml + galleryHtml);
  mount.innerHTML = rightHtml
    ? '<div class="pj-split">' +
        '<div class="pj-col-left">' + html + "</div>" +
        '<div class="pj-col-right">' + rightHtml + "</div>" +
      "</div>"
    : html;

  /* 영상 — 처음엔 썸네일만, 누르면 그때 유튜브를 불러옵니다 */
  mount.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-video]");
    if (!btn) return;
    const id = btn.dataset.video;
    const box = document.createElement("span");
    box.className = "pj-media-video";
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1" title="' + esc(p.title) + ' 영상" ' +
      'allow="autoplay; encrypted-media; picture-in-picture; web-share" ' +
      'referrerpolicy="strict-origin-when-cross-origin" ' +
      'allowfullscreen loading="lazy"></iframe>';
    btn.replaceWith(box);
  });

  /* 사진 슬라이드 — 묶음마다 따로 열리고 따로 움직입니다 */
  function trackOf(el) { return el.closest("[data-slides]").querySelector(".pj-slides"); }
  function listOf(el)  { return SLIDES[el.closest("[data-slides]").dataset.slides] || []; }

  function at(track, n) {
    return Math.min(n - 1, Math.round(track.scrollLeft / (track.scrollWidth / n)));
  }
  function go(track, n, i) {
    track.scrollTo({ left: Math.max(0, Math.min(n - 1, i)) * (track.scrollWidth / n),
                     behavior: "smooth" });
  }

  mount.addEventListener("click", function (e) {
    const toggle = e.target.closest("[data-photos-toggle]");
    if (toggle) {
      const wrap = toggle.closest("[data-slides]").querySelector(".pj-slides-wrap");
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      wrap.hidden = !open;
      toggle.querySelector(".pj-toggle-mark").textContent = open ? "−" : "+";
      return;
    }

    const nav = e.target.closest("[data-slide]");
    if (nav) {
      const track = trackOf(nav), n = listOf(nav).length;
      return go(track, n, at(track, n) + (nav.dataset.slide === "next" ? 1 : -1));
    }

    const shot = e.target.closest("[data-shot]");
    if (shot && typeof Lightbox !== "undefined") {
      Lightbox.open(listOf(shot), p.title, shot, parseInt(shot.dataset.shot, 10));
    }
  });

  mount.querySelectorAll("[data-slides]").forEach(function (box) {
    const track = box.querySelector(".pj-slides");
    const countEl = box.querySelector(".pj-slide-count");
    const n = (SLIDES[box.dataset.slides] || []).length;
    if (!track || !countEl) return;
    track.addEventListener("scroll", function () {
      countEl.textContent = (at(track, n) + 1) + " / " + n;
    }, { passive: true });
  });

  /* 펼쳐져 있는 묶음에서 ← → 키로 이동 */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const open = mount.querySelector('[data-photos-toggle][aria-expanded="true"]');
    if (!open) return;
    const track = trackOf(open), n = listOf(open).length;
    go(track, n, at(track, n) + (e.key === "ArrowRight" ? 1 : -1));
  });
})();
