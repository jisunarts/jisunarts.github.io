// data/trajectory.js
// 궤적 — 26년을 네 시기로. 사이트의 '궤적(About/소개)' 섹션 데이터.
// 각 시기: 연도 · 제목(국/영) · 한 줄 요약(국/영) · 대표 활동 · 질문(국/영) · 태그
const TRAJECTORY = [
  {
    id: "p1",
    years: "2001–2008",
    title_ko: "난장, 그리고 첫 항해",
    title_en: "The Festival Ground, and the First Voyage Out",
    essence_ko: "축제 현장에서 새로운 형식을 개발하고, 동시에 한국 동시대 공연의 해외진출을 처음 시도한 시기.",
    essence_en: "Developing new forms in the festival field, while making the first attempts to take Korean contemporary performance abroad.",
    works_ko: "춘천마임축제 · SPAF · ASSITEJ, Moving Space 레지던시, 장소특정형·서커스·이동형·몰입형; 아시아나우 공동설립, 여행자·사다리 에든버러 진출",
    questions: [
      { ko: "축제는 관광이 아니라 예술이 될 수 있는가?", en: "Can a festival be art rather than tourism?" },
      { ko: "도시 전체를 어떻게 축제화할 것인가 — 도시와 자연의 공간성?", en: "How do we turn a whole city into a festival — the spatiality of city and nature?" },
      { ko: "시민을 축제의 능동적 생산자로 어떻게 만들 것인가?", en: "How do we make citizens active producers of the festival?" },
      { ko: "예술의 새로운 형식은 어디에서 오는가?", en: "Where do new artistic forms come from?" },
      { ko: "전통이 아닌 동시대 작품을 유럽에 어떻게 소개할 것인가?", en: "How do we introduce contemporary — not traditional — work to Europe?" }
    ],
    tags: ["축제", "다원예술", "장르간 협업", "새로운 형식", "시민참여", "해외진출"]
  },
  {
    id: "p2",
    years: "2009–2013",
    title_ko: "전략, 거점 그리고 확장",
    title_en: "Strategy, Foothold, and Expansion",
    essence_ko: "예술경영지원센터(KAMS)에서 한국 공연예술의 전략적 해외진출을 설계하고 국제 네트워크를 넓힌 시기.",
    essence_en: "At the Korea Arts Management Service (KAMS), designing strategy for the international expansion of Korean performing arts and widening the international network.",
    works_ko: "국제사업부 전략기획팀장, 서울아트마켓(PAMS)",
    questions: [
      { ko: "한국 공연예술 해외진출의 전략적 거점은 어디인가?", en: "Where is the strategic foothold for Korean performing arts abroad?" },
      { ko: "전략적 해외진출, 작품 중심의 교류란 무엇인가?", en: "What is strategic expansion, and work-centered exchange?" },
      { ko: "아시아의 컨템포러리 공연은 무엇인가?", en: "What is contemporary performance in Asia?" }
    ],
    tags: ["국제교류", "전략", "네트워크", "제도와 공공성"]
  },
  {
    id: "p3",
    years: "2014–2019",
    title_ko: "독립적 · 수평적 · 창의적",
    title_en: "Independent · Horizontal · Creative",
    essence_ko: "프로듀서그룹 도트와 아시아 프로듀서 플랫폼(APP)을 공동 창설하고, 리서치 기반·수평적 협업으로 '프로듀서라는 자리'를 새로 만든 시기.",
    essence_en: "Co-founding Producer Group DOT and the Asian Producers' Platform (APP), and building 'the producer's place' through research-based, horizontal collaboration.",
    works_ko: "커넥티드 시티, 남원 사운드 아티스트 레지던시, DMZ 리서치랩, APP CAMP, 국제공동제작",
    questions: [
      { ko: "마켓이 아니라 프로듀서 중심의 네트워크는 가능한가 — 아시아 연대?", en: "Is a producer-centered network — not a market — possible? (Asian solidarity)" },
      { ko: "민간에서 독립 기획자로 산다는 것은 무엇인가?", en: "What does it mean to live as an independent producer outside institutions?" },
      { ko: "위계가 아닌 수평적 조직 실험은 어떻게 가능한가?", en: "How is a horizontal, non-hierarchical organisation possible?" },
      { ko: "게토화·박제화되는 도시에서 지금 축제는 어떻게 존재해야 하는가?", en: "In a city turning to ghettos and taxidermy, how should a festival exist now?" },
      { ko: "마찰 없는 기술사회에서 창조적 마찰을 어떻게 만들 것인가?", en: "In a frictionless technological society, how do we make creative friction?" },
      { ko: "시장 진출에서 사람 교류로, 결과에서 과정으로.", en: "From market entry to human exchange; from result to process." }
    ],
    tags: ["독립적", "수평적", "창조적 마찰", "아시아연대", "도시와 예술", "경계", "과정 중심"]
  },
  {
    id: "p4",
    years: "2020–현재",
    title_ko: "다시 보는 세상, 다음의 정상성",
    title_en: "The World, Seen Again — The Next Normal",
    essence_ko: "다시 예술의 근본을 묻고, 세상을 예술로 다시 바라보는 시기. 기후위기와 '다음의 정상성' 앞에서, 예술로서 창조적 마찰을 만들어 가고자 하는 시기.",
    essence_en: "A period of asking art's fundamentals anew and seeing the world again through art. Before the climate crisis and 'the next normal,' seeking to make creative friction through art.",
    works_ko: "무용×기술 창작랩, 기후변화 예술가 레지던시, 에코 드라마투르기, TNN, ⬡⬡의 섬",
    questions: [
      { ko: "기후위기 속 예술의 사회적 역할은 무엇인가?", en: "What is art's social role within the climate crisis?" },
      { ko: "인간이 유일한 주체가 아닐 때 무대는 무엇이 되는가 — 포스트휴먼?", en: "When the human is not the only subject, what becomes of the stage? (posthuman)" },
      { ko: "박물관화되는 극장에서 liveness는 어디에 있고, 미래에 극장은 존재할까?", en: "As theatres become museums, where is liveness — and will theatre exist in the future?" },
      { ko: "기술이 도구가 될 때 대체될 수 없는 예술가의 고유함은 무엇인가?", en: "When technology becomes the tool, what remains irreplaceably the artist's own?" },
      { ko: "단절의 시대에 예술은 어떻게 브릿지가 되는가?", en: "In an age of disconnection, how does art become a bridge?" }
    ],
    tags: ["기후위기", "기술사회", "포스트휴먼", "창조적 마찰", "인간과 비인간", "AI"]
  }
];
