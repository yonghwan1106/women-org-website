export const SITE_CONFIG = {
  name: '여성단체',
  description: '여성을 위한 교육 프로그램 및 자격증 취득 지원',
  url: 'https://women-org.vercel.app',
  email: 'info@women-org.kr',
  phone: '000-0000-0000',
  address: '경기도 OO시 OO구 OO로 123',
  addressDetail: '여성단체 빌딩 3층',
  postalCode: '12345',
  businessHours: '평일 09:00 - 18:00 (점심시간 12:00 - 13:00)',
  closedDays: '토, 일, 공휴일 휴무',
  socialMedia: {
    kakao: 'https://pf.kakao.com/_example',
    instagram: 'https://instagram.com/women_org',
    blog: 'https://blog.naver.com/women_org'
  }
};

export const NAVIGATION = [
  {
    name: '단체소개',
    href: '/about',
    children: [
      { name: '인사말', href: '/about/greeting' },
      { name: '설립목적', href: '/about/purpose' },
      { name: '연혁', href: '/about/history' },
      { name: '조직도', href: '/about/organization' },
      { name: '오시는 길', href: '/about/location' }
    ]
  },
  {
    name: '교육프로그램',
    href: '/programs',
    children: [
      { name: '프로그램 목록', href: '/programs' },
      { name: '수강신청', href: '/programs/apply' }
    ]
  },
  {
    name: '자격증안내',
    href: '/certification',
    children: [
      { name: '자격증 종류', href: '/certification' },
      { name: '취득절차', href: '/certification/process' },
      { name: '수료현황', href: '/certification/graduates' }
    ]
  },
  {
    name: '정부지원사업',
    href: '/support',
    children: [
      { name: '지원사업 안내', href: '/support' },
      { name: '신청방법', href: '/support/how-to-apply' },
      { name: '지원현황', href: '/support/status' }
    ]
  },
  {
    name: '커뮤니티',
    href: '/community',
    children: [
      { name: '공지사항', href: '/community/notice' },
      { name: '갤러리', href: '/community/gallery' },
      { name: '자료실', href: '/community/resources' }
    ]
  },
  {
    name: '상담문의',
    href: '/contact',
    children: [
      { name: '온라인 상담', href: '/contact' },
      { name: '자주 묻는 질문', href: '/contact/faq' }
    ]
  }
];

export const QUICK_MENU = [
  {
    title: '교육신청',
    description: '다양한 교육 프로그램',
    href: '/programs',
    icon: 'GraduationCap'
  },
  {
    title: '자격증',
    description: '민간자격증 안내',
    href: '/certification',
    icon: 'Award'
  },
  {
    title: '지원사업',
    description: '정부지원 프로그램',
    href: '/support',
    icon: 'Heart'
  },
  {
    title: '상담문의',
    description: '온라인 상담신청',
    href: '/contact',
    icon: 'MessageCircle'
  }
];

export const HISTORY_DATA = [
  {
    year: '2025',
    events: [
      '수조테라리움 전문가 과정 신설',
      '연간 교육 수료생 300명 달성',
      '고용노동부 우수훈련기관 선정'
    ]
  },
  {
    year: '2024',
    events: [
      '수족관리사 민간자격증 등록',
      '정부지원 직업훈련과정 확대',
      '온라인 교육 시스템 도입'
    ]
  },
  {
    year: '2023',
    events: [
      '국민내일배움카드 훈련기관 지정',
      '여성새로일하기센터 협력기관 체결',
      '신규 교육장 확장 이전'
    ]
  },
  {
    year: '2022',
    events: [
      '직업훈련 프로그램 시작',
      '취미교육 과정 개설',
      '첫 수료생 배출 (50명)'
    ]
  },
  {
    year: '2021',
    events: [
      '단체 설립',
      '비영리법인 등록',
      '초대 이사장 취임'
    ]
  }
];

export const ORGANIZATION_DATA = {
  chairman: {
    name: '홍길동',
    position: '이사장'
  },
  departments: [
    {
      name: '사무국',
      members: [
        { name: '김OO', position: '사무국장', department: '사무국' },
        { name: '이OO', position: '총무', department: '사무국' }
      ]
    },
    {
      name: '교육부',
      members: [
        { name: '박OO', position: '교육부장', department: '교육부' },
        { name: '최OO', position: '교육담당', department: '교육부' },
        { name: '정OO', position: '교육담당', department: '교육부' }
      ]
    },
    {
      name: '홍보부',
      members: [
        { name: '한OO', position: '홍보부장', department: '홍보부' },
        { name: '조OO', position: '홍보담당', department: '홍보부' }
      ]
    }
  ]
};

export const INQUIRY_CATEGORIES = [
  '교육프로그램 문의',
  '자격증 문의',
  '수강신청 문의',
  '정부지원사업 문의',
  '취업/창업 상담',
  '기타 문의'
];
