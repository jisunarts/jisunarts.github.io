/* ==========================================================================
   data/climate.js — 기후 (강의용 단독 화면)

   climate.html 한 장만 이 파일을 읽습니다. 상단 메뉴(SITE.nav)에는 없습니다.

   태그로 자동으로 모으지 않습니다. 여기 적은 순서 그대로 화면에 나갑니다.
   순서를 바꾸려면 줄을 통째로 옮기고, 빼려면 줄을 지우면 됩니다.

   단계 하나 = { concept, works }
     concept — 개념어. 연두 형광 블록이 깔립니다.
     works   — 그 단계에 놓이는 작업들

   작업 하나 = { year, title, url, note, also }
     year  — 연도. 기간("2021–22")도 그대로 씁니다.
     title — 작업 제목
     url   — 없으면 링크 없이 글자만 나옵니다 (아직 걸 곳이 없는 작업)
     note  — 제목 아래 작은 설명 한 줄 (없어도 됩니다)
     also  — 제목 아래 딸려 붙는 작업 한 줄 (없어도 됩니다)

   지금은 국문만입니다. 영문을 넣을 때는 문자열을 { ko: "…", en: "…" } 으로
   바꾸면 됩니다 — js/layout.js 의 pair() 가 문자열과 객체를 섞어 써도 되게
   되어 있어서, 한 줄씩 번역해 넣는 중간 상태에서도 화면이 깨지지 않습니다.
   ========================================================================== */

const CLIMATE = {

  stages: [

    {
      concept: "환경 → 기후변화",
      works: [
        { year: "2020", title: "예술텃밭 예술가 레지던시 — 기후변화",
          url: "projects/climate-residency.html" }
      ]
    },

    {
      concept: "기후위기",
      works: [
        { year: "2021", title: "예술텃밭 예술가 레지던시 — 기후변화",
          url: "projects/climate-residency.html" },

        { year: "2021–22", title: "〈시어터 그린 북〉 번역 및 워크숍",
          url: "documents.html#theatre-green-book" },

        { year: "2022", title: "예술텃밭 예술가 레지던시 — 기후변화",
          url: "projects/climate-residency.html" },

        { year: "2022", title: "국립극단, 전윤환 〈기후비상사태: 리허설〉",
          url: "https://drive.google.com/file/d/1DIx4ZtAPB3lo2IOvETc9ICn2aI0rDP_i/view?usp=sharing" }
      ]
    },

    {
      concept: "기후적응",
      works: [
        { year: "2022", title: "무제의 길 〈움직이는 숲〉 씨어터 게임 @SPAF",
          url: "https://www.untitledroad.com/projects/moving-a-forest_theatre-game" },

        { year: "2023–26", title: "예술텃밭 예술가 레지던시 — 단기 레지던시",
          note: "감자 심고 수확하기, 리서치(도넛 경제학), 자전거, 워크숍 개발" }
      ]
    },

    {
      concept: "기후정의, 미래 상상, 희망",
      works: [
        { year: "2023", title: "지연X전환 〈에너지 — 보이지 않는 언어〉 @SPAF",
          url: "https://youtu.be/arl9qntbhXc" },

        { year: "2025", title: "무제의 길 〈끝의 섬: 2150〉",
          url: "https://www.untitledroad.com/projects/island-at-the-end-2150" },

        { year: "2026", title: "도넛 경제학 기반의 지속가능성 워크숍",
          url: "https://drive.google.com/file/d/1VgT2BIZ9JIc5YIGfubUt95NgLntZsk9O/view" },

        { year: "2025–27", title: "앤드씨어터 〈세상의 종말이 (아닌)〉",
          url: "projects/not-the-end-of-the-world.html",
          also: "〈교토〉 (2027 예정)" }
      ]
    }

  ]
};
