import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'prog-001',
    title: '수족관리사 자격증 과정',
    category: '자격증',
    description: '관상어 사육, 수조 설치 및 관리의 전문 기술을 배우는 민간자격증 취득 과정입니다. 이론과 실습을 병행하여 현장에서 바로 활용 가능한 역량을 키웁니다.',
    thumbnail: '/images/programs/aquarium.jpg',
    duration: '3개월 (총 48시간)',
    schedule: '매주 화, 목 14:00-17:00',
    capacity: 15,
    currentApplicants: 8,
    status: 'recruiting',
    isFree: false,
    governmentSupport: true,
    instructor: '김수연 강사',
    location: '본관 3층 실습실'
  },
  {
    id: 'prog-002',
    title: '수조테라리움 전문가 과정',
    category: '자격증',
    description: '수초 재배, 테라리움 디자인 및 제작 기술을 익히는 전문가 양성 과정입니다. 창업 및 취업 연계 지원을 받을 수 있습니다.',
    thumbnail: '/images/programs/terrarium.jpg',
    duration: '2개월 (총 32시간)',
    schedule: '매주 수, 금 10:00-13:00',
    capacity: 12,
    currentApplicants: 12,
    status: 'closed',
    isFree: false,
    governmentSupport: true,
    instructor: '박정희 강사',
    location: '본관 2층 공예실'
  },
  {
    id: 'prog-003',
    title: '컴퓨터 기초반',
    category: '직업훈련',
    description: '컴퓨터 기초부터 문서작성, 인터넷 활용까지 배우는 기초 과정입니다. 디지털 기기 사용이 어려우신 분들을 위한 맞춤 교육입니다.',
    thumbnail: '/images/programs/computer.jpg',
    duration: '2개월 (총 24시간)',
    schedule: '매주 월, 수 10:00-12:00',
    capacity: 20,
    currentApplicants: 15,
    status: 'recruiting',
    isFree: true,
    governmentSupport: true,
    instructor: '이미영 강사',
    location: '본관 1층 컴퓨터실'
  },
  {
    id: 'prog-004',
    title: '스마트폰 활용 교실',
    category: '직업훈련',
    description: '스마트폰 기본 사용법부터 카카오톡, 인터넷뱅킹, 정부24 앱 활용까지 배우는 실용 과정입니다.',
    thumbnail: '/images/programs/smartphone.jpg',
    duration: '1개월 (총 8시간)',
    schedule: '매주 금 14:00-16:00',
    capacity: 15,
    currentApplicants: 10,
    status: 'recruiting',
    isFree: true,
    governmentSupport: true,
    instructor: '정현주 강사',
    location: '본관 1층 강의실'
  },
  {
    id: 'prog-005',
    title: '천연비누 만들기',
    category: '취미',
    description: '천연 재료를 활용한 수제 비누 만들기를 배우는 취미 과정입니다. 완성품은 가져가실 수 있습니다.',
    thumbnail: '/images/programs/soap.jpg',
    duration: '1개월 (총 8시간)',
    schedule: '매주 화 10:00-12:00',
    capacity: 10,
    currentApplicants: 7,
    status: 'ongoing',
    isFree: false,
    governmentSupport: false,
    instructor: '한소희 강사',
    location: '본관 2층 공예실'
  },
  {
    id: 'prog-006',
    title: '요가 & 명상 클래스',
    category: '취미',
    description: '건강한 몸과 마음을 위한 요가와 명상 프로그램입니다. 초보자도 쉽게 따라할 수 있습니다.',
    thumbnail: '/images/programs/yoga.jpg',
    duration: '3개월 (상시 운영)',
    schedule: '매주 월, 수, 금 09:00-10:00',
    capacity: 20,
    currentApplicants: 18,
    status: 'recruiting',
    isFree: false,
    governmentSupport: false,
    instructor: '최은지 강사',
    location: '본관 지하 1층 다목적실'
  }
];

export const getRecruitingPrograms = () =>
  programs.filter(p => p.status === 'recruiting');

export const getProgramById = (id: string) =>
  programs.find(p => p.id === id);

export const getProgramsByCategory = (category: Program['category']) =>
  programs.filter(p => p.category === category);
