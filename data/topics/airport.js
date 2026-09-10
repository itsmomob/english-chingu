registerTopic({
  id: "airport",
  title: "At the Airport",
  titleKo: "공항에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "✈️",
  summary: "Checking in, going through security, and handling flight situations in English.",
  summaryKo: "체크인, 보안 검색, 비행 관련 상황을 영어로 처리하는 표현.",

  sections: [
    {
      title: "Check-in & Boarding",
      titleKo: "체크인과 탑승",
      questions: [
        {
          q: "How early do you usually arrive at the airport?",
          qKo: "보통 공항에 얼마나 일찍 도착하나요?",
          vocab: [
            { en: "check-in counter", ko: "체크인 카운터" },
            { en: "boarding pass",    ko: "탑승권" },
            { en: "departure",        ko: "출발" },
            { en: "gate",             ko: "탑승구" },
          ],
          phrasalVerbs: [
            { en: "check in",  ko: "체크인하다" },
            { en: "drop off",  ko: "(짐을) 부치다" },
          ],
          model: "I usually arrive about two hours early for international flights and one hour for domestic ones.",
          modelKo: "국제선은 보통 두 시간 전에, 국내선은 한 시간 전에 도착해요.",
        },
        {
          q: "Do you prefer a window or an aisle seat? Why?",
          qKo: "창가 좌석과 통로 좌석 중 어느 쪽을 선호하세요? 왜요?",
          vocab: [
            { en: "aisle seat",   ko: "통로 좌석" },
            { en: "window seat",  ko: "창가 좌석" },
            { en: "legroom",      ko: "다리 공간" },
            { en: "overhead bin", ko: "머리 위 선반" },
          ],
          phrasalVerbs: [
            { en: "stretch out", ko: "기지개를 켜다" },
            { en: "get up",      ko: "일어나다" },
          ],
          model: "I prefer an aisle seat so I can stretch out and get up without disturbing anyone.",
          modelKo: "다리를 뻗고 다른 사람을 방해하지 않고 일어날 수 있도록 통로 좌석을 선호해요.",
        },
        {
          q: "What do you usually do while waiting for your flight?",
          qKo: "비행기를 기다리는 동안 보통 무엇을 하나요?",
          vocab: [
            { en: "duty-free shop", ko: "면세점" },
            { en: "lounge",         ko: "라운지" },
            { en: "Wi-Fi",          ko: "와이파이" },
            { en: "charging port",  ko: "충전 포트" },
          ],
          phrasalVerbs: [
            { en: "kill time",   ko: "시간을 때우다" },
            { en: "browse around", ko: "둘러보다" },
          ],
          model: "I usually browse around the duty-free shops or find a quiet spot to read and charge my phone.",
          modelKo: "보통 면세점을 둘러보거나 조용한 곳을 찾아 책을 읽고 휴대폰을 충전해요.",
        },
      ],
    },
    {
      title: "Security & Immigration",
      titleKo: "보안 검색과 출입국 심사",
      questions: [
        {
          q: "How do you prepare for the security check?",
          qKo: "보안 검색을 어떻게 준비하나요?",
          vocab: [
            { en: "security check", ko: "보안 검색" },
            { en: "liquid",         ko: "액체" },
            { en: "laptop",         ko: "노트북" },
            { en: "belt",           ko: "벨트" },
          ],
          phrasalVerbs: [
            { en: "take off",  ko: "벗다" },
            { en: "take out",  ko: "꺼내다" },
          ],
          model: "I take off my belt and shoes, and take out my laptop and liquids before I reach the scanner.",
          modelKo: "스캐너에 도착하기 전에 벨트와 신발을 벗고, 노트북과 액체를 꺼내요.",
        },
        {
          q: "What questions do immigration officers usually ask?",
          qKo: "출입국 심사관이 보통 어떤 질문을 하나요?",
          vocab: [
            { en: "immigration",     ko: "출입국 심사" },
            { en: "purpose of visit", ko: "방문 목적" },
            { en: "duration of stay", ko: "체류 기간" },
            { en: "return ticket",   ko: "왕복 항공권" },
          ],
          phrasalVerbs: [
            { en: "fill out",  ko: "작성하다" },
            { en: "hand over", ko: "건네다" },
          ],
          model: "They usually ask about my purpose of visit, how long I'm staying, and where I'll be staying.",
          modelKo: "보통 방문 목적, 체류 기간, 어디에 머무는지 물어봐요.",
        },
        {
          q: "Have you ever had a problem at immigration?",
          qKo: "출입국 심사에서 문제가 생긴 적이 있나요?",
          vocab: [
            { en: "declaration form", ko: "신고서" },
            { en: "customs",          ko: "세관" },
            { en: "quarantine",       ko: "검역" },
            { en: "visa",             ko: "비자" },
          ],
          phrasalVerbs: [
            { en: "go through",   ko: "통과하다" },
            { en: "sort out",     ko: "해결하다" },
          ],
          model: "Once I forgot to fill out the declaration form, but the officer was kind and helped me sort it out.",
          modelKo: "한 번은 신고서를 작성하지 않아서 심사관이 친절하게 도와줬어요.",
        },
      ],
    },
    {
      title: "On the Plane & Arrival",
      titleKo: "기내와 도착",
      questions: [
        {
          q: "What do you usually do during a flight?",
          qKo: "비행기 안에서 보통 무엇을 하나요?",
          vocab: [
            { en: "flight attendant", ko: "승무원" },
            { en: "tray table",       ko: "접이식 테이블" },
            { en: "headphones",       ko: "헤드폰" },
            { en: "jet lag",          ko: "시차 피로" },
          ],
          phrasalVerbs: [
            { en: "doze off",     ko: "깜빡 졸다" },
            { en: "settle in",    ko: "자리를 잡다" },
          ],
          model: "I usually settle in with a movie, doze off for a bit, and try to adjust to the new time zone.",
          modelKo: "보통 영화를 보면서 자리를 잡고, 잠깐 졸고, 새로운 시간대에 적응하려고 노력해요.",
        },
        {
          q: "How do you deal with jet lag?",
          qKo: "시차 피로는 어떻게 대처하나요?",
          vocab: [
            { en: "jet lag",      ko: "시차 피로" },
            { en: "melatonin",    ko: "멜라토닌" },
            { en: "hydration",    ko: "수분 섭취" },
            { en: "daylight",     ko: "햇빛" },
          ],
          phrasalVerbs: [
            { en: "fight off",   ko: "이겨내다" },
            { en: "stay up",     ko: "깨어 있다" },
          ],
          model: "I try to fight off jet lag by getting sunlight and staying up until a normal bedtime.",
          modelKo: "햇빛을 쬐고 평소 취침 시간까지 깨어 있으면서 시차 피로를 이겨내려고 해요.",
        },
        {
          q: "What do you do first after you land?",
          qKo: "비행기에서 내린 후 가장 먼저 무엇을 하나요?",
          vocab: [
            { en: "baggage claim", ko: "수하물 찾는 곳" },
            { en: "carousel",      ko: "수하물 회전 컨베이어" },
            { en: "arrival hall",  ko: "도착 홀" },
            { en: "pickup",        ko: "픽업" },
          ],
          phrasalVerbs: [
            { en: "pick up",     ko: "찾다, 데리다" },
            { en: "head to",     ko: "~로 향하다" },
          ],
          model: "I head straight to baggage claim, pick up my luggage, and then find a taxi or train.",
          modelKo: "바로 수하물 찾는 곳으로 가서 짐을 찾고, 그다음에 택시나 기차를 찾아요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Modal Verbs",   titleKo: "조동사",     grammarId: "modals" },
    { title: "Present Perfect", titleKo: "현재완료", grammarId: "present-perfect" },
  ],
});