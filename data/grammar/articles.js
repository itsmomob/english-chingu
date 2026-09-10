registerGrammar({
  id: "articles",
  title: "Articles (a, an, the)",
  titleKo: "관사",
  level: "Beginner",
  category: "Nouns & Determiners",
  explanationKo: "관사는 명사 앞에 붙어서 그 명사가 특정한 것인지 아닌지를 나타냅니다. 한국어에는 관사가 없기 때문에 한국인 학습자에게 가장 어려운 문법 중 하나입니다.",
  explanationEn: "Articles are small words that come before nouns to show whether we're talking about something specific or general.",
  structure: "a / an + singular countable noun  |  the + any noun (specific)  |  (no article) + plural/uncountable (general)",
  examples: [
    { en: "I saw a dog in the park.",             ko: "공원에서 개 한 마리를 봤어요." },
    { en: "The dog was very friendly.",           ko: "그 개는 매우 친근했어요." },
    { en: "I like dogs.",                         ko: "나는 개를 좋아해요." },
    { en: "She is an engineer.",                  ko: "그녀는 엔지니어입니다." },
  ],
  commonMistakes: [
    { wrong: "I bought a apple.",                 right: "I bought an apple.",                 note: "Use 'an' before vowel sounds." },
    { wrong: "I go to the school every day.",     right: "I go to school every day.",          note: "No 'the' with school, work, home, bed for general activities." },
    { wrong: "She is doctor.",                    right: "She is a doctor.",                   note: "Jobs always need 'a/an'." },
    { wrong: "I like the dogs.",                  right: "I like dogs.",                       note: "No article for plural nouns in general statements." },
  ],
  tips: [
    "'a' and 'an' are only for singular countable nouns.",
    "Use 'the' when both speaker and listener know which thing you mean.",
    "Use no article for general statements with plural or uncountable nouns.",
    "Jobs always need 'a/an': I'm a teacher, She's an artist.",
  ],
  related: ["countable-uncountable"],
});
