registerTopic({
  id: "at-the-hotel",
  title: "At the Hotel",
  titleKo: "호텔에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "🏨",
  summary: "Checking in and out, using hotel facilities, and handling problems during a stay.",
  summaryKo: "체크인과 체크아웃, 호텔 시설 이용, 묵는 동안 생기는 문제에 대처하는 표현.",

  sections: [
    /* ─────────────────────────────────────────────── */
    {
      title: "Checking In & Out",
      titleKo: "체크인과 체크아웃",
      questions: [
        {
          q: "How was your last check-in experience?",
          qKo: "최근 체크인 경험은 어땠나요?",
          vocab: [
            { en: "reservation",    ko: "예약" },
            { en: "check-in",       ko: "체크인" },
            { en: "confirmation",   ko: "예약 확인서" },
            { en: "front desk",     ko: "프런트" },
          ],
          phrasalVerbs: [
            { en: "check in",  ko: "체크인하다" },
            { en: "sign in",   ko: "서명하다, 등록하다" },
          ],
          model: "Check-in was quick and easy. The staff were very welcoming and my room was ready early.",
          modelKo: "체크인이 빠르고 간편했어요. 직원들이 아주 친절했고 방도 일찍 준비돼 있었어요.",
        },
        {
          q: "Do you prefer checking in online or at the front desk?",
          qKo: "온라인 체크인과 프런트 체크인 중 어느 쪽을 선호하세요?",
          vocab: [
            { en: "ID",           ko: "신분증" },
            { en: "key card",     ko: "카드 키" },
            { en: "procedure",    ko: "절차" },
            { en: "efficient",    ko: "효율적인" },
          ],
          phrasalVerbs: [
            { en: "fill out",  ko: "작성하다" },
            { en: "hand in",   ko: "제출하다" },
          ],
          model: "I usually check in online to save time, but I still stop by the front desk to grab my key card.",
          modelKo: "시간을 아끼려고 보통 온라인으로 체크인하지만, 카드 키를 받으려고 프런트에는 들러요.",
        },
        {
          q: "What do you usually ask when you arrive at a hotel?",
          qKo: "호텔에 도착하면 보통 무엇을 물어보나요?",
          vocab: [
            { en: "amenities",    ko: "편의 시설" },
            { en: "breakfast",    ko: "조식" },
            { en: "Wi-Fi",        ko: "와이파이" },
            { en: "checkout time", ko: "체크아웃 시간" },
          ],
          phrasalVerbs: [
            { en: "ask about",  ko: "~에 대해 묻다" },
            { en: "find out",   ko: "알아보다" },
          ],
          model: "I usually ask about breakfast hours, Wi-Fi access, and what time checkout is.",
          modelKo: "보통 조식 시간, 와이파이 이용, 체크아웃 시간이 언제인지 물어봐요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Hotel Facilities & Services",
      titleKo: "호텔 시설과 서비스",
      questions: [
        {
          q: "What facilities do you look for in a hotel?",
          qKo: "호텔에서 어떤 시설을 찾으세요?",
          vocab: [
            { en: "gym",           ko: "헬스장" },
            { en: "pool",          ko: "수영장" },
            { en: "spa",           ko: "스파" },
            { en: "business center", ko: "비즈니스 센터" },
          ],
          phrasalVerbs: [
            { en: "look for",   ko: "찾다" },
            { en: "come with",  ko: "~이 딸려 있다" },
          ],
          model: "I always look for a hotel with a gym and free breakfast. A pool is a nice bonus.",
          modelKo: "저는 항상 헬스장과 무료 조식이 있는 호텔을 찾아요. 수영장이 있으면 더 좋고요.",
        },
        {
          q: "Have you ever used room service or asked the concierge for help?",
          qKo: "룸서비스를 이용하거나 컨시어지에게 도움을 요청한 적이 있나요?",
          vocab: [
            { en: "room service",  ko: "룸서비스" },
            { en: "concierge",     ko: "컨시어지" },
            { en: "housekeeping",  ko: "객실 청소" },
            { en: "recommendation", ko: "추천" },
          ],
          phrasalVerbs: [
            { en: "sort out",    ko: "해결하다" },
            { en: "set up",      ko: "준비하다, 마련하다" },
          ],
          model: "Yes, I once asked the concierge to set up a restaurant reservation, and their recommendation was excellent.",
          modelKo: "네, 한 번은 컨시어지에게 식당 예약을 부탁했는데, 추천해 준 곳이 정말 좋았어요.",
        },
        {
          q: "Do you prefer a hotel or an Airbnb? Why?",
          qKo: "호텔과 에어비앤비 중 어느 쪽을 선호하세요? 왜요?",
          vocab: [
            { en: "privacy",       ko: "사생활" },
            { en: "convenience",   ko: "편리함" },
            { en: "local experience", ko: "현지 경험" },
            { en: "budget",        ko: "예산" },
          ],
          phrasalVerbs: [
            { en: "lean toward",  ko: "~쪽으로 기울다" },
            { en: "miss out on",  ko: "~을 놓치다" },
          ],
          model: "I lean toward hotels for short trips because of the convenience, but Airbnbs are better for longer stays if you want a local experience.",
          modelKo: "짧은 여행에서는 편리함 때문에 호텔 쪽으로 기울지만, 현지 경험을 원하는 긴 여행에서는 에어비앤비가 더 나아요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Problems & Complaints",
      titleKo: "문제와 불만",
      questions: [
        {
          q: "Have you ever had a problem during a hotel stay?",
          qKo: "호텔에 묵는 동안 문제가 생긴 적 있나요?",
          vocab: [
            { en: "complaint",   ko: "불만, 컴플레인" },
            { en: "noise",       ko: "소음" },
            { en: "malfunction", ko: "고장" },
            { en: "upgrade",     ko: "업그레이드" },
          ],
          phrasalVerbs: [
            { en: "complain about", ko: "~에 대해 불평하다" },
            { en: "sort out",       ko: "해결하다" },
          ],
          model: "Once the air conditioning broke. I complained about it at the front desk, and they upgraded me to a better room.",
          modelKo: "한 번 에어컨이 고장 난 적이 있어요. 프런트에 불만을 얘기했더니 더 좋은 방으로 업그레이드해 줬어요.",
        },
        {
          q: "What would you do if the room wasn't clean?",
          qKo: "방이 깨끗하지 않다면 어떻게 하시겠어요?",
          vocab: [
            { en: "stain",       ko: "얼룩" },
            { en: "refund",      ko: "환불" },
            { en: "discount",    ko: "할인" },
            { en: "manager",     ko: "매니저" },
          ],
          phrasalVerbs: [
            { en: "bring up",     ko: "(문제를) 제기하다" },
            { en: "ask for",      ko: "요청하다" },
          ],
          model: "I would bring it up politely at the front desk and ask for housekeeping or a new room. If it wasn't resolved, I'd ask to speak to the manager.",
          modelKo: "프런트에 정중하게 문제를 제기하고 객실 청소나 새 방을 요청할 거예요. 해결되지 않으면 매니저와 얘기하고 싶다고 할 거예요.",
        },
        {
          q: "Have you ever left a bad review for a hotel? Why or why not?",
          qKo: "호텔에 나쁜 리뷰를 남긴 적이 있나요? 왜 그랬나요, 아니면 왜 안 그랬나요?",
          vocab: [
            { en: "review",       ko: "리뷰" },
            { en: "rating",       ko: "평점" },
            { en: "feedback",     ko: "피드백" },
            { en: "rating score", ko: "평점 점수" },
          ],
          phrasalVerbs: [
            { en: "write up",    ko: "(리뷰·보고서를) 작성하다" },
            { en: "hold back",   ko: "숨기다, 참다" },
          ],
          model: "I only leave a bad review if the hotel ignores the problem. If they fix it quickly, I don't hold back positive feedback instead.",
          modelKo: "호텔이 문제를 무시할 때만 나쁜 리뷰를 남겨요. 빨리 해결해 주면 오히려 좋은 피드백을 남기는 편이에요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Modal Verbs",   titleKo: "조동사",     grammarId: "modals" },
    { title: "Present Perfect", titleKo: "현재완료", grammarId: "present-perfect" },
  ],
});