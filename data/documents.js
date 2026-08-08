// data/documents.js
// 자료집(Documents) — 프로젝트별 자료집. 표지 클릭 시 구글 드라이브(공개)로 이동.
// 각 항목: { title_ko, title_en, year, url, cover }  cover = img/covers/{slug}.jpg
/* 프로젝트 키 → 화면에 보일 이름 (documents.html?project=키 로 걸러 봅니다) */
const DOC_PROJECTS = {
  "dance-techlab":         { ko: "무용×기술 창작 랩",   en: "Dance × Technology Creative Lab" },
  "climate-residency":     { ko: "기후변화 예술가 레지던시", en: "Climate Change Artist Residency" },
  "ganghwa":               { ko: "⬡⬡의 섬 : 강화도",   en: "The Island of ⬡⬡ : Ganghwa" },
  "tnn":                   { ko: "TNN — The Next Normal", en: "TNN — The Next Normal" },
  "connected-city":        { ko: "커넥티드 시티",       en: "Connected City" },
  "samilro":               { ko: "삼일로 LAB",          en: "Samilro LAB" },
  "inclusive-access":      { ko: "포용적 접근의 장애 예술", en: "Inclusive Access — Disability Arts" },
  "digital-dramaturgy":    { ko: "디지털 드라마터지 워크숍", en: "Digital Dramaturgy Workshop" },
  "new-connection":        { ko: "뉴커넥션",            en: "New Connection" },
  "aesthetic-human":       { ko: "미적 인간을 위한 스무 개의 대화사전", en: "Twenty Dialogues" },
  "interdisciplinary-arts":{ ko: "다원예술작가 인터뷰",  en: "Interdisciplinary Artists Interviews" }
};

