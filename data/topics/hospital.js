registerTopic({
  id: "hospital",
  title: "At the Hospital",
  titleKo: "병원에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "🏥",
  summary: "Describing symptoms, booking appointments, and handling medical situations in English.",
  summaryKo: "영어로 증상을 설명하고, 예약하고, 의료 상황에 대처하는 표현.",

  sections: [
    /* ─────────────────────────────────────────────── */
    {
      title: "Booking & Symptoms",
      titleKo: "예약과 증상",
      questions: [
        {
          q: "How do you usually book a doctor's appointment?",
          qKo: "보통 어떻게 진료 예약을 하나요?",
          vocab: [
            { en: "appointment",  ko: "예약" },
            { en: "clinic",       ko: "의원, 클리닉" },
            { en: "receptionist", ko: "접수 직원" },
            { en: "schedule",     ko: "일정" },
          ],
          phrasalVerbs: [
            { en: "call in",      ko: "전화하다" },
            { en: "sign up for",  ko: "~을 신청하다" },
          ],
          model: "I usually call the clinic or book online. Sometimes I use an app to schedule an appointment.",
          modelKo: "보통 의원에 전화하거나 온라인으로 예약해요. 가끔 앱으로 예약하기도 해요.",
        },
        {
          q: "What do you say when you're not feeling well?",
          qKo: "몸이 안 좋을 때 뭐라고 말하나요?",
          vocab: [
            { en: "symptom",    ko: "증상" },
            { en: "fever",      ko: "열" },
            { en: "cough",      ko: "기침" },
            { en: "headache",   ko: "두통" },
            { en: "sore throat", ko: "목 통증" },
          ],
          phrasalVerbs: [
            { en: "come down with",       ko: "~에 걸리다" },
            { en: "feel under the weather", ko: "몸이 안 좋다" },
          ],
          model: "I usually say I've come down with a cold, and I have a sore throat and a slight fever.",
          modelKo: "보통 감기에 걸린 것 같고, 목이 아프고 미열이 있다고 말해요.",
        },
        {
          q: "Have you ever had to describe your symptoms in English?",
          qKo: "영어로 증상을 설명해야 했던 적이 있나요?",
          vocab: [
            { en: "sharp pain", ko: "날카로운 통증" },
            { en: "dull ache",  ko: "둔한 통증" },
            { en: "swelling",   ko: "부기, 붓기" },
            { en: "dizzy",      ko: "어지러운" },
          ],
          phrasalVerbs: [
            { en: "point to",  ko: "~을 가리키다" },
            { en: "act up",    ko: "(병이) 말썽을 부리다" },
          ],
          model: "Yes, once I had to describe a sharp pain in my stomach. It was challenging, but the doctor understood.",
          modelKo: "네, 한 번은 배에 날카로운 통증이 있다고 설명해야 했어요. 어려웠지만 의사 선생님이 이해하셨어요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "At the Doctor's Office",
      titleKo: "진료실에서",
      questions: [
        {
          q: "What questions does a doctor usually ask you?",
          qKo: "의사 선생님이 보통 어떤 질문을 하시나요?",
          vocab: [
            { en: "medical history", ko: "병력" },
            { en: "allergy",         ko: "알레르기" },
            { en: "medication",      ko: "약, 복용 중인 약" },
            { en: "checkup",         ko: "검진" },
          ],
          phrasalVerbs: [
            { en: "go through",   ko: "~을 검토하다" },
            { en: "check up on",  ko: "~을 확인하다" },
          ],
          model: "The doctor usually goes through my medical history and asks if I'm allergic to any medication.",
          modelKo: "의사 선생님은 보통 제 병력을 검토하시고, 어떤 약에 알레르기가 있는지 물어보세요.",
        },
        {
          q: "Do you prefer seeing a general practitioner or a specialist?",
          qKo: "일반의와 전문의 중 누구를 선호하나요?",
          vocab: [
            { en: "general practitioner", ko: "일반의, 가정의" },
            { en: "specialist",           ko: "전문의" },
            { en: "referral",             ko: "진료 의뢰서" },
            { en: "diagnosis",            ko: "진단" },
          ],
          phrasalVerbs: [
            { en: "refer to",  ko: "~로 보내다" },
            { en: "look into", ko: "~을 조사하다" },
          ],
          model: "I usually start with a general practitioner, and if needed, they refer me to a specialist.",
          modelKo: "보통 일반의부터 시작하고, 필요하면 전문의로 보내주세요.",
        },
        {
          q: "Have you ever received treatment abroad? How was it?",
          qKo: "해외에서 치료를 받은 적이 있나요? 어땠나요?",
          vocab: [
            { en: "treatment", ko: "치료" },
            { en: "insurance", ko: "보험" },
            { en: "coverage",  ko: "보장 범위" },
            { en: "bill",      ko: "청구서" },
          ],
          phrasalVerbs: [
            { en: "pay for",       ko: "~을 지불하다" },
            { en: "claim back",    ko: "(비용을) 청구하다" },
          ],
          model: "Yes, I once received treatment in Japan. It was efficient, but I had to pay upfront and claim it back from my insurance.",
          modelKo: "네, 일본에서 치료를 받은 적이 있어요. 효율적이었지만 먼저 결제하고 보험사에 청구해야 했어요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Emergencies & Pharmacy",
      titleKo: "응급 상황과 약국",
      questions: [
        {
          q: "What would you do in a medical emergency while traveling?",
          qKo: "여행 중 응급 상황이 생기면 어떻게 하시겠어요?",
          vocab: [
            { en: "emergency",    ko: "응급 상황" },
            { en: "ambulance",    ko: "구급차" },
            { en: "ER (emergency room)", ko: "응급실" },
            { en: "urgent care",  ko: "응급 진료" },
          ],
          phrasalVerbs: [
            { en: "call for",  ko: "~을 부르다" },
            { en: "rush to",   ko: "~로 급히 가다" },
          ],
          model: "I would call for an ambulance or rush to the nearest ER. I always keep my insurance card with me.",
          modelKo: "구급차를 부르거나 가장 가까운 응급실로 급히 갈 거예요. 항상 보험 카드를 가지고 다녀요.",
        },
        {
          q: "How do you handle prescription medicine when traveling?",
          qKo: "여행할 때 처방약은 어떻게 챙기나요?",
          vocab: [
            { en: "prescription", ko: "처방전" },
            { en: "dosage",       ko: "복용량" },
            { en: "side effect",  ko: "부작용" },
            { en: "pharmacy",     ko: "약국" },
          ],
          phrasalVerbs: [
            { en: "run out of", ko: "~이 떨어지다" },
            { en: "pick up",    ko: "(약을) 받다, 사다" },
          ],
          model: "I always make sure I don't run out of my prescription before a trip, and I pack extra in case of delays.",
          modelKo: "여행 전에 처방약이 떨어지지 않게 항상 확인하고, 지연에 대비해 여분을 챙겨요.",
        },
        {
          q: "Have you ever been to the emergency room?",
          qKo: "응급실에 간 적이 있나요?",
          vocab: [
            { en: "injury",        ko: "부상" },
            { en: "fracture",      ko: "골절" },
            { en: "stitches",      ko: "봉합" },
            { en: "overnight stay", ko: "입원" },
          ],
          phrasalVerbs: [
            { en: "end up",       ko: "결국 ~하게 되다" },
            { en: "recover from", ko: "~에서 회복하다" },
          ],
          model: "Yes, I once ended up in the ER after a bike accident. I needed stitches but recovered quickly.",
          modelKo: "네, 자전거 사고 후 응급실에 간 적이 있어요. 봉합이 필요했지만 빨리 회복했어요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Present Perfect", titleKo: "현재완료", grammarId: "present-perfect" },
    { title: "Modal Verbs",     titleKo: "조동사",   grammarId: "modals" },
  ],
});