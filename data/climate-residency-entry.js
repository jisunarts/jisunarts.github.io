// 기후변화 예술가 레지던시 — now.js '프로젝트' 항목 교체용 데이터
// 기존 항목을 이 내용으로 덮어쓰기. 필드 이름은 now.js 규칙에 맞춰 병합할 것.

{
  category: "프로젝트",
  title_ko: "예술텃밭 예술가 레지던시 — 기후변화",
  title_en: "Arts Farm Tutbat Artist Residency — Climate Change",
  year: "2020–2022",
  role: "공동 기획",
  partner: "예술텃밭 Arts Farm Tutbat × 프로듀서그룹 도트",
  cover: "img/works/climate-residency/2021/08.jpg",   // 초록 대나무 돔 앞 단체사진
  url: "",                   // 상세 페이지는 나중에
  tags: ["기후위기", "과정중심", "지역과공동체"],
  detail: {
    summary: "기후변화라는 거대 담론을 삶 속에 구체화하고 예술적 실천으로 옮기는 예술가 레지던시.",

    description: "예술텃밭 예술가 레지던시는 2020년 시작된 예술가들의 기후변화 대응 프로젝트다. 연극, 다원예술, 시각예술, 영화, 영상, 책 등 다양한 분야의 예술가와 기획자, 리서처들이 함께 기후변화에 대해 탐구하며, 막연한 거대 담론을 우리의 삶 속에 구체화하고 예술적 실천을 만들어내고자 한다.\n\n2020년 인류를 습격한 코로나 바이러스는 전 지구인의 삶을 변화시켰고, 우리는 여전히 불확실한 일상을 살아가고 있다. 많은 전문가들은 지구 온난화와 환경 문제가 코로나 바이러스 같은 신종 바이러스를 촉발시켰다고 이야기하며, 향후에도 또 다른 전염병 유행 확률이 높아질 것이라 예상한다. 기후변화는 지구와 인류의 지속가능성을 위한 시급한 문제다. 그리고 이것은 자연, 동물, 먹거리, 노동, 인권의 문제와도 연관된 복잡한 체계 안에 놓여 있다.",

    features: [
      "온라인과 오프라인 레지던시가 동시에 진행된다.",
      "참여 작가는 개별 리서치와 개별 작업을 진행하지만, 공동 리서치와 공유 시간을 통해 서로 정보와 지식, 영감을 나누며 협업한다.",
      "기후변화에 대한 지역적 관점과 전 지구적 관점을 동시에 갖는다."
    ],

    // 연도별 블록 — 오른쪽 60%를 세 덩어리로 나눠 렌더링
    // 각 블록: 연도 소제목 → 기록 영상(span 4) → 사진 5장(2+2 / 1+1+2) → '사진 전체 보기' 슬라이드
    editions: [
      {
        year: "2020",
        title: "화천에서 환경을 말하다",
        video: "4JJyId1JZMY",
        dir: "img/works/climate-residency/2020/",
        total: 14,
        grid: [
          { src: "12.jpg", span: 2 }, { src: "08.jpg", span: 2 },
          { src: "03.jpg", span: 1 }, { src: "11.jpg", span: 1 }, { src: "14.jpg", span: 2 }
        ]
      },
      {
        year: "2021",
        title: "관점의 전환, 세상을 보는 시선들",
        video: "oz65z1gxYbc",
        dir: "img/works/climate-residency/2021/",
        total: 24,
        grid: [
          { src: "08.jpg", span: 2 }, { src: "12.jpg", span: 2 },
          { src: "04.jpg", span: 1 }, { src: "16.jpg", span: 1 }, { src: "13.jpg", span: 2 }
        ]
      },
      {
        year: "2022",
        title: "기후위기 – 에너지",
        video: "RVg2Oe2gHPc",
        dir: "img/works/climate-residency/2022/",
        total: 20,
        grid: [
          { src: "08.jpg", span: 2 }, { src: "11.jpg", span: 2 },
          { src: "01.jpg", span: 1 }, { src: "03.jpg", span: 1 }, { src: "05.jpg", span: 2 }
        ]
      }
    ],

    // 레지던시에서 이어진 협력 작품 (제작 프로듀서그룹 도트)
    works: [
      {
        year: "2022",
        title: "무제의 길 〈움직이는 숲〉",
        note: "서울국제공연예술제 초청작",
        url: "https://www.untitledroad.com/projects/moving-a-forest_theatre-game"
      },
      {
        year: "2023",
        title: "지연 X 전환 〈에너지_보이지 않는 언어〉",
        note: "서울국제공연예술제 초청작",
        video: "arl9qntbhXc"
      }
    ],

    // 레지던시(2020–2022) 이후 지금까지
    ongoing: "예술텃밭 기후변화 레지던시는 2022년 이후에도 매해 예술가들과 텃밭을 가꾸고 리서치를 하며 비정기적으로 모임을 지속하고 있다. 현재 다음 단계의 국제 레지던시로 확장하기 위한 논의를 진행하고 있다.",

    links: [
      { label: "프로젝트 웹사이트 →", url: "http://artstutbatclimatechange.com/?page_id=669" },
      { label: "자료집 3종 보기 →",  url: "documents.html?project=climate-residency" },
      { label: "인스타그램 →",       url: "https://www.instagram.com/tutbatclimatechange/" }
    ],

    // 연도 블록 세 개가 끝난 뒤 맨 아래에 붙는 영상
    closingVideo: { id: "arl9qntbhXc", span: 4, caption: "2023 지연 X 전환 〈에너지_보이지 않는 언어〉" },

    photoCredit: "사진 제공 예술텃밭 기후변화 레지던시"
  }
}
