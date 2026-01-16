export interface Program {
  id: string;
  title: string;
  category: '자격증' | '취미' | '직업훈련';
  description: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  capacity: number;
  currentApplicants: number;
  status: 'recruiting' | 'ongoing' | 'closed';
  isFree: boolean;
  governmentSupport: boolean;
  instructor?: string;
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  type: 'private' | 'national';
  description: string;
  targetAudience: string;
  curriculum: string[];
  duration: string;
  fee: number;
  benefits: string[];
  image: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  views: number;
  isImportant: boolean;
  category: '공지' | '이벤트' | '교육';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: '교육' | '자격증' | '지원사업' | '일반';
}

export interface SupportProgram {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  applicationPeriod: string;
  status: 'open' | 'closed' | 'upcoming';
}

export interface HistoryItem {
  year: string;
  events: string[];
}

export interface TeamMember {
  name: string;
  position: string;
  department: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  category: string;
  title: string;
  content: string;
  agreePrivacy: boolean;
}

export interface ApplyForm {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  motivation: string;
  programId: string;
  agreePrivacy: boolean;
}
