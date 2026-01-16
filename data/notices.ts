import { Notice } from '@/types';

export const notices: Notice[] = [
  {
    id: 'notice-001',
    title: '2026년 상반기 수족관리사 자격증 과정 모집 안내',
    content: `안녕하세요, 여성단체입니다.

2026년 상반기 수족관리사 자격증 과정 수강생을 모집합니다.

■ 교육기간: 2026년 2월 4일 ~ 4월 25일 (매주 화, 목)
■ 교육시간: 14:00 ~ 17:00 (총 48시간)
■ 모집인원: 15명 (선착순)
■ 교육비: 350,000원 (교재비 포함)
■ 정부지원: 국민내일배움카드 사용 시 자부담 30%

신청은 홈페이지 또는 방문 접수로 가능합니다.
문의사항은 000-0000-0000으로 연락주세요.`,
    date: '2026-01-15',
    views: 156,
    isImportant: true,
    category: '교육'
  },
  {
    id: 'notice-002',
    title: '설 연휴 휴관 안내',
    content: `안녕하세요, 여성단체입니다.

설 연휴 기간 동안 휴관함을 알려드립니다.

■ 휴관기간: 2026년 1월 28일(화) ~ 1월 30일(목)
■ 정상운영: 2026년 1월 31일(금)부터

휴관 기간 중 온라인 문의는 정상 접수되며, 순차적으로 답변드리겠습니다.

새해 복 많이 받으세요!`,
    date: '2026-01-14',
    views: 89,
    isImportant: true,
    category: '공지'
  },
  {
    id: 'notice-003',
    title: '무료 스마트폰 활용 교육 참여자 모집',
    content: `스마트폰 사용이 어려우신 분들을 위한 무료 교육을 진행합니다.

■ 교육내용: 기본 사용법, 카카오톡, 인터넷뱅킹, 정부24 앱
■ 교육일시: 매주 금요일 14:00 ~ 16:00
■ 모집인원: 15명
■ 교육비: 무료 (정부지원사업)

참여를 원하시는 분은 전화 또는 방문 신청해주세요.`,
    date: '2026-01-10',
    views: 234,
    isImportant: false,
    category: '교육'
  },
  {
    id: 'notice-004',
    title: '2025년 교육 수료식 및 자격증 전달식 안내',
    content: `2025년 한 해 동안 교육을 이수하신 분들의 수료식을 진행합니다.

■ 일시: 2026년 1월 20일(월) 14:00
■ 장소: 본관 3층 대강당
■ 대상: 2025년 교육 수료자 전원

수료증 및 자격증을 현장에서 전달해 드립니다.
많은 참석 부탁드립니다.`,
    date: '2026-01-08',
    views: 167,
    isImportant: false,
    category: '이벤트'
  },
  {
    id: 'notice-005',
    title: '홈페이지 리뉴얼 오픈 안내',
    content: `안녕하세요, 여성단체입니다.

더 나은 서비스 제공을 위해 홈페이지를 새롭게 단장했습니다.

■ 개선사항
- 모바일 환경 최적화
- 프로그램 검색 기능 강화
- 온라인 수강신청 시스템 개선
- 접근성 향상 (큰 글씨, 명확한 메뉴)

이용 중 불편사항이 있으시면 언제든 문의해주세요.`,
    date: '2026-01-05',
    views: 312,
    isImportant: false,
    category: '공지'
  }
];

export const getRecentNotices = (count: number = 3) =>
  notices.slice(0, count);

export const getNoticeById = (id: string) =>
  notices.find(n => n.id === id);

export const getImportantNotices = () =>
  notices.filter(n => n.isImportant);
