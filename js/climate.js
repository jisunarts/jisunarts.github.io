/* ==========================================================================
   js/climate.js — 기후 (강의용 단독 화면)

   data/climate.js 의 CLIMATE 를 가로 시간축으로 그립니다.
     위   개념 네 개가 계단처럼 등장. 등장 지점에서 흐린 연두 세로선이 내려감
     아래 작업이 세 갈래 레인에. 단발은 연두 점, 기간은 연두 막대
     맨 아래 연도축

   격자선·박스는 쓰지 않습니다. 선은 두 종류뿐 —
   개념에서 내려오는 세로선과 레인 기준선.

   제목이 서로 겹치지 않도록, 레인 안에서 자리를 못 찾은 작업은 한 단씩
   위로 올려 쌓습니다(아래 packLane). 제목 폭은 글자 수로 어림잡습니다 —
   브라우저에 물어보지 않으므로 그리기 전에 자리가 정해지고, 화면 폭이
   바뀌면 다시 계산합니다.
   ========================================================================== */

(function climateScreen() {

  const mount = document.getElementById("climate-mount");
  if (!mount) return;

  /* --- 준비 확인 ------------------------------------------------------- */
  var missing = [];
  if (typeof CLIMATE === "undefined") missing.push("data/climate.js (CLIMATE)");
  if (typeof esc !== "function")      missing.push("js/layout.js (esc)");
  if (typeof koOf !== "function")     missing.push("js/layout.js (koOf)");

  if (missing.length) {
    console.error("[기후] 화면을 그리지 못했습니다. 없는 것: " + missing.join(", ") +
      " — 스크립트가 모두 내려받아졌는지 확인해 주세요.");
    mount.innerHTML = '<p class="ct-missing">화면을 불러오지 못했습니다. 새로고침해 주세요.</p>';
    return;
  }

  /* --- 치수 (여기 숫자만 바꾸면 화면이 조여지거나 넉넉해집니다) --------- */
  const STEP = 44;   /* 개념 계단 한 단 높이 */
  const LVH  = 38;   /* 레인 안에서 한 단 높이 */
  const PAD  = 16;   /* 이웃한 작업 사이 최소 틈 (px) */
  const GAP  = 30;   /* 레인과 레인 사이 */

  /* --- 연도 읽기 -------------------------------------------------------
     "2022"    → 2022 ~ 2022
     "2021–22" → 2021 ~ 2022   (뒤 두 자리는 앞 연도의 세기를 따릅니다)
     "2023–26" → 2023 ~ 2026                                            */
  function years(str) {
    const s = String(str == null ? "" : str);
    const m = s.match(/(\d{4})\s*[–—-]\s*(\d{2,4})/);
    if (m) {
      const from = parseInt(m[1], 10);
      let to = parseInt(m[2], 10);
      if (m[2].length === 2) to = Math.floor(from / 100) * 100 + to;
      return { from: from, to: to };
    }
    const one = s.match(/\d{4}/);
    const y = one ? parseInt(one[0], 10) : 0;
    return { from: y, to: y };
  }

  /* --- 글자 폭 어림 ----------------------------------------------------
     브라우저에 재지 않고 글자 종류로 셈합니다. 한글·CJK 는 한 칸,
     영문·숫자는 반 칸 남짓. 정확하지 않아도 되고, 겹침을 피할 만큼만
     넉넉하면 됩니다.                                                     */
  function textWidth(str, fs) {
    const s = String(str == null ? "" : str);
    let w = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      if (c === 32) w += 0.30;                                   /* 빈칸 */
      else if (c > 0x1100) w += 0.95;                             /* 한글·CJK·〈〉·→ */
      else if (c >= 48 && c <= 57) w += 0.55;                     /* 숫자 */
      else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) w += 0.52;
      else w += 0.42;
    }
    return w * fs;
  }

  /* --- 레인 안에서 자리 잡기 -------------------------------------------
     왼쪽부터 차례로 놓되, 이미 놓인 것과 가로로 겹치면 한 단 위로.
     제목이 오른쪽 끝을 넘칠 것 같으면 제목을 왼쪽으로 뒤집어 답니다.   */
  function packLane(items, plotPx, x) {
    const levels = [];

    items.sort(function (a, b) {
      if (a.from !== b.from) return a.from - b.from;
      return (a.to - a.from) - (b.to - b.from);   /* 같은 해면 짧은 것부터 아래 */
    });

    items.forEach(function (it) {
      const markL = x(it.from) / 100 * plotPx;
      const markR = x(it.to)   / 100 * plotPx;

      if (markL + it.w > plotPx) {                 /* 오른쪽 끝을 넘침 */
        it.align = "right";
        it.textL = markL - it.w;
        it.textR = markL;
      } else {
        it.align = "left";
        it.textL = markL;
        it.textR = markL + it.w;
      }

      const L = Math.min(markL, it.textL) - PAD;
      const R = Math.max(markR, it.textR) + PAD;

      let lv = 0;
      while (levels[lv] && levels[lv].some(function (s) { return !(R <= s[0] || L >= s[1]); })) lv++;
      if (!levels[lv]) levels[lv] = [];
      levels[lv].push([L, R]);
      it.level = lv;
    });

    return levels.length;
  }

  /* --- 한 번 그리기 ---------------------------------------------------- */
  function draw() {

    /* 작업을 레인별로 모으고, 개념의 등장 연도를 단계에서 꺼냅니다 */
    const laneDefs = CLIMATE.lanes || [];
    const byLane = {};
    laneDefs.forEach(function (l) { byLane[l.key] = []; });

    const concepts = [];
    let minY = Infinity, maxY = -Infinity;

    (CLIMATE.stages || []).forEach(function (st) {
      const ws = st.works || [];
      if (ws.length) concepts.push({ text: koOf(st.concept), year: years(ws[0].year).from });

      ws.forEach(function (w) {
        const y = years(w.year);
        if (y.from < minY) minY = y.from;
        if (y.to   > maxY) maxY = y.to;

        const fs = w.repeat ? 12.5 : 15;
        const item = {
          title: koOf(w.title),
          note:  w.note ? koOf(w.note) : "",
          url:   w.url || "",
          reading: !!w.reading,
          repeat:  !!w.repeat,
          from: y.from, to: y.to, fs: fs
        };
        item.w = Math.max(textWidth(item.title, fs), item.note ? textWidth(item.note, 11) : 0);

        const key = byLane[w.lane] ? w.lane : (laneDefs[0] && laneDefs[0].key);
        if (key) byLane[key].push(item);

        /* 다른 레인으로 넘어가는 작업 — 그 레인 그 해에 연두 점만 하나 더.
           제목은 원래 레인의 막대에만 답니다(같은 말이 두 번 나오지 않게). */
        if (w.handoff && byLane[w.handoff.lane]) {
          const hy = years(w.handoff.year);
          if (hy.from < minY) minY = hy.from;
          if (hy.to   > maxY) maxY = hy.to;
          byLane[w.handoff.lane].push({
            title: "", note: "", url: "", reading: false, repeat: false,
            from: hy.from, to: hy.to, fs: 15, w: 0
          });
        }
      });
    });

    if (!isFinite(minY) || maxY <= minY) { mount.innerHTML = ""; return; }

    const span = maxY - minY;
    function x(y) { return (y - minY) / span * 100; }

    /* 화면 폭 — 아직 그리기 전이라 자리를 만들어 재 봅니다 */
    const probe = document.createElement("div");
    probe.className = "ct";
    probe.style.visibility = "hidden";
    mount.innerHTML = "";
    mount.appendChild(probe);
    const plotPx = Math.max(520, probe.clientWidth - 96);   /* 96px = 왼쪽 레인 이름 칸 */
    mount.removeChild(probe);

    /* 레인마다 자리 잡기.
       baseline: false 인 띠는 기준선을 긋지 않습니다 — 레인 사이에 놓이는
       작업 자리입니다. */
    const lanes = laneDefs.map(function (l) {
      const items = byLane[l.key] || [];
      const n = items.length ? packLane(items, plotPx, x) : 1;
      return { name: koOf(l.name), items: items, levels: n,
               base: l.baseline !== false,
               height: (n - 1) * LVH + 58 };
    });

    /* --- 조각들 ------------------------------------------------------- */

    const conceptsH = concepts.length * STEP + 12;

    const rails = concepts.map(function (c, i) {
      return '<i class="ct-rail" style="left:' + x(c.year).toFixed(3) + '%;top:' +
             (i * STEP + 27) + 'px"></i>';
    }).join("");

    const conceptEls = concepts.map(function (c, i) {
      return '<span class="ct-concept" style="left:' + x(c.year).toFixed(3) + '%;top:' +
             (i * STEP) + 'px">' + esc(c.text) + "</span>";
    }).join("");

    function itemEl(it) {
      const base = it.level * LVH;                 /* 기준선에서 이 단까지 */
      const dotB = base - 5;                       /* 지름 10px 점의 아래쪽 */
      const ringB = base - 6;                      /* 지름 12px 속 빈 원 */
      const bits = [];

      if (it.from === it.to) {
        bits.push('<i class="ct-dot" style="left:' + x(it.from).toFixed(3) +
                  '%;bottom:' + dotB + 'px"></i>');
      } else if (it.reading) {
        /* 낭독 → 본공연 : 속 빈 원 → 가는 막대 → 채운 점 */
        bits.push('<i class="ct-line" style="left:' + x(it.from).toFixed(3) +
                  '%;width:' + (x(it.to) - x(it.from)).toFixed(3) +
                  '%;bottom:' + (base - 1.5) + 'px"></i>');
        bits.push('<i class="ct-ring" style="left:' + x(it.from).toFixed(3) +
                  '%;bottom:' + ringB + 'px"></i>');
        bits.push('<i class="ct-dot" style="left:' + x(it.to).toFixed(3) +
                  '%;bottom:' + dotB + 'px"></i>');
      } else {
        bits.push('<i class="ct-bar" style="left:' + x(it.from).toFixed(3) +
                  '%;width:' + (x(it.to) - x(it.from)).toFixed(3) +
                  '%;bottom:' + (base - 3) + 'px"></i>');
      }

      const cls = "ct-item" +
        (it.align === "right" ? " is-right" : "") +
        (it.url ? "" : " is-plain") +
        (it.repeat ? " is-repeat" : "");

      const pos = it.align === "right"
        ? "right:" + (100 - x(it.from)).toFixed(3) + "%"
        : "left:"  + x(it.from).toFixed(3) + "%";

      if (it.title) {
        const title = it.url
          ? '<a class="ct-title" href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
              esc(it.title) + "</a>"
          : '<span class="ct-title">' + esc(it.title) + "</span>";

        const note = it.note ? '<span class="ct-note">' + esc(it.note) + "</span>" : "";

        bits.push('<span class="' + cls + '" style="' + pos + ';bottom:' + (base + 12) + 'px">' +
          title + note + "</span>");
      }

      return bits.join("");
    }

    const laneEls = lanes.map(function (l, i) {
      /* 기준선 없는 띠는 위아래로 더 띄웁니다 — 어느 기준선에도 붙지 않게 */
      const loose = !l.base || (lanes[i - 1] && !lanes[i - 1].base);
      const gap = loose ? Math.round(GAP * 1.6) : GAP;

      return '<div class="ct-lane' + (l.base ? "" : " is-free") +
             '" style="height:' + l.height + "px" +
             (i ? ";margin-top:" + gap + "px" : "") + '">' +
        (l.name ? '<span class="ct-lane-name">' + esc(l.name) + "</span>" : "") +
        (l.base ? '<i class="ct-base"></i>' : "") +
        l.items.map(itemEl).join("") +
      "</div>";
    }).join("");

    const axis = [];
    for (let y = minY; y <= maxY; y++) {
      const label = (y === minY) ? String(y) : String(y).slice(2);
      /* 그 해에 시작하거나 끝나는 작업이 하나도 없으면 연도를 흐리게.
         (기간이 지나가기만 하는 해는 흐립니다 — 2024 처럼) */
      const quiet = !lanes.some(function (l) {
        return l.items.some(function (it) { return it.from === y || it.to === y; });
      });
      axis.push('<span class="ct-year tnum' + (quiet ? " is-quiet" : "") +
                '" style="left:' + x(y).toFixed(3) + '%">' + esc(label) + "</span>");
    }

    mount.innerHTML =
      '<div class="ct">' +
        '<div class="ct-plot">' +
          rails +
          '<div class="ct-concepts" style="height:' + conceptsH + 'px">' + conceptEls + "</div>" +
          '<div class="ct-lanes">' + laneEls + "</div>" +
          '<div class="ct-axis">' + axis.join("") + "</div>" +
        "</div>" +
      "</div>";
  }

  try { draw(); }
  catch (e) {
    console.error("[기후] 화면을 그리다 멈췄습니다:", e);
    mount.innerHTML = '<p class="ct-missing">화면을 불러오지 못했습니다. 새로고침해 주세요.</p>';
    return;
  }

  /* 화면 폭이 바뀌면 자리를 다시 잡습니다 (프로젝터를 물릴 때) */
  let t = null;
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(function () { try { draw(); } catch (e) { console.error("[기후]", e); } }, 160);
  });

})();
