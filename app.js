/* ============================================================
   English Mastery Hub — app.js (unified)
   Supports:
     - Flat topics:     vocabulary / idioms / discussionQuestions
     - Sectioned topics: sections[] → questions[] → vocab / phrasalVerbs / model
   ============================================================ */

/* ---------- ASSEMBLE FROM REGISTRY ---------- */
const topics = window.__topics || [];
const grammarPoints = window.__grammar || [];

/* Sort alphabetically for consistent listing */
topics.sort((a, b) => a.title.localeCompare(b.title));
grammarPoints.sort((a, b) => a.title.localeCompare(b.title));

/* ---------- FLATTEN SECTIONED TOPICS ---------- */
/* Adds vocabulary, idioms, discussionQuestions to any topic
   that only defines `sections`, so that:
     - topic cards can display counts
     - practice mode has a flat deck
     - search and filters work uniformly */
function flattenTopic(topic) {
  // Always ensure the three flat arrays exist
  topic.vocabulary = topic.vocabulary || [];
  topic.idioms = topic.idioms || [];
  topic.discussionQuestions = topic.discussionQuestions || [];

  if (!topic.sections || !topic.sections.length) return topic;

  topic.sections.forEach((section) => {
    (section.questions || []).forEach((q) => {
      if (q.q) topic.discussionQuestions.push(q.q);
      (q.vocab || []).forEach((v) => topic.vocabulary.push(v));
      (q.phrasalVerbs || []).forEach((p) =>
        topic.idioms.push({ ...p, register: p.register || "neutral" })
      );
    });
  });

  return topic;
}

topics.forEach(flattenTopic);

/* ---------- STATE ---------- */
const state = {
  practice: { topicId: null, cards: [], index: 0, direction: "ko-en", revealed: false },
  grammarFilter: "all",
};

