// 페이지에 들어가는 모든 사실은 여기 한 곳에서 관리한다.
// 출처: 이력서·공적조서·연구대회 보고서·석사논문(원드라이브), 개발 폴더 git 기록. 2026-10-20 확인.

export type Milestone = { year: string; title: string; items: string[] };

export const path: Milestone[] = [
  {
    year: "2017",
    title: "교단에 서다",
    items: ["경인교육대학교 초등교육과(사회과교육) 졸업", "기간제 교사로 첫 교실을 맡음"],
  },
  {
    year: "2019",
    title: "서울창도초등학교",
    items: ["서울창도초등학교 발령, 이후 6년 가까이 근무", "학생이 먼저 의견을 나누는 학급을 꾸리며 에듀테크를 수업에 들여옴"],
  },
  {
    year: "2023",
    title: "AI를 공부하는 교사",
    items: [
      "대학원에서 인공지능과학융합 전공",
      "인공지능 융합교육대학원 교사연구회, 서울시교육청 AI·정보교육 연구회 참여",
      "학생들과 엔트리·메이키메이키로 코딩 악기를 만드는 수업",
    ],
  },
  {
    year: "2024",
    title: "첫 AI 도구를 직접 만들다",
    items: [
      "과학정보부장, 서울시교육청 AI·에듀테크 선도교사단",
      "생성형 AI가 서술형 답안에 피드백을 주는 도구를 직접 만들어 5학년 사회 수업에 6주간 적용",
      "앱 인벤터, 생성형 AI 활용 교사 연수 강의 시작",
      "북부 초등 영재교육원 AI·정보 분야 강사",
    ],
  },
  {
    year: "2025",
    title: "연구를 수업 도구로",
    items: [
      "서울교육대학교 교육전문대학원 석사 졸업",
      "서울창일초등학교로 옮김",
      "서술형 평가 도우미로 디지털교육연구대회 입상, 전국대회 진출",
      "과학기술정보통신부 AI·SW 인재 양성 유공교원",
      "『초등 수업, 인공지능을 만나다』 공저",
      "교사 승인형 AI 그림 도구, 어린이 맞춤 검색 등 교실 앱 제작 시작",
    ],
  },
  {
    year: "2026",
    title: "교실마다 맞는 도구를",
    items: [
      "4학년 담임을 하며 40개가 넘는 수업용 웹앱을 만들어 공개",
      "나만의 개념 도감으로 디지털교육연구대회 입상, 전국대회 진출",
      "KERIS 인공지능 활용 선도교사 연수, 교사 개발자 해커톤 강사",
      "『신산업과 함께하는 미래 진로수업 Ⅱ』 집필, 학교 연구 AI D.E.E.P. 탐구 질문",
    ],
  },
];

export type Principle = { lead: string; body: string; evidence: string; source: string; apps: string[] };

