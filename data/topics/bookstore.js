registerTopic({
  id: "bookstore",
  title: "At the Bookstore",
  titleKo: "서점에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "📚",
  summary: "Browsing books, asking for recommendations, and buying at a bookstore in English.",
  summaryKo: "책 둘러보기, 추천 요청, 서점에서 구매하기에 관한 표현.",

  sections: [
    {
      title: "Browsing Books",
      titleKo: "책 둘러보기",
      questions: [
        {
          q: "How do you usually choose a book to read?",
          qKo: "보통 읽을 책을 어떻게 고르나요?",
          vocab: [
            { en: "bestseller",   ko: "베스트셀러" },
            { en: "cover",        ko: "표지" },
            { en: "blurb",        ko: "책 소개" },
            { en: "genre",        ko: "장르" },
          ],
          phrasalVerbs: [
            { en: "flip through", ko: "대충 넘겨보다" },
            { en: "base on",      ko: "~을 바탕으로 하다" },
          ],
          model: "I flip through the first few pages and base my choice on the blurb and reviews.",
          modelKo: "몇 페이지를 대충 넘겨보고, 책 소개와 리뷰를 바탕으로 선택해요.",
        },
        {
          q: "Do you prefer physical books or e-books?",
          qKo: "종이책과 전자책 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "paperback",  ko: "페이퍼백" },
            { en: "hardcover",  ko: "양장본" },
            { en: "e-reader",   ko: "전자책 리더기" },
            { en: "shelf",      ko: "책장" },
          ],
          phrasalVerbs: [
            { en: "lean toward", ko: "~쪽으로 기울다" },
            { en: "miss out on", ko: "~을 놓치다" },
          ],
          model: "I lean toward paperbacks for the feel, but I miss out on the convenience of e-readers.",
          modelKo: "손맛 때문에 페이퍼백 쪽으로 기울지만, 전자책 리더기의 편리함은 놓치게 돼요.",
        },
        {
          q: "Do you ever buy books as gifts?",
          qKo: "책을 선물로 사는 편인가요?",
          vocab: [
            { en: "recommendation", ko: "추천" },
            { en: "genre",          ko: "장르" },
            { en: "wrapping",       ko: "포장" },
            { en: "bookmark",       ko: "책갈피" },
          ],
          phrasalVerbs: [
            { en: "pick out",   ko: "고르다" },
            { en: "wrap up",    ko: "포장하다" },
          ],
          model: "Yes, I pick out a book based on their taste and have it wrapped up nicely.",
          modelKo: "네, 상대 취향에 맞춰 책을 고르고 예쁘게 포장해요.",
        },
      ],
    },
    {
      title: "Asking for Help",
      titleKo: "도움 요청",
      questions: [
        {
          q: "How do you ask for a recommendation at a bookstore?",
          qKo: "서점에서 추천을 어떻게 요청하나요?",
          vocab: [
            { en: "staff",        ko: "직원" },
            { en: "section",      ko: "구역" },
            { en: "similar",      ko: "비슷한" },
            { en: "recommend",    ko: "추천하다" },
          ],
          phrasalVerbs: [
            { en: "ask for",   ko: "요청하다" },
            { en: "point to",  ko: "가리키다" },
          ],
          model: "I ask the staff to recommend something similar to what I already love.",
          modelKo: "직원에게 제가 좋아하는 것과 비슷한 걸 추천해 달라고 해요.",
        },
        {
          q: "Have you ever ordered a book that wasn't in stock?",
          qKo: "재고가 없는 책을 주문한 적이 있나요?",
          vocab: [
            { en: "out of stock", ko: "품절" },
            { en: "order",        ko: "주문" },
            { en: "delivery",     ko: "배송" },
            { en: "notification", ko: "알림" },
          ],
          phrasalVerbs: [
            { en: "sign up for", ko: "신청하다" },
            { en: "come in",     ko: "(물건이) 들어오다" },
          ],
          model: "Yes, I signed up for a notification when it comes back in stock and got the delivery a week later.",
          modelKo: "네, 재입고 알림을 신청했고 일주일 후에 배송받았어요.",
        },
        {
          q: "Do you ever go to book signings or author events?",
          qKo: "사인회나 작가 행사에 가는 편인가요?",
          vocab: [
            { en: "author",       ko: "작가" },
            { en: "signing",      ko: "사인회" },
            { en: "reading",      ko: "낭독회" },
            { en: "Q&A",          ko: "질의응답" },
          ],
          phrasalVerbs: [
            { en: "line up",     ko: "줄을 서다" },
            { en: "show up",     ko: "나타나다" },
          ],
          model: "I line up early when a favorite author shows up for a signing or Q&A.",
          modelKo: "좋아하는 작가가 사인회나 질의응답을 위해 나타나면 일찍 줄을 서요.",
        },
      ],
    },
    {
      title: "Reading Habits",
      titleKo: "독서 습관",
      questions: [
        {
          q: "How often do you read?",
          qKo: "얼마나 자주 책을 읽나요?",
          vocab: [
            { en: "habit",       ko: "습관" },
            { en: "routine",     ko: "일상" },
            { en: "bedtime",     ko: "취침 시간" },
            { en: "chapter",     ko: "챕터" },
          ],
          phrasalVerbs: [
            { en: "wind down",   ko: "긴장을 풀다" },
            { en: "get through", ko: "다 읽다" },
          ],
          model: "I read most nights to wind down. I usually get through a chapter before bed.",
          modelKo: "대부분 밤에 긴장을 풀기 위해 책을 읽어요. 보통 자기 전에 한 챕터를 다 읽어요.",
        },
        {
          q: "Do you read in English? Is it difficult?",
          qKo: "영어로 책을 읽나요? 어려운가요?",
          vocab: [
            { en: "vocabulary",  ko: "어휘" },
            { en: "context",     ko: "문맥" },
            { en: "translation", ko: "번역" },
            { en: "fluency",     ko: "유창함" },
          ],
          phrasalVerbs: [
            { en: "struggle with", ko: "~에 어려움을 겪다" },
            { en: "pick up",       ko: "습득하다" },
          ],
          model: "I struggle with some vocabulary, but reading in context helps me pick up new words naturally.",
          modelKo: "일부 어휘는 어렵지만, 문맥 속에서 읽으면 새로운 단어를 자연스럽게 습득할 수 있어요.",
        },
        {
          q: "What's the last book you couldn't put down?",
          qKo: "가장 최근에 손에서 놓을 수 없었던 책은 무엇인가요?",
          vocab: [
            { en: "page-turner",  ko: "손에서 놓을 수 없는 책" },
            { en: "plot",         ko: "줄거리" },
            { en: "character",    ko: "등장인물" },
            { en: "ending",       ko: "결말" },
          ],
          phrasalVerbs: [
            { en: "stay up",     ko: "늦게까지 깨어 있다" },
            { en: "get hooked",  ko: "빠지다" },
          ],
          model: "I stayed up late reading a thriller — I got hooked after the first chapter.",
          modelKo: "스릴러를 읽느라 늦게까지 깨어 있었어요. 첫 챕터에서 빠져들었어요.",
        },
      ],
    },
  ],

  grammarSpotlight: [],
});