registerTopic({
  id: "restaurant",
  title: "At the Restaurant",
  titleKo: "식당에서",
  category: "Food & Dining",
  level: "Beginner",
  emoji: "🍴",
  summary: "Ordering food, asking about dishes, and paying at a restaurant.",
  summaryKo: "음식 주문, 메뉴 문의, 계산하기 등 식당에서 쓰는 표현.",

  sections: [
    {
      title: "Arriving & Ordering",
      titleKo: "도착과 주문",
      questions: [
        {
          q: "Do you usually make a reservation when eating out?",
          qKo: "외식할 때 보통 예약을 하나요?",
          vocab: [
            { en: "reservation", ko: "예약" },
            { en: "table for two", ko: "2인 테이블" },
            { en: "waitlist",     ko: "대기 명단" },
            { en: "host",         ko: "안내 직원" },
          ],
          phrasalVerbs: [
            { en: "walk in",   ko: "예약 없이 들어가다" },
            { en: "put down",  ko: "(이름을) 올리다" },
          ],
          model: "I usually walk in unless it's a weekend, then I put my name down on the waitlist.",
          modelKo: "주말이 아니면 보통 예약 없이 들어가고, 주말이면 대기 명단에 이름을 올려요.",
        },
        {
          q: "How do you decide what to order?",
          qKo: "무엇을 주문할지 어떻게 정하나요?",
          vocab: [
            { en: "menu",         ko: "메뉴판" },
            { en: "signature dish", ko: "대표 요리" },
            { en: "recommendation", ko: "추천" },
            { en: "portion",      ko: "1인분" },
          ],
          phrasalVerbs: [
            { en: "go for",      ko: "~을 선택하다" },
            { en: "opt for",     ko: "~을 택하다" },
          ],
          model: "I usually go for the signature dish or ask the server for a recommendation.",
          modelKo: "보통 대표 요리를 선택하거나 서버에게 추천을 부탁해요.",
        },
        {
          q: "Have you ever ordered something you didn't like?",
          qKo: "좋아하지 않는 음식을 주문한 적이 있나요?",
          vocab: [
            { en: "acquired taste", ko: "익숙해져야 좋아지는 맛" },
            { en: "bland",          ko: "싱거운" },
            { en: "overcooked",     ko: "너무 익힌" },
            { en: "complaint",      ko: "불만" },
          ],
          phrasalVerbs: [
            { en: "end up",     ko: "결국 ~하게 되다" },
            { en: "send back",  ko: "반품하다, 되돌려 보내다" },
          ],
          model: "Yes, once I ordered something too spicy and ended up sending it back.",
          modelKo: "네, 한 번은 너무 매운 걸 주문해서 결국 되돌려 보냈어요.",
        },
      ],
    },
    {
      title: "During the Meal",
      titleKo: "식사 중",
      questions: [
        {
          q: "What do you usually talk about during a meal?",
          qKo: "식사 중에 보통 무슨 이야기를 하나요?",
          vocab: [
            { en: "catch up",     ko: "근황을 나누다" },
            { en: "conversation", ko: "대화" },
            { en: "company",      ko: "동행, 함께하는 사람" },
            { en: "atmosphere",   ko: "분위기" },
          ],
          phrasalVerbs: [
            { en: "open up",   ko: "마음을 열다" },
            { en: "laugh about", ko: "~에 대해 웃다" },
          ],
          model: "We usually catch up on each other's lives and laugh about old memories.",
          modelKo: "보통 서로의 근황을 나누고 옛 추억에 대해 웃어요.",
        },
        {
          q: "How do you handle dietary restrictions or allergies?",
          qKo: "식이 제한이나 알레르기는 어떻게 처리하나요?",
          vocab: [
            { en: "allergy",       ko: "알레르기" },
            { en: "vegetarian",    ko: "채식주의자" },
            { en: "gluten-free",   ko: "글루텐 프리" },
            { en: "dairy",         ko: "유제품" },
          ],
          phrasalVerbs: [
            { en: "ask about",   ko: "~에 대해 묻다" },
            { en: "stay away from", ko: "~을 피하다" },
          ],
          model: "I always ask about ingredients and stay away from anything with dairy.",
          modelKo: "항상 재료에 대해 물어보고 유제품이 들어간 건 피해요.",
        },
        {
          q: "Do you prefer a quiet restaurant or a lively one?",
          qKo: "조용한 식당과 활기찬 식당 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "ambiance",    ko: "분위기" },
            { en: "noisy",       ko: "시끄러운" },
            { en: "cozy",        ko: "아늑한" },
            { en: "crowded",     ko: "붐비는" },
          ],
          phrasalVerbs: [
            { en: "lean toward", ko: "~쪽으로 기울다" },
            { en: "miss out on", ko: "~을 놓치다" },
          ],
          model: "I lean toward a cozy place for a quiet dinner, but a lively one is fun for celebrations.",
          modelKo: "조용한 저녁 식사에는 아늑한 곳이 좋지만, 축하 자리에는 활기찬 곳이 재미있어요.",
        },
      ],
    },
    {
      title: "Paying & Leaving",
      titleKo: "계산과 퇴장",
      questions: [
        {
          q: "Do you usually split the bill or take turns paying?",
          qKo: "보통 각자 내나요, 아니면 번갈아 내나요?",
          vocab: [
            { en: "split the bill", ko: "각자 내다" },
            { en: "tip",            ko: "팁" },
            { en: "check",          ko: "계산서" },
            { en: "cash",           ko: "현금" },
          ],
          phrasalVerbs: [
            { en: "chip in",   ko: "돈을 보태다" },
            { en: "cover",     ko: "(비용을) 부담하다" },
          ],
          model: "We usually split the bill, but sometimes one person covers it and we take turns.",
          modelKo: "보통 각자 내지만, 가끔 한 사람이 내고 번갈아 내기도 해요.",
        },
        {
          q: "How do you call the server for the bill?",
          qKo: "계산서를 달라고 어떻게 요청하나요?",
          vocab: [
            { en: "bill",    ko: "계산서" },
            { en: "receipt", ko: "영수증" },
            { en: "card",    ko: "카드" },
            { en: "change",  ko: "거스름돈" },
          ],
          phrasalVerbs: [
            { en: "flag down", ko: "손을 흔들어 부르다" },
            { en: "settle up", ko: "계산을 끝내다" },
          ],
          model: "I usually flag down the server and ask, 'Could we get the bill, please?'",
          modelKo: "보통 서버를 손으로 부르고 '계산서 주시겠어요?'라고 말해요.",
        },
        {
          q: "Have you ever left a tip? How much is normal in your country?",
          qKo: "팁을 남긴 적이 있나요? 당신 나라에서는 보통 얼마를 주나요?",
          vocab: [
            { en: "tip",           ko: "팁" },
            { en: "gratuity",      ko: "봉사료" },
            { en: "service charge", ko: "서비스 요금" },
            { en: "customary",     ko: "관례적인" },
          ],
          phrasalVerbs: [
            { en: "leave behind", ko: "남겨두다" },
            { en: "add on",       ko: "추가하다" },
          ],
          model: "In Korea, tipping isn't customary, but when I travel, I leave 15–20% if the service was good.",
          modelKo: "한국에서는 팁이 관례가 아니지만, 여행할 때는 서비스가 좋으면 15~20%를 남겨요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Countable & Uncountable Nouns", titleKo: "가산/불가산 명사", grammarId: "countable-uncountable" },
    { title: "Modal Verbs",                   titleKo: "조동사",             grammarId: "modals" },
  ],
});