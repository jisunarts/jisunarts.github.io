/* ==========================================================================
   data/site.js — 사이트 공통 콘텐츠
   이 파일만 고치면 메뉴 이름, 소개 문구, 홈 궤적 내용이 바뀝니다.
   따옴표(" ")와 쉼표(,)는 지우지 마세요.
   ========================================================================== */

const SITE = {

  /* 사이트 주소 --------------------------------------------------------
     공유 카드(og:url · og:image)와 canonical 은 절대 주소여야 해서
     각 HTML 에 글자로 박혀 있습니다. 여기 값은 그것과 같아야 합니다.
     바꿀 때는 손으로 고치지 말고 아래 한 줄을 돌리세요 —
     HTML · sitemap.xml · 이 값이 한꺼번에 바뀝니다.

         sh tools/set-domain.sh https://새주소.com                      */
  baseUrl: "https://jisunarts.com",

  /* 이름 · 역할 -------------------------------------------------------- */
  name:  { ko: "박지선",  en: "Park Jisun" },
  role:  { ko: "크리에이티브 프로듀서 · 독립 기획자 · 리서처",
           en: "Creative Producer · Independent Arts Programmer · Researcher" },

  /* 상단 메뉴 (순서대로 표시됩니다) ------------------------------------ */
  nav: [
    { id: "now",       href: "now.html",         ko: "지금",          en: "Now" },
    { id: "archive",   href: "archive.html",     ko: "기록",          en: "Archive" },
    { id: "documents", href: "documents.html",   ko: "자료집",        en: "Documents" },
    { id: "writing",   href: "writing.html",     ko: "글",            en: "Writing" },
    { id: "photos",    href: "photos.html",      ko: "사진",          en: "Photographs" },
    { id: "questions", href: "by-question.html", ko: "질문으로 보기", en: "By Question" }
  ],

  /* 홈 히어로 ----------------------------------------------------------- */
  /* lead 는 한 줄이 한 문장입니다. 줄을 더하거나 빼도 그대로 반영됩니다.   */
  hero: {
    tagline: {
      ko: "동시대를 읽고 질문을 던지고 대화하며 길을 찾는 프로듀서",
      en: "A producer reading the present, asking questions, finding a way through conversation"
    },
    lead: {
      ko: [
        "동시대를 읽고, 질문을 던지고, 대화하며 길을 찾아 나갑니다.",
        "독립적, 수평적, 창의적으로 일하기를 좋아합니다.",
        "산책을 좋아합니다. 늘 걸으며, 수평으로 이동합니다.",
        "그러다 보면, 늘 좋은 동료들을 만납니다."
      ],
      en: [
        "Reading the present, asking questions, finding a way through conversation.",
        "Working independently, horizontally, creatively.",
        "Walking — always moving, on the level.",
        "And so, always meeting good companions."
      ]
    },

    /* 홈 사진 — 다른 사진으로 바꾸려면 src 만 고치면 됩니다 */
    image: {
      src: "img/photos/walking-road.jpg",
      alt: { ko: "파타고니아의 큰 길을 걷는 사람", en: "A person walking a long road in Patagonia" }
    }
  },

  /* 홈 — 짧은 소개 ------------------------------------------------------ */
  /* TODO: 실제 약력으로 교체. 전문(全文)은 소개 페이지에 따로 들어갑니다. */
  introShort: {
    ko: "박지선은 크리에이티브 프로듀서이자 독립 기획자, 리서처입니다. 축제와 국제교류에서 출발해, 지금은 기후위기와 기술의 시대 앞에서 예술의 근본을 다시 묻습니다. 결과보다 과정을, 시장보다 관계를, 위계보다 수평을 지향하며 일합니다.",
    en: "Park Jisun is a creative producer, independent producer, and researcher. Beginning in festivals and international exchange, she now returns to art's fundamentals before the climate crisis and an age of technology — favoring process over result, relationship over market, and horizontality over hierarchy."
  },

  /* 궤적(네 시기)은 data/trajectory.js 에 따로 있습니다. -------------------- */

  /* 홈 — 섹션 입구 카드 설명 -------------------------------------------- */
  entries: {
    now:       { ko: "진행 중이거나 최근에 마친 작업. 아직 닫히지 않은 것들.",
                 en: "Ongoing and recent work — the things still open." },
    archive:   { ko: "2001년부터의 전체 이력을 인덱스 표로.",
                 en: "The full record since 2001, as an index." },
    documents: { ko: "프로젝트별 자료집. 표지를 누르면 원문이 열립니다.",
                 en: "Publications by project — open the full document." },
    writing:   { ko: "기고글과 원고. 일부는 전문 읽기.",
                 en: "Essays and manuscripts, some readable in full." },
    photos:    { ko: "프로젝트별 사진 웹북.",
                 en: "Photo web-books by project." },
    questions: { ko: "하나의 질문이 지나온 작업들을 가로질러 모입니다.",
                 en: "One question, gathering work across the years." },
    about:     { ko: "약력과 지금까지의 궤적.",
                 en: "Biography and trajectory." }
  },

  /* 푸터 ---------------------------------------------------------------- */
  footer: {
    contact: [
      /* TODO: 실제 연락처 · 링크로 교체하거나 줄을 지우세요.
         { label: "Email", url: "mailto:이메일주소" },
         { label: "Instagram", url: "https://..." } */
    ],
    copy: { ko: "© 2026 박지선", en: "© 2026 Park Jisun" }
  }
};
