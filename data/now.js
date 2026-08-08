/* ==========================================================================
   data/now.js — 지금(Now) : 진행 중이거나 최근에 이어가고 있는 일

   각 항목: { category, title_ko, title_en, year, role,
              artist(공연만), cover(선택), tags,
              page(선택 — 사이트 안 페이지) / url(선택 — 외부 링크) }

   · category 는 "공연" 또는 "프로젝트". 페이지가 이 값으로 두 묶음을 나눕니다.
   · 공연 항목은 제목 아래에 artist(작가·안무가)와 role 이 함께 나옵니다.
   · 프로젝트 항목은 role 만 나옵니다.
   · page 가 있으면 같은 창에서 그 페이지로, url 이 있으면 새 탭으로 열립니다.
   · cover 가 없으면 제목·연도만 담백하게 나옵니다.

   TODO — 아래 항목들은 제목만 있고 year·role·artist 가 비어 있습니다.
          채워 넣으면 화면에 바로 반영됩니다.
   ========================================================================== */

const NOW = [

  /* ── 공연 ────────────────────────────────────────────────────────── */

  { category: "공연", title_ko: "sync de sync 싱크 디 싱크", title_en: "sync de sync",
    year: "2025–2026", artist: "황수현 컨셉·안무", role: "크리에이티브 프로듀서",
    cover: "img/works/sync-poster-2026.png",
    page: "projects/sync-de-sync.html",
    tags: [] },

  { category: "공연", title_ko: "히히히스토리", title_en: "Hi-Hi-History",
    year: "", artist: "황수현", role: "",
    tags: [] },

  { category: "공연", title_ko: "권병준 홍콩 작업", title_en: "Kwon Byungjun — Hong Kong",
    year: "", artist: "권병준", role: "",
    tags: [] },

  { category: "공연", title_ko: "아니 세상의 종말", title_en: "Not the End of the World",
    year: "", artist: "앤드씨어터", role: "",
    tags: [] },

  { category: "공연", title_ko: "할머니 | Grandmother", title_en: "Grandmother",
    year: "", artist: "", role: "",
    tags: [] },

  /* ── 프로젝트 ────────────────────────────────────────────────────── */

  { category: "프로젝트", title_ko: "⬡⬡의 섬 : 강화도", title_en: "The Island of ⬡⬡ : Ganghwa",
    year: "2025–2026", role: "기획·프로듀서",
    cover: "img/photos/ganghwa/ganghwa-12.jpg",
    page: "projects/ganghwa.html",
    tags: ["경계와공존","기후위기","지역과공동체","국제협력"] },

  { category: "프로젝트", title_ko: "무용 × 기술 창작 랩", title_en: "Dance × Technology Creative Lab",
    year: "2021–2025", role: "총괄 기획 · 국립현대무용단",
    tags: ["기술사회","포스트휴먼","과정중심"] },

  { category: "프로젝트", title_ko: "기후변화 예술가 레지던시", title_en: "Climate Change Artist Residency",
    year: "2020–", role: "총괄 기획 · 화천 예술텃밭",
    tags: ["기후위기","과정중심"] },

  { category: "프로젝트", title_ko: "TNN — The Next Normal", title_en: "The Next Normal",
    year: "2024–", role: "기획 · 아시아 네트워크",
    tags: ["국제협력","아시아연대"] },

  { category: "프로젝트", title_ko: "아시아 입과 눈", title_en: "With Asian Eyes, Through Asian Mouths",
    year: "2024–", role: "에코 드라마터그 · 앤드씨어터",
    tags: ["아시아연대","이동성"] },

  { category: "프로젝트", title_ko: "Aesth:ethics", title_en: "Aesth:ethics",
    year: "2025–", role: "리서치 · Academy for Theatre and Digitality 협력",
    tags: ["AI","기술사회"] },

  { category: "프로젝트", title_ko: "기후정의 논문", title_en: "Climate Justice — Paper",
    year: "", role: "",
    tags: [] },

  { category: "프로젝트", title_ko: "월간 할머니", title_en: "Monthly Grandmother",
    year: "", role: "",
    tags: [] },

  { category: "프로젝트", title_ko: "Between Us", title_en: "Between Us",
    year: "", role: "",
    tags: [] }
];
