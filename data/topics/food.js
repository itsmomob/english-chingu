registerTopic({
  id: "food",
  title: "Food",
  titleKo: "음식",
  category: "Food & Dining",
  level: "Beginner",
  emoji: "🍽️",
  summary: "Talking about favorite foods, eating habits, and food culture.",
  summaryKo: "좋아하는 음식, 식습관, 음식 문화에 대해 이야기합니다.",

  sections: [
    /* ─────────────────────────────────────────────── */
    {
      title: "Favorite Foods",
      titleKo: "좋아하는 음식",
      questions: [
        {
          q: "What is your favorite food, and why do you like it?",
          qKo: "가장 좋아하는 음식은 무엇이고, 왜 좋아하나요?",
          vocab: [
            { en: "flavor",     ko: "맛, 풍미" },
            { en: "ingredient", ko: "재료" },
            { en: "dish",       ko: "요리" },
            { en: "taste",      ko: "맛" },
          ],
          phrasalVerbs: [
            { en: "be into",   ko: "~을 좋아하다" },
            { en: "go for",    ko: "~을 선택하다" },
          ],
          model: "My favorite food is bibimbap because it has a rich flavor and lots of healthy ingredients.",
          modelKo: "제가 가장 좋아하는 음식은 비빔밥이에요. 풍미가 풍부하고 건강한 재료가 많거든요.",
        },
        {
          q: "Is there any food you dislike? Why?",
          qKo: "싫어하는 음식이 있나요? 왜요?",
          vocab: [
            { en: "dislike",  ko: "싫어하다" },
            { en: "texture",  ko: "식감" },
            { en: "smell",    ko: "냄새" },
            { en: "bitter",   ko: "쓴" },
          ],
          phrasalVerbs: [
            { en: "stay away from", ko: "~을 피하다" },
            { en: "put off",        ko: "흥미를 잃게 하다" },
          ],
          model: "I usually stay away from cilantro because its strong smell puts me off.",
          modelKo: "저는 고수 냄새가 너무 강해서 보통 피하는 편이에요.",
        },
        {
          q: "What food reminds you of your childhood?",
          qKo: "어린 시절을 떠올리게 하는 음식이 있나요?",
          vocab: [
            { en: "comfort food", ko: "위로가 되는 음식" },
            { en: "nostalgia",    ko: "향수, 그리움" },
            { en: "homemade",     ko: "집에서 만든" },
          ],
          phrasalVerbs: [
            { en: "remind of",   ko: "~을 떠올리게 하다" },
            { en: "bring back",  ko: "(기억을) 되살리다" },
          ],
          model: "My grandmother's kimchi jjigae always brings back warm childhood memories.",
          modelKo: "할머니의 김치찌개는 항상 따뜻한 어린 시절 추억을 떠올리게 해요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Eating Habits",
      titleKo: "식습관",
      questions: [
        {
          q: "Do you prefer eating out or cooking at home?",
          qKo: "외식하는 걸 좋아하세요, 집에서 요리하는 걸 좋아하세요?",
          vocab: [
            { en: "eat out",    ko: "외식하다" },
            { en: "leftovers",  ko: "남은 음식" },
            { en: "portion",    ko: "1인분" },
            { en: "recipe",     ko: "레시피" },
          ],
          phrasalVerbs: [
            { en: "whip up",         ko: "(빠르게) 요리를 만들다" },
            { en: "throw together",  ko: "대충 만들다" },
          ],
          model: "I usually cook at home during the week, but I eat out on weekends to try new dishes.",
          modelKo: "평일에는 보통 집에서 요리하고, 주말에는 새로운 요리를 먹어보려고 외식해요.",
        },
        {
          q: "How often do you try new foods?",
          qKo: "새로운 음식을 얼마나 자주 먹어보나요?",
          vocab: [
            { en: "adventurous", ko: "모험적인" },
            { en: "cuisine",     ko: "요리 (특정 국가의)" },
            { en: "picky eater", ko: "편식하는 사람" },
          ],
          phrasalVerbs: [
            { en: "branch out",  ko: "영역을 넓히다" },
            { en: "open up to",  ko: "~에 마음을 열다" },
          ],
          model: "I try to branch out and taste new cuisines whenever I travel, but I'm still a picky eater at home.",
          modelKo: "여행할 때마다 새로운 요리에 도전하려고 하지만, 집에서는 여전히 편식하는 편이에요.",
        },
        {
          q: "Do you eat healthy? What does a healthy diet mean to you?",
          qKo: "건강하게 드시나요? 건강한 식단이란 무엇이라고 생각하세요?",
          vocab: [
            { en: "balanced diet", ko: "균형 잡힌 식단" },
            { en: "nutrient",      ko: "영양소" },
            { en: "processed food", ko: "가공식품" },
            { en: "sugar",         ko: "설탕" },
          ],
          phrasalVerbs: [
            { en: "cut down on",   ko: "~을 줄이다" },
            { en: "fill up on",    ko: "~로 배를 채우다" },
          ],
          model: "To me, a healthy diet means cutting down on sugar and processed food, and filling up on vegetables.",
          modelKo: "저에게 건강한 식단은 설탕과 가공식품을 줄이고 채소로 배를 채우는 것을 의미해요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Food & Culture",
      titleKo: "음식과 문화",
      questions: [
        {
          q: "How is food connected to culture in your country?",
          qKo: "당신 나라에서 음식은 문화와 어떻게 연결되어 있나요?",
          vocab: [
            { en: "tradition",  ko: "전통" },
            { en: "custom",     ko: "관습" },
            { en: "ceremony",   ko: "의례" },
            { en: "heritage",   ko: "유산" },
          ],
          phrasalVerbs: [
            { en: "pass down",  ko: "(세대를 거쳐) 전수하다" },
            { en: "date back to", ko: "~까지 거슬러 올라가다" },
          ],
          model: "In Korea, food is a big part of tradition — recipes are passed down through generations and shared at every family gathering.",
          modelKo: "한국에서 음식은 전통의 큰 부분을 차지해요. 레시피는 세대를 거쳐 전수되고 모든 가족 모임에서 함께 나눠요.",
        },
        {
          q: "Do you think food brings people together?",
          qKo: "음식이 사람들을 하나로 모은다고 생각하나요?",
          vocab: [
            { en: "gathering",   ko: "모임" },
            { en: "bond",        ko: "유대" },
            { en: "sharing",     ko: "나눔" },
          ],
          phrasalVerbs: [
            { en: "bond over",    ko: "~을 통해 유대감을 쌓다" },
            { en: "get together", ko: "모이다" },
          ],
          model: "Absolutely — people bond over food, and sharing a meal is one of the fastest ways to get together.",
          modelKo: "물론이죠. 사람들은 음식을 통해 유대감을 쌓고, 함께 식사하는 것은 가장 빠르게 어울리는 방법 중 하나예요.",
        },
        {
          q: "What food from your country would you recommend to a foreigner?",
          qKo: "외국인에게 추천하고 싶은 자국 음식이 있나요?",
          vocab: [
            { en: "signature dish", ko: "대표 요리" },
            { en: "acquired taste", ko: "익숙해져야 좋아지는 맛" },
            { en: "mild",           ko: "순한" },
            { en: "authentic",      ko: "정통의" },
          ],
          phrasalVerbs: [
            { en: "start off with", ko: "~으로 시작하다" },
            { en: "ease into",      ko: "천천히 적응하다" },
          ],
          model: "I'd start foreigners off with something mild like bulgogi before easing them into spicier dishes.",
          modelKo: "외국인들에게는 불고기처럼 순한 음식으로 시작하게 하고, 그다음에 매운 음식으로 천천히 적응시키고 싶어요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Countable & Uncountable Nouns", titleKo: "가산/불가산 명사", grammarId: "countable-uncountable" },
    { title: "-ed vs -ing Adjectives", titleKo: "감정 형용사", grammarId: "ed-ing-adjectives" },
  ],
});