export const principles: Principle[] = [
  {
    lead: "학생이 먼저 생각하고, AI는 묻기만 합니다.",
    body: "AI가 답을 먼저 보여 주면 아이는 생각을 멈춥니다. 그래서 제 앱의 AI는 되묻고, 설명은 학생이 자기 생각을 다 쓴 뒤에야 열립니다. 아예 학생용 AI를 넣지 않은 앱도 있습니다.",
    evidence:
      "생성형 AI가 학생의 사고 과정을 대신하지 않도록 학생용 AI 기능을 적용하지 않고, 학생의 직접적인 개념 형성·수정과 교사의 피드백을 중심으로 설계함.",
    source: "2026 디지털교육연구대회 보고서",
    apps: ["상상 탐구실", "탐구질문 스캐폴딩 빌더", "가르치며 배우기", "나만의 개념 도감"],
  },
  {
    lead: "AI가 초안을 쓰면, 교사가 확인합니다.",
    body: "채점은 AI가 판독하고 교사가 확인한 다음에 피드백으로 나갑니다. AI 그림은 교사가 승인한 것만 학생에게 보입니다. 검색 결과도 교사가 고른 사이트 안에서만 나옵니다.",
    evidence:
      "평가가 학생 성적과 직결되는 민감한 주제이며, 생성형 인공지능의 환각 현상과 윤리적 문제가 중요한 만큼 연구 과정에 대한 면밀한 검토가 필요하다.",
    source: "석사학위논문 결론",
    apps: ["AI 서술형 평가 도우미", "미니서치", "조사학습 도우미"],
  },
  {
    lead: "한 반 25명이 40분 안에 쓸 수 있어야 합니다.",
    body: "학생은 회원가입 없이 코드와 이름만으로 들어옵니다. 교사 화면은 전자칠판에 그대로 띄웁니다. 기능을 잔뜩 넣은 진로 앱을 만들었다가 하루 만에 단순판으로 다시 만든 것도 이 기준 때문입니다.",
    evidence: "단순한 도구 소개를 넘어 수업 맥락에서 활용할 수 있는 사례 중심으로 연수를 운영할 계획입니다.",
    source: "학교 컨설팅 강사 지원서",
    apps: ["한마디", "교실 화면 공유", "2040 미래신문", "역지사지 토론 보드"],
  },
];

export type App = { name: string; what: string; who: string; url?: string };
export type Shelf = { title: string; note: string; apps: App[] };

