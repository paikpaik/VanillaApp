const quotes = [
  {
    quote:
      "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
    author: "짐 론",
  },
  {
    quote:
      "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
    author: "스와미 비베카난다",
  },
  {
    quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author: "윈스턴 처칠",
  },
  {
    quote:
      "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다.",
    author: "헨리 포드",
  },
  { quote: "지옥을 겪고 있다면 계속 겪어 나가라.", author: "윈스턴 처칠" },
  {
    quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "존 록펠러",
  },
  {
    quote: "모든 진보는 익숙한 영역이 아닌 곳에서 이뤄진다.",
    author: "마이클 존 보박",
  },
  {
    quote: "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다.",
    author: "얼 나이팅게일",
  },
  {
    quote: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
    author: "콜린 R. 데이비스",
  },
  {
    quote:
      "애초에 처한 상황의 포로가 되기를 거부할 때 성공으로 가는 첫 발을 내딛은 것이다.",
    author: "마크케인",
  },
  {
    quote:
      "성공한 사람에겐 모멘텀이 있다. 성공할수록 더 성공하고 싶어지고, 성공할 방법을 더 많이 찾아낸다. 마찬가지로, 실패하면 자기충족적 예언이 될수도 있는 하강 경향이 생긴다.",
    author: "토니 로빈스",
  },
  {
    quote:
      "실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
    author: "데일 카네기",
  },
  {
    quote:
      "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라.",
    author: "구르박쉬 차할",
  },
  {
    quote: "과정에서 재미를 느끼지 못하는데 성공하는 일은 거의 없다.",
    author: "데일 카네기",
  },
  {
    quote: "당신이 할 수 없는 일이 할 수 있는 일에 지장을 주게 하지 마라.",
    author: "존 R. 우든",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
