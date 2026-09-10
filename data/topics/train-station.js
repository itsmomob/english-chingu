registerTopic({
  id: "train-station",
  title: "At the Train Station",
  titleKo: "기차역에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "🚉",
  summary: "Buying tickets, reading schedules, and navigating train stations in English.",
  summaryKo: "표 구매, 시간표 확인, 기차역 이용에 관한 표현.",

  sections: [
    {
      title: "Buying Tickets",
      titleKo: "표 구매",
      questions: [
        {
          q: "How do you usually buy train tickets?",
          qKo: "보통 기차표를 어떻게 구매하나요?",
          vocab: [
            { en: "one-way ticket", ko: "편도표" },
            { en: "round-trip",     ko: "왕복" },
            { en: "ticket machine", ko: "발권기" },
            { en: "counter",        ko: "창구" },
          ],
          phrasalVerbs: [
            { en: "pick up",   ko: "(표를) 받다" },
            { en: "pay for",   ko: "~을 지불하다" },
          ],
          model: "I usually pick up my tickets at the machine, but sometimes I go to the counter for help.",
          modelKo: "보통 발권기에서 표를 받지만, 가끔 도움이 필요하면 창구에 가요.",
        },
        {
          q: "Do you prefer a window or aisle seat on a train?",
          qKo: "기차에서 창가 좌석과 통로 좌석 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "window seat",  ko: "창가 좌석" },
            { en: "aisle seat",   ko: "통로 좌석" },
            { en: "reserved",     ko: "지정석" },
            { en: "unreserved",   ko: "자유석" },
          ],
          phrasalVerbs: [
            { en: "settle in",   ko: "자리를 잡다" },
            { en: "stretch out", ko: "기지개를 켜다" },
          ],
          model: "I prefer a window seat so I can settle in and watch the scenery.",
          modelKo: "자리를 잡고 풍경을 볼 수 있도록 창가 좌석을 선호해요.",
        },
        {
          q: "Have you ever missed a train? What happened?",
          qKo: "기차를 놓친 적이 있나요? 어떻게 됐나요?",
          vocab: [
            { en: "delay",       ko: "지연" },
            { en: "platform",    ko: "승강장" },
            { en: "connection",  ko: "환승" },
            { en: "refund",      ko: "환불" },
          ],
          phrasalVerbs: [
            { en: "miss out on", ko: "~을 놓치다" },
            { en: "end up",      ko: "결국 ~하게 되다" },
          ],
          model: "Once I missed a connection because of a delay and ended up waiting two hours for the next train.",
          modelKo: "한 번은 지연 때문에 환승을 놓쳐서 결국 다음 기차를 두 시간 기다렸어요.",
        },
      ],
    },
    {
      title: "Navigating the Station",
      titleKo: "역 안에서 이동하기",
      questions: [
        {
          q: "How do you find your platform?",
          qKo: "승강장을 어떻게 찾나요?",
          vocab: [
            { en: "departure board", ko: "출발 안내판" },
            { en: "platform",        ko: "승강장" },
            { en: "track",           ko: "선로" },
            { en: "escalator",       ko: "에스컬레이터" },
          ],
          phrasalVerbs: [
            { en: "look for",  ko: "찾다" },
            { en: "head to",   ko: "~로 향하다" },
          ],
          model: "I look for my train on the departure board, then head to the right platform.",
          modelKo: "출발 안내판에서 내 기차를 찾고, 맞는 승강장으로 향해요.",
        },
        {
          q: "What do you do if you can't find your way?",
          qKo: "길을 찾지 못하면 어떻게 하나요?",
          vocab: [
            { en: "information desk", ko: "안내소" },
            { en: "staff",            ko: "직원" },
            { en: "map",              ko: "지도" },
            { en: "sign",             ko: "표지판" },
          ],
          phrasalVerbs: [
            { en: "ask for",    ko: "요청하다" },
            { en: "point out",  ko: "가리키다" },
          ],
          model: "I usually ask for help at the information desk or look for a sign.",
          modelKo: "보통 안내소에서 도움을 요청하거나 표지판을 찾아요.",
        },
        {
          q: "Do you like long train journeys? Why or why not?",
          qKo: "긴 기차 여행을 좋아하나요? 왜요?",
          vocab: [
            { en: "scenery",      ko: "풍경" },
            { en: "sleeper car",  ko: "침대칸" },
            { en: "dining car",   ko: "식당칸" },
            { en: "legroom",      ko: "다리 공간" },
          ],
          phrasalVerbs: [
            { en: "doze off",   ko: "깜빡 졸다" },
            { en: "take in",    ko: "감상하다" },
          ],
          model: "I love long train journeys because I can take in the scenery and doze off without any stress.",
          modelKo: "긴 기차 여행을 좋아해요. 풍경을 감상하고 스트레스 없이 졸 수 있거든요.",
        },
      ],
    },
    {
      title: "Arrival & Departure",
      titleKo: "도착과 출발",
      questions: [
        {
          q: "How do you know when to get off the train?",
          qKo: "언제 내려야 하는지 어떻게 아나요?",
          vocab: [
            { en: "announcement", ko: "안내 방송" },
            { en: "stop",         ko: "정류장" },
            { en: "destination",  ko: "목적지" },
            { en: "final stop",   ko: "종점" },
          ],
          phrasalVerbs: [
            { en: "get off",   ko: "내리다" },
            { en: "listen for", ko: "귀 기울이다" },
          ],
          model: "I listen for the announcement and check the app to know when to get off.",
          modelKo: "안내 방송을 듣고 앱을 확인해서 언제 내릴지 알아요.",
        },
        {
          q: "What do you do if your train is delayed?",
          qKo: "기차가 지연되면 어떻게 하나요?",
          vocab: [
            { en: "delay",       ko: "지연" },
            { en: "cancellation", ko: "취소" },
            { en: "compensation", ko: "보상" },
            { en: "alternative", ko: "대안" },
          ],
          phrasalVerbs: [
            { en: "sort out",   ko: "해결하다" },
            { en: "look into",  ko: "조사하다" },
          ],
          model: "I ask the staff to sort out an alternative or look into compensation.",
          modelKo: "직원에게 대안을 마련해 달라고 하거나 보상에 대해 알아봐 달라고 해요.",
        },
        {
          q: "Have you ever taken an overnight train?",
          qKo: "야간 기차를 탄 적이 있나요?",
          vocab: [
            { en: "overnight train", ko: "야간 기차" },
            { en: "sleeper",         ko: "침대칸" },
            { en: "berth",           ko: "침상" },
            { en: "blanket",         ko: "담요" },
          ],
          phrasalVerbs: [
            { en: "settle in",   ko: "자리를 잡다" },
            { en: "wake up",     ko: "깨어나다" },
          ],
          model: "Yes, I took an overnight train in Europe. I settled in a sleeper and woke up in a new city.",
          modelKo: "네, 유럽에서 야간 기차를 탔어요. 침대칸에 자리를 잡고 자고 일어나니 새로운 도시에 도착했어요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Prepositions of Time (in, on, at)", titleKo: "시간 전치사", grammarId: "prepositions-time" },
  ],
});