/* ---------- UTILS ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function esc(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getTopic(id) {
  return topics.find((t) => t.id === id);
}

function getGrammar(id) {
  return grammarPoints.find((g) => g.id === id);
}

function levelClass(level) {
  return "level-" + String(level || "").toLowerCase();
}

function setAppBarTitle(title) {
  document.getElementById("appBarTitle").textContent = title || "English Mastery Hub";
}

function showBackButton(show) {
  document.getElementById("backBtn").hidden = !show;
}

/* ---------- ROUTER ---------- */
function router() {
  const hash = window.location.hash.slice(1) || "/";
  const parts = hash.split("/").filter(Boolean);
  const view = parts[0] || "home";
  const id = parts[1];

  // Highlight active tab
  document.querySelectorAll(".tab-bar__item").forEach((a) => {
    const isActive =
      a.dataset.nav === view ||
      (view === "topic" && a.dataset.nav === "topics") ||
      (view === "practice" && a.dataset.nav === "topics");
    a.classList.toggle("active", isActive);
  });

  showBackButton(view !== "home");

  if (view === "home") renderHome();
  else if (view === "topics") renderTopics();
  else if (view === "topic") renderTopicDetail(id);
  else if (view === "grammar") id ? renderGrammarDetail(id) : renderGrammarList();
  else if (view === "discussion") renderDiscussion();
  else if (view === "practice") renderPractice(id);
  else renderHome();

  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ============================================================
   HOME
   ============================================================ */
function renderHome() {
  setAppBarTitle("English Mastery Hub");
  const app = document.getElementById("app");

  // Pick the first topic that has actual content
  const featured = topics.find((t) => (t.vocabulary && t.vocabulary.length) || (t.sections && t.sections.length)) || topics[0];

  if (!featured) {
    app.innerHTML = `
      <div class="empty">
        <h2>주제가 아직 없습니다</h2>
        <p>data/topics/ 폴더에 파일을 추가하세요.</p>
      </div>
    `;
    return;
  }

  const recent = topics.filter((t) => t.id !== featured.id).slice(0, 3);

  app.innerHTML = `
    <section class="hero">
      <h1>영어로 자신 있게 말하세요</h1>
      <p class="subtitle">수업 전후로 언제든 복습하세요.</p>
      <div class="featured-topic">
        <div class="label">오늘의 주제</div>
        <h3>${esc(featured.title)}</h3>
        <div class="meta">${esc(featured.titleKo)} · ${esc(featured.level)}</div>
        <a href="#/topic/${featured.id}" class="btn">학습하기</a>
      </div>
    </section>

    <h2>빠른 이동</h2>
    <div class="quick-links">
      <a href="#/topics" class="quick-link">
        <div class="quick-link__icon">📚</div>
        <div class="quick-link__text">
          <h3>주제별 어휘</h3>
          <p>수업 주제별 어휘 복습</p>
        </div>
        <span class="quick-link__arrow">→</span>
      </a>
      <a href="#/grammar" class="quick-link">
        <div class="quick-link__icon">📝</div>
        <div class="quick-link__text">
          <h3>문법 가이드</h3>
          <p>쉽게 설명한 핵심 문법</p>
        </div>
        <span class="quick-link__arrow">→</span>
      </a>
      <a href="#/discussion" class="quick-link">
        <div class="quick-link__icon">💬</div>
        <div class="quick-link__text">
          <h3>토론 표현</h3>
          <p>의견·동의·반대 표현</p>
        </div>
        <span class="quick-link__arrow">→</span>
      </a>
    </div>

    <h2>최근 주제</h2>
    <div class="topic-list">
      ${recent.map(topicCardHTML).join("")}
    </div>
  `;
}

/* ============================================================
   TOPIC CARD (used on home + topics list)
   ============================================================ */
function topicCardHTML(t) {
  const vocabCount = t.vocabulary ? t.vocabulary.length : 0;
  const idiomCount = t.idioms ? t.idioms.length : 0;

  return `
    <a href="#/topic/${t.id}" class="topic-card">
      <div class="topic-card__badges">
        <span class="badge">${esc(t.category)}</span>
        <span class="badge ${levelClass(t.level)}">${esc(t.level)}</span>
      </div>
      <h3>${esc(t.title)}</h3>
      <p class="ko">${esc(t.titleKo)}</p>
      <div class="topic-card__meta">
        <span>📖 ${vocabCount}개 어휘</span>
        <span>💬 ${idiomCount}개 표현</span>
      </div>
    </a>
  `;
}

/* ============================================================
   TOPICS LIST
   ============================================================ */
function renderTopics() {
  setAppBarTitle("주제별 어휘");
  const app = document.getElementById("app");

  app.innerHTML = `
    <h1>주제별 어휘</h1>
    <p class="subtitle">수업 주제를 선택해 복습하세요.</p>
    <div class="topic-list">
      ${topics.map(topicCardHTML).join("")}
    </div>
  `;
}

/* ============================================================
   TOPIC DETAIL — dispatcher
   ============================================================ */
function renderTopicDetail(id) {
  const topic = getTopic(id);
  const app = document.getElementById("app");

  if (!topic) {
    setAppBarTitle("찾을 수 없음");
    app.innerHTML = `
      <div class="empty">
        <h2>주제를 찾을 수 없습니다</h2>
        <a href="#/topics" class="btn">주제 목록으로</a>
      </div>
    `;
    return;
  }

  setAppBarTitle(topic.title);

  // Choose renderer based on topic format
  if (topic.sections && topic.sections.length) {
    renderSectionedTopicDetail(topic);
  } else {
    renderFlatTopicDetail(topic);
  }
}

/* ============================================================
   TOPIC DETAIL — sectioned view (studio format)
   ============================================================ */
function renderSectionedTopicDetail(topic) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header class="topic-header">
      <div class="topic-header__badges">
        <span class="badge">${esc(topic.category)}</span>
        <span class="badge ${levelClass(topic.level)}">${esc(topic.level)}</span>
      </div>
      <h1>${esc(topic.title)}</h1>
      <div class="ko-title">${esc(topic.titleKo)}</div>
      <p class="summary">${esc(topic.summaryKo || "")}</p>
    </header>

    ${topic.sections.map((section, si) => `
      <div class="accordion ${si === 0 ? "open" : ""}">
        <button class="accordion__header">
          <span class="accordion__title">
            <span class="section-number">${si + 1}</span>
            ${esc(section.title)}
          </span>
          <span class="accordion__chevron">▼</span>
        </button>
        <div class="accordion__body">
          ${(section.questions || []).map(renderQuestionBlock).join("")}
        </div>
      </div>
    `).join("")}

    ${renderGrammarSpotlight(topic)}

    <a href="#/practice/${topic.id}" class="fab">
      <span class="fab__icon">🎯</span>
      <span>연습 시작</span>
    </a>
  `;

  // Accordion toggles
  app.querySelectorAll(".accordion__header").forEach((header) => {
    header.addEventListener("click", () => {
      header.closest(".accordion").classList.toggle("open");
    });
  });
}

function renderQuestionBlock(q) {
  return `
    <div class="question-block">
      <div class="question-block__q">
        <div class="question-block__en">${esc(q.q)}</div>
        ${q.qKo ? `<div class="question-block__ko">${esc(q.qKo)}</div>` : ""}
      </div>

      ${q.vocab && q.vocab.length ? `
      <div class="question-block__section">
        <div class="question-block__label">📖 어휘</div>
        ${q.vocab.map((v) => `
          <div class="mini-vocab">
            <span class="mini-vocab__en">${esc(v.en)}</span>
            <span class="mini-vocab__ko">${esc(v.ko)}</span>
          </div>
        `).join("")}
      </div>
      ` : ""}

      ${q.phrasalVerbs && q.phrasalVerbs.length ? `
      <div class="question-block__section">
        <div class="question-block__label">🔗 구동사 & 표현</div>
        ${q.phrasalVerbs.map((p) => `
          <div class="mini-vocab">
            <span class="mini-vocab__en">${esc(p.en)}</span>
            <span class="mini-vocab__ko">${esc(p.ko)}</span>
          </div>
        `).join("")}
      </div>
      ` : ""}

      ${q.model ? `
      <div class="question-block__model">
        <div class="question-block__label">💡 모범 답안</div>
        <div class="model-en">"${esc(q.model)}"</div>
        ${q.modelKo ? `<div class="model-ko">${esc(q.modelKo)}</div>` : ""}
      </div>
      ` : ""}
    </div>
  `;
}

/* ============================================================
   TOPIC DETAIL — flat view (legacy / simple format)
   ============================================================ */
function renderFlatTopicDetail(topic) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header class="topic-header">
      <div class="topic-header__badges">
        <span class="badge">${esc(topic.category)}</span>
        <span class="badge ${levelClass(topic.level)}">${esc(topic.level)}</span>
      </div>
      <h1>${esc(topic.title)}</h1>
      <div class="ko-title">${esc(topic.titleKo)}</div>
      <p class="summary">${esc(topic.summaryKo || "")}</p>
    </header>

    ${topic.vocabulary.length ? `
    <div class="accordion open">
      <button class="accordion__header">
        <span class="accordion__title">
          📖 핵심 어휘
          <span class="accordion__count">${topic.vocabulary.length}</span>
        </span>
        <span class="accordion__chevron">▼</span>
      </button>
      <div class="accordion__body">
        ${topic.vocabulary.map((v) => vocabItemHTML(v)).join("")}
      </div>
    </div>
    ` : ""}

    ${topic.idioms.length ? `
    <div class="accordion">
      <button class="accordion__header">
        <span class="accordion__title">
          💬 관용 표현
          <span class="accordion__count">${topic.idioms.length}</span>
        </span>
        <span class="accordion__chevron">▼</span>
      </button>
      <div class="accordion__body">
        ${topic.idioms.map((i) => vocabItemHTML(i, true)).join("")}
      </div>
    </div>
    ` : ""}

    ${topic.discussionQuestions.length ? `
    <div class="accordion">
      <button class="accordion__header">
        <span class="accordion__title">
          🗣️ 토론 질문
          <span class="accordion__count">${topic.discussionQuestions.length}</span>
        </span>
        <span class="accordion__chevron">▼</span>
      </button>
      <div class="accordion__body">
        ${topic.discussionQuestions.map((q) => `<div class="question-item">${esc(q)}</div>`).join("")}
      </div>
    </div>
    ` : ""}

    ${renderGrammarSpotlight(topic)}

    <a href="#/practice/${topic.id}" class="fab">
      <span class="fab__icon">🎯</span>
      <span>연습 시작</span>
    </a>
  `;

  app.querySelectorAll(".accordion__header").forEach((header) => {
    header.addEventListener("click", () => {
      header.closest(".accordion").classList.toggle("open");
    });
  });
}

