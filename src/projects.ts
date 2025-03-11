export const projects = [
  {
    id: 'guide',
    thumbnail: {
      image: '/img-1.jpg',
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
      'Intersection Observer를 적용하여 스크롤 위치에 따라 해당 네비게이션 활성화',
      '스크롤 방향을 감지해 네비게이션 show/hide 처리',
    ],
    challenges: [
      {
        challenge:
          '스크롤 방향을 감지하여 네비게이션을 show/hide 처리하는 과정에서 스크롤을 살짝만 움직여도 네비게이션이 요동치는 현상 발생',
        solution:
          '처음에는 임계값을 주어 해결하려고 하였으나 스크롤을 조금씩 움직일 경우 문제가 되어 스크롤을 내릴때 바로 네비게이션을 숨김 처리하고 위로 일정 높이만큼 올렸을 때 나타나도록 수정',
      },
      {
        challenge: 'IOS 환경에서 스크롤 시 스크롤 바운싱되며 네비게이션이 사라지거나 나타나는 현상 발생',
        solution: '스크롤 이벤트에서 스크롤 위치가 처음 시작 또는 마지막일 경우 리턴 처리',
      },
      {
        challenge: 'location.hash 값을 이용해 스크롤 이동 시 서브 네비게이션이 사라지는 현상',
        solution:
          '스크롤 이벤트가 발생하며 서브 네비게이션이 사라지는 것으로 파악되어 Intersection Observer를 통해 스크롤 후 타겟 영역이 보일 때 서브 네비게이션이 다시 보이도록 수정',
      },
    ],
    next: [
      '페이지 별로 구분되어 있는 메뉴를 탭으로 수정하여 사용자 경험 개선',
      '이미지 레이지 로드 적용으로 로딩 속도 개선',
    ],
  },
];
