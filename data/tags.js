/* ==========================================================================
   data/tags.js — 태그 사전 (사이트에서 태그를 쓰는 모든 화면이 여기만 봅니다)

   · 각 데이터 파일에는 key 만 저장합니다. 화면에 보이는 이름은 여기서 정합니다.
   · en 이 비어 있으면 국문 이름이 그대로 나옵니다. 영문이 생기면 채우세요.
   · question 은 '질문으로 보기'에서 그 태그가 여는 질문입니다.
   · 필터는 key 로 동작하므로 언어를 바꿔도 결과가 달라지지 않습니다.
   ========================================================================== */

const TAGS = [
  { key: "climate-crisis",   ko: "기후위기",     en: "",
    question_ko: "기후위기 속에서 예술은 어떤 역할을 하는가?", question_en: "" },
  { key: "climate-justice",  ko: "기후정의",     en: "",
    question_ko: "기후위기의 대가는 누가 치르는가?", question_en: "" },
  { key: "tech-society",     ko: "기술사회",     en: "",
    question_ko: "기술은 인간과 예술을 어떻게 변화시키는가?", question_en: "" },
  { key: "posthuman",        ko: "포스트휴먼",   en: "",
    question_ko: "인간이 유일한 주체가 아닐 때, 무대는 무엇이 되는가?", question_en: "" },
  { key: "ai",               ko: "AI",          en: "",
    question_ko: "AI의 시대, 예술의 미학과 윤리는 무엇인가?", question_en: "" },
  { key: "creative-friction", ko: "창조적마찰",  en: "",
    question_ko: "마찰 없는 사회에서 창조적 마찰을 어떻게 만들 것인가?", question_en: "" },
  { key: "mobility",         ko: "이동성",       en: "",
    question_ko: "예술가는 왜 이동하고, 왜 머무는가?", question_en: "" },
  { key: "asian-solidarity", ko: "아시아연대",   en: "",
    question_ko: "아시아의 동료들과 어떤 지식과 연대를 만들 수 있는가?", question_en: "" },
  { key: "international",    ko: "국제협력",     en: "",
    question_ko: "국제교류는 시장이 아니라 관계가 될 수 있는가?", question_en: "" },
  { key: "borders-coexistence", ko: "경계와공존", en: "",
    question_ko: "경계를 가진 채 어떻게 공존할 수 있는가?", question_en: "" },
  { key: "city-art",         ko: "도시와예술",   en: "",
    question_ko: "도시에서 예술은 무엇을 만드는가?", question_en: "" },
  { key: "region-community", ko: "지역과공동체", en: "",
    question_ko: "예술은 어떻게 새로운 공동체를 만드는가?", question_en: "" },
  { key: "festival",         ko: "축제다원예술", en: "",
    question_ko: "축제는 관광이 아니라 예술이 될 수 있는가?", question_en: "" },
  { key: "civic",            ko: "시민참여",     en: "",
    question_ko: "시민을 어떻게 축제의 능동적 생산자로 만들 것인가?", question_en: "" },
  { key: "independent",      ko: "독립수평",     en: "",
    question_ko: "독립성과 수평적 협업은 어떻게 가능한가?", question_en: "" },
  { key: "process",          ko: "과정중심",     en: "",
    question_ko: "결과보다 과정 중심의 창작은 어떻게 설계되는가?", question_en: "" },
  { key: "institutions",     ko: "제도와공공성", en: "",
    question_ko: "예술은 동시대 사회와 제도에 어떻게 개입하는가?", question_en: "" },
  { key: "etc",              ko: "기타",         en: "",
    question_ko: "", question_en: "" }
];

/* --- 사전 조회 (모든 화면이 이 두 함수만 씁니다) ----------------------- */

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
