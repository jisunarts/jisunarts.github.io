/* ==========================================================================
   data/projects.js — 개별 프로젝트 페이지의 내용
   projects/{slug}.html 이 <body data-project="slug"> 로 이 안의 항목을 찾습니다.
   새 프로젝트를 더하려면 이 파일에 항목을 추가하고
   projects/ 폴더에 같은 모양의 html 한 장을 복사해 slug 만 바꾸면 됩니다.

   · 이미지 경로는 사이트 최상단 기준으로 씁니다 (예: img/photos/ganghwa/…)
   · sections 의 각 문단은 그대로 한 문단이 됩니다.

   · 역할명 영문 기준 (curator·curating 은 쓰지 않습니다 — 시각예술 용어)
       Programming — 여러 작업·작가를 골라 프로그램을 구성하는 일
       Producing   — 하나의 작업을 실현시키는 일
       Planning    — 아직 없는 것을 설계하는 단계
     · 기획·행정 = Planning & Producing (행정은 제작 일에 포함되는 것으로 봅니다)
     · 인명 로마자는 성+이름 붙여쓰기가 기본이지만, 본인이 쓰는 표기가 따로 있으면
       그쪽을 따릅니다 (예: 앨리사 김 = Alyssa Kim — 이름+성, 규칙 예외)

   · 데이터는 렌더 코드(js/project.js)가 이미 아는 키로만 넣습니다.
     새 키를 만들면 렌더 코드를 함께 고쳐야 하고, 그 페이지만 구조가 달라집니다.
     (sections2 · lead · source 로 같은 실수를 세 번 했습니다.)
   ========================================================================== */

