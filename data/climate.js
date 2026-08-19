/* ==========================================================================
   data/climate.js — 기후 (강의용 단독 화면)

   climate.html 한 장만 이 파일을 읽습니다. 상단 메뉴(SITE.nav)에는 없습니다.

   태그로 자동으로 모으지 않습니다. 여기 적은 것만 화면에 나갑니다.

   화면은 가로 시간축입니다.
     위 = 개념 네 개가 계단처럼 등장 (stages 의 concept)
     아래 = 작업이 세 갈래 레인에 놓임 (works 의 lane)

   단계 하나 = { concept, works }
     concept — 개념어. 그 단계의 첫 작업 연도에서 등장합니다.
     works   — 그 단계에 속한 작업들

   작업 하나 = { year, title, lane, url, note, reading, repeat }
     year    — "2022" 처럼 한 해, 또는 "2021–22" 처럼 기간.
               한 해면 연두 점, 기간이면 연두 막대가 됩니다.
     title   — 작업 제목
     lane    — 어느 갈래에 놓을지. 아래 lanes 의 key 중 하나.
     url     — 없으면 링크 없이 흰색 60% 로 흐리게 나옵니다
     note    — 제목 아래 작은 설명 한 줄 (없어도 됩니다)
     reading — true 면 낭독공연 → 본공연 구조.
               시작 연도에 속 빈 연두 원(낭독), 끝 연도에 채운 연두 점(본공연),
               그 사이를 연두 막대로 잇습니다.
     repeat  — true 면 앞선 해와 같은 작업이 이어지는 것.
               제목을 작게, 흰색 70% 로 씁니다.
     handoff — 다른 레인으로 넘어가는 작업. { lane, year } 를 적으면
               그 레인 그 해에 연두 점을 하나 더 찍습니다.
               (리서치가 공연으로 이어지는 경우처럼)

   지금은 국문만입니다. 영문을 넣을 때는 문자열을 { ko: "…", en: "…" } 으로
   바꾸면 됩니다 — js/layout.js 의 pair() 가 문자열과 객체를 섞어 써도 되게
   되어 있어서, 한 줄씩 번역해 넣는 중간 상태에서도 화면이 깨지지 않습니다.
   ========================================================================== */

const CLIMATE = {

  /* 작업이 놓이는 세 갈래. 이름을 고치면 화면 왼쪽 라벨이 바뀝니다.
     순서대로 위에서 아래로 놓입니다. */
  lanes: [
    { key: "residency",   name: "레지던시" },
    { key: "research",    name: "리서치 · 워크숍" },
    { key: "performance", name: "공연" }
  ],

  stages: [

    {
      concept: "환경 → 기후변화",
      works: [
        { year: "2020", title: "예술텃밭 예술가 레지던시 — 기후변화",
          lane: "residency",
          url: "projects/climate-residency.html" }
      ]
    },

    {
      concept: "기후위기",
      works: [
        { year: "2021", title: "예술텃밭 예술가 레지던시 — 기후변화",
          lane: "residency", repeat: true,
          url: "projects/climate-residency.html" },

        { year: "2021–22", title: "〈시어터 그린 북〉 번역 및 워크숍",
          lane: "research",
          url: "documents.html#theatre-green-book" },

        { year: "2022", title: "예술텃밭 예술가 레지던시 — 기후변화",
          lane: "residency", repeat: true,
          url: "projects/climate-residency.html" },

        { year: "2022", title: "국립극단, 전윤환 〈기후비상사태: 리허설〉",
          lane: "performance",
          url: "https://drive.google.com/file/d/1DIx4ZtAPB3lo2IOvETc9ICn2aI0rDP_i/view?usp=sharing" }
      ]
    },

    {
      concept: "기후적응",
      works: [
        { year: "2022", title: "무제의 길 〈움직이는 숲〉 씨어터 게임 @SPAF",
          lane: "performance",
          url: "https://www.untitledroad.com/projects/moving-a-forest_theatre-game" },

        { year: "2023–26", title: "예술텃밭 예술가 레지던시 — 단기 레지던시",
          lane: "residency",
          url: "https://www.instagram.com/arts_and_climate_change/",
          note: "감자 심고 수확하기, 리서치(도넛 경제학), 자전거, 워크숍 개발" }
      ]
    },

    {
      concept: "기후정의 · 미래 상상 · 희망",
      works: [
        { year: "2023", title: "지연X전환 〈에너지 — 보이지 않는 언어〉 @SPAF",
          lane: "performance",
          url: "https://youtu.be/arl9qntbhXc" },

        { year: "2025", title: "무제의 길 〈끝의 섬: 2150〉",
          lane: "performance",
          url: "https://www.untitledroad.com/projects/island-at-the-end-2150" },

        { year: "2026", title: "도넛 경제학 기반의 지속가능성 워크숍",
          lane: "research",
          url: "https://drive.google.com/file/d/1VgT2BIZ9JIc5YIGfubUt95NgLntZsk9O/view" },

        { year: "2025–26", title: "앤드씨어터 × 아시아의 입과 눈",
          lane: "research",
          url: "now.html#asian-eyes",
          handoff: { lane: "performance", year: "2027" },
          note: "2025 데스크 리서치 · 2026 필드 리서치 · 2027 공연 제작" },

        /* 앤드씨어터 두 편 — 둘 다 2025 낭독공연에서 시작합니다 */
        { year: "2025–26", title: "앤드씨어터 〈세상의 종말이 (아닌)〉",
          lane: "performance", reading: true,
          url: "projects/not-the-end-of-the-world.html" },

        { year: "2025–27", title: "앤드씨어터 〈교토〉",
          lane: "performance", reading: true }
      ]
    }

  ]
};
