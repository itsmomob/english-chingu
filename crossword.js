/* ============================================================
   crossword.js — Crossword engine (Korean + English)
   - Korean mode: 1 cell = 1 Hangul syllable
   - English mode: 1 cell = 1 Latin letter
   Clues come from blanked example sentences (no translation).
   ============================================================ */

window.CrosswordPage = (function () {

  /* ---------- UTILS ---------- */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function esc(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function isHangul(ch) {
    const code = ch.charCodeAt(0);
    return code >= 0xAC00 && code <= 0xD7A3;
  }

  /* ---------- LANGUAGE DETECTION ---------- */
  function detectLang(word) {
    const firstHangul = String(word).split("").find(isHangul);
    return firstHangul ? "ko" : "en";
  }

  /* ---------- ANSWER EXTRACTION ---------- */
  function extractAnswer(item, lang) {
    let raw = lang === "ko" ? String(item.ko || "") : String(item.en || "");
    raw = raw.trim();

    // Remove parenthetical: "매출 (수익)" → "매출"
    raw = raw.replace(/\s*\(.*?\)\s*/g, "").trim();
    // First alternative only: "매출 / 수익" → "매출"
    raw = raw.split("/")[0].trim();

    if (lang === "ko") {
      const clean = raw.replace(/[^\uAC00-\uD7A3]/g, "");
      if (clean.length < 2 || clean.length > 6) return null;
      return clean;
    } else {
      if (/\s/.test(raw)) return null;
      const clean = raw.replace(/[^a-zA-Z]/g, "");
      if (clean.length < 3 || clean.length > 15) return null;
      return clean.toUpperCase();
    }
  }

  /* ---------- CLUE BUILDER ---------- */
  function makeClue(item, answer, lang) {
    const sources = lang === "ko"
      ? [item.exKo, item.modelKo].filter(Boolean)
      : [item.exEn, item.model, item.modelEn].filter(Boolean);

    for (const src of sources) {
      const s = String(src).trim();
      if (!s) continue;

      if (lang === "ko") {
        if (s.includes(answer)) {
          return s.replace(answer, "＿".repeat(answer.length));
        }
      } else {
        const exact = new RegExp("\\b" + escapeRegex(answer) + "\\b", "i");
        if (exact.test(s)) {
          return s.replace(exact, "_".repeat(answer.length));
        }
        if (answer.length >= 4) {
          const stem = answer.slice(0, 4).toLowerCase();
          const stemRe = new RegExp("\\b" + escapeRegex(stem) + "[a-z]{1,4}\\b", "i");
          if (stemRe.test(s)) {
            return s.replace(stemRe, "_".repeat(answer.length));
          }
        }
      }
    }
    return null;
  }

  /* ---------- ENTRY PREP ---------- */
  function prepareEntries(items, lang) {
    const entries = [];
    const seen = new Set();
    for (const v of items) {
      const answer = extractAnswer(v, lang);
      if (!answer || seen.has(answer)) continue;
      const clue = makeClue(v, answer, lang);
      if (!clue) continue;
      seen.add(answer);
      entries.push({
        answer,
        clue,
        source: v.sourceLabel || v.source || "",
      });
    }
    return entries;
  }

  /* ---------- GRID BUILDER ---------- */
  function placeWord(grid, word, row, col, dir) {
    const dR = dir === "down" ? 1 : 0;
    const dC = dir === "across" ? 1 : 0;
    for (let i = 0; i < word.length; i++) {
      grid.set((row + dR * i) + "," + (col + dC * i), word[i]);
    }
  }

  function canPlace(grid, word, row, col, dir) {
    const dR = dir === "down" ? 1 : 0;
    const dC = dir === "across" ? 1 : 0;

    if (grid.has((row - dR) + "," + (col - dC))) return false;
    if (grid.has((row + dR * word.length) + "," + (col + dC * word.length))) return false;

    let crossings = 0;
    for (let i = 0; i < word.length; i++) {
      const r = row + dR * i, c = col + dC * i;
      const key = r + "," + c;
      if (grid.has(key)) {
        if (grid.get(key) !== word[i]) return false;
        crossings++;
      } else {
        if (dir === "across") {
          if (grid.has((r - 1) + "," + c) || grid.has((r + 1) + "," + c)) return false;
        } else {
          if (grid.has(r + "," + (c - 1)) || grid.has(r + "," + (c + 1))) return false;
        }
      }
    }
    return crossings > 0;
  }

  function countCrossings(grid, word, row, col, dir) {
    const dR = dir === "down" ? 1 : 0;
    const dC = dir === "across" ? 1 : 0;
    let n = 0;
    for (let i = 0; i < word.length; i++) {
      if (grid.has((row + dR * i) + "," + (col + dC * i))) n++;
    }
    return n;
  }

  function findBestPlacement(grid, placements, word) {
    let best = null, bestScore = -1;
    for (const p of placements) {
      const placed = p.answer;
      const newDir = p.dir === "across" ? "down" : "across";
      for (let i = 0; i < placed.length; i++) {
        for (let j = 0; j < word.length; j++) {
          if (placed[i] !== word[j]) continue;
          let sr, sc;
          if (p.dir === "across") {
            sr = p.row - j;
            sc = p.col + i;
          } else {
            sr = p.row + i;
            sc = p.col - j;
          }
          if (canPlace(grid, word, sr, sc, newDir)) {
            const score = countCrossings(grid, word, sr, sc, newDir);
            if (score > bestScore) {
              bestScore = score;
              best = { row: sr, col: sc, dir: newDir };
            }
          }
        }
      }
    }
    return best;
  }

  function buildGrid(entries) {
    const words = [...entries].sort((a, b) => b.answer.length - a.answer.length);
    const grid = new Map();
    const placements = [];

    if (!words.length) return null;

    const first = words[0];
    placeWord(grid, first.answer, 0, 0, "across");
    placements.push({ ...first, row: 0, col: 0, dir: "across" });

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const best = findBestPlacement(grid, placements, word.answer);
      if (best) {
        placeWord(grid, word.answer, best.row, best.col, best.dir);
        placements.push({ ...word, row: best.row, col: best.col, dir: best.dir });
      }
    }

    let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
    for (const key of grid.keys()) {
      const [r, c] = key.split(",").map(Number);
      if (r < minR) minR = r;
      if (r > maxR) maxR = r;
      if (c < minC) minC = c;
      if (c > maxC) maxC = c;
    }

    const shifted = new Map();
    for (const [key, letter] of grid) {
      const [r, c] = key.split(",").map(Number);
      shifted.set((r - minR) + "," + (c - minC), letter);
    }
    for (const p of placements) {
      p.row -= minR;
      p.col -= minC;
    }

    const rows = maxR - minR + 1;
    const cols = maxC - minC + 1;

    const matrix = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push(shifted.get(r + "," + c) || null);
      }
      matrix.push(row);
    }

    const starts = new Map();
    let counter = 1;
    placements.sort((a, b) => a.row - b.row || a.col - b.col);
    for (const p of placements) {
      const key = p.row + "," + p.col;
      if (!starts.has(key)) starts.set(key, counter++);
      p.number = starts.get(key);
    }

    return { matrix, placements, starts, rows, cols };
  }

  /* ---------- SESSION ---------- */
  let session = null;
  let keyHandler = null;

  /* ---------- RENDER ---------- */
  function render(container, opts) {
    const { entries, title, backHref, lang } = opts;

    if (keyHandler) {
      document.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }

    const MAX = 14;
    const chosen = shuffle([...entries]).slice(0, MAX);
    const puzzle = buildGrid(chosen);

    if (!puzzle || puzzle.placements.length < 4) {
      container.innerHTML = `
        <div class="empty">
          <h2>십자말풀이를 만들 수 없습니다</h2>
          <p>이 주제에는 사용할 수 있는 단어가 부족해요.</p>
          <a href="${backHref}" class="btn">돌아가기</a>
        </div>`;
      return;
    }

    session = {
      puzzle, lang,
      userGrid: {},
      activeCell: null,
      activeDir: "across",
      cellWords: {},
    };

    container.innerHTML = `
      <div class="crossword-page">
        <a href="${backHref}" class="back-link">← 돌아가기</a>
        <header class="crossword-header">
          <h1>십자말풀이</h1>
          <p class="subtitle">${esc(title)} · ${puzzle.placements.length}개 단어</p>
        </header>

        <div class="crossword-grid-wrap">
          <div class="crossword-grid" id="cwGrid"
               style="--cols:${puzzle.cols}; --rows:${puzzle.rows};"></div>
        </div>

        <div class="crossword-actions">
          <button class="btn btn-outline btn-sm" id="cwCheck">확인</button>
          <button class="btn btn-outline btn-sm" id="cwReveal">정답</button>
          <button class="btn btn-outline btn-sm" id="cwClear">지우기</button>
        </div>

        <div class="feedback" id="cwFeedback"></div>

        <section class="crossword-clues">
          <div class="crossword-clue-col">
            <h2>가로 →</h2>
            <ul class="crossword-clue-list" id="cwAcross"></ul>
          </div>
          <div class="crossword-clue-col">
            <h2>세로 ↓</h2>
            <ul class="crossword-clue-list" id="cwDown"></ul>
          </div>
        </section>

        <input id="cwInput" class="cw-hidden-input" type="text"
               autocomplete="off" autocorrect="off" autocapitalize="off"
               spellcheck="false" inputmode="text">
      </div>
    `;

    buildCellWordMap();
    renderGrid();
    renderClues();
    attachEvents();
  }

  function buildCellWordMap() {
    const { puzzle } = session;
    const map = {};
    for (const p of puzzle.placements) {
      const dR = p.dir === "down" ? 1 : 0;
      const dC = p.dir === "across" ? 1 : 0;
      for (let i = 0; i < p.answer.length; i++) {
        const key = (p.row + dR * i) + "," + (p.col + dC * i);
        if (!map[key]) map[key] = {};
        map[key][p.dir] = p;
      }
    }
    session.cellWords = map;
  }

  function renderGrid() {
    const { puzzle, userGrid, activeCell } = session;
    const gridEl = document.getElementById("cwGrid");
    const { matrix, starts, rows, cols } = puzzle;

    let html = "";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const letter = matrix[r][c];
        if (!letter) {
          html += `<div class="cw-cell cw-empty"></div>`;
          continue;
        }
        const key = r + "," + c;
        const num = starts.get(key);
        const userLetter = userGrid[key] || "";
        const isActive = activeCell && activeCell.row === r && activeCell.col === c;
        html += `
          <div class="cw-cell ${isActive ? "cw-active" : ""}"
               data-row="${r}" data-col="${c}">
            ${num ? `<span class="cw-num">${num}</span>` : ""}
            <span class="cw-letter">${esc(userLetter)}</span>
          </div>
        `;
      }
    }
    gridEl.innerHTML = html;

    gridEl.querySelectorAll(".cw-cell:not(.cw-empty)").forEach((el) => {
      el.addEventListener("click", () => {
        activateCell(+el.dataset.row, +el.dataset.col);
      });
    });
  }

  function activateCell(r, c) {
    const key = r + "," + c;
    const words = session.cellWords[key];
    if (!words) return;

    if (session.activeCell && session.activeCell.row === r && session.activeCell.col === c) {
      if (words.across && words.down) {
        session.activeDir = session.activeDir === "across" ? "down" : "across";
      }
    } else {
      session.activeCell = { row: r, col: c };
      if (!words[session.activeDir]) {
        session.activeDir = words.across ? "across" : "down";
      }
    }

    renderGrid();
    highlightActiveClue();
    focusInput();
  }

  function highlightActiveClue() {
    if (!session.activeCell) return;
    const key = session.activeCell.row + "," + session.activeCell.col;
    const word = session.cellWords[key][session.activeDir];
    if (!word) return;

    document.querySelectorAll(".crossword-clue-item").forEach((li) => {
      li.classList.toggle("cw-clue-active",
        li.dataset.number == word.number && li.dataset.dir === word.dir);
    });
  }

  function renderClues() {
    const { puzzle } = session;
    const acrossEl = document.getElementById("cwAcross");
    const downEl = document.getElementById("cwDown");

    const across = puzzle.placements.filter((p) => p.dir === "across");
    const down = puzzle.placements.filter((p) => p.dir === "down");

    function clueHTML(list) {
      return list
        .map((p) => `
          <li data-number="${p.number}" data-dir="${p.dir}"
              class="crossword-clue-item">
            <button class="cw-clue-btn" data-number="${p.number}" data-dir="${p.dir}">
              <span class="cw-clue-num">${p.number}.</span>
              <span class="cw-clue-text">${esc(p.clue)}</span>
              <span class="cw-clue-len">(${p.answer.length})</span>
            </button>
          </li>
        `)
        .join("");
    }

    acrossEl.innerHTML = clueHTML(across);
    downEl.innerHTML = clueHTML(down);

    document.querySelectorAll(".cw-clue-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const num = +btn.dataset.number;
        const dir = btn.dataset.dir;
        const word = puzzle.placements.find((p) => p.number === num && p.dir === dir);
        if (!word) return;
        session.activeCell = { row: word.row, col: word.col };
        session.activeDir = word.dir;
        renderGrid();
        highlightActiveClue();
        focusInput();
      });
    });
  }

  function focusInput() {
    const input = document.getElementById("cwInput");
    if (input && window.innerWidth < 640) input.focus();
  }

  /* ---------- INPUT ---------- */
  function attachEvents() {
    const input = document.getElementById("cwInput");

    const commitChar = (ch) => {
      if (!session.activeCell) return;
      const { row, col } = session.activeCell;
      const key = row + "," + col;
      session.userGrid[key] = ch;
      renderGrid();
      highlightActiveClue();

      const word = session.cellWords[key][session.activeDir];
      if (word) {
        const dR = word.dir === "down" ? 1 : 0;
        const dC = word.dir === "across" ? 1 : 0;
        const nextKey = (row + dR) + "," + (col + dC);
        if (session.cellWords[nextKey]) {
          session.activeCell = { row: row + dR, col: col + dC };
          renderGrid();
          highlightActiveClue();
        }
      }
    };

    const handleBackspace = () => {
      if (!session.activeCell) return;
      const { row, col } = session.activeCell;
      const key = row + "," + col;
      if (session.userGrid[key]) {
        delete session.userGrid[key];
        renderGrid();
        return;
      }
      const word = session.cellWords[key][session.activeDir];
      if (word) {
        const dR = word.dir === "down" ? 1 : 0;
        const dC = word.dir === "across" ? 1 : 0;
        const prevKey = (row - dR) + "," + (col - dC);
        if (session.cellWords[prevKey]) {
          session.activeCell = { row: row - dR, col: col - dC };
          delete session.userGrid[prevKey];
          renderGrid();
          highlightActiveClue();
        }
      }
    };

    input.addEventListener("input", () => {
      const val = input.value;
      if (!val) return;
      const lastChar = val.slice(-1);
      input.value = "";
      commitChar(lastChar);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") { e.preventDefault(); handleBackspace(); }
      if (e.key === " ") {
        e.preventDefault();
        const key = session.activeCell?.row + "," + session.activeCell?.col;
        const words = session.cellWords[key];
        if (words && words.across && words.down) {
          session.activeDir = session.activeDir === "across" ? "down" : "across";
          renderGrid();
          highlightActiveClue();
        }
      }
    });

    document.getElementById("cwCheck").addEventListener("click", checkAnswers);
    document.getElementById("cwReveal").addEventListener("click", revealAll);
    document.getElementById("cwClear").addEventListener("click", () => {
      session.userGrid = {};
      renderGrid();
      setFeedback("", "");
    });

    keyHandler = (e) => {
      if (document.activeElement === input) return;
      if (e.key === "Backspace") { e.preventDefault(); handleBackspace(); return; }
      if (e.key.length === 1 && window.innerWidth >= 640) {
        commitChar(e.key);
      }
    };
    document.addEventListener("keydown", keyHandler);

    if (window.innerWidth >= 640) input.focus();
  }

  function checkAnswers() {
    const { puzzle, userGrid } = session;
    let correct = 0;
    const total = puzzle.placements.length;

    for (const p of puzzle.placements) {
      const dR = p.dir === "down" ? 1 : 0;
      const dC = p.dir === "across" ? 1 : 0;
      let isCorrect = true;
      for (let i = 0; i < p.answer.length; i++) {
        const key = (p.row + dR * i) + "," + (p.col + dC * i);
        if (userGrid[key] !== p.answer[i]) { isCorrect = false; break; }
      }
      if (isCorrect) correct++;
    }

    if (correct === total) {
      setFeedback(`🎉 완벽해요! ${total}개 단어를 모두 맞췄어요.`, "correct");
    } else {
      setFeedback(`${correct} / ${total} 정답. 아직 다 채우지 못한 단어가 있어요.`, "incorrect");
    }
  }

  function revealAll() {
    const { puzzle } = session;
    for (const p of puzzle.placements) {
      const dR = p.dir === "down" ? 1 : 0;
      const dC = p.dir === "across" ? 1 : 0;
      for (let i = 0; i < p.answer.length; i++) {
        session.userGrid[(p.row + dR * i) + "," + (p.col + dC * i)] = p.answer[i];
      }
    }
    renderGrid();
    setFeedback("정답을 모두 표시했어요.", "incorrect");
  }

  function setFeedback(msg, cls) {
    const el = document.getElementById("cwFeedback");
    if (!el) return;
    el.textContent = msg;
    el.className = "feedback " + (cls || "");
  }

  /* ---------- PUBLIC API ---------- */
  return { render, prepareEntries, detectLang, extractAnswer, makeClue };
})();
