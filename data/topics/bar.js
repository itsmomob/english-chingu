registerTopic({
  id: "bar",
  title: "At the Bar",
  titleKo: "바에서",
  category: "Food & Dining",
  level: "Intermediate",
  emoji: "🍺",
  summary: "Ordering drinks, toasting, and socializing at a bar or pub.",
  summaryKo: "술 주문, 건배, 바나 펍에서의 사교 표현.",

  sections: [
    {
      title: "Ordering Drinks",
      titleKo: "음료 주문",
      questions: [
        {
          q: "What's your go-to drink when you go to a bar?",
          qKo: "바에 가면 주로 어떤 음료를 마시나요?",
          vocab: [
            { en: "on tap",       ko: "생맥주로" },
            { en: "draft beer",   ko: "생맥주" },
            { en: "cocktail",     ko: "칵테일" },
            { en: "shot",         ko: "샷" },
          ],
          phrasalVerbs: [
            { en: "go for",    ko: "~로 하다" },
            { en: "stick to",  ko: "~을 고수하다" },
          ],
          model: "I usually go for a draft beer, but if the bar has a good cocktail menu, I'll try one.",
          modelKo: "보통 생맥주를 시키지만, 칵테일 메뉴가 좋으면 한 잔 시도해요.",
        },
        {
          q: "How do you decide what to order at a bar?",
          qKo: "바에서 뭘 시킬지 어떻게 정하나요?",
          vocab: [
            { en: "menu",         ko: "메뉴" },
            { en: "signature drink", ko: "시그니처 음료" },
            { en: "recommendation", ko: "추천" },
            { en: "bartender",    ko: "바텐더" },
          ],
          phrasalVerbs: [
            { en: "ask for",   ko: "요청하다" },
            { en: "go with",   ko: "~로 하다" },
          ],
          model: "I ask the bartender for a recommendation and go with whatever sounds interesting.",
          modelKo: "바텐더에게 추천을 부탁하고 흥미로워 보이는 걸로 골라요.",
        },
        {
          q: "Do you have a favorite bar? What makes it special?",
          qKo: "좋아하는 바가 있나요? 무엇이 특별한가요?",
          vocab: [
            { en: "cozy",         ko: "아늑한" },
            { en: "vibe",         ko: "분위기" },
            { en: "playlist",     ko: "재생 목록" },
            { en: "regular",      ko: "단골" },
          ],
          phrasalVerbs: [
            { en: "hang out",   ko: "어울리다" },
            { en: "come back",  ko: "다시 오다" },
          ],
          model: "There's a cozy wine bar near my place with a great playlist, and I always come back.",
          modelKo: "집 근처에 재생 목록이 좋은 아늑한 와인 바가 있는데 항상 다시 가요.",
        },
      ],
    },
    {
      title: "Drinking Etiquette",
      titleKo: "음주 예절",
      questions: [
        {
          q: "What's the drinking etiquette in your country?",
          qKo: "당신 나라의 음주 예절은 어떤가요?",
          vocab: [
            { en: "toast",     ko: "건배" },
            { en: "cheers",    ko: "건배" },
            { en: "round",     ko: "한 잔씩 돌리기" },
            { en: "pouring",   ko: "따르기" },
          ],
          phrasalVerbs: [
            { en: "pour out",  ko: "따르다" },
            { en: "top up",    ko: "채우다" },
          ],
          model: "In Korea, we pour drinks for each other and wait until everyone is served before we drink.",
          modelKo: "한국에서는 서로 술을 따라주고 모두에게 잔이 돌아간 뒤에 마셔요.",
        },
        {
          q: "How do you handle saying no to alcohol politely?",
          qKo: "정중하게 술을 거절하는 방법은 무엇인가요?",
          vocab: [
            { en: "designated driver", ko: "운전 대행자" },
            { en: "allergy",           ko: "알레르기" },
            { en: "on medication",     ko: "약 복용 중" },
            { en: "preference",        ko: "선호" },
          ],
          phrasalVerbs: [
            { en: "turn down",  ko: "거절하다" },
            { en: "opt for",    ko: "~로 하다" },
          ],
          model: "I usually turn it down politely by saying I'm the designated driver or I'll opt for a non-alcoholic drink.",
          modelKo: "운전 대행자라거나 무알콜 음료로 하겠다고 하면서 정중하게 거절해요.",
        },
        {
          q: "What are the biggest drinking culture differences you've noticed?",
          qKo: "술 문화에서 가장 크게 느낀 차이는 무엇인가요?",
          vocab: [
            { en: "culture shock", ko: "문화 충격" },
            { en: "pressure",      ko: "압박" },
            { en: "ritual",        ko: "의식" },
            { en: "tradition",     ko: "전통" },
          ],
          phrasalVerbs: [
            { en: "feel pressured", ko: "압박을 느끼다" },
            { en: "loosen up",      ko: "긴장을 풀다" },
          ],
          model: "One culture shock was how much people feel pressured to drink in some countries, whereas others loosen up more freely.",
          modelKo: "어떤 나라에서는 술을 마셔야 한다는 압박을 많이 느끼는데, 다른 나라는 더 자유롭게 분위기를 푸는 게 문화 충격이었어요.",
        },
      ],
    },
    {
      title: "Nights Out",
      titleKo: "밤 외출",
      questions: [
        {
          q: "Do you prefer a quiet pub or a lively club?",
          qKo: "조용한 펍과 활기찬 클럽 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "pub",      ko: "펍" },
            { en: "club",     ko: "클럽" },
            { en: "crowd",    ko: "인파" },
            { en: "atmosphere", ko: "분위기" },
          ],
          phrasalVerbs: [
            { en: "lean toward", ko: "~쪽으로 기울다" },
            { en: "steer clear of", ko: "피하다" },
          ],
          model: "I lean toward a quiet pub for conversation and steer clear of loud clubs.",
          modelKo: "대화를 나누기 좋은 조용한 펍 쪽으로 기울고 시끄러운 클럽은 피해요.",
        },
        {
          q: "What do you usually do after a night out?",
          qKo: "밤 외출 후 보통 무엇을 하나요?",
          vocab: [
            { en: "late-night snack", ko: "야식" },
            { en: "taxi",             ko: "택시" },
            { en: "hangover",         ko: "숙취" },
            { en: "ride home",        ko: "귀가 교통편" },
          ],
          phrasalVerbs: [
            { en: "call it a night",  ko: "오늘은 이만 끝내다" },
            { en: "grab a bite",      ko: "간단히 먹다" },
          ],
          model: "I usually call it a night around midnight and grab a bite before heading home.",
          modelKo: "보통 자정쯤 오늘은 이만 끝내고 집에 가기 전에 간단히 먹어요.",
        },
        {
          q: "Do you have a rule for how much you drink?",
          qKo: "술 마시는 양에 대한 규칙이 있나요?",
          vocab: [
            { en: "limit",       ko: "한계" },
            { en: "moderation",  ko: "적당함" },
            { en: "hydration",   ko: "수분 섭취" },
            { en: "pace",        ko: "속도" },
          ],
          phrasalVerbs: [
            { en: "cut back on",   ko: "줄이다" },
            { en: "keep track of", ko: "파악하다" },
          ],
          model: "I try to keep track of my pace and cut back on alcohol when I feel it's too much.",
          modelKo: "속도를 파악하려고 노력하고, 너무 많다고 느끼면 술을 줄여요.",
        },
      ],
    },
  ],

  grammarSpotlight: [],
});