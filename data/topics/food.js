registerTopic({
  id: "food",
  title: "Food",
  titleKo: "음식",
  category: "Food & Dining",
  level: "Beginner",
  emoji: "🍽️",
  summary: "Everyday vocabulary for talking about food, meals, and eating.",
  summaryKo: "음식, 식사, 먹는 것에 대해 이야기할 때 쓰는 기본 어휘.",

  sections: [
    {
      title: "Talking About Food",
      titleKo: "음식에 대해 이야기하기",
      questions: [
        {
          q: "What's your favorite food?",
          qKo: "가장 좋아하는 음식이 뭐예요?",
          vocab: [
            { en: "meal",       ko: "식사" },
            { en: "flavor",     ko: "맛, 풍미" },
            { en: "ingredient", ko: "재료" },
          ],
          phrasalVerbs: [
            { en: "be into",  ko: "~을 좋아하다" },
            { en: "go for",   ko: "~을 선택하다" },
          ],
          model: "My favorite food is bibimbap because it has a lot of vegetables and a rich flavor.",
          modelKo: "제가 가장 좋아하는 음식은 비빔밥이에요. 채소도 많고 맛이 풍부하거든요.",
        },
        {
          q: "Do you prefer eating out or cooking at home?",
          qKo: "외식하는 걸 좋아하세요, 집에서 요리하는 걸 좋아하세요?",
          vocab: [
            { en: "eat out",    ko: "외식하다" },
            { en: "leftovers",  ko: "남은 음식" },
            { en: "portion",    ko: "1인분" },
          ],
          phrasalVerbs: [
            { en: "whip up",  ko: "(빠르게) 요리를 만들다" },
            { en: "throw together", ko: "대충 만들다" },
          ],
          model: "I usually cook at home during the week, but I eat out on weekends.",
          modelKo: "평일에는 보통 집에서 요리하고, 주말에는 외식해요.",
        },
      ],
    },
    {
      title: "Food & Culture",
      titleKo: "음식과 문화",
      questions: [
        {
          q: "How does food connect to your childhood memories?",
          qKo: "음식이 어린 시절 추억과 어떻게 연결되나요?",
          vocab: [
            { en: "comfort food", ko: "위로가 되는 음식" },
            { en: "tradition",    ko: "전통" },
            { en: "nostalgia",    ko: "향수, 그리움" },
          ],
          phrasalVerbs: [
            { en: "remind of",  ko: "~을 떠올리게 하다" },
            { en: "bring back", ko: "(기억을) 되살리다" },
          ],
          model: "My grandmother's kimchi jjigae always brings back warm childhood memories.",
          modelKo: "할머니의 김치찌개는 항상 따뜻한 어린 시절 추억을 떠올리게 해요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Countable & Uncountable Nouns", titleKo: "가산/불가산 명사", grammarId: "countable-uncountable" },
  ],
});