const DOCUMENTS = [
  { title_ko: "TNN : Dialogue in Asia — 사전 자료집", title_en: "TNN: Dialogue in Asia — Pre-forum Booklet", year: "2026", url: "https://drive.google.com/file/d/1NMc6hj7TR6JeGWIGCPeVddzKEYjnZojx/view?usp=drive_link", project: "tnn", cover: "img/covers/tnn-2026.jpg", tags: ["국제협력"] },
  { title_ko: "디지털 드라마터지 워크숍 : 개념과 실천을 중심으로", title_en: "Digital Dramaturgy Workshop", year: "2025", url: "https://drive.google.com/file/d/1TVRmrDyJSDfyvbtR0A7q_L1zGsrPTeLO/view?usp=drive_link", project: "digital-dramaturgy", cover: "img/covers/digital-dramaturgy-2025.jpg", tags: ["기술사회", "과정중심"] },
  { title_ko: "⬡⬡의 섬 : 강화도 결과보고집", title_en: "The Island of ⬡⬡ : Ganghwa", year: "2025", url: "https://drive.google.com/file/d/1W1GN-JpnbSK6YQOm3evwzBSLu5SEGPOi/view?usp=drive_link", project: "ganghwa", cover: "img/covers/island-ganghwa-2025.jpg", tags: ["경계와공존"] },
  { title_ko: "미적 인간을 위한 스무 개의 대화사전 — '동료 시민으로서, 포용과 존중'(고영직·박지선)", title_en: "Twenty Dialogues for the Aesthetic Human", year: "2025", url: "https://search.kyobobook.co.kr/search?keyword=9791194184379", project: "aesthetic-human", cover: "img/covers/aesthetic-human-dictionary.jpg", tags: ["지역과공동체", "시민참여"] },
  { title_ko: "무용×기술 창작랩 : 포스트휴먼 & 포스트휴머니즘 (아카이브집)", title_en: "Dance×Technology Lab: Posthuman (Archive)", year: "2024", url: "https://drive.google.com/file/d/13T8JRG8mG9wmEa6LpOE5jPNm8ysaNZVM/view?usp=drive_link", project: "dance-techlab", cover: "img/covers/dtlab-2024.jpg", tags: ["기술사회", "포스트휴먼", "과정중심"] },
  { title_ko: "무용×기술 창작랩 : 포스트휴먼 & 포스트휴머니즘 (아카이브집)", title_en: "Dance×Technology Lab: Posthuman (Archive)", year: "2023", url: "https://drive.google.com/file/d/19mOugGca47pd6aXG8qeisLK5xQwv11tZ/view?usp=drive_link", project: "dance-techlab", cover: "img/covers/dtlab-2023.jpg", tags: ["기술사회", "포스트휴먼", "과정중심"] },
  { title_ko: "예술가 레지던시 — 기후변화 : 기후위기와 에너지", title_en: "Climate Change Residency: Energy", year: "2022", url: "https://drive.google.com/file/d/1w33vC6cEAug6U_JeyGTLAVKb5kThDXr2/view?usp=drive_link", project: "climate-residency", cover: "img/covers/climate-2022.jpg", tags: ["기후위기", "과정중심"] },
  { title_ko: "무용×기술 창작랩 결과자료집", title_en: "Dance×Technology Creative Lab", year: "2021–2022", url: "https://drive.google.com/file/d/1zte-wj-9rrW_Laew4rYxMfphF1H62Ei7/view?usp=drive_link", project: "dance-techlab", cover: "img/covers/dtlab-2022.jpg", tags: ["기술사회", "과정중심"] },
  { title_ko: "커넥티드 시티 — 송도 프로젝트", title_en: "Connected City — Songdo Project", year: "2021", url: "https://drive.google.com/file/d/1YHSmN167VcEKupssmhuoBP4LXwoESQva/view?usp=drive_link", project: "connected-city", cover: "img/covers/connected-city-2021.jpg", tags: ["도시와예술"] },
  { title_ko: "예술가 레지던시 — 기후변화 : 관점의 전환", title_en: "Climate Change Residency: Shift of Perspective", year: "2021", url: "https://drive.google.com/file/d/1OWR8YlYKW4O-CUJB0u_DQgYAODi4Vf5-/view?usp=drive_link", project: "climate-residency", cover: "img/covers/climate-2021.jpg", tags: ["기후위기", "과정중심"] },
  { title_ko: "뉴커넥션 New Connection — 리서치 프로젝트", title_en: "New Connection — Research Project", year: "2020", url: "https://drive.google.com/file/d/1mmqI-gRPbdwqf62NYHeW-MilUSKvWses/view?usp=drive_link", project: "new-connection", cover: "img/covers/new-connection-2020.jpg", tags: ["국제협력", "과정중심"] },
  { title_ko: "예술가 레지던시 — 기후변화 : 화천에서 환경을 말하다", title_en: "Climate Change Residency: Hwacheon", year: "2020", url: "https://drive.google.com/file/d/1DmxXEHWL5f9hKsCQWXnqQfIkfxADlIRu/view?usp=drive_link", project: "climate-residency", cover: "img/covers/climate-2020.jpg", tags: ["기후위기", "지역과공동체", "과정중심"] },
  { title_ko: "삼일로 LAB : 21세기 디지털 시대의 연극", title_en: "Samilo LAB: Theatre in the Digital Age", year: "2019", url: "https://drive.google.com/file/d/1vJsVt47iEjVP-2_JEKEUCrG7mA58gagB/view?usp=drive_link", project: "samilro", cover: "img/covers/samilo-lab-2019.jpg", tags: ["기술사회"] },
  { title_ko: "포용적 접근의 장애 예술 창작·관객 개발 리서치 및 워크숍 기록집", title_en: "Disability Arts: Inclusive Access (Record)", year: "2019", url: "https://drive.google.com/file/d/1vJMkrvOUFRsas3L474qWa88GEEOI5jy5/view?usp=drive_link", project: "inclusive-access", cover: "img/covers/disability-arts-2019.jpg", tags: ["시민참여", "과정중심"] },
  { title_ko: "다원예술작가 인터뷰 책자 — 국문판 (책임편집, 예술경영지원센터)", title_en: "Korean Contemporary Interdisciplinary Arts (Korean ed.)", year: "2018", url: "https://drive.google.com/file/d/1JkQqZIqK8fVcaejeQ-EfF3tVy8hTLF6Z/view?usp=drive_link", project: "interdisciplinary-arts", cover: "img/covers/interdisciplinary-arts-ko.jpg", tags: ["축제다원예술"] },
  { title_ko: "다원예술작가 인터뷰 책자 — 영문판 (책임편집, 예술경영지원센터)", title_en: "Korean Contemporary Interdisciplinary Arts (English ed.)", year: "2018", url: "https://drive.google.com/file/d/1hCt8C-hbR6sD-t98UdjZ9o5HviHUmXyL/view?usp=drive_link", project: "interdisciplinary-arts", cover: "img/covers/interdisciplinary-arts-en.jpg", tags: ["축제다원예술"] },
];