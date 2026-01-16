import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'cert-001',
    name: '수족관리사',
    type: 'private',
    description: '관상어 사육 및 수조 관리의 전문 지식과 기술을 갖춘 전문가를 양성하는 민간자격증입니다. 애완동물 산업의 성장과 함께 수요가 증가하고 있는 유망 분야입니다.',
    targetAudience: '관상어에 관심 있는 분, 펫샵 창업 희망자, 수족관 관련 취업 희망자',
    curriculum: [
      '관상어 기초 이론 (열대어, 금붕어, 해수어 등)',
      '수조 설치 및 환경 관리',
      '수질 관리 및 여과 시스템',
      '관상어 질병 예방 및 치료',
      '먹이 급여 및 영양 관리',
      '수조 레이아웃 및 장식',
      '현장 실습 및 사례 연구'
    ],
    duration: '3개월 (총 48시간)',
    fee: 350000,
    benefits: [
      '펫샵, 수족관 취업 시 우대',
      '수족관 관련 창업 시 전문성 인정',
      '지속적인 보수 교육 기회 제공',
      '취업 연계 서비스 지원'
    ],
    image: '/images/programs/aquarium.jpg'
  },
  {
    id: 'cert-002',
    name: '수조테라리움 전문가',
    type: 'private',
    description: '수초 재배와 테라리움 디자인 및 제작 기술을 보유한 전문가 자격증입니다. 인테리어 소품 제작 및 판매, 플랜테리어 분야에서 활용도가 높습니다.',
    targetAudience: '플랜테리어에 관심 있는 분, 소품샵 운영자, 인테리어 관련 종사자',
    curriculum: [
      '수초의 종류와 특성',
      '테라리움 기초 이론',
      '수조 테라리움 디자인 원리',
      '재료 선택 및 레이아웃 구성',
      '유지 관리 및 식물 건강 관리',
      '상업용 테라리움 제작 실습',
      '마케팅 및 판매 전략'
    ],
    duration: '2개월 (총 32시간)',
    fee: 280000,
    benefits: [
      '플랜테리어 샵 창업 가능',
      '핸드메이드 마켓 참여 자격',
      '온라인 판매 플랫폼 입점 지원',
      '작가 활동 연계 기회'
    ],
    image: '/images/programs/terrarium.jpg'
  }
];

export const getCertificationById = (id: string) =>
  certifications.find(c => c.id === id);
