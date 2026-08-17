#!/bin/sh
# ==========================================================================
# tools/set-domain.sh — 사이트 주소(도메인)를 한 번에 바꿉니다.
#
#   쓰는 법:  sh tools/set-domain.sh https://새주소.com
#   지금 값:  아래 CURRENT 한 줄이 사이트가 쓰고 있는 주소입니다.
#
# 왜 이런 도구가 필요한가
#   공유 카드(og:image, og:url)와 canonical 은 반드시 절대 주소여야 합니다.
#   카카오톡·슬랙의 크롤러는 자바스크립트를 실행하지 않으므로
#   주소를 js 에서 조립해 넣을 수 없고, HTML 마다 글자로 박혀 있어야 합니다.
#   그래서 "한 곳"은 파일이 아니라 이 스크립트가 됩니다 —
#   주소를 바꿀 일이 생기면 이 명령 한 줄이면 전 페이지가 함께 바뀝니다.
#
# 함께 바뀌는 것
#   · 모든 *.html 의 og:url · og:image · twitter:image · canonical
#   · data/site.js 의 SITE.baseUrl   (사이트 안에서 주소가 필요할 때 쓰는 값)
#   · sitemap.xml 의 모든 <loc> · robots.txt 의 Sitemap 줄
#   · 이 파일의 CURRENT
#
# 커스텀 도메인을 붙일 때는 CNAME 파일도 함께 만들어야 합니다.
# ==========================================================================

CURRENT="https://jisunarts.com"

NEW="$1"
if [ -z "$NEW" ]; then
  echo "지금 주소: $CURRENT"
  echo "쓰는 법:   sh tools/set-domain.sh https://새주소.com"
  exit 1
fi

# 끝의 / 는 떼어 냅니다 — 주소를 이을 때 // 가 되지 않도록
NEW=$(printf '%s' "$NEW" | sed 's#/$##')

if [ "$NEW" = "$CURRENT" ]; then
  echo "이미 $CURRENT 입니다. 바꿀 것이 없습니다."
  exit 0
fi

cd "$(dirname "$0")/.." || exit 1

n=0
for f in $(find . -name '*.html' -not -path './.git/*' -not -path './data/*') \
         data/site.js sitemap.xml robots.txt tools/set-domain.sh; do
  [ -f "$f" ] || continue
  if grep -q "$CURRENT" "$f" 2>/dev/null; then
    # | 를 구분자로 써서 주소 안의 / 를 이스케이프하지 않아도 되게 합니다
    sed -i '' "s|$CURRENT|$NEW|g" "$f"
    echo "  바꿈  $f"
    n=$((n + 1))
  fi
done

HOST=$(printf '%s' "$NEW" | sed -e 's#^https://##' -e 's#^http://##')

echo ""
echo "$CURRENT  →  $NEW   ($n 개 파일)"
echo "커스텀 도메인이라면 CNAME 파일도 만들어야 합니다:"
echo "  echo $HOST > CNAME"
