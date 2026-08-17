/* ==========================================================================
   js/project.js — 개별 프로젝트 페이지 (projects/{slug}.html)
   <body data-project="ganghwa" data-base="../"> 를 보고
   data/projects.js 에서 그 프로젝트를 찾아 그립니다.
   ========================================================================== */

(function renderProject() {

  const mount = document.getElementById("project-mount");
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
    { what: "data/projects.js (PROJECTS)", ok: typeof PROJECTS !== "undefined" },
    { what: "js/layout.js (esc)", ok: typeof esc === "function" },
    { what: "js/layout.js (bi)", ok: typeof bi === "function" },
    { what: "js/layout.js (koOf)", ok: typeof koOf === "function" },
    { what: "js/layout.js (asset)", ok: typeof asset === "function" }
  ]);
  if (_miss.length) { bail(mount, "프로젝트", _miss); return; }


  const slug = document.body.dataset.project;
  const p = PROJECTS[slug];

  if (!p) {
    mount.innerHTML = '<p class="read-missing" data-ko="프로젝트를 찾을 수 없습니다." ' +
      'data-en="Project not found.">프로젝트를 찾을 수 없습니다.</p>';
    return;
  }

  document.title = koOf(p.title) + " — 박지선 Park Jisun";

  /* 사진 — { src, span? } 목록. span 이 있는 사진은 오른쪽 격자에도 나옵니다. */
  const photoDir  = (p.photos && p.photos.dir) || (p.gallery && p.gallery.dir) || "";
  const photoData = (p.photos && p.photos.items) ||
                    ((p.gallery && p.gallery.files || []).map(function (f) { return { src: f }; }));
  const photoLabel = (p.photos && p.photos.label) || (p.gallery && p.gallery.label) ||
                     { ko: "사진", en: "Photographs" };
  const photoCredit = (p.photos && p.photos.credit) || "";
  const gallery = photoData
    .filter(function (m) { return m.type !== "video" && m.src; })
    .map(function (m) { return asset(BASE + photoDir + m.src); });

  /* width·height 를 미리 적어 두면 사진이 뜨기 전에도 자리가 잡힙니다 */
  function size(m) {
    return (m && m.w && m.h) ? ' width="' + m.w + '" height="' + m.h + '"' : "";
  }

  /* 영상 표지(썸네일) — 세 갈래를 한 곳에서 정합니다.
       1) poster 가 있으면 사이트 자체 이미지 (img/works/… )
       2) 없으면 유튜브 maxresdefault
       3) maxresdefault 가 없는 영상이 있어(404 대신 회색 기본 이미지가 옵니다)
          onerror 로 hqdefault 로 한 번 내려갑니다. hqdefault 는 모든 영상에 있습니다.
     영상이 들어가는 곳은 모두 이 함수를 씁니다 — 마크업을 두 곳에서 만들지 않도록. */
  function videoFacade(id, poster) {
    const hq = "https://img.youtube.com/vi/" + esc(id) + "/hqdefault.jpg";
    const src = poster
      ? BASE + esc(asset(poster))
      : "https://img.youtube.com/vi/" + esc(id) + "/maxresdefault.jpg";
    const fallback = poster ? "" : ' onerror="this.onerror=null;this.src=\'' + hq + '\'"';
    return '<button type="button" class="pj-video-facade" data-video="' + esc(id) + '" ' +
        'aria-label="영상 재생">' +
        '<img src="' + src + '" alt=""' + fallback + ' width="1280" height="720" loading="lazy">' +
        '<span class="pj-play" aria-hidden="true">▶</span>' +
      "</button>";
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
      '<p class="pj-eyebrow" ' + bi(p.eyebrow) + ">" + esc(koOf(p.eyebrow)) + "</p>" +
      "<h1 " + bi(p.title) + ">" + esc(koOf(p.title)) + "</h1>" +
      (p.credit ? '<p class="pj-credit" ' + bi(p.credit) + ">" + esc(koOf(p.credit)) + "</p>" : "") +
      (p.role
        ? '<p class="pj-role"><span class="pj-role-label" ' + bi(p.role.label) + ">" +
            esc(p.role.label.ko) + "</span>" +
            "<span " + bi(p.role.text) + ">" + esc(koOf(p.role.text)) + "</span></p>"
        : "") +
    "</header>";

  /* 대표 이미지 ---------------------------------------------------------- */
  if (p.hero) {
    html +=
      '<figure class="pj-hero">' +
        '<img src="' + BASE + esc(asset(p.hero.src)) + '" alt="' +
          esc(koOf(p.hero.caption) || koOf(p.title)) + '">' +
        (p.hero.caption
          ? "<figcaption " + bi(p.hero.caption) + ">" + esc(koOf(p.hero.caption)) + "</figcaption>"
          : "") +
      "</figure>";
  }

  /* 포스터 (여러 장을 나란히) -------------------------------------------- */
  if (p.posters && p.posters.files && p.posters.files.length) {
    html += '<section class="pj-section">' + head(p.posters.label) +
      '<ul class="pj-posters">' +
        p.posters.files.map(function (f) {
          return '<li><img src="' + BASE + esc(asset(f.src)) + '" alt="' + esc(f.alt || "") + '" ' +
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
                                    poster: m.poster,
                                    w: m.w, h: m.h, i: i }; })
    .filter(function (m) { return m.span; });

  const mediaItems = (p.media || []).concat(spanned);

  let mediaHtml = "";
  if (mediaItems.length) {
    mediaHtml = '<ul class="pj-media">' + mediaItems.map(function (m) {
      const span = Math.min(4, Math.max(1, parseInt(m.span, 10) || 1));
      let inner;

      if (m.type === "video") {
        inner = videoFacade(m.id, m.poster);
      } else {
        inner = '<img src="' + BASE + esc(asset(m.src)) + '" alt="' + esc(m.alt || "") + '"' +
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
            '<span class="pj-run-date tnum" ' + bi(r.dates) + ">" + esc(koOf(r.dates)) + "</span>" +
            '<span class="pj-run-time tnum" ' + bi(r.time) + ">" + esc(koOf(r.time)) + "</span>" +
            '<span class="pj-run-venue" ' + bi(r.venue) + ">" + esc(koOf(r.venue)) + "</span>" +
          "</li>";
        }).join("") +
      "</ul>" +
      (p.runs.note
        ? '<p class="pj-run-note" ' + bi(p.runs.note) + ">" + esc(koOf(p.runs.note)) + "</p>"
        : "") +
    "</section>";
  }

  /* 본문 ---------------------------------------------------------------- */
  (p.sections || []).forEach(function (s) {
    /* works — 제목 한 줄 아래에 작은 링크가 붙습니다 */
    const works = (s.works || []).map(function (w) {
      return '<div class="pj-work">' +
        '<p class="pj-work-title" ' + bi(w.title) + ">" + esc(koOf(w.title)) + "</p>" +
        (w.link
          ? '<p class="pj-work-link"><a href="' + esc(w.link.url) + '" target="_blank" ' +
              'rel="noopener">' + esc(w.link.label) + " ↗</a></p>"
          : "") +
      "</div>";
    }).join("");

    html += '<section class="pj-section">' + head(s.label) +
      '<div class="pj-body">' + works +
        (s.paras || []).map(function (t) { return "<p " + bi(t) + ">" + esc(koOf(t)) + "</p>"; }).join("") +
      "</div></section>";
  });

  /* 연혁 — 연도 · 개최지 두 열 --------------------------------------- */
  if (p.timeline && p.timeline.rows && p.timeline.rows.length) {
    html += '<section class="pj-section">' + head(p.timeline.label) +
      '<ul class="pj-timeline">' +
        p.timeline.rows.map(function (r) {
          return "<li>" +
            '<span class="pj-tl-year tnum">' + esc(r.year) + "</span>" +
            '<span class="pj-tl-place" ' + bi(r.place) + ">" + esc(koOf(r.place)) + "</span>" +
          "</li>";
        }).join("") +
      "</ul>" +
      (p.timeline.note
        ? '<p class="pj-run-note" ' + bi(p.timeline.note) + ">" + esc(koOf(p.timeline.note)) + "</p>"
        : "") +
    "</section>";
  }

  /* 접어 두는 글 (안무가 소개 · 작가 소개 등) — 여러 개 가능 ------------- */
  const notes = p.notes || (p.note ? [p.note] : []);
  notes.forEach(function (n) {
    html += '<section class="pj-section">' +
      Accordion.block(
        '<span class="pj-label-inline" ' + bi(n.label) + ">" + esc(n.label.ko) + "</span>",
        '<div class="pj-body">' +
          n.paras.map(function (t) { return "<p " + bi(t) + ">" + esc(koOf(t)) + "</p>"; }).join("") +
        "</div>") +
    "</section>";
  });

  /* 크레딧 — 접었다 펴는 아코디언 (공용 js/accordion.js) ----------------- */
  if (p.credits && p.credits.rows && p.credits.rows.length) {
    html += '<section class="pj-section">' +
      Accordion.block(
        '<span class="pj-label-inline" ' + bi(p.credits.label) + ">" + esc(p.credits.label.ko) + "</span>",
        '<ul class="pj-credits">' +
          p.credits.rows.map(function (r) {
            return "<li><span class=\"pj-credit-role\" " + bi(r[0]) + ">" + esc(koOf(r[0])) +
              "</span>" +
              '<span class="pj-credit-name" ' + bi(r[1]) + ">" + esc(koOf(r[1])) + "</span></li>";
          }).join("") +
        "</ul>") +
    "</section>";
  }

  /* 후원 ---------------------------------------------------------------- */
  if (p.support) {
    html += '<section class="pj-section">' + head(p.support.label) +
      '<p class="pj-support" ' + bi(p.support.text) + ">" + esc(koOf(p.support.text)) +
      "</p></section>";
  }

  /* 참가자 -------------------------------------------------------------- */
  if (p.participants) {
    html += '<section class="pj-section">' + head(p.participants.label) +
      '<ul class="pj-parts">' +
        p.participants.lines.map(function (l) {
          /* name·aff 는 문자열일 수도 { ko, en } 일 수도 있습니다.
             객체를 그대로 찍으면 [object Object] 가 나오므로 bi()·koOf() 를 거칩니다. */
          return "<li><span " + bi(l.name) + ">" + esc(koOf(l.name)) + "</span>" +
            (l.aff ? ' <span class="pj-aff" ' + bi(l.aff) + ">" + esc(koOf(l.aff)) + "</span>" : "") +
          "</li>";
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
        'title="' + esc(koOf(p.video.title) || koOf(p.title)) + '" ' +
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
        "<span " + bi(label) + ">" + esc(koOf(label)) + "</span>" +
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
  function videoCell(id, span, caption, poster) {
    return '<li data-span="' + (span || 4) + '">' +
      videoFacade(id, poster) +
      (caption ? '<span class="pj-media-cap">' + esc(caption) + "</span>" : "") +
    "</li>";
  }

  let galleryHtml = "";
  const spannedPhotos = spanned.filter(function (m) { return m.type !== "video"; }).length;
  if (gallery.length > spannedPhotos) {
    galleryHtml = slideBlock("all", { ko: "사진 전체 보기", en: "See all photos" }, gallery,
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
          (ed.video ? videoCell(ed.video, 4, ed.year + " 기록 영상", ed.poster) : "") +
          grid +
        "</ul>" +
        (all.length ? slideBlock("y" + ed.year,
            { ko: ed.year + " 사진 전체 보기", en: "See all photos, " + ed.year }, all) : "") +
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
          const label = (typeof tagLabel === "function") ? tagLabel(t) : { ko: t, en: t };
          return '<a class="qb-tag" href="' + BASE + "by-question.html?tag=" +
            encodeURIComponent(t) + '" ' + bi(label) + ">" + esc(label.ko) + "</a>";
        }).join("") +
      "</div></section>";
  }

  /* 미디어가 있으면 좌 40% / 우 60% 2단, 없으면 지금까지처럼 한 단 */
  const rightHtml = editionsHtml || (mediaHtml + galleryHtml);
  if (typeof Accordion !== "undefined") Accordion.bind(mount);

  try {
  mount.innerHTML = rightHtml
    ? '<div class="pj-split">' +
        '<div class="pj-col-left">' + html + "</div>" +
        '<div class="pj-col-right">' + rightHtml + "</div>" +
      "</div>"
    : html;
  } catch (e) {
    console.error("[프로젝트] 본문을 그리지 못했습니다:", slug, e);
    bail(mount, "프로젝트", ["렌더 중 오류 — " + (e && e.message)]);
  }

  /* 영상 — 처음엔 썸네일만, 누르면 그때 유튜브를 불러옵니다 */
  mount.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-video]");
    if (!btn) return;
    const id = btn.dataset.video;
    const box = document.createElement("span");
    box.className = "pj-media-video";
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1" title="' + esc(koOf(p.title)) + ' 영상" ' +
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
      Lightbox.open(listOf(shot), koOf(p.title), shot, parseInt(shot.dataset.shot, 10));
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