export const shelves: Shelf[] = [
  {
    title: "질문과 탐구",
    note: "개념기반 탐구수업을 교실에서 돌리기 위해 만든 것들입니다.",
    apps: [
      { name: "탐구질문 스캐폴딩 빌더", what: "사실 질문을 개념 질문, 논쟁 질문으로 한 단계씩 끌어올립니다.", who: "초3~6", url: "https://question-levelup.vercel.app" },
      { name: "나만의 개념 도감", what: "배운 개념을 카드로 모으고, 고쳐 쓰고, 일반화로 엮습니다.", who: "초등", url: "https://collectionbook.vercel.app" },
      { name: "상상 탐구실", what: "직접 할 수 없는 실험을 사고실험으로 해 봅니다.", who: "초3~6 과학", url: "https://wonderlab.vercel.app" },
      { name: "탐구 설계 코치", what: "실험·관찰·조사·설문·토론 계획을 질문으로 이끌어 줍니다.", who: "초3~6", url: "https://inquiry-studio.vercel.app" },
      { name: "가르치며 배우기", what: "아직 모르는 AI 친구에게 설명하면서 배웁니다.", who: "초등", url: "https://learn-by-teach.vercel.app" },
      { name: "우리 동네 해결사", what: "지역 문제를 선택하며 풀어 가는 게임입니다.", who: "초4 사회", url: "https://dongne-solver.vercel.app" },
      { name: "개념기반 탐구수업 연습장", what: "실제 단원으로 탐구수업 설계를 연습하고 피드백을 받습니다.", who: "교사", url: "https://cbci-practice.vercel.app" },
    ],
  },
  {
    title: "글쓰기와 토의",
    note: "말하고 쓰는 시간을 늘리고, 그 기록을 모으는 도구입니다.",
    apps: [
      { name: "표현 놀이터", what: "감각적 표현, 흉내 내는 말, 꾸며 주는 말을 연습합니다.", who: "초등 국어", url: "https://korean-playground.vercel.app" },
      { name: "하루 한 단어 4-2", what: "교과서 어휘 60개를 하루 하나씩 익힙니다.", who: "초4 국어", url: "https://haru-daneo-bay.vercel.app" },
      { name: "책수다", what: "책마다 QR 하나로 감상, 추천, 퀴즈를 모읍니다.", who: "학급", url: "https://booksuda.vercel.app" },
      { name: "한마디", what: "QR로 들어와 질문마다 익명 의견을 남깁니다.", who: "교실, 연수", url: "https://hanmadi-two.vercel.app" },
      { name: "말모이", what: "학급 회의와 토의 발언을 전자칠판에 기록으로 남깁니다.", who: "학급", url: "https://malmoi-gamma.vercel.app" },
      { name: "역지사지 토론 보드", what: "입장을 바꿔 다시 토론하고 함께 합의안을 씁니다.", who: "초5·6", url: "https://debate-board.vercel.app" },
      { name: "자작자작 글감 북마클릿", what: "국어 3~6학년 글쓰기 활동을 자작자작 글감으로 한 번에 만듭니다.", who: "교사", url: "https://jajak-bookmarklet.vercel.app" },
    ],
  },
  {
    title: "서술형 평가와 피드백",
    note: "석사 연구에서 시작해 가장 오래 다듬어 온 줄기입니다.",
    apps: [
      { name: "AI 서술형 평가 도우미", what: "교과서 단원 자료를 근거로 채점하고 맞춤 피드백을 줍니다.", who: "교사, 학생", url: "https://test4school.vercel.app" },
      { name: "손글씨 답안 채점", what: "손글씨 답안을 읽어 AI가 1차 채점하고 교사가 확인합니다.", who: "교사" },
      { name: "신산업 진로 서·논술형 평가", what: "진로 수업 문항에 AI가 피드백을 줍니다.", who: "초5·6" },
    ],
  },
  {
    title: "교실 도구",
    note: "수업 중에 필요한데 마땅한 프로그램이 없어서 만들었습니다.",
    apps: [
      { name: "미니서치", what: "교사가 고른 믿을 만한 사이트 안에서만 검색합니다.", who: "초등", url: "https://minisearch.vercel.app" },
      { name: "교실 화면 공유", what: "학생 크롬북 화면을 전자칠판으로, 교사 화면을 학생에게 보냅니다.", who: "학급", url: "https://screenshare-v3.onrender.com" },
      { name: "웹 실물화상기", what: "설치 없이 카메라를 띄우고 판서와 녹화를 합니다.", who: "교사", url: "https://deskcam.vercel.app" },
      { name: "학급 웹 매거진", what: "과학 단원 읽을거리를 4학년 눈높이 잡지로 만들었습니다.", who: "초4 과학", url: "https://classzine.vercel.app" },
      { name: "마당", what: "광고 없는 학생 전용 SNS입니다.", who: "학생", url: "https://schoolsns.vercel.app" },
      { name: "앱인벤터 리소스 변환기", what: "앱 인벤터에 맞게 그림과 소리 파일을 바꿉니다.", who: "교사, 학생", url: "https://changeimageappinventor.vercel.app" },
      { name: "조사학습 도우미", what: "검색할 때 AI 개요를 가려 학생이 직접 자료를 읽게 하는 크롬 확장입니다.", who: "학생" },
      { name: "스쿨리", what: "학생이 말로 설명한 그림을 AI가 그리고, 교사가 승인한 것만 보여 줍니다.", who: "학생, 교사" },
    ],
  },
  {
    title: "AI 원리와 코딩",
    note: "AI를 쓰는 법보다 AI가 어떻게 배우는지를 손으로 만져 보게 합니다.",
    apps: [
      { name: "AI 놀이터", what: "슬라이더를 움직이며 경사하강법 같은 학습 원리를 체험합니다.", who: "학생, 교사 연수", url: "https://ai-playground-pi-khaki.vercel.app" },
      { name: "KNN 알고리즘 교실", what: "가까운 이웃에게 물어보는 분류 방법을 6차시로 배웁니다.", who: "초4·6", url: "https://knn-game.vercel.app" },
      { name: "이웃의 힘", what: "KNN 보드게임을 한 화면 두 팀 대결로 옮겼습니다.", who: "초4·6", url: "https://neighbor-power.vercel.app" },
      { name: "라쿤봇 코딩", what: "AI 로봇팔을 블록·조종·텍스트로 코딩하고 가상으로 움직여 봅니다.", who: "학생", url: "https://raccoonbot-eight.vercel.app" },
      { name: "코딩투게더", what: "반 전체가 한 작품을 함께 편집하는 블록 코딩입니다.", who: "학생", url: "https://codingtogether.vercel.app" },
    ],
  },
  {
    title: "진로 수업",
    note: "서울시교육청 신산업 진로수업 자료집을 40분 수업 흐름 그대로 옮겼습니다.",
    apps: [
      { name: "2040 미래신문", what: "미래 직업 기사를 쓰고, AI 편집장은 질문만 합니다.", who: "초5·6", url: "https://news2040-lite.vercel.app" },
      { name: "직업인 인터뷰", what: "AI 직업인의 답에 숨은 함정을 찾아 팩트체크합니다.", who: "초5·6", url: "https://job-interview-lite.vercel.app" },
      { name: "신산업 창업 경진대회", what: "모둠별 창업 아이디어를 발표하고 투자합니다.", who: "초5·6", url: "https://startup-tank-lite.vercel.app" },
      { name: "진로체험센터 찾기", what: "서울 25개 진로체험센터 프로그램을 찾습니다.", who: "교사", url: "https://center-finder-dun.vercel.app" },
    ],
  },
];