function vocabItemHTML(v, isIdiom = false) {
  const hasExample = v.exEn || v.exKo;
  return `
    <div class="vocab-item">
      <div class="vocab-item__head">
        <span class="vocab-item__en">${esc(v.en)}</span>
        <span class="vocab-item__ko">${esc(v.ko)}${v.register ? `<span class="register ${v.register}">${esc(v.register)}</span>` : ""}</span>
      </div>
      ${hasExample ? `
      <div class="vocab-item__ex">
        ${v.exEn ? `<div class="ex-en">${esc(v.exEn)}</div>` : ""}
        ${v.exKo ? `<div>${esc(v.exKo)}</div>` : ""}
      </div>
      ` : ""}
    </div>
  `;
}

function renderGrammarSpotlight(topic) {
  if (!topic.grammarSpotlight || !topic.grammarSpotlight.length) return "";

  const links = topic.grammarSpotlight
    .map((g) => {
      const gp = getGrammar(g.grammarId);
      if (!gp) return "";
      return `
        <a href="#/grammar/${gp.id}" class="grammar-link" style="margin-bottom:8px;">
          <div>
            <strong>${esc(gp.title)}</strong>
            <div class="ko">${esc(gp.titleKo)}</div>
          </div>
          <span style="color:var(--text-muted);">→</span>
        </a>
      `;
    })
    .join("");

  if (!links) return "";

  return `
    <div class="accordion">
      <button class="accordion__header">
        <span class="accordion__title">📌 문법 포인트</span>
        <span class="accordion__chevron">▼</span>
      </button>
      <div class="accordion__body">${links}</div>
    </div>
  `;
}

