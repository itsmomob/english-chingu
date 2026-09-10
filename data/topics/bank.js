registerTopic({
  id: "bank",
  title: "At the Bank",
  titleKo: "은행에서",
  category: "Everyday Places",
  level: "Beginner",
  emoji: "🏦",
  summary: "Opening accounts, making transactions, and handling everyday banking in English.",
  summaryKo: "계좌 개설, 거래, 일상적인 은행 업무를 영어로 처리하는 표현.",

  sections: [
    /* ─────────────────────────────────────────────── */
    {
      title: "Everyday Banking",
      titleKo: "일상적인 은행 업무",
      questions: [
        {
          q: "How often do you go to the bank in person?",
          qKo: "은행에 직접 얼마나 자주 가나요?",
          vocab: [
            { en: "branch",      ko: "지점" },
            { en: "teller",      ko: "창구 직원" },
            { en: "counter",     ko: "창구" },
            { en: "online banking", ko: "인터넷 뱅킹" },
          ],
          phrasalVerbs: [
            { en: "stop by",   ko: "들르다" },
            { en: "log in",    ko: "로그인하다" },
          ],
          model: "I rarely stop by a branch these days — I do almost everything through online banking.",
          modelKo: "요즘은 지점에 거의 들르지 않아요. 거의 모든 걸 인터넷 뱅킹으로 처리해요.",
        },
        {
          q: "What kind of transactions do you usually make?",
          qKo: "보통 어떤 거래를 하나요?",
          vocab: [
            { en: "deposit",   ko: "입금" },
            { en: "withdrawal", ko: "출금" },
            { en: "transfer",  ko: "송금, 이체" },
            { en: "balance",   ko: "잔액" },
          ],
          phrasalVerbs: [
            { en: "take out",  ko: "(돈을) 인출하다" },
            { en: "pay in",    ko: "(돈을) 입금하다" },
          ],
          model: "Mostly deposits and transfers. I usually take out cash once a week and pay in my paycheck every month.",
          modelKo: "주로 입금과 이체를 해요. 보통 일주일에 한 번 현금을 인출하고, 매달 월급을 입금해요.",
        },
        {
          q: "Do you prefer using cash, cards, or mobile payments?",
          qKo: "현금, 카드, 모바일 결제 중 어떤 걸 선호하세요?",
          vocab: [
            { en: "debit card",   ko: "체크카드" },
            { en: "credit card",  ko: "신용카드" },
            { en: "mobile payment", ko: "모바일 결제" },
            { en: "contactless",  ko: "비접촉식" },
          ],
          phrasalVerbs: [
            { en: "tap in",      ko: "(카드를) 대다" },
            { en: "rely on",     ko: "~에 의존하다" },
          ],
          model: "I mostly rely on mobile payments now, but I still carry a card for places that don't accept them.",
          modelKo: "요즘은 주로 모바일 결제에 의존하지만, 안 받는 곳을 위해 카드도 아직 들고 다녀요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Accounts & Services",
      titleKo: "계좌와 서비스",
      questions: [
        {
          q: "How many bank accounts do you have, and what are they for?",
          qKo: "은행 계좌가 몇 개 있고, 각각 무슨 용도인가요?",
          vocab: [
            { en: "savings account", ko: "예금 계좌" },
            { en: "checking account", ko: "입출금 계좌" },
            { en: "interest rate",   ko: "이자율" },
            { en: "emergency fund",  ko: "비상금" },
          ],
          phrasalVerbs: [
            { en: "set aside",   ko: "(돈을) 떼어두다" },
            { en: "put away",    ko: "저축하다" },
          ],
          model: "I have two accounts — a checking account for daily spending and a savings account where I set aside money for emergencies.",
          modelKo: "계좌가 두 개 있어요. 일상 지출용 입출금 계좌와, 비상금을 떼어두는 예금 계좌예요.",
        },
        {
          q: "Have you ever opened an account in a foreign country?",
          qKo: "외국에서 계좌를 개설한 적이 있나요?",
          vocab: [
            { en: "ID verification", ko: "신분 확인" },
            { en: "residence permit", ko: "체류 허가증" },
            { en: "minimum deposit",  ko: "최소 예치금" },
            { en: "application form", ko: "신청서" },
          ],
          phrasalVerbs: [
            { en: "fill in",      ko: "(양식을) 작성하다" },
            { en: "go through",   ko: "~을 거치다" },
          ],
          model: "Yes, when I studied abroad. I had to fill in an application form, show my residence permit, and go through ID verification.",
          modelKo: "네, 유학 중일 때요. 신청서를 작성하고, 체류 허가증을 보여주고, 신분 확인 절차를 거쳐야 했어요.",
        },
        {
          q: "Would you ever switch banks? What would make you switch?",
          qKo: "은행을 바꿀 의향이 있나요? 무엇 때문에 바꾸시겠어요?",
          vocab: [
            { en: "fee",           ko: "수수료" },
            { en: "customer service", ko: "고객 서비스" },
            { en: "loyalty",       ko: "충성도" },
            { en: "convenience",   ko: "편리함" },
          ],
          phrasalVerbs: [
            { en: "switch over",  ko: "전환하다" },
            { en: "miss out on",  ko: "~을 놓치다" },
          ],
          model: "I'd switch over if my current bank raised fees or had poor customer service. I don't want to miss out on better options.",
          modelKo: "지금 은행이 수수료를 올리거나 고객 서비스가 나쁘면 바꿀 거예요. 더 좋은 선택지를 놓치고 싶지 않거든요.",
        },
      ],
    },

    /* ─────────────────────────────────────────────── */
    {
      title: "Money & Security",
      titleKo: "돈과 보안",
      questions: [
        {
          q: "Have you ever had a problem with your bank account?",
          qKo: "은행 계좌에 문제가 생긴 적 있나요?",
          vocab: [
            { en: "fraud",           ko: "사기" },
            { en: "suspicious charge", ko: "수상한 결제" },
            { en: "freeze",          ko: "동결" },
            { en: "dispute",         ko: "이의 제기" },
          ],
          phrasalVerbs: [
            { en: "sort out",     ko: "해결하다" },
            { en: "report to",    ko: "~에 신고하다" },
          ],
          model: "Once I noticed a suspicious charge, so I called the bank right away and they helped me dispute it.",
          modelKo: "한 번은 수상한 결제를 발견해서 바로 은행에 전화했고, 이의 제기를 도와줬어요.",
        },
        {
          q: "How do you protect yourself from scams and fraud?",
          qKo: "사기와 부정 거래로부터 자신을 어떻게 보호하나요?",
          vocab: [
            { en: "phishing",       ko: "피싱" },
            { en: "password",       ko: "비밀번호" },
            { en: "two-factor authentication", ko: "2단계 인증" },
            { en: "scam",           ko: "사기" },
          ],
          phrasalVerbs: [
            { en: "watch out for", ko: "~을 조심하다" },
            { en: "keep up with",  ko: "~에 뒤처지지 않다" },
          ],
          model: "I watch out for phishing emails and always use two-factor authentication. Keeping up with new scams is really important.",
          modelKo: "피싱 이메일을 조심하고 항상 2단계 인증을 사용해요. 새로운 사기 수법에 뒤처지지 않는 게 정말 중요해요.",
        },
        {
          q: "Do you think physical banks will disappear in the future?",
          qKo: "앞으로 오프라인 은행이 사라질 거라고 생각하나요?",
          vocab: [
            { en: "digital",       ko: "디지털의" },
            { en: "branch",        ko: "지점" },
            { en: "elderly",       ko: "고령의" },
            { en: "accessibility", ko: "접근성" },
          ],
          phrasalVerbs: [
            { en: "phase out",   ko: "단계적으로 폐지하다" },
            { en: "catch up",    ko: "따라잡다" },
          ],
          model: "I don't think they'll fully disappear, but they'll be phased out slowly. Older customers still need in-person help.",
          modelKo: "완전히 사라지진 않겠지만, 천천히 줄어들 거예요. 고령 고객들은 여전히 대면 도움이 필요하거든요.",
        },
      ],
    },
  ],

  grammarSpotlight: [
    { title: "Present Perfect", titleKo: "현재완료", grammarId: "present-perfect" },
    { title: "Modal Verbs",     titleKo: "조동사",   grammarId: "modals" },
  ],
});