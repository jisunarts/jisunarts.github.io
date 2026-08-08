// data/photos.js
// 사진(Photographs) — 대표 이미지 그리드 → 클릭.
//  · link 필드가 있으면: 외부 포토북(새 탭)
//  · images 필드가 있으면: 사이트 내 갤러리(그 자리에서 사진 열림)
// category: 공연 / 프로젝트 / 여행기  (지금은 필터 없이 한 그리드, 나중에 필터로 사용)
const PHOTOS = [
  {
    id: "sync-tinc",
    title_ko: "싱크 디 싱크 — TINC 리허설 기록",
    title_en: "Sync the Sync — TINC Rehearsal",
    category: "공연", year: "2026", tags: ["기술사회","포스트휴먼","과정중심"],
    cover: "img/photos/sync-cover.jpg",
    link: "https://jisunarts.github.io/syncdesync_photo"
  },
  {
    id: "patagonia",
    title_ko: "파타고니아",
    title_en: "Patagonia",
    category: "여행기", year: "2024", tags: ["이동성"],
    cover: "img/photos/patagonia-lake-1.jpg",
    images: [
      "img/photos/patagonia-lake-1.jpg",
      "img/photos/patagonia-lake-2.jpg",
      "img/photos/patagonia-road.jpg",
      "img/photos/patagonia-shore.jpg",
      "img/photos/patagonia-wide.jpg",
      "img/photos/water-grass.jpg",
      "img/photos/walking.jpg"
    ]
  }
];
