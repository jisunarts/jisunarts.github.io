/* ==========================================================================
   data/projects.js — 개별 프로젝트 페이지의 내용
   projects/{slug}.html 이 <body data-project="slug"> 로 이 안의 항목을 찾습니다.
   새 프로젝트를 더하려면 이 파일에 항목을 추가하고
   projects/ 폴더에 같은 모양의 html 한 장을 복사해 slug 만 바꾸면 됩니다.

   · 이미지 경로는 사이트 최상단 기준으로 씁니다 (예: img/photos/ganghwa/…)
   · sections 의 각 문단은 그대로 한 문단이 됩니다.
   ========================================================================== */

const PROJECTS = {

  /* ── sync de sync 싱크 디 싱크 ─────────────────────────────────────── */

  "sync-de-sync": {
    eyebrow: "공연 · 2025–2026 · TINC (This is Not A Church)",
    title: "sync de sync 싱크 디 싱크",
    credit: "황수현 컨셉·안무 · 박지선 크리에이티브 프로듀서",
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    /* 오른쪽 미디어 격자 — 4칸 기준, span 으로 폭을 정합니다
       { src, span, caption } · 영상은 { type:"video", src, span } */
    media: [
      { src: "img/works/sync-poster-2026.png", span: 2, caption: "2026", alt: "sync de sync 2026 포스터" },
      { src: "img/works/sync-poster-2025.png", span: 2, caption: "2025", alt: "sync de sync 2025 포스터" }
      /* TODO — 영상 주소가 생기면 아래 줄의 주석을 풀고 src 를 채우세요
      , { type: "video", span: 4, src: "https://www.youtube-nocookie.com/embed/영상아이디",
          watch: "https://youtu.be/영상아이디", caption: "트레일러" } */
    ],

    runs: {
      label: { ko: "일정", en: "Schedule" },
      rows: [
        { dates: "2025.8.14–16", time: "7:00pm", venue: "TINC (This is Not A Church)" },
        { dates: "2026.7.16–19", time: "7:30pm", venue: "TINC (This is Not A Church)" }
      ],
      note: "러닝타임 60분"
    },

    sections: [
      {
        label: { ko: "작품 소개", en: "About the Work" },
        paras: [
          "조율되고 틀어지는 순간, 완전한 일치도 완전한 분리도 아닌 상태에서 작동하는 감각들을 따라간다.",
          "《sync de sync》는 조율되고 틀어지는 순간, 완전한 일치도 완전한 분리도 아닌 상태에서 작동하는 감각들을 따라간다. 말은 입술과 성대를 지나 소리와 진동으로 흩어지고, 움직임은 형태보다 몸을 통과한 파동과 질감으로 번진다. 빛과 어둠, 온도와 공기, 무대 안팎의 보이는 것들과 보이지 않는 것들은 서로 겹치고 스며들며 감각의 얽힘을 만든다. 그 얽힘은 공간의 밀도, 온도와 습도, 기운의 변화를 몸에 닿게 한다. 《sync de sync》는 고정되지 않는 주변 환경에 반응하며, 현재의 감각 안에 이미 도착한 변화를 더듬는다."
        ]
      }
    ],

    note: {
      label: { ko: "안무가 노트", en: "Choreographer's Note" },
      paras: [
        "황수현은 춤을 통해 몸이 세계와 관계 맺는 감각의 조건을 탐구한다. 그는 춤을 보여지는 형식이 아니라, 몸과 몸, 몸과 공간, 보이지 않는 것 사이에서 발생하는 경험의 구조로 다룬다. 호흡, 구음, 진동, 어둠, 미세한 운동감각과 같은 비가시적 요소를 주요한 재료로 안무한다. 《검정감각》, 《음------》, 《카베에》, 《Zzz》 등을 거치며 보는 중심의 관람을 흔들고, 서로 다른 몸들이 함께 감각하는 '공동'의 상태를 탐구해왔다. 최근에는 이러한 감각 경험을 가능하게 해온 방식이 고정된 구조로 굳어지는 순간을 경계하며, 몸이 환경과 새롭게 관계 맺을 수 있도록 안무를 다시 실험하고 있다."
      ]
    },

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        ["컨셉, 안무", "황수현"],
        ["리서치·출연", "정나원, 최승윤, 황수현"],
        ["사운드 디자인", "홍초선"],
        ["조명 디자인", "공연화"],
        ["조명", "김인애, 오채은"],
        ["영상", "윤재민(2025), 백종관(2026)"],
        ["리허설 어시스턴트", "강호정"],
        ["아웃사이드 아이", "손나예"],
        ["크리에이티브 프로듀서", "박지선"],
        ["기획·행정", "송미선"],
        ["무대감독", "최진아(2025), 김세현(2026)"],
        ["셋업 및 진행", "김지현, 김채민"],
        ["그래픽 디자인", "홍소이"]
      ]
    },

    support: {
      label: { ko: "후원", en: "Support" },
      text: "서울특별시, 서울문화재단 · 2026년 서울문화재단 예술창작활동지원(다년) 선정 프로젝트"
    },

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: "프로그램북", en: "Programme", url: "https://soohyunhwang.com/syncdesync/" },
        { ko: "웹 포토북", en: "Web Photobook", url: "https://jisunarts.github.io/syncdesync_photo" }
      ]
    }
  },

  /* ── ⬡⬡의 섬 : 강화도 ─────────────────────────────────────────────── */

  ganghwa: {
    eyebrow: "프로젝트 · 2025–2026 · 강화도",
    title: "⬡⬡의 섬 : 강화도",
    credit: "기획 · 앤드씨어터 × 프로듀서그룹도트 × 강화유니버스",
    role: { label: { ko: "역할", en: "Role" }, text: "박지선 — 기획·프로듀서" },

    /* 돌아가기 링크 */
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "개념", en: "Concept" },
        paras: [
          "⬡⬡의 섬은 사라지는 것들에 대한 질문에서 시작한다. 예술가와 기획자, 시민들이 함께 '소멸'을 응시하고 그 자리에 시적인 공간을 만들어내는 프로젝트이다.",
          "2025-2026 ⬡⬡의 섬은 강화도이다. 2025년은 리서치 단계로 한국, 싱가포르, 이탈리아의 예술가·기획자가 강화도에 모였다. 강화도의 길을 걷고, 역사적·문화적 장소를 방문하고, 사람들을 만나다 보니, 그 과정에서 강화의 시간과 자연이 몸에 스며들었고, 각자의 방식으로 '여기서 무엇이 사라지고 있는가'를 감각하기 시작했다.",
          "⬡⬡의 섬의 두 개의 육각형은 프로젝트의 상징이다. 육각형은 서로 맞물리면서 새로운 공간과 구조를 만들어내는 형태로, 이는 개개인의 섬이 서로 연결되어 새로운 공동의 세계를 형성하는 과정을 의미한다. 즉, 각각의 육각형은 '나의 섬'이자 '우리의 섬'이며, 이들이 모여 만들어지는 새로운 공간은 예술을 통해 서로의 존재를 인식하고 확장하는 장이 된다.",
          "'소멸'은 기후위기와 함께 '멸종'이라는 단어와 연결된다. 국가의 존속, 경제 성장과 연결해서는 '지역 소멸'로 연결된다. 生과 연결한다면 '소멸'은 '자연스러움'으로 연결된다.",
          "그러나 ⬡⬡의 섬이 바라보는 '소멸'은 두려움이 아닌, 다시 관계 맺기 위한 시작의 순간으로 바라본다. 사라지는 것들의 자취를 따라가며, 그 속에서 새로 태어나는 감각과 언어를 예술의 시각과 감각으로 포획하고 기록하고 공유하며, 사라짐의 공간에 예술적·시적 상상의 공간을 만들어내고자 한다.",
          "2026년 ⬡⬡의 섬 프로젝트가 다시 시작된다. 2025년에 발견한 질문들을 가지고 강화도에 다시 모여, 사라짐의 자리에 시적 장소를 만들고, 그 상상의 공간이 섬 위에 천천히 쌓여가기를 바란다."
        ]
      },
      {
        label: { ko: "2025 리서치 · 주제 “소멸”", en: "2025 Research · “Disappearance”" },
        paras: [
          "'소멸'은 단순히 사라짐이 아니라, 변화의 한 형태이자 다시 태어남의 가능성을 품은 개념으로, 강화도의 시간과 사람, 그리고 자연을 통해 탐구하고자 했다. 강화 안팎의 예술가·기획자·연구자, 그리고 강화에 거주하는 사람들이 모여 '소멸을 어떻게 해석할 수 있을까', '강화에서 우리는 소멸과 관련해 무엇을 발견할 수 있을까'라는 질문을 중심으로 대화를 이어갔다.",
          "2주 동안 강화도의 여러 지역을 걸으며, 강화의 사람들을 만나고 그들의 일상과 기억, 그리고 땅의 변화를 몸으로 체험했다. 이 과정에서 '소멸'은 단순한 부정의 언어가 아니라, 존재의 또 다른 방식, 관계의 재구성, 그리고 기억의 전승이라는 새로운 의미로 확장되었다.",
          "이 짧은 여정은 하나의 시작점이다. 참여자들은 각자의 삶으로 돌아가 올해의 시간을 되새기며, 내년에 다시 강화에서 모여 보다 확장된 관점으로 '소멸'을 이야기하고자 한다."
        ]
      }
    ],

    /* 참가자 — name 은 이름, aff 는 소속(작게 표시) */
    participants: {
      label: { ko: "참가자 · 2025년 9월 @강화도", en: "Participants · September 2025 @Ganghwa" },
      lines: [
        { name: "박지선, 송미선", aff: "프로듀서그룹도트" },
        { name: "강윤민지, 권근영, 민재원, 전윤환, 조냇물", aff: "앤드씨어터" },
        { name: "토토, 나래", aff: "희와래 · 연리목" },
        { name: "안나, 지오바니", aff: "테아트린 게스타치오네, 이탈리아" },
        { name: "헝루운", aff: "드라마박스, 싱가포르" },
        { name: "츄 쇼 엔", aff: "싱가포르" }
      ]
    },

    /* 오른쪽 미디어 격자 — 트레일러(span 4) */
    media: [
      { type: "video", span: 4,
        src: "https://www.youtube-nocookie.com/embed/fffQOEcYuRs",
        watch: "https://youtu.be/fffQOEcYuRs",
        thumb: "https://img.youtube.com/vi/fffQOEcYuRs/maxresdefault.jpg",
        caption: "2025 리서치 트레일러" }
    ],

    links: {
      label: { ko: "자료집 · 웹사이트", en: "Publication · Website" },
      items: [
        { ko: "2025 리서치 자료집", en: "2025 Research Publication",
          url: "https://drive.google.com/file/d/1W1GN-JpnbSK6YQOm3evwzBSLu5SEGPOi/view" },
        { ko: "프로젝트 웹사이트", en: "Project Website",
          url: "http://hexagon-island.com/index.html" }
      ]
    },

    /* 사진 — { src, span? }. span 을 붙이면 오른쪽 격자에도 크게 나옵니다.
       span 이 붙은 5장(1 · 2 · 3 · 4 · 15)이 오른쪽 격자에 그 순서대로 들어가고,
       20장 전부는 아래 '사진' 슬라이드에서 볼 수 있습니다.                   */
    photos: {
      label: { ko: "사진", en: "Photographs" },
      dir: "img/photos/ganghwa/",
      items: [
        { src: "ganghwa-01.jpg", span: 4 },
        { src: "ganghwa-02.jpg", span: 2 },
        { src: "ganghwa-03.jpg", span: 2 },
        { src: "ganghwa-04.jpg", span: 1 },
        { src: "ganghwa-05.jpg" },
        { src: "ganghwa-06.jpg" },
        { src: "ganghwa-07.jpg" },
        { src: "ganghwa-08.jpg" },
        { src: "ganghwa-09.jpg" },
        { src: "ganghwa-10.jpg" },
        { src: "ganghwa-11.jpg" },
        { src: "ganghwa-12.jpg" },
        { src: "ganghwa-13.jpg" },
        { src: "ganghwa-14.jpg" },
        { src: "ganghwa-15.jpg", span: 1 },
        { src: "ganghwa-16.jpg" },
        { src: "ganghwa-17.jpg" },
        { src: "ganghwa-18.jpg" },
        { src: "ganghwa-19.jpg" },
        { src: "ganghwa-20.jpg" }
      ]
    },

    /* 태그 — data/tags.js 의 태그와 같은 이름이면 '질문으로 보기'로 이어집니다 */
    tags: ["경계와공존", "기후위기", "지역과공동체", "국제협력", "이동성", "과정중심"]
  }
};
