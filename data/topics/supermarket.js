registerTopic({
  id: "supermarket",
  title: "At the Supermarket",
  titleKo: "마트에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "🛒",
  summary: "Shopping for groceries, asking for items, and checking out in English.",
  summaryKo: "식료품 쇼핑, 물건 문의, 계산하기 등 마트에서 쓰는 표현.",

  sections: [
    {
      title: "Finding Items",
      titleKo: "물건 찾기",
      questions: [
        {
          q: "How do you find items you're looking for in a supermarket?",
          qKo: "마트에서 찾는 물건을 어떻게 찾나요?",
          vocab: [
            { en: "aisle",       ko: "통로" },
            { en: "shelf",       ko: "선반" },
            { en: "section",     ko: "구역" },
            { en: "sign",        ko: "표지판" },
          ],
          phrasalVerbs: [
            { en: "look for",   ko: "찾다" },
            { en: "ask for",    ko: "물어보다" },
          ],
          model: "I look for the aisle signs and ask a staff member if I can't find something.",
          modelKo: "통로 표지판을 보고, 못 찾으면 직원에게 물어봐요.",
        },
        {
          q: "Do you prefer shopping for groceries in person or online?",
          qKo: "식료품 쇼핑을 직접 하는 것과 온라인으로 하는 것 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "groceries",    ko: "식료품" },
            { en: "delivery",     ko: "배달" },
            { en: "fresh produce", ko: "신선 식품" },
            { en: "convenience",  ko: "편리함" },
          ],
          phrasalVerbs: [
            { en: "pick out",    ko: "고르다" },
            { en: "stock up on", ko: "사재기하다" },
          ],
          model: "I prefer shopping in person because I can pick out fresh produce myself.",
          modelKo: "신선 식품을 직접 고를 수 있어서 매장 쇼핑을 선호해요.",
        },
        {
          q: "Have you ever bought something you didn't need?",
          qKo: "필요 없는 물건을 산 적이 있나요?",
          vocab: [
            { en: "impulse buy", ko: "충동 구매" },
            { en: "discount",    ko: "할인" },
            { en: "deal",        ko: "특가" },
            { en: "receipt",     ko: "영수증" },
          ],
          phrasalVerbs: [
            { en: "give in",   ko: "굴복하다" },
            { en: "end up",    ko: "결국 ~하게 되다" },
          ],
          model: "Yes, I gave in to an impulse buy last week and ended up with snacks I didn't need.",
          modelKo: "네, 지난주에 충동 구매에 굴복해서 필요 없는 간식을 사게 됐어요.",
        },
      ],
    },
    {
      title: "Checking Out",
      titleKo: "계산하기",
      questions: [
        {
          q: "How do you usually pay at the supermarket?",
          qKo: "마트에서 보통 어떻게 계산하나요?",
          vocab: [
            { en: "cashier",    ko: "계산원" },
            { en: "self-checkout", ko: "셀프 계산대" },
            { en: "cash",       ko: "현금" },
            { en: "card",       ko: "카드" },
          ],
          phrasalVerbs: [
            { en: "ring up",   ko: "계산하다" },
            { en: "bag up",    ko: "봉투에 담다" },
          ],
          model: "I usually use self-checkout and bag up my own groceries.",
          modelKo: "보통 셀프 계산대를 이용하고 내 물건을 직접 봉투에 담아요.",
        },
        {
          q: "What do you do if an item is out of stock?",
          qKo: "물건이 품절이면 어떻게 하나요?",
          vocab: [
            { en: "out of stock", ko: "품절" },
            { en: "substitute",   ko: "대체품" },
            { en: "rain check",   ko: "재입고 교환권" },
            { en: "restock",      ko: "재입고" },
          ],
          phrasalVerbs: [
            { en: "ask about",   ko: "물어보다" },
            { en: "settle for",  ko: "~로 만족하다" },
          ],
          model: "I ask about a substitute or settle for something similar.",
          modelKo: "대체품이 있는지 물어보거나 비슷한 걸로 만족해요.",
        },
        {
          q: "Do you use coupons or loyalty points?",
          qKo: "쿠폰이나 적립 포인트를 사용하나요?",
          vocab: [
            { en: "coupon",         ko: "쿠폰" },
            { en: "loyalty points", ko: "적립 포인트" },
            { en: "membership",     ko: "멤버십" },
            { en: "discount",       ko: "할인" },
          ],
          phrasalVerbs: [
            { en: "sign up for", ko: "가입하다" },
            { en: "cash in",     ko: "현금화하다" },
          ],
          model: "I sign up for loyalty programs and cash in points whenever I can.",
          modelKo: "적립 프로그램에 가입하고, 가능할 때마다 포인트를 사용해요.",
        },
      ],
    },
    {
      title: "Food & Freshness",
      titleKo: "식품과 신선도",
      questions: [
        {
          q: "How do you check if food is fresh?",
          qKo: "음식이 신선한지 어떻게 확인하나요?",
          vocab: [
            { en: "expiration date", ko: "유통기한" },
            { en: "fresh",           ko: "신선한" },
            { en: "bruised",         ko: "멍든" },
            { en: "ripe",            ko: "익은" },
          ],
          phrasalVerbs: [
            { en: "check over", ko: "꼼꼼히 확인하다" },
            { en: "look out for", ko: "조심하다" },
          ],
          model: "I check the expiration date and look out for any bruised or ripe items.",
          modelKo: "유통기한을 확인하고 멍들거나 너무 익은 것은 피해요.",
        },
        {
          q: "Do you read nutrition labels when shopping?",
          qKo: "쇼핑할 때 영양 성분표를 읽나요?",
          vocab: [
            { en: "nutrition label", ko: "영양 성분표" },
            { en: "ingredient",      ko: "재료" },
            { en: "calorie",         ko: "칼로리" },
            { en: "sugar",           ko: "설탕" },
          ],
          phrasalVerbs: [
            { en: "keep an eye on", ko: "주의 깊게 보다" },
            { en: "cut down on",    ko: "줄이다" },
          ],
          model: "I keep an eye on sugar and calories to cut down on processed food.",
          modelKo: "가공식품을 줄이려고 설탕과 칼로리를 주의 깊게 봐요.",
        },
        {
          q: "What do you usually buy at the supermarket?",
          qKo: "마트에서 보통 무엇을 사나요?",
          vocab: [
            { en: "staple",        ko: "주식, 기본 식품" },
            { en: "produce",       ko: "농산물" },
            { en: "dairy",         ko: "유제품" },
            { en: "snack",         ko: "간식" },
          ],
          phrasalVerbs: [
            { en: "stock up on", ko: "사재기하다" },
            { en: "run out of",  ko: "떨어지다" },
          ],
          model: "I stock up on staples like rice, eggs, and vegetables, and grab snacks when I run out.",
          modelKo: "쌀, 달걀, 채소 같은 기본 식품을 사재기하고, 간식이 떨어지면 사요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Countable & Uncountable Nouns", titleKo: "가산/불가산 명사", grammarId: "countable-uncountable" },
  ],
});