/* ============================================================
   GRAMMAR LIST
   ============================================================ */
function renderGrammarList() {
  setAppBarTitle("문법 가이드");
  const app = document.getElementById("app");
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const filtered =
    state.grammarFilter === "all"
      ? grammarPoints
      : grammarPoints.filter((g) => g.level === state.grammarFilter);

  app.innerHTML = `
    <h1>문법 가이드</h1>
    <p class="subtitle">한국인 학습자를 위한 핵심 문법</p>

    <div class="grammar-filters">
      ${levels.map((l) => `
        <button class="filter-pill ${state.grammarFilter === l ? "active" : ""}" data-level="${l}">
          ${l === "all" ? "전체" : l}
        </button>
      `).join("")}
    </div>

    <div>
      ${filtered.map((g) => `
        <a href="#/grammar/${g.id}" class="grammar-card">
          <div class="grammar-card__badges">
            <span class="badge ${levelClass(g.level)}">${esc(g.level)}</span>
            <span class="badge">${esc(g.category)}</span>
          </div>
          <h3>${esc(g.title)}</h3>
          <div class="ko">${esc(g.titleKo)}</div>
        </a>
      `).join("")}
    </div>
  `;

  app.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.grammarFilter = btn.dataset.level;
      renderGrammarList();
    });
  });
}

