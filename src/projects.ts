export const projects = [
  {
    id: 'design-system',
    thumbnail: {
      title: '디자인 시스템',
      description: '일관된 UI/UX 제공을 위한 디자인 시스템 및 컴포넌트 정리',
    },
    overview: {
      title: '디자인 시스템',
      description:
        '사내 프로젝트 전반에 걸쳐 일관된 UI/UX를 적용할 수 있도록 디자인 시스템을 구축하고 Storybook으로 문서화를 진행한 프로젝트',
      duration: '1년',
      skill: 'HTML, SCSS, Javascript, Storybook',
    },
    features: [
      '자바스크립트 클래스 문법을 활용하여 UI 컴포넌트 기능 모듈화 및 재사용성 강화',
      'CSS 변수를 기반으로 디자인 토큰 시스템 구축',
      '아이콘 네이밍 규칙 수립 및 SVG Sprite 기법을 통한 아이콘 컴포넌트 작업',
      'Storybook을 활용한 UI 컴포넌트 문서화',
    ],
    challenges: [
      {
        challenge:
          '디자이너는 팝업 컴포넌트 하나에 다양한 유형(팝업, 바텀시트, 툴팁)을 포함하려 했고, 퍼블리셔는 각 컴포넌트를 분리해야 한다고 생각해 의견 차이 발생',
        solution:
          '관련 레퍼런스와 아티클을 찾아 설득의 근거를 마련하고 컴포넌트가 기능과 용도에 따라 분리되어야 하는 이유를 설명하여 컴포넌트 정리',
      },
      {
        challenge: '디자인 토큰명을 어떻게 작성할지에 대한 명확한 기준이 없어 어려움',
        solution:
          '디자인 토큰의 역할과 범위에 맞는 명확한 네이밍 규칙을 정의하고 이를 팀원들과 공유하여 일관성 있는 토큰명 적용',
      },
      {
        challenge:
          '아이콘 파일명이 기능 위주로 되어 있어 의미가 모호하고, 크기와 색상별로 아이콘이 나뉘어져 재사용성이 부족한 문제 발생',
        solution:
          '아이콘 파일명을 형태로 작성하도록 규칙 문서를 만들고 SVG를 활용하여 크기나 색상에 제한 없이 작업할 수 있도록 처리',
      },
      {
        challenge: '기존 프로젝트와의 통합 문제',
        solution: '기존 프로젝트는 디자인 시스템 적용에 어려움이 있어 신규 프로젝트부터 점진적으로 도입해나가기로 결정',
      },
    ],
    next: ['반응형 설계 보완을 통해 다양한 해상도 지원', '개발자 경험 개선을 위한 API 문서 보완'],
  },
  {
    id: 'guide',
    thumbnail: {
      title: '지역화폐 이용안내',
      description: '쉽게 정보를 파악할 수 있도록 구조화된 이용안내 페이지',
    },
    overview: {
      title: '지역화폐 이용안내',
      description: '개별적으로 운영 중이던 이용안내 페이지를 통합하고 UX를 개선하기 위한 프로젝트',
      duration: '2주',
      skill: 'HTML, SCSS, Javascript, Intersection Observer API',
    },
    features: [
      'css 변수를 활용한 서비스 별 테마 컬러 변경',
      '네비게이션 클릭 또는 location.hash 값이 있을 경우 해당 영역으로 스크롤 이동',
      'Intersection Observer를 적용하여 스크롤 위치에 따른 네비게이션 활성화',
      '사용자의 스크롤 방향에 따라 동적으로 변화하는 네비게이션 적용',
    ],
    challenges: [
      {
        challenge:
          '스크롤 방향을 감지하여 네비게이션을 show/hide 처리하는 과정에서 작은 스크롤 움직임에도 네비게이션이 불안정하게 동작하는 현상 발생',
        solution:
          '처음에는 임계값을 주어 해결하려고 하였으나 스크롤을 조금씩 움직일 경우 문제가 되어 스크롤을 내릴때 바로 네비게이션을 숨김 처리하고 위로 일정 높이만큼 올렸을 때 나타나도록 수정',
      },
      {
        challenge: 'IOS 환경에서 스크롤 시 스크롤 바운싱되며 네비게이션이 사라지거나 나타나는 현상 발생',
        solution: '스크롤 위치가 처음과 끝일 경우 스크롤 이벤트를 무시하도록 예외 처리를 추가하여 안정적인 동작을 확보',
      },
      {
        challenge: 'location.hash 값을 이용해 스크롤 이동 시 서브 네비게이션이 사라지는 현상 발생',
        solution:
          '스크롤 이벤트가 발생하며 서브 네비게이션이 사라지는 것으로 파악되어 Intersection Observer를 통해 스크롤 후 타겟 영역이 보일 때 서브 네비게이션이 다시 보이도록 수정',
      },
    ],
    next: [
      '페이지 별로 구분되어 있는 메뉴를 탭으로 수정하여 사용자 경험 개선',
      '이미지 레이지 로드 적용으로 로딩 속도 개선',
    ],
  },
  {
    id: 'travle-k',
    thumbnail: {
      title: 'KONA TRAVEL',
      description: '일관된 스타일과 효율적인 관리가 가능한 어드민 페이지 퍼블리싱',
    },
    overview: {
      title: 'KONA TRAVEL',
      description: '다국어 지원과 CSS 변수 기반 스타일 적용으로 유지보수가 용이한 어드민 페이지',
      duration: '1달',
      skill: 'HTML, CSS, Javascript',
      link: 'https://travel.konacard.co.kr/',
    },
    features: [
      '다국어 지원 (국문/영문)',
      '체계적인 퍼블리싱 가이드 문서 작성',
      'CSS 변수를 활용한 색상, 간격, 라운드 값 관리',
    ],
    challenges: [
      {
        challenge:
          '영어와 한국어 문자열 길이가 달라지면서, 텍스트의 길이에 따라 UI가 깨지거나 레이아웃이 흐트러질 위험 존재',
        solution: 'flexbox와 grid를 적극 활용하고, 가변적인 너비 조정을 고려한 스타일을 적용',
      },
      {
        challenge: 'CSS 스타일 관리와 테마 변경이 번거롭고 확장성에 제한',
        solution: '색상, 간격, 라운드 등의 변수를 체계적으로 정리하여 테마 변경과 유지보수를 쉽게 할 수 있도록 개선',
      },
    ],
  },
  {
    id: 'plcc',
    thumbnail: {
      title: 'PLCC 신청',
      description: '반응형 디자인과 디자인 시스템을 적용한 카드 신청 화면',
    },
    overview: {
      title: 'PLCC 신청',
      description: '반응형 UI와 디자인 시스템을 적용하여 일관성과 확장성을 고려한 PLCC 신청 화면',
      duration: '2주',
      skill: 'HTML, SCSS, Javascript',
    },
    features: [
      '디자인 시스템을 기반으로 통일된 UI 구성',
      '반응형 웹 디자인 적용으로 다양한 디바이스에서 최적화된 화면 제공',
    ],
    challenges: [
      {
        challenge:
          '디자인 시스템에서 제공하는 기본 팝업 컴포넌트는 딤(배경)을 클릭하면 닫히도록 설정되어 있었지만, PLCC 신청 프로세스에서는 의도치 않게 닫히는 것을 방지해야 하는 요구사항 존재',
        solution:
          '팀원들과 논의한 결과, 이 기능이 다른 프로젝트에서도 활용될 가능성이 높다고 판단하여 디자인 시스템에 옵션을 추가하고, 이를 적용하여 요구사항을 충족',
      },
    ],
  },
];
