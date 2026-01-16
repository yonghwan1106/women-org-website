import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-001',
    title: '2025년 수족관리사 자격증 수료식',
    description: '3기 수족관리사 과정 수료생들의 자격증 전달식이 진행되었습니다.',
    imageUrl: '/images/gallery/graduation-2025.jpg',
    date: '2025-12-20',
    category: '수료식'
  },
  {
    id: 'gallery-002',
    title: '테라리움 작품 전시회',
    description: '수조테라리움 전문가 과정 수료생들의 작품 전시회가 열렸습니다.',
    imageUrl: '/images/gallery/exhibition.jpg',
    date: '2025-11-15',
    category: '전시회'
  },
  {
    id: 'gallery-003',
    title: '스마트폰 교육 현장',
    description: '어르신들을 위한 스마트폰 활용 교육이 진행되고 있습니다.',
    imageUrl: '/images/gallery/smartphone-class.jpg',
    date: '2025-11-01',
    category: '교육'
  },
  {
    id: 'gallery-004',
    title: '가을 나들이 행사',
    description: '수강생들과 함께한 가을 문화 탐방 행사입니다.',
    imageUrl: '/images/gallery/autumn-trip.jpg',
    date: '2025-10-20',
    category: '행사'
  },
  {
    id: 'gallery-005',
    title: '천연비누 만들기 수업',
    description: '천연비누 만들기 과정에서 제작한 수제 비누들입니다.',
    imageUrl: '/images/gallery/soap-class.jpg',
    date: '2025-10-05',
    category: '교육'
  },
  {
    id: 'gallery-006',
    title: '요가 클래스',
    description: '건강한 몸과 마음을 위한 요가 수업 현장입니다.',
    imageUrl: '/images/gallery/yoga-class.jpg',
    date: '2025-09-15',
    category: '교육'
  },
  {
    id: 'gallery-007',
    title: '컴퓨터 기초반 수업',
    description: '컴퓨터 기초 교육 수업이 진행되고 있습니다.',
    imageUrl: '/images/gallery/computer-class.jpg',
    date: '2025-09-01',
    category: '교육'
  },
  {
    id: 'gallery-008',
    title: '단체 창립기념일 행사',
    description: '단체 창립 5주년 기념행사가 진행되었습니다.',
    imageUrl: '/images/gallery/anniversary.jpg',
    date: '2025-08-15',
    category: '행사'
  }
];

export const getRecentGalleryItems = (count: number = 4) =>
  galleryItems.slice(0, count);

export const getGalleryByCategory = (category: string) =>
  galleryItems.filter(g => g.category === category);

export const getAllGalleryItems = () => galleryItems;