/* ============================================================
   GRAMMAR DETAIL
   ============================================================ */
function renderGrammarDetail(id) {
  const g = getGrammar(id);
  const app = document.getElementById("app");

  if (!g) {
    setAppBarTitle("찾을 수 없음");
    app.innerHTML = `
      <div class="empty">
        <h2>문법 항목을 찾을 수 없습니다</h2>
        <a href="#/grammar" class="btn">문법 목록으로</a>
      </div>
    `;
    return;
  }

  setAppBarTitle(g.title);

  app.innerHTML = `
    <header class="topic-header">
      <div class="topic-header__badges">
        <span class="badge ${levelClass(g.level)}">${esc(g.level)}</span>
        <span class="badge">${esc(g.category)}</span>
      </div>
      <h1>${esc(g.title)}</h1>
      <div class="ko-title">${esc(g.titleKo)}</div>
    </header>

    <div class="grammar-block">
      <h2>📘 설명</h2>
      <p>${esc(g.explanationKo)}</p>
      <p class="strong">${esc(g.explanationEn)}</p>
    </div>

    ${g.structure ? `
    <div class="grammar-block">
      <h2>🧩 구조</h2>
      <div class="structure-box">${esc(g.structure)}</div>
    </div>
    ` : ""}

    ${g.examples && g.examples.length ? `
    <div class="grammar-block">
      <h2>✅ 예문</h2>
      <div class="example-list">
        ${g.examples.map((e) => `
          <div class="example-item">
            <div class="en">${esc(e.en)}</div>
            <div class="ko">${esc(e.ko)}</div>
          </div>
        `).join("")}
      </div>
    </div>
    ` : ""}

    ${g.commonMistakes && g.commonMistakes.length ? `
    <div class="grammar-block">
      <h2>❌ 자주 하는 실수</h2>
      ${g.commonMistakes.map((m) => `
        <div class="mistake-item">
          <div class="wrong">${esc(m.wrong)}</div>
          <div class="right">${esc(m.right)}</div>
          <div class="note">${esc(m.note)}</div>
        </div>
      `).join("")}
    </div>
    ` : ""}

    ${g.tips && g.tips.length ? `
    <div class="grammar-block">
      <h2>💡 팁</h2>
      <ul class="tip-list">
        ${g.tips.map((t) => `<li>${esc(t)}</li>`).join("")}
      </ul>
    </div>
    ` : ""}

    ${g.related && g.related.length ? `
    <div class="grammar-block">
      <h2>🔗 관련 문법</h2>
      <div class="related-links">
        ${g.related.map((rid) => {
          const rg = getGrammar(rid);
          return rg ? `<a href="#/grammar/${rg.id}">${esc(rg.title)}</a>` : "";
        }).join("")}
      </div>
    </div>
    ` : ""}
  `;
}

/* ============================================================
   DISCUSSION
   ============================================================ */
