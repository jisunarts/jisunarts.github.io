/* ==========================================================================
   data/now.js — 지금(Now) : 진행 중이거나 최근에 이어가고 있는 일

   각 항목: { category, title_ko, title_en, year, role,
              artist(공연), partner(협력), cover(선택), tags,
              page(사이트 안 페이지) / url(외부 링크), detail(보관용) }

   · category 는 "공연" 또는 "프로젝트". 페이지가 이 값으로 두 묶음을 나눕니다.
   · order 는 묶음 안에서의 표시 순서입니다 (작은 수가 위).
     항목을 더할 때 order 만 정해 주면 자리가 흔들리지 않습니다.
   · page 나 url 이 없으면 카드에 링크가 걸리지 않습니다.
   · detail 은 지금 화면에 쓰이지 않는 보관용입니다.
     (강화도·sync 상세 페이지에 실제로 나오는 내용은 data/projects.js 에 있습니다.)
   ========================================================================== */

const NOW = [

  /* ───────────────────────── 공연 ───────────────────────── */

  {
    category: "공연",
    id: "sync-de-sync",
    order: 3,
    title_ko: "sync de sync 싱크 디 싱크",
    title_en: "sync de sync",
    year: "2025–2026",
    artist: "황수현 컨셉·안무",
    role: "크리에이티브 프로듀서",
    cover: "img/works/sync-poster-2026.png",
    page: "projects/sync-de-sync.html",
    detail: {
      photoCredit: "Jisun",
      runs: [
        "2025.8.14–16 · 7:00pm · TINC (This is Not A Church)",
        "2026.7.16–19 · 7:30pm · TINC (This is Not A Church)"
      ],
      running: "60분",
      description: "《sync de sync》는 조율되고 틀어지는 순간, 완전한 일치도 완전한 분리도 아닌 상태에서 작동하는 감각들을 따라간다. 말은 입술과 성대를 지나 소리와 진동으로 흩어지고, 움직임은 형태보다 몸을 통과한 파동과 질감으로 번진다. 빛과 어둠, 온도와 공기, 무대 안팎의 보이는 것들과 보이지 않는 것들은 서로 겹치고 스며들며 감각의 얽힘을 만든다. 그 얽힘은 공간의 밀도, 온도와 습도, 기운의 변화를 몸에 닿게 한다. 《sync de sync》는 고정되지 않는 주변 환경에 반응하며, 현재의 감각 안에 이미 도착한 변화를 더듬는다.",
      artistNote: "황수현은 춤을 통해 몸이 세계와 관계 맺는 감각의 조건을 탐구한다. 그는 춤을 보여지는 형식이 아니라, 몸과 몸, 몸과 공간, 보이지 않는 것 사이에서 발생하는 경험의 구조로 다룬다. 호흡, 구음, 진동, 어둠, 미세한 운동감각과 같은 비가시적 요소를 주요한 재료로 안무한다. 《검정감각》, 《음------》, 《카베에》, 《Zzz》 등을 거치며 보는 중심의 관람을 흔들고, 서로 다른 몸들이 함께 감각하는 '공동'의 상태를 탐구해왔다. 최근에는 이러한 감각 경험을 가능하게 해온 방식이 고정된 구조로 굳어지는 순간을 경계하며, 몸이 환경과 새롭게 관계 맺을 수 있도록 안무를 다시 실험하고 있다.",
      credits: [
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
      ],
      support: "후원 서울특별시, 서울문화재단 · 2026년 서울문화재단 예술창작활동지원(다년) 선정 프로젝트",
      links: [
        { label: "프로그램북 →", url: "http://soohyunhwang.com/syncdesync/" },
        { label: "웹 포토북 →", url: "https://jisunarts.github.io/syncdesync_photo" }
      ],
      media: [
        { src: "img/works/sync-poster-2026.png", span: 2, caption: "포스터 2026" },
        { src: "img/works/sync-poster-2025.png", span: 2, caption: "포스터 2025" }
      ]
    }
  },



  {
    category: "공연",
    id: "not-the-end-of-the-world",
    order: 2,
    title_ko: "세상의 종말이 (아닌)",
    title_en: "(Not) the End of the World",
    year: "2026",
    artist: "크리스 부시 작 · 전윤환 연출 · 앤드씨어터",
    role: "드라마투르그",
    cover: "img/works/not-the-end/not-the-end-poster.jpg",
    page: "projects/not-the-end-of-the-world.html",
    tags: ["climate-justice"],
    detail: {
      photoCredit: "",
      runs: [
        "프리뷰 · 2026.7.31(금)–8.1(토) 15:00 · 없는극장 (강화군 길상면 해안남로 627, 1층)",
        "본공연 · 2026.8.6(목)–8.9(일) · 평일 19:30 / 주말 15:00 · 연희예술극장"
      ],
      description: "세상의 끝, 혹은 끝나지 않은 세상.\n\n기후 변화 연구자 '안나'는 저명한 기후과학자 우타 오버도르프 교수가 이끄는 한 대학의 기후연구소에서, 자신의 인생이 걸린 박사 후 연구원 면접을 치른다. 면접은 아주 작은 말과 행동의 차이 속에서 반복되고 되감긴다. 우타 교수는 안나의 연구에 냉담한 태도를 보이기도 하고, 깊은 관심을 드러내기도 한다. 두 사람은 과학과 정의, 특권과 희생, 그리고 기후위기를 둘러싼 책임에 관해 충돌한다.\n\n또 다른 시간대에서 안나는 서로 다른 모습으로 나타나는 '릴리'들과 마주한다. 북극 탐사에서 한 여성이 죽었고, 안나는 그 죽음을 둘러싼 질문과 조사를 받는다. 그보다 더 먼 미래에는 '레나'가 죽은 어머니를 위한 추도사를 낭독한다. 한 사람의 삶과 죽음에 관한 이야기는 점차 인류의 역사와 우리가 살아가는 지구를 위한 애도의 언어로 확장된다.\n\n이야기의 틈 사이로 분홍색 눈과 굶주린 곰, 8만 년 된 나무 군락과 끝없이 추출되는 석유, 사라진 생명과 아직 남아 있는 가능성들이 모습을 드러낸다. 〈세상의 종말이 (아닌)〉은 '세계의 종말'을 이야기하면서 동시에 '종말이 아닌 것'을 이야기한다. 우리가 매일 맞이하는 사소한 끝들, 그리고 여전히 끝나지 않은 삶의 가능성들을.",
      writerNote: "크리스 부시(Chris Bush)는 올리비에 상을 수상한 영국의 극작가이자 작사가, 각본가이다. 날카로운 사회적 시선과 실험적인 형식으로 주목받아 왔으며, The Stage 선정 '영국 연극계에서 가장 영향력 있는 100인'에 두 차례 이름을 올렸다. 주요 작품으로 《Standing at the Sky's Edge》, 《The Assassination of Katie Hopkins》, 《Faustus: That Damned Woman》, 《Hungry》, 《Otherland》 등이 있으며, 《(Kein) Weltuntergang》은 독일 샤우뷔네에서 초연되었다. 수전 스미스 블랙번 상 후보에 올랐으며, 영국 연극상, 사우스 뱅크 스카이 아츠 상 등 다수의 상을 수상했다. 단편영화 《MARS》는 런던 및 트라이베카 영화제에 공식 초청되었다.",
      producerNote: "앤드씨어터는 다큐멘터리 연극의 동시대성을 인식하며 실재를 매개하기 위한 다양한 연극방법론을 고민해 왔다. 또한 극장과 극장 밖 사이의 장력을 탐구하며 동시대 연극의 가능성에 대한 질문을 이어 나가고 있다. 현재는 인천에서 강화도까지 지역 예술의 방식을 탐색하고 있다. 이는 제도권 바깥으로 이탈하는 것이 아니라, 제도권 너머의 또 다른 작업 언어를 만드는 방식이라 할 수 있다.",
      credits: [
        ["작", "크리스 부시 (Chris Bush)"],
        ["번역", "Kim Alyssa"],
        ["연출", "전윤환"],
        ["드라마투르그", "박지선"],
        ["출연", "강윤민지, 박혜영, 다은"],
        ["프로듀서", "권근영"],
        ["프로듀서보", "이유정"],
        ["무대", "송지인"],
        ["조명", "공연화"],
        ["사운드", "최영두"],
        ["무대감독", "민재원"],
        ["그래픽·사진", "김솔"],
        ["티켓매니저", "김현주"]
      ],
      support: "주최·주관 앤드씨어터 · 후원 한국문화예술위원회 공연예술창작주체지원사업",
      photos: {
        dir: "img/works/not-the-end/",
        items: [
          { src: "not-the-end-poster.jpg", w: 1400, h: 1749, span: 4 }
        ]
      },
      media: []
    }
  },

  {
    category: "공연",
    id: "hihihistory",
    order: 1,
    title_ko: "히히히스토리",
    title_en: "hihihistory",
    year: "2026",
    artist: "황수현 컨셉·안무·출연",
    role: "크리에이티브 프로듀서",
    cover: "img/works/hihihistory/hihihistory-poster.jpg",
    page: "projects/hihihistory.html",
    detail: {
      photoCredit: "",
      runs: [
        "2026.10.15(목) 19:30 / 10.16(금) 19:30 / 10.17(토) 15:00 · 대학로예술극장 소극장"
      ],
      running: "50분",
      note: "2026년 서울국제공연예술제(SPAF) 협력 아티스트 초청 공연",
      summary: "헛웃음처럼 새어 나오는 감각의 균열을 어긋난 몸으로 호출하는 1인 라이브 퍼포먼스",
      description: "〈히히히스토리〉는 움직임과 소리, 말을 다루는 1인 라이브 퍼포먼스다. 무대 위 '황수현'은 말하고, 춤추고, 노래하지만 결코 하나의 인물이나 완결된 서사로 고정되지 않는다. 말은 고백처럼 시작되지만 설명으로 닫히지 않고, 춤은 이미지로 완성되지 않으며, 노래는 안정된 리듬에 도달하지 않는다. 분명한 형태로 향하지 않고 서로 다른 방향으로 미끄러지는 이 행위들은 기존의 질서 안에서 매끄럽게 설명되지 않는 감각의 상태를 집요하게 따라간다.\n\n제목의 \"히히히\"는 진지한 말이 완전히 믿어지지 않을 때 새어 나오는 헛웃음이자, 무언가 스며 나오는 스산한 기척의 소리다. 이 정체 모를 소리는 공연의 표면에 작은 균열을 내고 흐름을 예기치 못한 방향으로 비틀어버린다.\n\n그 과정에서 뒤섞이는 질감과 리듬, 파동은 관객을 익숙하지 않은 감각의 서사로 이끈다. 작품은 그렇게 아직 이름 붙지 않은 감각의 자리를 탐색하며, 매끄러운 미래가 지워버린 감각을 어긋난 몸으로 다시 호출한다.",
      artistNote: "황수현은 춤을 매개로 신체 경험의 잠재성을 확장해 온 안무가다. 춤을 단순히 시각적으로 보여지는 형식을 넘어 몸과 몸, 몸과 공간, 그리고 눈에 보이지 않는 것들 사이에 발생하는 '경험의 구조'로 다룬다. 주로 호흡과 구음, 진동, 어둠, 미세한 운동감각 같은 비가시적 요소들을 안무의 핵심 재료로 삼는다. 〈검정감각〉, 〈음———〉, 〈카베에〉, 〈Zzz〉 등의 작품을 통해 시각 중심의 관람 방식을 전복하고, 서로 다른 몸들이 극장이라는 공간 안에서 함께 감각하는 '공동의 상태'를 탐구해왔다. 최근에는 이러한 감각적 경험을 가능하게 했던 방식들이 하나의 고정된 틀로 굳어지는 것을 경계하며, 몸이 환경과 또 다른 방식으로 관계 맺을 수 있는 새로운 안무적 실험을 이어가고 있다.\n\n주요 작품으로 〈세계〉(2026), 〈sync de sync〉(2025), 〈Zzz〉(2023), 〈카베에〉(2023) 등이 있으며, 〈음 ━—━〉으로 제27회 무용예술상 안무상(2021)을 수상하고 문화체육관광부장관 표창(2020)을 받았다. 또한 〈검정감각〉을 통해 한국춤비평가협회 '2019 베스트 작품상'을 수상했다.",
      credits: [
        ["컨셉·안무·출연", "황수현"],
        ["크리에이티브 프로듀서", "박지선"],
        ["리허설 어시스턴트", "강호정"],
        ["음악", "김현수"],
        ["조명", "공연화"],
        ["사운드", "우경민, 천준하"],
        ["무대감독", "이율, 김민수"]
      ],
      photos: {
        dir: "img/works/hihihistory/",
        items: [
          { src: "hihihistory-poster.jpg", w: 1349, h: 1900, span: 4 }
        ]
      },
      media: []
    }
  },

  /* ───────────────────────── 프로젝트 ───────────────────────── */

  {
    category: "프로젝트",
    id: "app",
    order: 4,
    title_ko: "아시아 프로듀서 플랫폼 (APP)",
    title_en: "Asian Producers' Platform",
    year: "2014–",
    role: "공동 창립 · 기획팀",
    partner: "아시아 독립 프로듀서 네트워크",
    cover: "img/works/app/01.jpg",
    page: "projects/app.html",
    summary: "아시아에서 일하는 독립 프로듀서들이 동료로서 서로를 잇기 위해 만든 수평적 네트워크.",
    tags: ["international", "asian-solidarity", "mobility", "independent", "horizontal", "institutions"],
    /* 상세 내용은 data/projects.js 의 app 에 있습니다 */
    detail: { photoCredit: "" }
  },

  {
    category: "프로젝트",
    id: "ganghwa",
    order: 1,
    title_ko: "⬡⬡의 섬 : 강화도",
    title_en: "Island of ⬡⬡ : Ganghwa",
    year: "2025–2026",
    role: "기획·프로듀서",
    partner: "앤드씨어터 × 프로듀서그룹도트 × 강화유니버스",
    cover: "img/photos/ganghwa/ganghwa-01.jpg",
    page: "projects/ganghwa.html",
    tags: ["borders-coexistence", "climate-crisis", "region-community", "international", "mobility", "festival", "multidisciplinary", "civic", "process"],
    /* 상세 내용은 강화도 상세 페이지(data/projects.js)에 있습니다 */
    detail: { photoCredit: "Jisun" }
  },

  {
    category: "프로젝트",
    id: "dance-techlab",
    order: 2,
    title_ko: "무용 × 기술 창작 랩",
    title_en: "Dance × Technology Creative Lab",
    year: "2021–",
    role: "총괄 기획",
    partner: "국립현대무용단 공동 기획",
    cover: "img/works/dance-techlab/01.jpg",
    page: "projects/dance-techlab.html",
    tags: ["tech-society", "posthuman", "ai", "creative-friction", "borders-coexistence", "process"],
    detail: {
      photoCredit: "2025 무용기술 오픈위크 · 사진 제공 국립현대무용단",
      description: "〈무용 × 기술 창작랩〉은 2021년부터 이어온 무용과 기술의 실험적 교류의 장이다. 기술을 창작의 '도구'로만 다루는 관점의 한계에서 출발해, 안무가와 기술 연구자·개발자·작가가 서로의 언어와 매체, 실행 방법론을 익히며 협업하는 프로젝트로, '질문이 증발된 실험에 빠지지 않는 것'을 중요한 원칙으로 한다.\n\n2021년에는 신체성의 확장과 탈피, 사회적 거리두기 이후 무용의 감각적 경험, 안무 창작의 주체성을 다뤘다. 2022년부터는 '포스트휴먼 & 포스트휴머니즘'을 주제로 삼아 참여자들이 다양한 질문을 생성하고 이를 예술적 실험으로 확장하는 과정을 이어오고 있다. 강의와 워크숍, 팀별 연구와 실험을 결합한 과정 중심 프로그램으로, 인공지능·로봇·가상현실·포스트휴먼 바디 등 동시대적 주제를 통해 예술과 기술의 관계를 새롭게 모색하고 있으며 2025년에는 참여 예술가들이 도출한 8개의 프로토타입을 발표했다.\n\n2026년 창작랩은 인공지능과 데이터가 창작의 도구를 넘어 자율적 주체(Agent)로 진화하는 시대에 예술가가 던져야 할 근본적인 질문에서 출발한다. 지난 4년 동안 '포스트휴먼 & 포스트휴머니즘'이라는 주제 아래 인간·동물·식물·기계가 공존하는 세상의 경계를 해제하는 탐구를 지속해 왔다면, 2026년에는 그 무경계의 땅 위에서 다시 '인간'의 미래를 질문하고자 한다. 인공지능은 콘텐츠를 생성하는 수준을 넘어 스스로 계획하고 도구를 사용하며 문제를 해결하는 '에이전틱 AI'로 발전했고, 현실 세계에서 직접 임무를 수행하는 '피지컬 AI'까지 등장했다. 알고리즘 기반의 데이터와 물리적 해결 능력을 갖춘 기술 환경 속에서 '인간은 어떻게 공존해야 하는가'는 우리가 직면한 지속적인 질문이다. 2026 창작랩은 기술과 신체의 윤리적 공존을 깊이 있게 탐구한다.\n\n안무가, 기술 언어를 보유한 테크니션, 연구자, 프로듀서들은 5월·8월·10월에 걸친 3단계의 랩을 통해 질문을 생성하고, 실험을 거쳐 프로토타입을 제작한다.",
      links: [
        { label: "자료집 2021–22 →", url: "documents.html" },
        { label: "자료집 2023 →", url: "documents.html" },
        { label: "자료집 2024 →", url: "documents.html" }
      ],
      media: []
    }
  },

  {
    category: "프로젝트",
    id: "climate-residency",
    order: 7,
    title_ko: "예술텃밭 예술가 레지던시 — 기후변화",
    title_en: "Arts Farm Tutbat Artist Residency — Climate Change",
    year: "2020–2022",
    role: "공동 기획",
    partner: "예술텃밭 Arts Farm Tutbat × 프로듀서그룹 도트",
    cover: "img/works/climate-residency/2021/08.jpg",
    page: "projects/climate-residency.html",
    summary: "기후변화라는 거대 담론을 삶 속에 구체화하고 예술적 실천으로 옮기는 예술가 레지던시.",
    tags: ["climate-crisis", "region-community", "independent", "horizontal", "process"],
    /* 상세 내용은 data/projects.js 의 climate-residency 에 있습니다 */
    detail: { photoCredit: "사진 제공 예술텃밭 기후변화 레지던시" }
  },

  {
    category: "프로젝트",
    id: "tnn",
    order: 3,
    title_ko: "TNN — The Next Normal",
    title_en: "TNN — The Next Normal",
    year: "2024–",
    role: "기획 · 아시아 네트워크",
    cover: "img/works/TNN/01.jpg",
    page: "projects/tnn.html",
    tags: ["international", "asian-solidarity", "climate-crisis", "creative-friction", "borders-coexistence"],
    detail: {
      photoCredit: "사진 제공 한국문화예술위원회",
      summary: "지금과 미래를 위한 예술가들의 질문과 실천 — '정상(Normal)'의 의미를 다시 생각하다",
      description: "'정상'이란 무엇일까. 그 답은 결코 고정된 적이 없다. 19세기에는 오직 백인 남성의 투표권만이 '정상'이었다. 20세기와 21세기를 거치며 그 경계는 젠더, 인종, 신체적 능력을 넘어 인간과 비인간의 영역으로 끊임없이 확장되고 변화해 왔다.\n\n오늘날 우리는 이 질문을 다시 던져야 한다. 우리가 자원을 소비하고 접근하는 방식에서 당연하게 여겨온 '정상'이라는 가정들은 이제 전 지구적 위기의 원인이 되었다. 한때 인류가 가졌던 확신, 즉 지구의 자원을 마음껏 쓸 수 있다는 '당연한 권리'는 역설적으로 생존을 위협하고 변화에 대한 적응을 늦추는 족쇄가 되었다.\n\n더 넥스트 노멀(TNN)은 질문한다. \"예술은 어떻게 '정상'이라 여겨지는 것의 경계를 재설정할 수 있을까?\" 우리는 익숙한 것들을 재검토하고, 사회적·생태적·윤리적으로 새로운 형태의 정상성을 상상해야 한다. 이 프로젝트는 기후위기, 평등, 다양성, 창조적 마찰, 디아스포라, 포스트휴머니즘 등 시급한 동시대 의제에 주목하며, 예술가들에게 현재에서 미래로 우리를 이끌어 줄 새로운 규범을 제안하고 상상할 것을 요청한다.\n\nTNN은 아시아가 당면한 시급한 의제들을 예술의 언어로 해석하여 지역 내 담론을 활성화하는 것을 목표로 한다. 특히 아시아 각지의 레지던시를 발굴하고 연결하여, 예술가들이 그곳에 머물며 인간과 자연, 문화와 예술에 깊이 접속할 수 있도록 돕고자 한다. 이는 예술가의 이동성을 확장하는 것을 넘어 관계의 밀도를 높이는 새로운 차원의 예술 협업 및 지식 공유 모델이 될 것이다.\n\n2024년부터 시작했으며, 2026년 2월 서울에서 '다이얼로그 인 아시아(DIA)' 포럼을 통해 그 여정의 시작을 알렸다. 한국을 비롯해 뉴질랜드, 대만, 말레이시아, 인도네시아, 일본, 태국, 호주, 홍콩 등 9개 지역 파트너가 함께한 포럼은 아시아의 다양한 담론과 새로운 협력 방식을 펼쳐내는 장이 되었다.",
      links: [
        { label: "thenextnormalasia.com →", url: "https://thenextnormalasia.com/" },
        { label: "포럼 영상 →", url: "https://youtu.be/sbUxGuR3LCA" }
      ],
      media: []
    }
  },

  {
    category: "프로젝트",
    id: "asian-eyes",
    order: 5,
    title_ko: "아시아의 입과 눈",
    title_en: "With Asian Eyes, Through Asian Mouths",
    year: "2025–2027",
    role: "에코 드라마투르그",
    partner: "앤드씨어터",
    cover: "img/works/asian-eyes/01.jpg",
    summary: "태국 메솟 · 치앙마이에서 미얀마 사람들의 목소리를 담는 리서치. 2025–2026 진행 중.",
    tags: ["climate-justice", "asian-solidarity", "mobility", "climate-crisis"],
    detail: {
      photoCredit: "",
      photos: {
        dir: "img/works/asian-eyes/",
        items: [
          { src: "01.jpg", w: 1026, h: 714, span: 4 }
        ]
      },
      media: [] }
  },

  {
    category: "프로젝트",
    id: "aesthethics",
    order: 6,
    title_ko: "Aesth:ethics",
    title_en: "Aesth:ethics — Exploring Global Codes, Artificial Intelligence, and Performing Arts",
    year: "2024–",
    role: { ko: "기획", en: "Concept & Planning" },
    partner: "Academy for Theatre and Digitality (Dortmund) × 프로듀서그룹 도트 (서울)",
    cover: "img/works/aesthethics.jpg",
    url: "",
    tags: ["ai", "tech-society", "international", "institutions", "creative-friction", "mobility"],
    detail: {
      photoCredit: "",
      description: "도르트문트 연극 및 디지털리티 아카데미와 프로듀서그룹 도트의 공동 협력 프로젝트다. 2026년은 리서치 해이다.\n\n'Aesth:ethics'의 첫 단계에서는 협력을 위한 로드맵을 설계하고, 향후 선보일 연극 공연 프로그램의 구체적인 컨셉을 개발할 예정이다. 이 프로그램은 글로벌 기술 혁신 영역, 특히 인공지능의 활용과 그에 따른 윤리적 시사점들이 던지는 시급한 사회적 질문들을 다룬다.\n\n인공지능의 급격한 발전은 권력과 민주주의, 전쟁과 감시, 로봇 공학과 생명 공학에 대한 질문을 야기하며, 이는 오늘날 예술·사회·과학계 전반의 글로벌 거대 담론으로 부상하고 있다. 이러한 질문들은 미학적 혁신, 예술적·기술적 연구개발, 그리고 사회적 책임감을 결합하는 예술 제작의 출발점이 된다.\n\n공동의 로드맵과 프로젝트 컨셉은 두 차례의 현지 대면 컨셉 워크숍을 통해 구체화된다. 1차 워크숍은 2026년 5월 3–9일 도르트문트에서, 2차 워크숍은 2026년 9월 말 서울에서 진행된다. 각 도시에서는 ⑴ 크리에이티브 코딩 및 공연예술 ⑵ 과학 및 시민사회 ⑶ 연극 프로듀싱 및 지속가능성 분야의 지역·국가 전문가들을 초청해 자문을 구하고, 다른 문화적 배경을 가진 상대 국가의 동일 분야 전문가들을 온라인으로 연결해 다각도의 논의를 펼친다. 워크숍 이외의 실무 회의는 온라인으로 진행된다.\n\n공연예술·시민사회·과학·지속가능성 분야의 지역 전문가들을 컨셉 개발 단계부터 적극적으로 참여시킴으로써, 양측의 파트너십을 위한 단단한 기초를 다지는 동시에 예술적 탁월함과 지속 가능한 실천이 구체적인 사회적 영향력으로 이어질 수 있는 공명의 장을 마련하고자 한다.",
      links: [
        { label: "theater.digital →", url: "https://theater.digital/en/" }
      ],
      photos: {
        dir: "img/works/",
        items: [
          { src: "aesthethics.jpg", w: 1400, h: 1744, span: 2 }
        ]
      },
      media: [
        { src: "img/works/aesthethics.jpg", span: 2, w: 1400, h: 1744 }
      ]
    }
  }

];
