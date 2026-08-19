/* ==========================================================================
   data/tags.js — 태그 사전 (사이트에서 태그를 쓰는 모든 화면이 여기만 봅니다)

   · 각 데이터 파일에는 key 만 저장합니다. 화면에 보이는 이름은 여기서 정합니다.
   · en 이 비어 있으면 국문 이름이 그대로 나옵니다. 영문이 생기면 채우세요.
   · question 은 '질문으로 보기'에서 그 태그가 여는 질문입니다.
   · 필터는 key 로 동작하므로 언어를 바꿔도 결과가 달라지지 않습니다.
   ========================================================================== */

const TAGS = [
  { key: "climate-crisis",   ko: "기후위기",     en: "Climate Crisis",
    question_ko: "기후위기 속에서 예술은 어떤 역할을 하는가?",
    question_en: "What role does art play in the climate crisis?" },
  { key: "climate-justice",  ko: "기후정의",     en: "Climate Justice",
    question_ko: "기후위기의 대가는 누가 치르는가?",
    question_en: "Who pays the price of the climate crisis?" },
  { key: "tech-society",     ko: "기술사회",     en: "Technology & Society",
    question_ko: "기술은 인간과 예술을 어떻게 변화시키는가?",
    question_en: "How is technology changing humans and art?" },
  { key: "posthuman",        ko: "포스트휴먼",   en: "Posthuman",
    question_ko: "인간이 유일한 주체가 아닐 때, 무대는 무엇이 되는가?",
    question_en: "When the human is not the only subject, what becomes of the stage?" },
  { key: "ai",               ko: "AI",          en: "AI",
    question_ko: "AI의 시대, 예술의 미학과 윤리는 무엇인가?",
    question_en: "In the age of AI, what are the aesthetics and ethics of art?" },
  { key: "creative-friction", ko: "창조적마찰",  en: "Creative Friction",
    question_ko: "마찰 없는 사회에서 창조적 마찰을 어떻게 만들 것인가?",
    question_en: "How do we create friction in a frictionless society?" },
  { key: "mobility",         ko: "이동성",       en: "Mobility",
    question_ko: "예술가는 왜 이동하고, 왜 머무는가?",
    question_en: "Why do artists move, and why do they stay?" },
  { key: "asian-solidarity", ko: "아시아연대",   en: "Asian Solidarity",
    question_ko: "아시아의 동료들과 어떤 지식과 연대를 만들 수 있는가?",
    question_en: "What knowledge and solidarity can we build with colleagues across Asia?" },
  { key: "international",    ko: "국제협력",     en: "International Collaboration",
    question_ko: "국제교류는 시장이 아니라 관계가 될 수 있는가?",
    question_en: "Can international exchange be a relationship rather than a market?" },
  { key: "borders-coexistence", ko: "경계와공존", en: "Borders & Coexistence",
    question_ko: "경계를 가진 채 어떻게 공존할 수 있는가?",
    question_en: "How can we coexist while holding our borders?" },
  { key: "city-art",         ko: "도시와예술",   en: "Cities & Art",
    question_ko: "도시에서 예술은 무엇을 만드는가?",
    question_en: "What does art make in the city?" },
  { key: "region-community", ko: "지역과공동체", en: "Regions & Communities",
    question_ko: "예술은 어떻게 새로운 공동체를 만드는가?",
    question_en: "How does art bring new communities into being?" },
  { key: "festival",         ko: "축제",         en: "Festivals",
    question_ko: "축제는 관광이 아니라 예술이 될 수 있는가?",
    question_en: "Can a festival be art rather than tourism?" },
  { key: "multidisciplinary", ko: "다원예술",    en: "Multidisciplinary Arts",
    question_ko: "예술이 하나의 형식에 머무르지 않을 때 무엇이 일어나는가?",
    question_en: "What happens when art refuses to stay in one form?" },
  { key: "civic",            ko: "시민참여",     en: "Civic Participation",
    question_ko: "시민을 어떻게 축제의 능동적 생산자로 만들 것인가?",
    question_en: "How do citizens become active producers of a festival?" },
  { key: "independent",      ko: "독립적",       en: "Independent",
    question_ko: "독립적으로 일한다는 것은 무엇인가?",
    question_en: "What does it mean to work independently?" },
  { key: "horizontal",       ko: "수평적",       en: "Horizontal",
    question_ko: "수평적 협업은 어떻게 가능한가?",
    question_en: "How is horizontal collaboration possible?" },
  { key: "process",          ko: "과정중심",     en: "Process-Led",
    question_ko: "결과보다 과정 중심의 창작은 어떻게 설계되는가?",
    question_en: "How do you design creation around process rather than outcome?" },
  { key: "institutions",     ko: "제도와공공성", en: "Institutions & the Public Good",
    question_ko: "예술은 동시대 사회와 제도에 어떻게 개입하는가?",
    question_en: "How does art intervene in contemporary society and its institutions?" },
  { key: "etc",              ko: "기타",         en: "Other",
    question_ko: "", question_en: "" }
];

/* --- 태그를 골랐을 때 항목 목록 위에 얹는 안내 링크 ---------------------
   '질문으로 보기'에서 그 태그를 고르면 목록 맨 위에 한 줄이 붙습니다.
   여기 없는 태그는 아무것도 나오지 않습니다. 다른 태그에도 붙이려면
   같은 모양으로 한 줄 더하면 됩니다. 주소는 사이트 안이면 같은 탭,
   http 로 시작하면 새 탭에서 열립니다.                                    */
const TAG_LINKS = {
  "climate-crisis": {
    url: "climate.html",
    label: { ko: "기후 작업 6년, 한 장으로 보기 →",
             en: "Six Years of Climate Work, at a Glance →" }
  }
};


/* --- 사전 조회 (모든 화면이 이 세 함수만 씁니다) ----------------------- */

/** 태그 key 로 { ko, en } 라벨을 얻습니다. en 이 비어 있으면 ko 를 씁니다. */
function tagLabel(key) {
  const t = TAGS.filter(function (x) { return x.key === key; })[0];
  if (!t) return { ko: key, en: key };                 /* 사전에 없는 값은 그대로 */
  return { ko: t.ko, en: t.en || t.ko };
}

/** 태그 key 가 여는 질문 { ko, en }. 없으면 null. */
function tagQuestion(key) {
  const t = TAGS.filter(function (x) { return x.key === key; })[0];
  if (!t || !t.question_ko) return null;
  return { ko: t.question_ko, en: t.question_en || t.question_ko };
}

/** 태그 key 에 얹을 안내 링크 { url, label }. 없으면 null. */
function tagLink(key) {
  const l = (typeof TAG_LINKS !== "undefined") ? TAG_LINKS[key] : null;
  if (!l || !l.url) return null;
  return l;
}