function renderDiscussion() {
  setAppBarTitle("토론 표현");
  const app = document.getElementById("app");

  const categories = [
    {
      icon: "💭", title: "의견 말하기", titleEn: "Giving Opinions",
      phrases: [
        { en: "In my opinion, ...", ko: "제 의견으로는, ...", ex: "In my opinion, we should wait." },
        { en: "I think / I believe ...", ko: "저는 ~라고 생각해요", ex: "I think this is the best option." },
        { en: "From my perspective, ...", ko: "제 관점에서는, ...", ex: "From my perspective, it's too risky." },
        { en: "As far as I'm concerned, ...", ko: "제가 보기에는, ...", ex: "As far as I'm concerned, it's a win-win." },
      ],
    },
    {
      icon: "✅", title: "동의하기", titleEn: "Agreeing",
      phrases: [
        { en: "I completely agree.", ko: "전적으로 동의합니다.", ex: "I completely agree with your point." },
        { en: "That's a good point.", ko: "좋은 지적이에요.", ex: "That's a good point. I hadn't thought of that." },
        { en: "I see it the same way.", ko: "저도 같은 생각이에요.", ex: "I see it the same way." },
        { en: "Exactly.", ko: "바로 그거예요.", ex: "Exactly. That's what I meant." },
      ],
    },
    {
      icon: "🤔", title: "정중하게 반대하기", titleEn: "Disagreeing Politely",
      phrases: [
        { en: "I see your point, but ...", ko: "말씀은 이해하지만, ...", ex: "I see your point, but I think we need more data." },
        { en: "I'm not sure I agree.", ko: "동의하기 어렵네요.", ex: "I'm not sure I agree with that." },
        { en: "I understand where you're coming from, however ...", ko: "말씀하시는 취지는 알겠지만, ...", ex: "I understand where you're coming from, however, we have limited time." },
        { en: "That's one way to look at it, but ...", ko: "그렇게 볼 수도 있지만, ...", ex: "That's one way to look at it, but there's another side." },
      ],
    },
    {
      icon: "❓", title: "질문 & 명확히 하기", titleEn: "Asking & Clarifying",
      phrases: [
        { en: "Could you elaborate on that?", ko: "좀 더 자세히 설명해 주시겠어요?", ex: "Could you elaborate on that point?" },
        { en: "What do you mean by ...?", ko: "...이 무슨 뜻이에요?", ex: "What do you mean by 'risky'?" },
        { en: "Can you give an example?", ko: "예를 들어 주시겠어요?", ex: "Can you give an example of that?" },
        { en: "Just to clarify, ...", ko: "명확히 하자면, ...", ex: "Just to clarify, you're saying we should wait?" },
      ],
    },
    {
      icon: "⏸️", title: "시간 벌기", titleEn: "Buying Time",
      phrases: [
        { en: "That's an interesting question.", ko: "흥미로운 질문이네요.", ex: "That's an interesting question. Let me think." },
        { en: "Let me think for a moment.", ko: "잠시 생각해 볼게요.", ex: "Let me think for a moment." },
        { en: "How should I put this ...", ko: "뭐라고 표현해야 할까요 ...", ex: "How should I put this ... it's complicated." },
        { en: "That's a tough one.", ko: "어려운 질문이네요.", ex: "That's a tough one. I'd need to check." },
      ],
    },
    {
      icon: "📝", title: "요약하기", titleEn: "Summarizing",
      phrases: [
        { en: "So, to sum up, ...", ko: "정리하자면, ...", ex: "So, to sum up, we need more time." },
        { en: "In other words, ...", ko: "다시 말해, ...", ex: "In other words, we can't afford it." },
        { en: "What I'm trying to say is ...", ko: "제가 말하고 싶은 건 ...", ex: "What I'm trying to say is we need a new plan." },
        { en: "The main point is ...", ko: "핵심은 ...", ex: "The main point is we have to decide today." },
      ],
    },
    {
      icon: "✋", title: "정중하게 끼어들기", titleEn: "Interrupting Politely",
      phrases: [
        { en: "Sorry to interrupt, but ...", ko: "끼어들어 죄송하지만, ...", ex: "Sorry to interrupt, but I have a quick question." },
        { en: "Can I just add something?", ko: "한 가지만 덧붙여도 될까요?", ex: "Can I just add something here?" },
        { en: "If I may, ...", ko: "실례지만, ...", ex: "If I may, I'd like to share my view." },
        { en: "Before we move on, ...", ko: "넘어가기 전에, ...", ex: "Before we move on, can we revisit the budget?" },
      ],
    },
  ];

  app.innerHTML = `
    <h1>토론 표현</h1>
    <p class="subtitle">영어 토론·회의에서 바로 쓰는 표현</p>

    ${categories.map((cat) => `
      <section class="discussion-category">
        <h2>
          <span>${cat.icon}</span>
          ${esc(cat.title)}
          <span class="en-sub">${esc(cat.titleEn)}</span>
        </h2>
        <div class="phrase-list">
          ${cat.phrases.map((p) => `
            <div class="phrase-item">
              <div class="en">${esc(p.en)}</div>
              <div class="ko">${esc(p.ko)}</div>
              <div class="ex">${esc(p.ex)}</div>
            </div>
          `).join("")}
        </div>
      </section>
    `).join("")}
  `;
}