export const research = [
  { year: "2025", text: "석사학위논문 「생성형 인공지능 기반 피드백 제공 서술형 평가 도구 개발 및 교육적 효과 분석」, 서울교육대학교" },
  { year: "2025", text: "디지털교육연구대회 입상, 전국대회 진출: 생성형 AI 서술형 자동채점 및 피드백 프로그램" },
  { year: "2025", text: "과학기술정보통신부 AI·SW 인재 양성 유공교원" },
  { year: "2025", text: "『초등 수업, 인공지능을 만나다』 공저, 미래엔" },
  { year: "2025", text: "서울시교육청 초·중·고 디지털 시민성 교육자료 집필" },
  { year: "2026", text: "디지털교육연구대회 입상, 전국대회 진출: 나만의 개념 도감" },
  { year: "2026", text: "『초5,6학년 신산업과 함께하는 미래 진로수업 Ⅱ』 집필" },
  { year: "진행 중", text: "초등학생은 AI 피드백을 얼마나 그대로 받아들이는가: 생성형 AI 피드백 수용성 연구" },
];

export const talks: { year: string; items: string[] }[] = [
  {
    year: "2024",
    items: ["앱 인벤터의 이해와 수업 설계", "북부 초등 정보(SW·AI)교육의 이해", "생성형 인공지능 100% 활용하기", "학교로 찾아가는 디지털 역량강화 연수"],
  },
  {
    year: "2025",
    items: ["터치교사단 후속연수: AI·디지털 수업의 교사 주도성", "디지털 기반 수업·평가 전문가 양성 연수", "찾아가는 학교 컨설팅", "누구나 교사 개발자 해커톤", "신산업 진로교육 교사 연수"],
  },
  {
    year: "2026",
    items: [
      "KERIS 인공지능 활용 선도교사 연수",
      "교사 개발자 해커톤: 바이브코딩",
      "컨설팅장학, 우리학교연수원",
      "구글 공인 교육 전문가 양성 연수",
      "관리자 연수: AI 시대, 관리자가 결재하는 안전",
      "중부 학교로 찾아가는 AI·디지털 연수 표준교안 집필",
    ],
  },
];

export const quotes = [
  {
    text: "가장 많은 고민과 시간을 들인 부분은 ‘어떤 기능을 넣을 것인가’보다 ‘학생의 사고 과정을 어떻게 담아낼 것인가’였습니다.",
    source: "2026 디지털교육연구대회 발표에서",
  },
  {
    text: "학생의 생각은 한 번의 수업으로 완성되지 않습니다.",
    source: "같은 발표에서",
  },
  {
    text: "교육이란 학생들이 자신의 잠재력을 발견하고 스스로 성장할 수 있도록 돕는 과정이라고 믿습니다.",
    source: "2024년에 쓴 자기소개서에서",
  },
];
