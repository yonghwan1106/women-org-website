import { SupportProgram } from '@/types';

export const supportPrograms: SupportProgram[] = [
  {
    id: 'support-001',
    title: '국민내일배움카드 훈련과정',
    description: '고용노동부 지정 직업훈련 과정으로, 국민내일배움카드 소지자는 훈련비의 일부를 지원받아 수강할 수 있습니다. 자격증 취득 과정 및 직업훈련 과정에 적용됩니다.',
    eligibility: [
      '만 18세 이상 구직자',
      '재직자 (중소기업 근로자 우선)',
      '자영업자',
      '특수형태근로종사자',
      '국민내일배움카드 발급자'
    ],
    benefits: [
      '훈련비 최대 70% 정부 지원',
      '1인당 연간 300~500만원 한도',
      '취업 연계 서비스',
      '훈련장려금 지급 (취업성공패키지 연계 시)'
    ],
    applicationPeriod: '상시 모집',
    status: 'open'
  },
  {
    id: 'support-002',
    title: '여성새로일하기센터 연계 취업지원',
    description: '경력단절여성의 재취업을 위한 맞춤형 취업지원 프로그램입니다. 직업상담, 직업훈련, 취업알선, 사후관리까지 원스톱으로 지원합니다.',
    eligibility: [
      '경력단절여성 (결혼, 임신, 출산, 육아, 가족돌봄 등으로 경력 단절)',
      '만 25세 이상 미취업 여성',
      '재취업 희망자'
    ],
    benefits: [
      '무료 직업상담 및 심리검사',
      '맞춤형 직업훈련 연계',
      '취업알선 및 일자리 정보 제공',
      '취업 후 사후관리 (3개월)'
    ],
    applicationPeriod: '상시 접수',
    status: 'open'
  },
  {
    id: 'support-003',
    title: '2026년 여성 창업 지원 사업',
    description: '창업을 희망하는 여성을 대상으로 창업 교육, 멘토링, 자금 연계 등을 지원하는 사업입니다.',
    eligibility: [
      '창업 예정자 또는 창업 3년 이내 여성',
      '만 19세 이상',
      '사업자등록 예정 또는 완료자'
    ],
    benefits: [
      '창업 기초 및 심화 교육',
      '전문가 1:1 멘토링',
      '정부 창업자금 연계',
      '사업장 인큐베이팅 공간 제공 (선발자)'
    ],
    applicationPeriod: '2026년 3월 예정',
    status: 'upcoming'
  }
];

export const getOpenSupportPrograms = () =>
  supportPrograms.filter(s => s.status === 'open');

export const getSupportProgramById = (id: string) =>
  supportPrograms.find(s => s.id === id);