/* ============================================================
   PRACTICE MODE
   ============================================================ */
function renderPractice(topicId) {
  const topic = getTopic(topicId);
  const app = document.getElementById("app");

  if (!topic) {
    setAppBarTitle("찾을 수 없음");
    app.innerHTML = `
      <div class="empty">
        <h2>주제를 찾을 수 없습니다</h2>
        <a href="#/topics" class="btn">주제 목록으로</a>
      </div>
    `;
    return;
  }

  setAppBarTitle("연습 · " + topic.title);

  const allItems = [
    ...topic.vocabulary.map((v) => ({ ...v, type: "vocab" })),
    ...topic.idioms.map((i) => ({ ...i, type: "idiom" })),
  ];

  if (!allItems.length) {
    app.innerHTML = `
      <div class="empty">
        <h2>연습할 항목이 없습니다</h2>
        <p>이 주제에는 아직 어휘가 없습니다.</p>
        <a href="#/topic/${topic.id}" class="btn">주제로 돌아가기</a>
      </div>
    `;
    return;
  }

  state.practice.topicId = topicId;
  state.practice.cards = shuffle(allItems);
  state.practice.index = 0;
  state.practice.revealed = false;
  state.practice.direction = "ko-en";

  app.innerHTML = `
    <div class="practice-header">
      <div class="direction-toggle">
        <button data-dir="ko-en" class="active">한국어 → 영어</button>
        <button data-dir="en-ko">영어 → 한국어</button>
      </div>
    </div>

    <div class="flashcard">
      <div class="flashcard__hint" id="flashcardHint">어휘</div>
      <div class="flashcard__prompt" id="prompt">Loading...</div>
      <div class="flashcard__answer hidden" id="answer"></div>
      <div class="flashcard__example hidden" id="example"></div>
    </div>

    <div class="answer-input-row">
      <input type="text" id="practiceInput" placeholder="답변을 입력하세요" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
      <div class="answer-input-row__buttons">
        <button class="btn" id="verifyBtn">확인</button>
        <button class="btn btn-outline" id="showBtn">정답 보기</button>
      </div>
    </div>

    <div class="feedback" id="practiceFeedback"></div>

    <div class="practice-nav">
      <button class="btn btn-outline" id="prevBtn">←</button>
      <span class="progress-text" id="progressText">1 / 1</span>
      <button class="btn btn-outline" id="nextBtn">→</button>
    </div>
  `;

  document.querySelectorAll(".direction-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".direction-toggle button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.practice.direction = btn.dataset.dir;
      state.practice.revealed = false;
      renderPracticeCard();
    });
  });

  document.getElementById("verifyBtn").addEventListener("click", verifyPracticeAnswer);
  document.getElementById("showBtn").addEventListener("click", showPracticeAnswer);
  document.getElementById("prevBtn").addEventListener("click", () => movePractice(-1));
  document.getElementById("nextBtn").addEventListener("click", () => movePractice(1));
  document.getElementById("practiceInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (state.practice.revealed) movePractice(1);
      else verifyPracticeAnswer();
    }
  });

  renderPracticeCard();
}

