interface question {
  number: number;
  sentence: string;
  options: Array<Array<string>>;
}

const questionList: question[] = [
  {
    number: 1,
    sentence:
      "어떤 문제가 있고, 당신이 그걸 해결하려고 덤벼든 지 3일이 지나가고 있습니다. 밥도 못 먹고 잠도 못 잤네요. 이 상황에서 상사가 계속 지속적으로 당신에게 업무를 주면서 괴롭힌다면 당신에게 드는 생각을 가장 잘 설명하는 단어를 골라주세요.",
    options: [
      ["hate", "와 진짜 극혐"],
      ["escape", "탈주할까"],
      ["hell", "인류애 잃는다"],
      ["crash", "와 진짜 즐겁당ㅎㅎ.. "],
      ["alive", "이거 다 못하면 겁나 깨지겠지..ㅠ"],
      ["shit", "대충 험한말"],
      ["save", "이거 실환가"],
      ["trick", "장난 없네"],
      ["god", "신이시여"],
      ["cry", "집에 보내줘"],
    ],
  },
  {
    number: 2,
    sentence:
      "당신은 여느 날처럼 피곤한 하루를 끝내고 집에 돌아가고 있습니다. 멀찍이서 급하게 다가온 낯선 사람이 지금 집에 돌아가면 안 된다고 일러줍니다. 이유는 듣지 못했네요. 이 때 당신에게 드는 생각을 가장 잘 설명하는 단어를 골라주세요.",
    options: [
      ["criminal", "범죄자 아니야?"],
      ["kind", "친절한 사람이네"],
      ["risk", "집에 가면 위험할 거야"],
      ["escape", "빨리 도망치자"],
      ["crazy", "미친 건가"],
      ["liar", "거짓말 하는 거 아냐?"],
      ["hate", "침착하자"],
      ["trust", "진짠가? 한 번 믿어보자!"],
      ["scare", "뭐야? 무서워"],
    ],
  },
  {
    number: 3,
    sentence:
      "당신과 아주 다른 사람이 있습니다. 당신은 자꾸 그 사람이 눈에 들어옵니다. 그러나 뭘 같이 하려고 해도 목표와 방식이 완전히 다르네요. 그런 사람을 보면 당신은 주로 어떤 감정을 느끼게 되는지 가장 잘 설명하는 단어를 골라주세요.",
    options: [
      ["fight", "왜 굳이 저렇게 하지?"],
      ["enjoy", "재미있는 생각이네"],
      ["waste", "그냥 내 생각이 맞는 듯"],
      ["hide", "그냥 맞춰주자"],
      ["honest", "솔직해서 좋네"],
      ["shit", "쎄한데"],
      ["careful", "조심조심 말해야겠다"],
      ["suffering", "힘들다.."],
      ["chance", "세상엔 저런 사람도 있구나"],
      ["true", "그럴 수 있지"],
    ],
  },
  {
    number: 4,
    sentence:
      '모르는 사람에게 불쑥 "앞으로 하고 싶은 게 뭐야?", "어떤 길을 가고 싶어?" 라는 질문을 받았을 때 가장 먼저 드는 감정과 비슷한 단어를 골라주세요.',
    options: [
      ["ridiculous", "네가 뭔데"],
      ["threaten", "위협적인 사람"],
      ["worthless", "쓸데없는 질문을 하고 있네"],
      ["escape", "이상한 사람같은데"],
      ["fun", "재밌는 사람인데"],
      ["losing", "시간낭비"],
      ["join", "더 자세히 얘기해볼래요???"],
      ["doomed", "이번 생은 그냥 운이 다한것 같아요"],
      ["surprise", "깜빡이 좀 켜고 질문하세요;"],
      ["hope", "아 저는 000가 하고 싶어서 요즘 이런걸 하는데...(중략) 엄청 기대돼요!!!!!"],
    ],
  },
  {
    number: 5,
    sentence: "당신이 평소에 가장 많이 하는 말은?",
    options: [
      ["anger", "빡치네"],
      ["hope", "기대되는데"],
      ["stink", "윽"],
      ["worry", "정말 걱정이야"],
      ["laugh", "하하하"],
      ["mistake", "미안 실수야"],
      ["truth", "찐인데?"],
      ["failure", "실패야.."],
      ["surprise", "놀라운데?"],
      ["loyal", "나만 믿어"],
    ],
  },
  {
    number: 6,
    sentence:
      "브레이크가 고장난 기차가 달려오고 있고, 선로에는 10명의 사람들이 묶여 있습니다. 기차를 멈추지 못하면 10명의 사람들이 죽게 됩니다. 그런데 당신은 마침 기차가 지나가는 다리 위에 있고, 당신의 옆에는 기차를 멈추기에 충분한 체중의 누군가가 서 있습니다. 이 사람을 철로 위로 떨어뜨리면 이 사람은 죽겠지만 10명의 사람들을 살릴 수 있습니다.  이 때 당신의 행동을 가장 잘 표현하는 단어들을 골라주세요.",
    options: [
      ["murder", "나는 10명을 다 죽여버릴 거야!"],
      ["alive", "나는 1명을 희생하고 10명을 다 살릴거야!"],
      ["hope", "사람 한명으로 기차를 막을 수 있다고?"],
      ["pathetic", "결국 다 살릴수 없다는게 슬퍼"],
      ["mistake", "나는 어떤 선택을 해도 실수라고 생각할거야"],
      ["excellent", "11명을 다 살릴수 있는 좋은 방법도 있을거야"],
      ["miracle", "뭐 어떻게든 되겠지"],
      ["worry", "기차쪽이나 사람쪽이나 너무 걱정이 되는거 같아"],
      ["stink", "누가 살지는 모르겠지만 이상황이 역겨워"],
      ["save", "다 지켜줄게"],
    ],
  },
  {
    number: 7,
    sentence:
      "당신은 의사입니다. 비행기가 추락했고, 정신을 차려보니 근처에 두 사람이 정신을 잃고 쓰러져 있습니다. 한 사람은 당신의 원수이고 다른 한 사람은 당신과 아무 상관 없는 사람입니다. 당신의 원수는 피부가 살짝 찢어졌고, 다른 사람은 심한 창상을 입어 치료를 해도 나을 수 있을 지 미지수입니다. 원수의 생존 가능성이 높다는 것은 부정할 수 없는 사실이네요. 당신이 느끼는 감정은?",
    options: [
      ["rage", "나한테 왜 이런 일이 일어난 거지?"],
      ["hope", "어차피 다 죽을거야. 고치는 게 의미가 있을까?"],
      ["lose", "같이 있어서 좋을 게 없어. 얼른 다른 곳으로 숨어야겠다."],
      ["risk", "그래도 난 멀쩡해서 다행이다."],
      ["lucky", "애초에 비행기를 타지 말았어야 했어."],
      ["mistake", "11명을 다 살릴수 있는 좋은 방법도 있을거야"],
      ["calm", "일단 침착하자."],
      ["cry", "울고싶다."],
      ["revenge", "나는 절대 원수를 살리지 않을거야."],
      ["save", "그래도 가능성 있는 사람을 살리자."],
    ],
  },
  {
    number: 8,
    sentence:
      "당신의 연인이 바람을 피다가 상대와 함께 물에 빠졌습니다. 당신은 해양 구조원으로, 상부에서 당신의 연인 쪽은 가망이 없으니 연인의 바람 상대를 구하러 가라고 지시합니다. 이 때 당신의 감정을 가장 잘 표현하는 말들을 골라주세요.",
    options: [
      ["rage", "나한테 왜 이런 일이 일어난 거지?"],
      ["hope", "어차피 다 죽을거야. 고치는 게 의미가 있을까?"],
      ["lose", "같이 있어서 좋을 게 없어. 얼른 다른 곳으로 숨어야겠다."],
      ["risk", "그래도 난 멀쩡해서 다행이다."],
      ["lucky", "애초에 비행기를 타지 말았어야 했어."],
      ["mistake", "11명을 다 살릴수 있는 좋은 방법도 있을거야"],
      ["calm", "일단 침착하자."],
      ["cry", "울고싶다."],
      ["revenge", "나는 절대 원수를 살리지 않을거야."],
      ["save", "그래도 가능성 있는 사람을 살리자."],
    ],
  },
  {
    number: 9,
    sentence:
      "기숙사에 살고 있는 당신은 친구를 꼬셔서 몰래 친구 방에서 같이 음식을 먹다가 들켰습니다. 그런데 무섭기로 소문난 사감 선생님이 당신은 가만히 두고 방 주인인 당신 친구만 혼내고 있습니다. 이 때 당신의 생각을 가장 잘 나타내는 말들을 골라주세요.",
    options: [
      ["lucky", "운이 좋네. 가만히 있자."],
      ["threaten", "아 무서워 죽겠네. 나한테도 불똥이 튈라, 가만히 있자"],
      ["pathetic", "불쌍한 내 친구"],
      ["loyal", "의리가 있지. 내가 꼬셨다고 말하자"],
      ["chance", "어떻게 들킨 거지? 완벽한 기회라고 생각했는데"],
      ["mistake", "11명을 다 살릴수 있는 좋은 방법도 있을거야"],
      ["calm", "일단 침착하자."],
      ["cry", "울고싶다."],
      ["revenge", "나는 절대 원수를 살리지 않을거야."],
      ["save", "그래도 가능성 있는 사람을 살리자."],
    ],
  },
  {
    number: 10,
    sentence:
      "기숙사에 살고 있는 당신은 친구를 꼬셔서 몰래 친구 방에서 같이 음식을 먹다가 들켰습니다. 그런데 무섭기로 소문난 사감 선생님이 당신은 가만히 두고 방 주인인 당신 친구만 혼내고 있습니다. 이 때 당신의 생각을 가장 잘 나타내는 말들을 골라주세요.",
    options: [
      ["rage", "화가 나서 주체가 안 된다"],
      ["revenge", "나 이제 너네랑 절교한다"],
      ["cry", "너무 속상해서 말이 안 나온다"],
      ["smile", "다음 번에는 나도 같이 놀아야지"],
      ["smile", "다음 번에는 나도 같이 놀아야지"],
      ["mistake", "11명을 다 살릴수 있는 좋은 방법도 있을거야"],
      ["calm", "일단 침착하자."],
      ["cry", "울고싶다."],
      ["revenge", "나는 절대 원수를 살리지 않을거야."],
      ["smile", "그래도 가능성 있는 사람을 살리자."],
    ],
  },
];

export type { question };
export default { questionList };