const PROJECTS = {

  /* ── 아시아 프로듀서 플랫폼 (APP) ─────────────────────────────────── */

  app: {
    eyebrow: { ko: "프로젝트 · 2014– · 아시아 독립 프로듀서 네트워크", en: "Project · 2014– · A network of independent producers across Asia" },
    title: { ko: "아시아 프로듀서 플랫폼 (APP)", en: "Asian Producers' Platform (APP)" },
    credit: "Asian Producers' Platform",
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 공동 창립 · 기획팀", en: "Park Jisun — Co-founder, Planning Team" } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "소개", en: "About" },
        paras: [
          { ko: "아시아에서 일하는 독립 프로듀서들이 동료로서 서로를 잇기 위해 만든 네트워크.", en: "A network built by independent producers working across Asia to connect with one another as colleagues." },
          { ko: "아시아 프로듀서 플랫폼(APP)은 아시아 각지에서 활동하는 소수의 독립 프로듀서들이 만든 동료 간 네트워크다. 아시아 지역을 가로질러 협업할 수 있는 프로듀서들의 촘촘한 연결망을 만드는 것이 목표였다. 2014년부터 APP는 대표 프로그램인 APP 캠프를 매년 열어왔다.", en: "The Asian Producers' Platform (APP) is a peer network made by a small number of independent producers active across Asia. The aim was to build a close-knit web of producers able to collaborate across the region. Since 2014 APP has held its flagship programme, APP Camp, every year." },
          { ko: "APP 캠프는 참가자들이 업계 네트워크를 만들고, 프로듀싱을 하나의 창작 실천으로 탐구하며, 문화를 가로지르는 프로듀싱 기술을 익히고, 기존과는 다른 예술 리더십의 관점과 방법론을 길러내는 자리로 구상되었다.", en: "APP Camp was conceived as a place where participants build networks in the field, explore producing as a creative practice, learn the craft of producing across cultures, and cultivate the perspectives and methods of a different kind of artistic leadership." },
          { ko: "APP는 우정과 유기적 멘토십, 수평적 구조를 가장 중요한 원칙으로 삼는다.", en: "APP holds friendship, organic mentorship and horizontal structure as its most important principles." },
          { ko: "APP는 지금도 느슨한 구조를 유지한다. 아시아 각지의 APP 멤버들로 이루어진 자원 기획팀이 운영을 맡고, 어느 한 나라에 본부를 두지 않으며, 캠프는 매번 프로젝트 단위의 지원으로 꾸려진다.", en: "APP still keeps a loose structure. A volunteer programming team of APP members from across Asia runs it, it has no headquarters in any one country, and each camp is put together with project-based funding." }
          /* TODO — 여기에 박지선의 문단을 넣어 주세요.
             왜 이 네트워크가 필요했는지, 서구를 경유하지 않고 아시아끼리
             직접 연결된다는 것이 그때 무엇이었는지, 10년이 지난 지금 무엇이 남았는지. */
        ]
      },
      {
        label: { ko: "APP 캠프", en: "APP Camp" },
        paras: [
          { ko: "APP 캠프는 아시아 · 태평양에서 살고 일하는 공연예술 프로듀서들이 아시아의 여러 도시를 찾아가, 그곳의 문화적 맥락을 현지 실천가들에게 직접 배우는 프로그램이다. 2014년 이후 200명이 넘는 신진 · 중견 프로듀서가 말레이시아, 태국, 홍콩 · 웨강아오 대만구, 인도네시아, 호주, 대만, 일본, 한국에서 열린 집중 캠프를 거쳐 갔다. 현장 방문, 강연, 토론, 리서치, 공연 관람, 동료 간 교류로 짜인 프로그램을 통해 참가자들은 지역 예술 생태계를 이해하고, 예술가와 프로듀서가 놓인 사회적 · 정치적 · 문화적 지형을 함께 읽는다. 그리고 그 지역의 동료들과 만나고, 나누고, 먹는다.", en: "APP Camp brings performing arts producers living and working across Asia and the Pacific to cities around the region, where they learn the local cultural context directly from practitioners on the ground. Since 2014, more than 200 emerging and mid-career producers have passed through intensive camps in Malaysia, Thailand, Hong Kong and the Greater Bay Area, Indonesia, Australia, Taiwan, Japan and Korea. Through site visits, lectures, discussions, research, performances and peer exchange, participants come to understand local arts ecologies and read together the social, political and cultural terrain that artists and producers work within. And they meet, share and eat with colleagues in that place." }
        ]
      }
    ],

    /* 연혁 — 연도 · 개최지 두 열 */
    timeline: {
      label: { ko: "캠프 연혁", en: "Camp Editions" },
      rows: [
        { year: "2014", place: { ko: "한국 서울", en: "Seoul, Korea" } },
        { year: "2015", place: { ko: "대만 타이베이, 이란", en: "Taipei, Yilan, Taiwan" } },
        { year: "2016", place: { ko: "일본 도쿄, 시즈오카", en: "Tokyo, Shizuoka, Japan" } },
        { year: "2017", place: { ko: "호주 멜버른", en: "Melbourne, Australia" } },
        { year: "2018", place: { ko: "인도네시아 자카르타, 족자카르타", en: "Jakarta, Yogyakarta, Indonesia" } },
        { year: "2019", place: { ko: "홍콩, 광저우, 마카오", en: "Hong Kong, Guangzhou, Macao" } },
        { year: "2020–2022", place: { ko: "팬데믹으로 대면 캠프 중단, 온라인 리서치 진행", en: "In-person camps suspended during the pandemic; research continued online" } },
        { year: "2022", place: { ko: "VR3 — 아시아 프로듀서 플랫폼 온라인 포럼", en: "VR3 — Asian Producers' Platform Online Forum" } },
        { year: "2023", place: { ko: "태국 방콕, 치앙마이", en: "Bangkok, Chiang Mai, Thailand" } },
        { year: "2024", place: { ko: "말레이시아 쿠알라룸푸르, 페낭", en: "Kuala Lumpur, Penang, Malaysia" } },
        { year: "2025", place: { ko: "대만 타이둥, 일본 오키나와", en: "Taitung, Taiwan · Okinawa, Japan" } }
      
      
      ],
      note: { ko: "초기 네 번의 캠프(2014 · 2015 · 2016 · 2017)는 한국 · 대만 · 일본 · 호주의 민관 협력으로 운영되었고, APP 기획팀이 각 지역의 재단 · 기관 · 극장과 함께 제작했다. 2018년 APP는 더 유연한 모델로 전환해, 캠프를 아시아의 더 넓은 지역에서 열기 시작했다.", en: "The first four camps (2014, 2015, 2016, 2017) were run through public–private cooperation across Korea, Taiwan, Japan and Australia, produced by the APP programming team together with foundations, institutions and theatres in each region. In 2018 APP moved to a more flexible model and began holding camps across a wider part of Asia." }
    },


    /* 사진 — span 이 붙은 6장은 오른쪽 격자에, 나머지 4장은 슬라이드에만.
       caption 은 아직 비어 있습니다 (필요하면 각 줄에 caption: "…" 추가). */
    photos: {
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/app/",
      credit: "",
      items: [
        { src: "01.jpg", w: 1200, h: 890, span: 4 },
        { src: "02.jpg", w: 1200, h: 800, span: 2 },
        { src: "03.jpg", w: 1200, h: 800, span: 2 },
        { src: "04.jpg", w: 1200, h: 800, span: 1 },
        { src: "05.jpg", w: 1200, h: 800, span: 1 },
        { src: "06.jpg", w: 1200, h: 800, span: 2 },
        { src: "07.jpg", w: 1600, h: 1067 },
        { src: "08.jpg", w: 1600, h: 1067 },
        { src: "09.jpg", w: 593, h: 308 },
        { src: "10.jpg", w: 1280, h: 960 }
      ]
    },

    credits: {
      label: { ko: "창립과 협력", en: "Founding & Partners" },
      rows: [
        [{ ko: "호주", en: "Australia" }, "Performing Lines, Live Performance Australia"],
        [{ ko: "일본", en: "Japan" }, { ko: "국제교류기금(The Japan Foundation), ONPAM", en: "The Japan Foundation, ONPAM" }],
        [{ ko: "한국", en: "Korea" }, { ko: "더프로듀서추진단, 프로듀서그룹 도트, 한국문화예술위원회", en: "The Steering Committee for the Producer, Producer Group DOT, Arts Council Korea" }],
        [{ ko: "대만", en: "Taiwan" }, "National Culture & Arts Foundation, PAA"]
      ]
    },

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: "asianproducersplatform.com", en: "asianproducersplatform.com",
          url: "https://www.asianproducersplatform.com/about-app" },
        { ko: "인스타그램", en: "Instagram",
          url: "https://www.instagram.com/asianproducersplatform/" }
      ]
    },

    tags: ["international", "asian-solidarity", "mobility", "independent", "horizontal", "institutions"]
  },

  /* ── 예술텃밭 예술가 레지던시 — 기후변화 ──────────────────────────── */

  "climate-residency": {
    eyebrow: { ko: "프로젝트 · 2020–2022 · 화천 예술텃밭", en: "Project · 2020–2022 · Arts Farm Tutbat, Hwacheon" },
    title: { ko: "예술텃밭 예술가 레지던시 — 기후변화", en: "Arts Farm Tutbat Artist Residency — Climate Change" },
    credit: { ko: "예술텃밭 Arts Farm Tutbat × 프로듀서그룹 도트", en: "Arts Farm Tutbat × Producer Group DOT" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 공동 기획", en: "Park Jisun — Co-programming" } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "소개", en: "About" },
        paras: [
          { ko: "기후변화라는 거대 담론을 삶 속에 구체화하고 예술적 실천으로 옮기는 예술가 레지던시.", en: "An artist residency that grounds the vast discourse of climate change in daily life and turns it into artistic practice." },
          { ko: "예술텃밭 예술가 레지던시는 2020년 시작된 예술가들의 기후변화 대응 프로젝트다. 연극, 다원예술, 시각예술, 영화, 영상, 책 등 다양한 분야의 예술가와 기획자, 리서처들이 함께 기후변화에 대해 탐구하며, 막연한 거대 담론을 우리의 삶 속에 구체화하고 예술적 실천을 만들어내고자 한다.", en: "The Arts Farm Tutbat artist residency is a climate response project by artists, begun in 2020. Artists, programmers and researchers from many fields — theatre, multidisciplinary art, visual art, film, video, publishing — explore climate change together, seeking to bring an otherwise abstract discourse down into our lives and to make artistic practice from it." },
          { ko: "2020년 인류를 습격한 코로나 바이러스는 전 지구인의 삶을 변화시켰고, 우리는 여전히 불확실한 일상을 살아가고 있다. 많은 전문가들은 지구 온난화와 환경 문제가 코로나 바이러스 같은 신종 바이러스를 촉발시켰다고 이야기하며, 향후에도 또 다른 전염병 유행 확률이 높아질 것이라 예상한다. 기후변화는 지구와 인류의 지속가능성을 위한 시급한 문제다. 그리고 이것은 자연, 동물, 먹거리, 노동, 인권의 문제와도 연관된 복잡한 체계 안에 놓여 있다.", en: "The coronavirus that struck in 2020 changed lives across the planet, and we are still living an uncertain everyday. Many experts say that global warming and environmental damage triggered novel viruses such as this one, and expect the likelihood of further epidemics to rise. Climate change is an urgent question for the sustainability of the earth and of humankind — and it sits within a complex system bound up with nature, animals, food, labour and human rights." }
        ]
      },
      {
        label: { ko: "진행 방식", en: "How It Works" },
        paras: [
          { ko: "온라인과 오프라인 레지던시가 동시에 진행된다.", en: "The residency runs online and in person at the same time." },
          { ko: "참여 작가는 개별 리서치와 개별 작업을 진행하지만, 공동 리서치와 공유 시간을 통해 서로 정보와 지식, 영감을 나누며 협업한다.", en: "Participating artists pursue their own research and their own work, but collaborate through shared research and sharing sessions, exchanging information, knowledge and inspiration." },
          { ko: "기후변화에 대한 지역적 관점과 전 지구적 관점을 동시에 갖는다.", en: "It holds a local and a planetary view of climate change at once." }
        ]
      },
      {
        label: { ko: "이어진 작업", en: "Works That Followed" },
        /* works 는 제목 바로 아래에 링크가 붙습니다 */
        works: [
          { title: { ko: "2022 · 무제의 길 〈움직이는 숲〉 — 서울국제공연예술제 초청작", en: "2022 · Untitled Road, *Moving a Forest* — invited to the Seoul Performing Arts Festival" },
            link: { label: { ko: "무제의 길 〈움직이는 숲〉", en: "Untitled Road 〈Moving a Forest〉" },
                    url: "https://www.untitledroad.com/projects/moving-a-forest_theatre-game" } },
          { title: { ko: "2023 · 지연 X 전환 〈에너지_보이지 않는 언어〉 — 서울국제공연예술제 초청작", en: "2023 · Delay X Shift, *Energy: The Invisible Language* — invited to the Seoul Performing Arts Festival" },
            link: { label: { ko: "공연 영상", en: "Performance video" }, url: "https://youtu.be/arl9qntbhXc" } }
        ],
        paras: [
          { ko: "예술텃밭 기후변화 레지던시는 2022년 이후에도 매해 예술가들과 텃밭을 가꾸고 리서치를 하며 비정기적으로 모임을 지속하고 있다. 현재 다음 단계의 국제 레지던시로 확장하기 위한 논의를 진행하고 있다.", en: "Since 2022 the Arts Farm Tutbat climate change residency has continued to meet irregularly each year, tending the garden and carrying out research with artists. Discussions are now under way to expand it into an international residency at the next stage." }
        ]
      }
    ],

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        /* 배요섭·이주야·최봉민 로마자는 도트 저장소(data/works.json · producers.json)의
           표기를 따랐습니다. 규칙(성+이름 붙여쓰기)으로 지은 잠정 표기가 아닙니다. */
        [{ ko: "주관, 기획", en: "Organised & Programmed by" },
         { ko: "예술텃밭(배요섭, 이주야), 프로듀서그룹 도트(박지선, 최봉민)",
           en: "Arts Farm Tutbat (Bae Yosup, Lee Juya), Producer Group DOT (Park Jisun, Choi Bongmin)" }],
        [{ ko: "후원", en: "Supported by" },
         { ko: "강원도, 강원문화재단", en: "Gangwon Province, Gangwon Art & Culture Foundation" }]
      ]
    },

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: "프로젝트 웹사이트", en: "Project website", url: "http://artstutbatclimatechange.com/?page_id=669" },
        { ko: "자료집 3종 보기", en: "3 publications", url: "documents.html#climate-residency" },
        { ko: "인스타그램", en: "Instagram", url: "https://www.instagram.com/tutbatclimatechange/" }
      ]
    },

    /* 오른쪽 60% — 해마다 한 블록 (영상 → 사진 5장 → 그 해 전체 슬라이드) */
    editions: [
      {
        year: "2020", title: { ko: "기후변화 2020 — 화천의 환경을 둘러싼 강연과 대화", en: "Climate Change 2020 — Talks on environment in Hwacheon" },
        video: "4JJyId1JZMY",
        dir: "img/works/climate-residency/2020/", total: 14,
        grid: [
          { src: "12.jpg", span: 2 }, { src: "08.jpg", span: 2 },
          { src: "03.jpg", span: 1 }, { src: "11.jpg", span: 1 }, { src: "14.jpg", span: 2 }
        ]
      },
      {
        year: "2021", title: { ko: "관점의 전환, 세상을 보는 시선들", en: "Change of perspective, points of view looking at the world" },
        video: "oz65z1gxYbc",
        dir: "img/works/climate-residency/2021/", total: 24,
        grid: [
          { src: "08.jpg", span: 2 }, { src: "12.jpg", span: 2 },
          { src: "04.jpg", span: 1 }, { src: "16.jpg", span: 1 }, { src: "13.jpg", span: 2 }
        ]
      },
      {
        year: "2022", title: { ko: "기후변화 2022 — 기후위기와 에너지", en: "Climate Change 2022 — Climate Crisis and Energy" },
        video: "RVg2Oe2gHPc",
        dir: "img/works/climate-residency/2022/", total: 20,
        grid: [
          { src: "08.jpg", span: 2 }, { src: "11.jpg", span: 2 },
          { src: "01.jpg", span: 1 }, { src: "03.jpg", span: 1 }, { src: "05.jpg", span: 2 }
        ]
      }
    ],

    photos: { credit: { ko: "사진 제공 예술텃밭 기후변화 레지던시", en: "Photographs courtesy of the Arts Farm Tutbat Climate Change Residency" } },

    tags: ["climate-crisis", "region-community", "independent", "horizontal", "process"]
  },

  /* ── 히히히스토리 ──────────────────────────────────────────────────── */

  hihihistory: {
    eyebrow: { ko: "공연 · 2026 · 대학로예술극장 소극장", en: "Performance · 2026 · Daehakro Arts Theatre, Small Hall" },
    title: { ko: "히히히스토리", en: "hihihistory" },
    credit: { ko: "황수현 컨셉·안무·출연", en: "Concept, choreography and performance by Hwang Soohyun" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 크리에이티브 프로듀서", en: "Park Jisun — Creative Producer" } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    runs: {
      label: { ko: "일정", en: "Schedule" },
      rows: [
        { dates: { ko: "2026.10.15(목)", en: "Thu 15 Oct 2026" }, time: "19:30", venue: { ko: "대학로예술극장 소극장", en: "Daehakro Arts Theatre, Small Hall" } },
        { dates: { ko: "2026.10.16(금)", en: "Fri 16 Oct 2026" }, time: "19:30", venue: { ko: "대학로예술극장 소극장", en: "Daehakro Arts Theatre, Small Hall" } },
        { dates: { ko: "2026.10.17(토)", en: "Sat 17 Oct 2026" }, time: "15:00", venue: { ko: "대학로예술극장 소극장", en: "Daehakro Arts Theatre, Small Hall" } }
      ],
      note: { ko: "러닝타임 50분 · 2026년 서울국제공연예술제(SPAF) 협력 아티스트 초청 공연", en: "Running time 50 minutes · Presented as an Associate Artist invitation at the Seoul Performing Arts Festival (SPAF) 2026" }
    },

    sections: [
      {
        label: { ko: "작품 소개", en: "About the Work" },
        paras: [
          { ko: "헛웃음처럼 새어 나오는 감각의 균열을 어긋난 몸으로 호출하는 1인 라이브 퍼포먼스", en: "A solo live performance that summons, through a body out of joint, the fissures in sensation that escape as a hollow laugh" },
          { ko: "〈히히히스토리〉는 움직임과 소리, 말을 다루는 1인 라이브 퍼포먼스다. 무대 위 '황수현'은 말하고, 춤추고, 노래하지만 결코 하나의 인물이나 완결된 서사로 고정되지 않는다. 말은 고백처럼 시작되지만 설명으로 닫히지 않고, 춤은 이미지로 완성되지 않으며, 노래는 안정된 리듬에 도달하지 않는다. 분명한 형태로 향하지 않고 서로 다른 방향으로 미끄러지는 이 행위들은 기존의 질서 안에서 매끄럽게 설명되지 않는 감각의 상태를 집요하게 따라간다.", en: "hihihistory is a solo live performance woven from movement, sound and speech. On stage, Hwang Soohyun speaks, dances and sings, yet is never fixed into a single character or a completed narrative. Her speech begins like a confession but refuses to close into explanation; her dance never resolves into an image; her song never settles into a stable rhythm. Rather than heading towards fixed form, these gestures continually diverge, doggedly pursuing states of sensation that resist explanation within the familiar, existing order." },
          { ko: "제목의 “히히히”는 진지한 말이 완전히 믿어지지 않을 때 새어 나오는 헛웃음이자, 무언가 스며 나오는 스산한 기척의 소리다. 이 정체 모를 소리는 공연의 표면에 작은 균열을 내고 흐름을 예기치 못한 방향으로 비틀어버린다.", en: "The repeated ‘hihihi’ in the title evokes an uneasy laugh that escapes when earnest words do not seem entirely believable; it is also the eerie stirring of something quietly leaking into the world. This mysterious sound creates small cracks in the surface of the performance and twists its flow in unexpected ways." },
          { ko: "그 과정에서 뒤섞이는 질감과 리듬, 파동은 관객을 익숙하지 않은 감각의 서사로 이끈다. 작품은 그렇게 아직 이름 붙지 않은 감각의 자리를 탐색하며, 매끄러운 미래가 지워버린 감각을 어긋난 몸으로 다시 호출한다.", en: "The textures, rhythms and waves that mingle in the process lead the audience into an unfamiliar narrative of the senses. In this way hihihistory searches for places of sensation that have yet to be named, using a body out of sync to summon back the senses that a frictionless future has erased." }
        ]
      }
    ],

    notes: [
      {
        label: { ko: "안무가 소개", en: "About the Choreographer" },
        paras: [
          { ko: "황수현은 춤을 매개로 신체 경험의 잠재성을 확장해 온 안무가다. 춤을 단순히 시각적으로 보여지는 형식을 넘어 몸과 몸, 몸과 공간, 그리고 눈에 보이지 않는 것들 사이에 발생하는 '경험의 구조'로 다룬다. 주로 호흡과 구음, 진동, 어둠, 미세한 운동감각 같은 비가시적 요소들을 안무의 핵심 재료로 삼는다. 〈검정감각〉, 〈음———〉, 〈카베에〉, 〈Zzz〉 등의 작품을 통해 시각 중심의 관람 방식을 전복하고, 서로 다른 몸들이 극장이라는 공간 안에서 함께 감각하는 '공동의 상태'를 탐구해왔다. 최근에는 이러한 감각적 경험을 가능하게 했던 방식들이 하나의 고정된 틀로 굳어지는 것을 경계하며, 몸이 환경과 또 다른 방식으로 관계 맺을 수 있는 새로운 안무적 실험을 이어가고 있다.", en: "Hwang Soohyun is a choreographer who has expanded the latent possibilities of physical experience through dance. Rather than treating dance as a purely visual medium, she approaches it as a structure of experience that emerges between bodies, between body and space, and between the things that are invisible. Breath, vocal resonance, vibration, darkness and micro-kinaesthetic sensations form the core materials of her choreographic language. Through works such as Sense of Darkness, Hmmmm, caveae and Zzz, she has overturned visually oriented modes of spectatorship and explored a communal state of perception, in which different bodies experience sensation together within the space of the theatre. More recently, wary of the very methods that once enabled these sensory experiences turning into fixed templates, she continues new choreographic experiments in how the body might relate to its environment otherwise." },
          { ko: "주요 작품으로 〈세계〉(2026), 〈sync de sync〉(2025), 〈Zzz〉(2023), 〈카베에〉(2023) 등이 있으며, 〈음 ━—━〉으로 제27회 무용예술상 안무상(2021)을 수상하고 문화체육관광부장관 표창(2020)을 받았다. 또한 〈검정감각〉을 통해 한국춤비평가협회 '2019 베스트 작품상'을 수상했다.", en: "Her notable works include SE GYE (2026), sync de sync (2025), Zzz (2023) and caveae (2023). She received the Choreography Award at the 27th Dance Art Awards (2021) and a commendation from the Minister of Culture, Sports and Tourism (2020). Her earlier work Sense of Darkness was named Best Work of 2019 by the Korean Association of Dance Critics and Researchers." }
        ]
      }
    ],

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        [{ ko: "컨셉·안무·출연", en: "Concept, Choreography & Performance" }, { ko: "황수현", en: "Hwang Soohyun" }],
        [{ ko: "크리에이티브 프로듀서", en: "Creative Producer" }, { ko: "박지선", en: "Park Jisun" }],
        [{ ko: "리허설 어시스턴트", en: "Rehearsal Assistant" }, { ko: "강호정", en: "Kang Hojung" }],
        [{ ko: "음악", en: "Music" }, { ko: "김현수", en: "Kim Hyunsoo" }],
        [{ ko: "조명", en: "Lighting" }, { ko: "공연화", en: "Gong Yeonhwa" }],
        [{ ko: "사운드", en: "Sound" }, { ko: "우경민, 천준하", en: "Woo Kyungmin, Cheon Junha" }],
        [{ ko: "무대감독", en: "Stage Manager" }, { ko: "이율, 김민수", en: "Lee Yool, Kim Minsu" }]
      ]
    },

    /* 공연 사진이 들어오면 items 에 { src, w, h } 를 더하면 됩니다 */
    photos: {
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/hihihistory/",
      items: [
        { src: "hihihistory-poster.jpg", w: 1349, h: 1900, span: 4 }
      ]
    }
  },

  /* ── 세상의 종말이 (아닌) ──────────────────────────────────────────── */

  "not-the-end-of-the-world": {
    eyebrow: { ko: "공연 · 2026", en: "Performance · 2026" },
    title: { ko: "세상의 종말이 (아닌)", en: "(Not) the End of the World" },
    credit: { ko: "크리스 부시 작 · 전윤환 연출 · 앤드씨어터", en: "Written by Chris Bush · Directed by Jeon Yunhwan · A.N.D.Theatre" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 드라마투르그", en: "Park Jisun — Dramaturg" } },
    back: { href: "now.html", ko: { ko: "← 지금", en: "← Now" }, en: "← Now" },

    runs: {
      label: { ko: "일정", en: "Schedule" },
      rows: [
        { dates: { ko: "프리뷰 · 2026.7.31(금)–8.1(토)", en: "Preview · Fri 31 Jul – Sat 1 Aug 2026" }, time: "15:00", /* 극장 이름은 각 극장이 정한 표기를 그대로 씁니다 — 로마자 규칙도, 영국식 철자 규칙도
             적용하지 않습니다. Void Theatre 와 Yeonhee Art Theater 의 철자가 다른 것도 그 때문입니다. */
          venue: { ko: "없는극장 (강화군 길상면 해안남로 627, 1층)", en: "Void Theatre (1F, 627 Haean-namno, Gilsang-myeon, Ganghwa-gun)" } },
        { dates: { ko: "본공연 · 2026.8.6(목)–8.9(일)", en: "Main run · Thu 6 – Sun 9 Aug 2026" }, time: { ko: "평일 19:30 / 주말 15:00", en: "Weekdays 19:30 / Weekends 15:00" }, 
          venue: { ko: "연희예술극장", en: "Yeonhee Art Theater" } }
      ]
    },

    sections: [
      {
        label: { ko: "작품 소개", en: "About the Work" },
        paras: [
          { ko: "세상의 끝, 혹은 끝나지 않은 세상.", en: "The end of the world, or a world that has not ended." },
          { ko: "기후 변화 연구자 '안나'는 저명한 기후과학자 우타 오버도르프 교수가 이끄는 한 대학의 기후연구소에서, 자신의 인생이 걸린 박사 후 연구원 면접을 치른다. 면접은 아주 작은 말과 행동의 차이 속에서 반복되고 되감긴다. 우타 교수는 안나의 연구에 냉담한 태도를 보이기도 하고, 깊은 관심을 드러내기도 한다. 두 사람은 과학과 정의, 특권과 희생, 그리고 기후위기를 둘러싼 책임에 관해 충돌한다.", en: "Anna, a climate change researcher, sits a postdoctoral interview on which her life depends, at a university climate institute led by the eminent climate scientist Professor Uta Oberdorf. The interview repeats and rewinds through the smallest differences of word and gesture. Uta is by turns coldly dismissive of Anna's research and deeply interested in it. The two clash over science and justice, privilege and sacrifice, and responsibility for the climate crisis." },
          
          { ko: "또 다른 시간대에서 안나는 서로 다른 모습으로 나타나는 '릴리'들과 마주한다. 북극 탐사에서 한 여성이 죽었고, 안나는 그 죽음을 둘러싼 질문과 조사를 받는다. 그보다 더 먼 미래에는 '레나'가 죽은 어머니를 위한 추도사를 낭독한다. 한 사람의 삶과 죽음에 관한 이야기는 점차 인류의 역사와 우리가 살아가는 지구를 위한 애도의 언어로 확장된다.", en: "In another timeline Anna encounters the several Lilys, each appearing differently. A woman has died on an Arctic expedition, and Anna faces questions and investigation surrounding that death. Further in the future, Lena reads a eulogy for her dead mother. A story about one person's life and death gradually widens into a language of mourning for human history and for the earth we live on." },
          { ko: "이야기의 틈 사이로 분홍색 눈과 굶주린 곰, 8만 년 된 나무 군락과 끝없이 추출되는 석유, 사라진 생명과 아직 남아 있는 가능성들이 모습을 드러낸다. 〈세상의 종말이 (아닌)〉은 '세계의 종말'을 이야기하면서 동시에 '종말이 아닌 것'을 이야기한다. 우리가 매일 맞이하는 사소한 끝들, 그리고 여전히 끝나지 않은 삶의 가능성들을.", en: "Through the gaps in the story appear pink snow and starving bears, an eighty-thousand-year-old stand of trees and endlessly extracted oil, lives that have vanished and possibilities that remain. *(Not) the End of the World* speaks of the end of the world and, at the same time, of what is not the end — the small endings we meet each day, and the possibilities of a life still unfinished." }
        ]
      }
    ],

    notes: [
      {
        label: { ko: "작가 소개", en: "About the Playwright" },
        paras: [
          { ko: "크리스 부시(Chris Bush)는 올리비에 상을 수상한 영국의 극작가이자 작사가, 각본가이다. 날카로운 사회적 시선과 실험적인 형식으로 주목받아 왔으며, The Stage 선정 '영국 연극계에서 가장 영향력 있는 100인'에 두 차례 이름을 올렸다. 주요 작품으로 《Standing at the Sky's Edge》, 《The Assassination of Katie Hopkins》, 《Faustus: That Damned Woman》, 《Hungry》, 《Otherland》 등이 있으며, 《(Kein) Weltuntergang》은 독일 샤우뷔네에서 초연되었다. 수전 스미스 블랙번 상 후보에 올랐으며, 영국 연극상, 사우스 뱅크 스카이 아츠 상 등 다수의 상을 수상했다. 단편영화 《MARS》는 런던 및 트라이베카 영화제에 공식 초청되었다.", en: "Chris Bush is an Olivier Award-winning British playwright, lyricist and screenwriter. Known for a sharp social eye and experimental form, she has twice been named among The Stage's 100 most influential people in British theatre. Her work includes *Standing at the Sky's Edge*, *The Assassination of Katie Hopkins*, *Faustus: That Damned Woman*, *Hungry* and *Otherland*; *(Not) the End of the World* premiered at the Schaubühne in Berlin. She has been shortlisted for the Susan Smith Blackburn Prize and has won the UK Theatre Awards and the South Bank Sky Arts Award, among others. Her short film *MARS* was officially selected for the London and Tribeca film festivals." }
        ]
      },
      {
        label: { ko: "제작 소개", en: "About the Company" },
        paras: [
          { ko: "앤드씨어터는 다큐멘터리 연극의 동시대성을 인식하며 실재를 매개하기 위한 다양한 연극방법론을 고민해 왔다. 또한 극장과 극장 밖 사이의 장력을 탐구하며 동시대 연극의 가능성에 대한 질문을 이어 나가고 있다. 현재는 인천에서 강화도까지 지역 예술의 방식을 탐색하고 있다. 이는 제도권 바깥으로 이탈하는 것이 아니라, 제도권 너머의 또 다른 작업 언어를 만드는 방식이라 할 수 있다.", en: "A.N.D.Theatre works from a sense of the contemporaneity of documentary theatre, searching out theatrical methodologies for mediating the real. It explores the tension between the theatre and what lies outside it, continuing to ask what contemporary theatre can be. It is currently exploring ways of making regional art from Incheon out to Ganghwado — not a departure from the institutional world, but a way of building another working language beyond it." }
        ]
      }
    ],

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        [{ ko: "작", en: "Written by" }, { ko: "크리스 부시", en: "Chris Bush" }],
        [{ ko: "원작 초연", en: "Premiere" }, { ko: "2021 베를린 샤우뷔네, 연출 케이티 미첼", en: "Schaubühne Berlin, 2021, directed by Katie Mitchell" }],
        [{ ko: "번역", en: "Translation" }, { ko: "앨리사 김", en: "Alyssa Kim" }],
        [{ ko: "연출", en: "Direction" }, { ko: "전윤환", en: "Jeon Yunhwan" }],
        [{ ko: "드라마투르그", en: "Dramaturgy" }, { ko: "박지선", en: "Park Jisun" }],
        [{ ko: "출연", en: "Performance" }, { ko: "강윤민지, 박혜영, 다은", en: "Kang Yunminji, Park Hyeyoung, Daeun" }],
        [{ ko: "프로듀서", en: "Producer" }, { ko: "권근영", en: "Kwon Keunyoung" }],
        [{ ko: "프로듀서보", en: "Assistant Producer" }, { ko: "이유정", en: "Lee Yujeong" }],
        [{ ko: "무대", en: "Set" }, { ko: "송지인", en: "Song Jiin" }],
        [{ ko: "조명", en: "Lighting" }, { ko: "공연화", en: "Gong Yeonhwa" }],
        [{ ko: "사운드", en: "Sound" }, { ko: "최영두", en: "Choi Youngdoo" }],
        [{ ko: "무대감독", en: "Stage Manager" }, { ko: "민재원", en: "Min Jaewon" }],
        [{ ko: "그래픽·사진", en: "Graphics & Photography" }, { ko: "김솔", en: "Kim Sol" }],
        [{ ko: "티켓매니저", en: "Ticketing Manager" }, { ko: "김현주", en: "Kim Hyunju" }]
      ]
    },

    support: {
      label: { ko: "후원", en: "Support" },
      text: { ko: "주최·주관 앤드씨어터 · 후원 한국문화예술위원회 공연예술창작주체지원사업", en: "Presented and produced by A.N.D.Theatre · Supported by Arts Council Korea" }
    },

    /* 공연 사진이 들어오면 items 에 { src, w, h } 를 더하면 됩니다 */
    photos: {
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/not-the-end/",
      items: [
        { src: "not-the-end-poster.jpg", w: 1400, h: 1749, span: 4 }
      ]
    },

    tags: ["climate-justice"]
  },

  /* ── TNN — The Next Normal ─────────────────────────────────────────── */

  tnn: {
    eyebrow: { ko: "프로젝트 · 2024– · 아시아 네트워크", en: "Project · 2024– · Asia Network" },
    title: { ko: "TNN — The Next Normal", en: "TNN — The Next Normal" },
    credit: { ko: "다이얼로그 인 아시아(DIA) · 9개 지역 파트너", en: "Dialogue in Asia (DIA) · Partners from nine regions" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 기획 · 아시아 네트워크", en: "Park Jisun — Programming" } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "소개", en: "About" },
        paras: [
          { ko: "'정상'이란 무엇일까. 그 답은 결코 고정된 적이 없다. 19세기에는 오직 백인 남성의 투표권만이 '정상'이었다. 20세기와 21세기를 거치며 그 경계는 젠더, 인종, 신체적 능력을 넘어 인간과 비인간의 영역으로 끊임없이 확장되고 변화해 왔다.", en: "What is \"normal\"? The answer has never once held still. In the nineteenth century, only the white man's vote was normal. Across the twentieth and twenty-first centuries that boundary has shifted and widened without pause — past gender, race and physical ability, and out into the realm of the human and the non-human." },
          { ko: "오늘날 우리는 이 질문을 다시 던져야 한다. 우리가 자원을 소비하고 접근하는 방식에서 당연하게 여겨온 '정상'이라는 가정들은 이제 전 지구적 위기의 원인이 되었다. 한때 인류가 가졌던 확신, 즉 지구의 자원을 마음껏 쓸 수 있다는 '당연한 권리'는 역설적으로 생존을 위협하고 변화에 대한 적응을 늦추는 족쇄가 되었다.", en: "Today we have to ask it again. The assumptions of normality we have taken for granted in how we consume and reach for resources are now the cause of a planetary crisis. The certainty humankind once held — the self-evident right to use the earth's resources at will — has become, by a bitter turn, the thing that threatens our survival and slows our adaptation to change." },
          { ko: "더 넥스트 노멀(TNN)은 질문한다. 예술은 어떻게 '정상'이라 여겨지는 것의 경계를 재설정할 수 있을까? 우리는 익숙한 것들을 재검토하고, 사회적 · 생태적 · 윤리적으로 새로운 형태의 정상성을 상상해야 한다. 이 프로젝트는 기후위기, 평등, 다양성, 창조적 마찰, 디아스포라, 포스트휴머니즘 등 시급한 동시대 의제에 주목하며, 예술가들에게 현재에서 미래로 우리를 이끌어 줄 새로운 규범을 제안하고 상상할 것을 요청한다.", en: "The Next Normal asks: how can art reset the boundary of what counts as normal? We need to re-examine the familiar and imagine new forms of normality — socially, ecologically, ethically. Attending to urgent contemporary agendas — the climate crisis, equality, diversity, creative friction, diaspora, posthumanism — the project asks artists to propose and imagine the new norms that might carry us from the present into the future." },
          { ko: "TNN은 아시아가 당면한 시급한 의제들을 예술의 언어로 해석하여 지역 내 담론을 활성화하는 것을 목표로 한다. 특히 아시아 각지의 레지던시를 발굴하고 연결하여, 예술가들이 그곳에 머물며 인간과 자연, 문화와 예술에 깊이 접속할 수 있도록 돕고자 한다. 이는 예술가의 이동성을 확장하는 것을 넘어 관계의 밀도를 높이는 새로운 차원의 예술 협업 및 지식 공유 모델이 될 것이다.", en: "TNN aims to read the urgent agendas facing Asia through the language of art, and so to enliven discourse within the region. In particular it seeks out and connects residencies across Asia, so that artists can stay in those places and connect deeply with people and nature, culture and art. This goes beyond widening artists' mobility: it becomes a model of artistic collaboration and knowledge-sharing at a new order of relational density." },
          { ko: "2024년부터 시작했으며, 2026년 2월 서울에서 '다이얼로그 인 아시아(DIA)' 포럼을 통해 그 여정의 시작을 알렸다. 한국을 비롯해 뉴질랜드, 대만, 말레이시아, 인도네시아, 일본, 태국, 호주, 홍콩 등 9개 지역 파트너가 함께한 포럼은 아시아의 다양한 담론과 새로운 협력 방식을 펼쳐내는 장이 되었다.", en: "Launched in 2024, TNN announced the beginning of its journey with the Dialogue in Asia (DIA) forum in Seoul in February 2026. Bringing together nine regional partners — Korea, Australia, Hong Kong, Indonesia, Japan, Malaysia, New Zealand, Taiwan and Thailand — the forum became a place where the diverse discourses of Asia and new modes of collaboration could unfold." }
        ]
      }
    ],

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: "thenextnormalasia.com", en: "thenextnormalasia.com", url: "https://thenextnormalasia.com/" }
      ]
    },

    photos: {
      credit: { ko: "사진 제공 한국문화예술위원회", en: "Photographs courtesy of Arts Council Korea" },
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/TNN/",
      items: [
        { type: "video", id: "sbUxGuR3LCA", poster: "img/works/TNN/video-cover-web.jpg", span: 4, caption: { ko: "다이얼로그 인 아시아(DIA) 포럼", en: "Dialogue in Asia (DIA) Forum" } },
        { src: "01.jpg", w: 1600, h: 1067, span: 4 },
        { src: "02.jpg", w: 1600, h: 1067, span: 2 },
        { src: "03.jpg", w: 1600, h: 1067, span: 2 },
        { src: "04.jpg", w: 1600, h: 1067, span: 1 },
        { src: "05.jpg", w: 1600, h: 1067, span: 1 },
        { src: "06.jpg", w: 1600, h: 1067, span: 2 },
        { src: "07.jpg", w: 1600, h: 1067 },
        { src: "08.jpg", w: 1600, h: 1067 },
        { src: "09.jpg", w: 1600, h: 1067 }
      ]
    },

    tags: ["international", "asian-solidarity", "climate-crisis", "creative-friction", "borders-coexistence"]
  },

  /* ── 무용 × 기술 창작 랩 ───────────────────────────────────────────── */

  "dance-techlab": {
    eyebrow: { ko: "프로젝트 · 2021– · 국립현대무용단 공동 기획", en: "Project · 2021– · Co-programmed with the Korea National Contemporary Dance Company" },
    title: { ko: "무용 × 기술 창작 랩", en: "Dance × Technology Creative Lab" },
    credit: { ko: "국립현대무용단 공동 기획", en: "Co-programmed with the Korea National Contemporary Dance Company" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 기획", en: "Park Jisun — Programming" } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "소개", en: "About" },
        paras: [
          { ko: "〈무용 × 기술 창작랩〉은 2021년부터 이어온 무용과 기술의 실험적 교류의 장이다. 기술을 창작의 '도구'로만 다루는 관점의 한계에서 출발해, 안무가와 기술 연구자 · 개발자 · 작가가 서로의 언어와 매체, 실행 방법론을 익히며 협업하는 프로젝트로, '질문이 증발된 실험에 빠지지 않는 것'을 중요한 원칙으로 한다.", en: "Dance × Technology Creative Lab has been a site of experimental exchange between dance and technology since 2021. It begins from the limits of treating technology merely as a creative \"tool,\" bringing choreographers together with technology researchers, developers and artists to learn one another's languages, media and working methods. Its guiding principle: never to fall into experiment from which the question has evaporated." },
          { ko: "2021년에는 신체성의 확장과 탈피, 사회적 거리두기 이후 무용의 감각적 경험, 안무 창작의 주체성을 다뤘다. 2022년부터는 포스트휴먼 & 포스트휴머니즘을 주제로 삼아 참여자들이 다양한 질문을 생성하고 이를 예술적 실험으로 확장하는 과정을 이어오고 있다. 강의와 워크숍, 팀별 연구와 실험을 결합한 과정 중심 프로그램으로, 인공지능 · 로봇 · 가상현실 · 포스트휴먼 바디 등 동시대적 주제를 통해 예술과 기술의 관계를 새롭게 모색하고 있으며 2025년에는 참여 예술가들이 도출한 8개의 프로토타입을 발표했다.", en: "In 2021 it took up the extension and shedding of corporeality, the sensory experience of dance after social distancing, and agency in choreographic creation. Since 2022 it has worked under the theme of posthuman and posthumanism, with participants generating questions and carrying them out into artistic experiment. A process-led programme combining lectures, workshops and team-based research, it looks afresh at the relation between art and technology through contemporary subjects — artificial intelligence, robotics, virtual reality, the posthuman body. In 2025 the participating artists presented eight prototypes." },
          { ko: "2026년 창작랩은 인공지능과 데이터가 창작의 도구를 넘어 자율적 주체(Agent)로 진화하는 시대에 예술가가 던져야 할 근본적인 질문에서 출발한다. 지난 4년 동안 포스트휴먼 & 포스트휴머니즘이라는 주제 아래 인간 · 동물 · 식물 · 기계가 공존하는 세상의 경계를 해제하는 탐구를 지속해 왔다면, 2026년에는 그 무경계의 땅 위에서 다시 '인간'의 미래를 질문하고자 한다. 인공지능은 콘텐츠를 생성하는 수준을 넘어 스스로 계획하고 도구를 사용하며 문제를 해결하는 에이전틱 AI로 발전했고, 현실 세계에서 직접 임무를 수행하는 피지컬 AI까지 등장했다. 알고리즘 기반의 데이터와 물리적 해결 능력을 갖춘 기술 환경 속에서 '인간은 어떻게 공존해야 하는가'는 우리가 직면한 지속적인 질문이다. 2026 창작랩은 기술과 신체의 윤리적 공존을 깊이 있게 탐구한다.", en: "The 2026 lab starts from the fundamental question an artist must ask in an age when artificial intelligence and data are evolving past being tools of creation into autonomous agents. If the past four years, under the theme of posthuman and posthumanism, were spent undoing the boundaries of a world shared by humans, animals, plants and machines, then 2026 returns — on that borderless ground — to ask after the future of the human. AI has developed beyond generating content into agentic AI that plans for itself, uses tools and solves problems, and now into physical AI that carries out tasks in the world. Within a technological environment possessed of algorithmic data and the capacity to act physically, \"how are humans to coexist?\" is the question that stays with us. The 2026 lab explores in depth the ethical coexistence of technology and the body." },
          { ko: "안무가, 기술 전문가, 연구자, 프로듀서들은 5월 · 8월 · 10월에 걸친 3단계의 랩을 통해 질문을 생성하고, 실험을 거쳐 프로토타입을 제작한다.", en: "Choreographers, technologists, researchers and producers generate questions across three stages of the lab — in May, August and October — and work through experiment towards prototypes." }
        ]
      }
    ],

    links: {
      label: { ko: "자료집", en: "Publications" },
      items: [
        { ko: "자료집 3종 보기", en: "3 publications", url: "documents.html#dance-techlab" }
      ]
    },

    photos: {
      credit: { ko: "2025 무용기술 오픈위크 · 사진 제공 국립현대무용단", en: "2025 Dance & Technology Open Week · Photographs courtesy of the Korea National Contemporary Dance Company" },
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/dance-techlab/",
      items: [
        { src: "01.jpg", w: 1600, h: 1067, span: 4 },
        { src: "02.jpg", w: 1600, h: 1067, span: 2 },
        { src: "03.jpg", w: 1067, h: 1600, span: 2 },
        { src: "04.jpg", w: 1067, h: 1600, span: 1 },
        { src: "05.jpg", w: 1600, h: 1067, span: 1 },
        { src: "06.jpg", w: 1600, h: 1067, span: 2 },
        { src: "07.jpg", w: 1600, h: 1067 },
        { src: "08.jpg", w: 1067, h: 1600 },
        { src: "09.jpg", w: 1600, h: 1067 },
        { src: "10.jpg", w: 1600, h: 1067 },
        { src: "11.jpg", w: 1600, h: 1067 },
        { src: "12.jpg", w: 1600, h: 1067 },
        { src: "13.jpg", w: 1600, h: 1067 },
        { src: "14.jpg", w: 1600, h: 1067 },
        { src: "15.jpg", w: 1600, h: 1067 },
        { src: "16.jpg", w: 1600, h: 1067 }
      ]
    },

    tags: ["tech-society", "posthuman", "ai", "creative-friction", "borders-coexistence", "process"]
  },

  /* ── sync de sync 싱크 디 싱크 ─────────────────────────────────────── */

  "sync-de-sync": {
    eyebrow: { ko: "공연 · 2025–2026", en: "Performance · 2025–2026" },
    title: { ko: "sync de sync 싱크 디 싱크", en: "sync de sync" },
    credit: { ko: "황수현 컨셉·안무 · 박지선 크리에이티브 프로듀서", en: "Concept and choreography by Hwang Soohyun · Creative producer Park Jisun" },
    back: { href: "now.html", ko: { ko: "← 지금", en: "← Now" }, en: "← Now" },

    /* 오른쪽 미디어 격자 — 4칸 기준, span 으로 폭을 정합니다
       { src, span, caption } · 영상은 { type:"video", src, span } */
    media: [
      { src: "img/works/sync-poster-2026.png", span: 2, caption: "2026", alt: { ko: "sync de sync 2026 포스터", en: "sync de sync 2026 poster" } },
      { src: "img/works/sync-poster-2025.png", span: 2, caption: "2025", alt: { ko: "sync de sync 2025 포스터", en: "sync de sync 2025 poster" } }
      /* TODO — 영상 주소가 생기면 아래 줄의 주석을 풀고 src 를 채우세요
      , { type: "video", span: 4, src: "https://www.youtube-nocookie.com/embed/영상아이디",
          watch: "https://youtu.be/영상아이디", caption: { ko: "트레일러", en: "Trailer" } } */
    ],

    photos: {
      label: { ko: "사진", en: "Photographs" },
      dir: "img/works/sync-de-sync/",
      credit: "Jisun",
      items: [
        { src: "01.jpg", w: 1600, h: 905, span: 4 },
        { src: "02.jpg", w: 1600, h: 906, span: 2 },
        { src: "03.jpg", w: 1600, h: 906, span: 2 },
        { src: "04.jpg", w: 1600, h: 906 },
        { src: "05.jpg", w: 1600, h: 906 },
        { src: "06.jpg", w: 1600, h: 906 },
        { src: "07.jpg", w: 1600, h: 906 },
        { src: "08.jpg", w: 1600, h: 906 },
        { src: "09.jpg", w: 1600, h: 906 },
        { src: "10.jpg", w: 1600, h: 906 },
        { src: "11.jpg", w: 1600, h: 906 },
        { src: "12.jpg", w: 1600, h: 906 },
        { src: "13.jpg", w: 1600, h: 906 },
        { src: "14.jpg", w: 1600, h: 906 },
        { src: "15.jpg", w: 1600, h: 906 },
        { src: "16.jpg", w: 1600, h: 906 },
        { src: "17.jpg", w: 1600, h: 906 },
        { src: "18.jpg", w: 1600, h: 900 },
        { src: "19.jpg", w: 1600, h: 900 },
        { src: "20.jpg", w: 1600, h: 900 }
      ]
    },

    runs: {
      label: { ko: "일정", en: "Schedule" },
      rows: [
        { dates: { ko: "2025.8.14–16", en: "14–16 Aug 2025" }, time: "7:00pm", venue: { ko: "TINC (This is Not A Church)", en: "TINC (This is Not A Church)" } },
        { dates: { ko: "2026.7.16–19", en: "16–19 Jul 2026" }, time: "7:30pm", venue: "TINC (This is Not A Church)" }
      ],
      note: { ko: "러닝타임 60분", en: "Running time 60 minutes" }
    },

    sections: [
      {
        label: { ko: "작품 소개", en: "About the Work" },
        paras: [
          { ko: "조율되고 틀어지는 순간, 완전한 일치도 완전한 분리도 아닌 상태에서 작동하는 감각들을 따라간다.", en: "Following the senses as they work in the moment of tuning and slipping — neither wholly in unison nor wholly apart." },
          { ko: "《sync de sync》는 조율되고 틀어지는 순간, 완전한 일치도 완전한 분리도 아닌 상태에서 작동하는 감각들을 따라간다. 말은 입술과 성대를 지나 소리와 진동으로 흩어지고, 움직임은 형태보다 몸을 통과한 파동과 질감으로 번진다. 빛과 어둠, 온도와 공기, 무대 안팎의 보이는 것들과 보이지 않는 것들은 서로 겹치고 스며들며 감각의 얽힘을 만든다. 그 얽힘은 공간의 밀도, 온도와 습도, 기운의 변화를 몸에 닿게 한다. 《sync de sync》는 고정되지 않는 주변 환경에 반응하며, 현재의 감각 안에 이미 도착한 변화를 더듬는다.", en: "*sync de sync* follows the senses at work in the moment of tuning and slipping, in a state that is neither complete unison nor complete separation. Speech passes the lips and vocal cords and scatters into sound and vibration; movement spreads less as shape than as wave and texture passing through the body. Light and dark, temperature and air, the visible and invisible on and off stage overlap and seep into one another, making an entanglement of the senses. That entanglement brings the density of a space, its heat and humidity, its shifting energy into contact with the body. *sync de sync* responds to surroundings that never hold still, feeling for the change that has already arrived within present sensation." }
        ]
      }
    ],

    note: {
      label: { ko: "안무가 소개", en: "About the Choreographer" },
      paras: [
        { ko: "황수현은 춤을 통해 몸이 세계와 관계 맺는 감각의 조건을 탐구한다. 그는 춤을 보여지는 형식이 아니라, 몸과 몸, 몸과 공간, 보이지 않는 것 사이에서 발생하는 경험의 구조로 다룬다. 호흡, 구음, 진동, 어둠, 미세한 운동감각과 같은 비가시적 요소를 주요한 재료로 안무한다. 《검정감각》, 《음------》, 《카베에》, 《Zzz》 등을 거치며 보는 중심의 관람을 흔들고, 서로 다른 몸들이 함께 감각하는 '공동'의 상태를 탐구해왔다. 최근에는 이러한 감각 경험을 가능하게 해온 방식이 고정된 구조로 굳어지는 순간을 경계하며, 몸이 환경과 새롭게 관계 맺을 수 있도록 안무를 다시 실험하고 있다.", en: "Hwang Soohyun explores, through dance, the sensory conditions under which the body enters into relation with the world. She treats dance not as a form to be looked at but as a structure of experience arising between body and body, body and space, and the things that cannot be seen. She choreographs with invisible materials as her principal medium — breath, vocalisation, vibration, darkness, minute kinaesthetic sensation. Through 《Black Sense》, 《Eum ------》, 《caveae》 and 《Zzz》, she has unsettled sight-centred spectatorship and explored the 'common' state in which different bodies sense together. Recently she has been wary of the moment when the very methods that made such sensory experience possible harden into fixed structure, and is experimenting with choreography anew so that the body may enter into fresh relation with its environment." }
      ]
    },

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        [{ ko: "컨셉, 안무", en: "Concept, Choreography" }, { ko: "황수현", en: "Hwang Soohyun" }],
        [{ ko: "리서치·출연", en: "Research, Performance" }, { ko: "정나원, 최승윤, 황수현", en: "Jeong Nawon, Choi Seungyun, Hwang Soohyun" }],
        [{ ko: "사운드 디자인", en: "Sound Design" }, { ko: "홍초선", en: "Hong Choseon" }],
        [{ ko: "조명 디자인", en: "Lighting Design" }, { ko: "공연화", en: "Gong Yeonhwa" }],
        [{ ko: "조명", en: "Lighting" }, { ko: "김인애, 오채은", en: "Kim Inae, Oh Chaeeun" }],
        [{ ko: "영상", en: "Video" }, { ko: "윤재민(2025), 백종관(2026)", en: "Yoon Jaemin (2025), Baek Jongkwan (2026)" }],
        [{ ko: "리허설 어시스턴트", en: "Rehearsal Assistant" }, { ko: "강호정", en: "Kang Hojung" }],
        [{ ko: "아웃사이드 아이", en: "Outside Eye" }, { ko: "손나예", en: "Son Naye" }],
        [{ ko: "크리에이티브 프로듀서", en: "Creative Producer" }, { ko: "박지선", en: "Park Jisun" }],
        [{ ko: "기획·행정", en: "Planning & Producing" }, { ko: "송미선", en: "Song Miseon" }],
        [{ ko: "무대감독", en: "Stage Manager" }, { ko: "최진아(2025), 김세현(2026)", en: "Choi Jina (2025), Kim Sehyun (2026)" }],
        [{ ko: "셋업 및 진행", en: "Setup & Running Crew" }, { ko: "김지현, 김채민", en: "Kim Jihyun, Kim Chaemin" }],
        [{ ko: "그래픽 디자인", en: "Graphic Design" }, { ko: "홍소이", en: "Hong Soi" }]
      ]
    },

    support: {
      label: { ko: "후원", en: "Support" },
      text: { ko: "서울특별시, 서울문화재단 · 2026년 서울문화재단 예술창작활동지원(다년) 선정 프로젝트", en: "Seoul Metropolitan Government, Seoul Foundation for Arts and Culture · Selected for the SFAC Multi-Year Arts Creation Grant, 2026" }
    },

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: { ko: "프로그램북", en: "Programme Book" }, en: "Programme", url: "http://soohyunhwang.com/syncdesync/" },
        { ko: { ko: "웹 포토북", en: "Web Photobook" }, en: "Web Photobook", url: "https://jisunarts.github.io/syncdesync_photo" }
      ]
    }
  },

  /* ── ⬡⬡의 섬 : 강화도 ─────────────────────────────────────────────── */

  ganghwa: {
    eyebrow: { ko: "프로젝트 · 2025–2026 · 강화도", en: "Project · 2025–2026 · Ganghwa Island" },
    title: { ko: "⬡⬡의 섬 : 강화도", en: "Island of ⬡⬡ : Ganghwado" },
    credit: { ko: "기획 · 앤드씨어터 × 프로듀서그룹도트 × 강화유니버스", en: "Organised by A.N.D.Theatre × Producer Group DOT × Ganghwa Universe" },
    role: { label: { ko: "역할", en: "Role" }, text: { ko: "박지선 — 기획·프로듀서", en: "Park Jisun — Programming & Producing" } },

    /* 돌아가기 링크 */
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "개념", en: "Concept" },
        paras: [
          { ko: "⬡⬡의 섬은 사라지는 것들에 대한 질문에서 시작한다. 예술가와 기획자, 시민들이 함께 '소멸'을 응시하고 그 자리에 시적인 공간을 만들어내는 프로젝트이다.", en: "The Island of ⬡⬡ begins with a question about the things that are vanishing. It is a project in which artists, producers and citizens look together at disappearance and make a poetic space where it has been." },
          { ko: "2025-2026 ⬡⬡의 섬은 강화도이다. 2025년은 리서치 단계로 한국, 싱가포르, 이탈리아의 예술가·기획자가 강화도에 모였다. 강화도의 길을 걷고, 역사적·문화적 장소를 방문하고, 사람들을 만나다 보니, 그 과정에서 강화의 시간과 자연이 몸에 스며들었고, 각자의 방식으로 '여기서 무엇이 사라지고 있는가'를 감각하기 시작했다.", en: "For 2025–2026, the Island of ⬡⬡ is Ganghwado. 2025 was the research phase, when artists and producers from Korea, Singapore and Italy gathered on the island. Walking its roads, visiting historical and cultural sites, meeting its people — Ganghwa's time and nature seeped into the body, and each began, in their own way, to sense what is disappearing here." },
          { ko: "⬡⬡의 섬의 두 개의 육각형은 프로젝트의 상징이다. 육각형은 서로 맞물리면서 새로운 공간과 구조를 만들어내는 형태로, 이는 개개인의 섬이 서로 연결되어 새로운 공동의 세계를 형성하는 과정을 의미한다. 즉, 각각의 육각형은 '나의 섬'이자 '우리의 섬'이며, 이들이 모여 만들어지는 새로운 공간은 예술을 통해 서로의 존재를 인식하고 확장하는 장이 된다.", en: "The two hexagons of the Island of ⬡⬡ are the project's emblem. Hexagons interlock to make new spaces and structures — the figure of individual islands connecting to form a shared world. Each hexagon is at once \"my island\" and \"our island,\" and the space they make together becomes a place where, through art, we recognise and extend one another's existence." },
          { ko: "'소멸'은 기후위기와 함께 '멸종'이라는 단어와 연결된다. 국가의 존속, 경제 성장과 연결해서는 '지역 소멸'로 연결된다. 生과 연결한다면 '소멸'은 '자연스러움'으로 연결된다.", en: "Set beside the climate crisis, disappearance reaches towards the word extinction. Set beside the survival of a nation and the demands of economic growth, it becomes the disappearance of whole regions. Set beside life itself, disappearance becomes something natural." },
          { ko: "그러나 ⬡⬡의 섬이 바라보는 '소멸'은 두려움이 아닌, 다시 관계 맺기 위한 시작의 순간으로 바라본다. 사라지는 것들의 자취를 따라가며, 그 속에서 새로 태어나는 감각과 언어를 예술의 시각과 감각으로 포획하고 기록하고 공유하며, 사라짐의 공간에 예술적·시적 상상의 공간을 만들어내고자 한다.", en: "But the disappearance the Island of ⬡⬡ looks at is not a thing to fear: it is the opening moment of relation being made again. Following the traces of what is going, we want to catch, record and share — through the eye and the senses of art — the sensations and language being newly born there, and to make a space of artistic and poetic imagination where disappearance has left room." },
          { ko: "2026년 ⬡⬡의 섬 프로젝트가 다시 시작된다. 2025년에 발견한 질문들을 가지고 강화도에 다시 모여, 사라짐의 자리에 시적 장소를 만들고, 그 상상의 공간이 섬 위에 천천히 쌓여가기를 바란다.", en: "In 2026 the Island of ⬡⬡ begins again. Carrying the questions found in 2025, we gather once more on Ganghwa to make poetic places where things have gone, in the hope that these imagined spaces will slowly accumulate on the island." }
        ]
      },
      {
        label: { ko: "2025 리서치 · 주제 “소멸”", en: "2025 Research · “Disappearance”" },
        paras: [
          { ko: "'소멸'은 단순히 사라짐이 아니라, 변화의 한 형태이자 다시 태어남의 가능성을 품은 개념으로, 강화도의 시간과 사람, 그리고 자연을 통해 탐구하고자 했다. 강화 안팎의 예술가·기획자·연구자, 그리고 강화에 거주하는 사람들이 모여 '소멸을 어떻게 해석할 수 있을까', '강화에서 우리는 소멸과 관련해 무엇을 발견할 수 있을까'라는 질문을 중심으로 대화를 이어갔다.", en: "Disappearance is not simply a going-away but a form of change, a concept holding the possibility of being born again — and we set out to explore it through Ganghwa's time, its people and its nature. Artists, producers and researchers from on and off the island, together with people who live on Ganghwa, gathered around two questions: how might we read disappearance, and what can we find here on Ganghwa that bears on it?" },
          { ko: "2주 동안 강화도의 여러 지역을 걸으며, 강화의 사람들을 만나고 그들의 일상과 기억, 그리고 땅의 변화를 몸으로 체험했다. 이 과정에서 '소멸'은 단순한 부정의 언어가 아니라, 존재의 또 다른 방식, 관계의 재구성, 그리고 기억의 전승이라는 새로운 의미로 확장되었다.", en: "Over two weeks we walked through many parts of Ganghwa, meeting its people and experiencing in the body their daily lives, their memories and the changing of the land. In the process disappearance widened past being merely a word of negation into new meanings: another mode of existence, a reconfiguring of relations, and the passing on of memory." },
          { ko: "이 짧은 여정은 하나의 시작점이다. 참여자들은 각자의 삶으로 돌아가 올해의 시간을 되새기며, 내년에 다시 강화에서 모여 보다 확장된 관점으로 '소멸'을 이야기하고자 한다.", en: "This short journey is a starting point. Participants return to their own lives carrying this year with them, and will gather again on Ganghwa next year to speak of disappearance from a wider vantage." }
        ]
      }
    ],

    /* 참가자 — name 은 이름, aff 는 소속(작게 표시) */
    participants: {
      label: { ko: "참가자 · 2025년 9월 @강화도", en: "Participants · September 2025 @Ganghwado" },
      lines: [
        { name: { ko: "박지선, 송미선", en: "Park Jisun, Song Miseon" }, aff: { ko: "프로듀서그룹도트", en: "Producer Group DOT" } },
        { name: { ko: "강윤민지, 권근영, 민재원, 전윤환, 조냇물", en: "Kang Yunminji, Kwon Keunyoung, Min Jaewon, Jeon Yunhwan, Jo Naetmul" }, aff: { ko: "앤드씨어터", en: "A.N.D.Theatre" } },
        { name: { ko: "김나래, 이건희", en: "Kim Narae, Lee Gunhee" }, aff: { ko: "희와래 · 연리목", en: "Heewarae · Yonrimog" } },
        { name: { ko: "안나, 지오바니", en: "Anna, Giovanni" }, aff: { ko: "테아트린 게스타치오네, 이탈리아", en: "Teatringestazione, Italy" } },
        { name: { ko: "헝루운", en: "Heng Leun" }, aff: { ko: "드라마박스, 싱가포르", en: "Drama Box, Singapore" } },
        { name: { ko: "츄 쇼 엔", en: "Chew Shaw En" }, aff: { ko: "싱가포르", en: "Singapore" } }
      ]
    },

    credits: {
      label: { ko: "정보", en: "Info" },
      rows: [
        [{ ko: "장소", en: "Place" }, { ko: "강화도", en: "Ganghwado" }],
        [{ ko: "기간", en: "Period" }, { ko: "2025–2026", en: "2025–2026" }]
      ]
    },

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
      credit: "Jisun",
      label: { ko: "사진", en: "Photographs" },
      dir: "img/photos/ganghwa/",
      items: [
        { type: "video", id: "fffQOEcYuRs", span: 4, caption: { ko: "2025 리서치 트레일러", en: "2025 research trailer" } },
        { src: "ganghwa-01.jpg", w: 1800, h: 1012, span: 4 },
        { src: "ganghwa-02.jpg", w: 1800, h: 1012, span: 2 },
        { src: "ganghwa-03.jpg", w: 1800, h: 1012, span: 2 },
        { src: "ganghwa-04.jpg", w: 1800, h: 1012, span: 1 },
        { src: "ganghwa-05.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-06.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-07.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-08.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-09.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-10.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-11.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-12.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-13.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-14.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-15.jpg", w: 1800, h: 1012, span: 1 },
        { src: "ganghwa-16.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-17.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-18.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-19.jpg", w: 1800, h: 1012 },
        { src: "ganghwa-20.jpg", w: 1800, h: 1012 }
      ]
    },

    /* 태그 — data/tags.js 의 태그와 같은 이름이면 '질문으로 보기'로 이어집니다 */
    tags: ["borders-coexistence", "climate-crisis", "region-community", "international", "mobility", "festival", "multidisciplinary", "civic", "process"]
  },

  /* ── Aesth:ethics ──────────────────────────────────────────────────── */

  aesthethics: {
    eyebrow: { ko: "프로젝트 · 2024– · 도르트문트 · 서울", en: "Project · 2024– · Dortmund · Seoul" },
    title: { ko: "Aesth:ethics", en: "Aesth:ethics" },
    credit: { ko: "글로벌 코드, 인공지능, 그리고 공연예술을 탐색하다", en: "Exploring Global Codes, Artificial Intelligence, and Performing Arts" },
    role: { label: { ko: "역할", en: "Role" },
            text: { ko: "박지선 — 기획. 도르트문트 아카데미와 함께 프로젝트를 기획하고 있습니다.",
                    en: "Park Jisun — Concept & Planning. Developing the project together with the Academy for Theatre and Digitality." } },
    back: { href: "now.html", ko: "← 지금", en: "← Now" },

    sections: [
      {
        label: { ko: "소개", en: "About" },
        paras: [
          { ko: "〈Aesth:ethics〉는 도르트문트 연극 및 디지털리티 아카데미와 프로듀서그룹 도트의 공동 협력 프로젝트다. 2026년은 리서치의 해로, 협력을 위한 로드맵을 설계하고 향후 선보일 공연 프로그램의 구체적인 컨셉을 개발한다.", en: "Aesth:ethics is a collaboration between the Academy for Theatre and Digitality in Dortmund and Producer Group DOT in Seoul. 2026 is a year of research, in which a roadmap of collaboration and a concise concept for a future programme of theatre performances are developed." },
          { ko: "이 프로그램은 글로벌 기술 혁신 영역, 특히 인공지능의 활용과 그에 따른 윤리적 시사점들이 던지는 시급한 사회적 질문들을 다룬다. 인공지능의 급격한 발전은 권력과 민주주의, 전쟁과 감시, 로봇 공학과 생명 공학에 대한 질문을 야기하며, 이는 오늘날 예술·사회·과학계 전반의 거대 담론으로 부상하고 있다. 이러한 질문들은 미학적 혁신, 예술적·기술적 연구개발, 그리고 사회적 책임감을 결합하는 예술 제작의 출발점이 된다.", en: "The programme addresses pressing social issues in the global field of technological innovation — in particular artificial intelligence, its use and its ethical implications. The rapid development of artificial intelligence raises questions about power and democracy, war and surveillance, robotics and biotechnology, which have become focal points of global discourse in the arts, society and the sciences. They form the starting point for artistic productions that combine aesthetic innovation with artistic and technical research and development, and with social responsibility." },
          { ko: "공동의 로드맵과 프로젝트 컨셉은 두 차례의 대면 컨셉 워크숍을 통해 구체화된다. 각 도시에서는 크리에이티브 코딩 및 공연예술, 과학 및 시민사회, 연극 프로듀싱 및 지속가능성 분야의 지역·국가 전문가들을 초청해 자문을 구하고, 다른 문화적 배경을 가진 상대 국가의 같은 분야 전문가들을 온라인으로 연결해 다각도의 논의를 펼친다.", en: "The roadmap and the concept are developed primarily in two onsite concept workshops. In each city, regional and national experts are brought in as advisors from three fields — creative coding and performing arts; science and civil society; theatre producing and sustainability — while experts from the same fields in the other cultural context join online." },
          { ko: "공연예술, 시민사회, 과학, 지속가능성 분야의 지역 전문가들을 컨셉 개발 단계부터 적극적으로 참여시킴으로써, 양측의 파트너십을 위한 단단한 기초를 다지는 동시에 예술적 탁월함과 지속 가능한 실천이 구체적인 사회적 영향력으로 이어질 수 있는 공명의 장을 마련하고자 한다.", en: "By actively involving regional experts from the performing arts, civil society, science and sustainability from the concept stage onward, the project builds a solid foundation for the partnership and, at the same time, a resonance space in which artistic excellence and sustainable action can have a concrete social impact." }
        ]
      },
      {
        /* 지속가능한 협업 — 도트 저장소에서 국·영 그대로 */
        label: { ko: "지속가능한 협업", en: "Sustainable collaboration" },
        paras: [{ ko: "생태적 책임을 협업의 조건으로 둔다. 채식 케이터링, 이동과 숙박·워크숍에서 발생하는 탄소의 상쇄(Gold Standard), 에너지 효율이 높은 로컬 AI 모델의 사용을 원칙으로 한다. 두 차례의 대면 워크숍이 신뢰의 바탕을 만들고, 그 밖의 모든 회의는 온라인으로 진행한다.", en: "Ecological responsibility is treated as a condition of the collaboration: vegetarian catering, CO₂ compensation for travel, accommodation and workshops through Gold Standard projects, and the use of energy-efficient, local AI models. Two onsite workshops create the personal ground for trust; all further meetings take place online." }]
      }
    ],

    runs: {
      label: { ko: "워크숍", en: "Workshops" },
      rows: [
        { dates: { ko: "1차 · 2026.5.3–9", en: "First workshop · 3–9 May 2026" }, venue: { ko: "도르트문트", en: "Dortmund" } },
        { dates: { ko: "2차 · 2026.9.29–10.3", en: "Second workshop · 29 Sep – 3 Oct 2026" }, venue: { ko: "서울", en: "Seoul" } }
      ],
      note: { ko: "워크숍 외 실무 회의는 모두 온라인으로 진행한다.", en: "All other working meetings take place online" }
    },

    credits: {
      label: { ko: "크레딧", en: "Credits" },
      rows: [
        [{ ko: "파트너", en: "Partners" }, { ko: "도르트문트 연극·디지털리티 아카데미 × 프로듀서그룹 도트", en: "Academy for Theatre and Digitality × Producer Group DOT" }],
        [{ ko: "코어 프로젝트팀", en: "Core project team" }, { ko: "프로듀서그룹 도트 3인 · 도르트문트 아카데미 3인", en: "Three members each from DOT and the Academy" }],
        [{ ko: "자문 분야", en: "Advisory fields" }, { ko: "크리에이티브 코딩·공연예술 / 과학·시민사회 / 연극 프로듀싱·지속가능성", en: "Creative coding and performing arts / science and civil society / theatre producing and sustainability" }]
      ]
    },

    links: {
      label: { ko: "링크", en: "Links" },
      items: [
        { ko: "도르트문트 연극·디지털리티 아카데미", en: "Academy for Theatre and Digitality",
          url: "https://theater.digital/en/" }
      ]
    },

    tags: ["ai", "tech-society", "international", "institutions", "creative-friction", "mobility"]
  },

};