function renderPracticeCard() {
  const { cards, index, direction, revealed } = state.practice;
  if (!cards.length) return;

  const card = cards[index];
  const isKoEn = direction === "ko-en";
  const prompt = isKoEn ? card.ko : card.en;
  const answer = isKoEn ? card.en : card.ko;

  document.getElementById("flashcardHint").textContent = card.type === "idiom" ? "관용 표현" : "어휘";
  document.getElementById("prompt").textContent = prompt;
  document.getElementById("answer").textContent = answer;

  // Example box (may be empty for sectioned topics)
  const exampleEl = document.getElementById("example");
  if (card.exEn || card.exKo) {
    exampleEl.innerHTML = `
      ${card.exEn ? `<div class="ex-en">${esc(card.exEn)}</div>` : ""}
      ${card.exKo ? `<div>${esc(card.exKo)}</div>` : ""}
    `;
  } else {
    exampleEl.innerHTML = "";
  }

  document.getElementById("answer").classList.toggle("hidden", !revealed);
  exampleEl.classList.toggle("hidden", !revealed);
  document.getElementById("progressText").textContent = `${index + 1} / ${cards.length}`;
  document.getElementById("practiceFeedback").textContent = "";
  document.getElementById("practiceFeedback").className = "feedback";
  document.getElementById("practiceInput").value = "";
  document.getElementById("verifyBtn").textContent = revealed ? "다음 →" : "확인";

  // Focus input only on desktop (avoids mobile keyboard popping on every card)
  if (window.innerWidth >= 640) {
    document.getElementById("practiceInput").focus();
  }
}

function verifyPracticeAnswer() {
  const { cards, index, direction, revealed } = state.practice;
  if (revealed) {
    movePractice(1);
    return;
  }

  const input = document.getElementById("practiceInput").value.trim().toLowerCase();
  if (!input) {
    document.getElementById("practiceFeedback").textContent = "답변을 입력해 주세요.";
    document.getElementById("practiceFeedback").className = "feedback incorrect";
    return;
  }

  const card = cards[index];
  const target = direction === "ko-en" ? card.en : card.ko;
  const variants = String(target).split("/").map((s) => s.trim().toLowerCase());
  const cleanVariants = variants.flatMap((v) => {
    const clean = v.replace(/\s*\(.*?\)\s*/g, "").trim();
    return [v, clean];
  });

  const isCorrect = cleanVariants.some((v) => input === v || (v.length > 3 && input.includes(v)));
  const feedback = document.getElementById("practiceFeedback");

  if (isCorrect) {
    state.practice.revealed = true;
    document.getElementById("answer").classList.remove("hidden");
    document.getElementById("example").classList.remove("hidden");
    feedback.textContent = "✅ 정답입니다!";
    feedback.className = "feedback correct";
    document.getElementById("verifyBtn").textContent = "다음 →";
  } else {
    feedback.textContent = "❌ 틀렸습니다. 다시 시도하세요.";
    feedback.className = "feedback incorrect";
    document.getElementById("practiceInput").value = "";
    document.getElementById("practiceInput").focus();
  }
}

function showPracticeAnswer() {
  state.practice.revealed = true;
  document.getElementById("answer").classList.remove("hidden");
  document.getElementById("example").classList.remove("hidden");
  document.getElementById("practiceFeedback").textContent = "👀 정답을 확인하세요.";
  document.getElementById("practiceFeedback").className = "feedback incorrect";
  document.getElementById("verifyBtn").textContent = "다음 →";
}

function movePractice(dir) {
  const { cards, index } = state.practice;
  if (!cards.length) return;
  state.practice.index = (index + dir + cards.length) % cards.length;
  state.practice.revealed = false;
  renderPracticeCard();
}

/* ============================================================
   BACK BUTTON + INIT
   ============================================================ */
document.getElementById("backBtn").addEventListener("click", () => {
  if (window.history.length > 1) window.history.back();
  else window.location.hash = "#/";
});

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);