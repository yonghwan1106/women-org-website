# PRD: 여성단체 홈페이지

## 1. 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 여성단체 홈페이지 |
| 작성일 | 2026-01-16 |
| 버전 | 1.0 |
| 배포 플랫폼 | Vercel |
| 기술 스택 | Next.js 15 (App Router) |

---

## 2. 프로젝트 개요

### 2.1 배경
지역 여성들을 위한 교육 프로그램 및 정부지원사업 연계 서비스를 제공하는 비영리 여성단체의 공식 홈페이지를 구축한다. 복지관 형태의 심플한 구조로, 교육 알선 및 민간자격증 취득 지원을 주요 기능으로 한다.

### 2.2 목표
- 단체 소개 및 신뢰도 구축
- 교육 프로그램 안내 및 수강 신청 접수
- 정부지원사업 정보 제공 및 연계
- 민간자격증 과정 홍보

### 2.3 타겟 사용자
| 사용자 유형 | 특징 | 주요 니즈 |
|-------------|------|-----------|
| 중장년 여성 | 40~60대, 디지털 기기 사용 미숙 | 쉬운 UI, 큰 글씨, 명확한 네비게이션 |
| 취업 준비 여성 | 30~50대, 재취업/창업 희망 | 자격증 정보, 교육 프로그램 |
| 관계자/협력기관 | 정부기관, 협력단체 담당자 | 단체 정보, 연락처, 사업 실적 |

---

## 3. 기술 스택

### 3.1 프론트엔드
```
- Framework: Next.js 15.x (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 3.x
- UI Components: shadcn/ui
- Icons: Lucide React
```

### 3.2 배포 및 인프라
```
- Hosting: Vercel
- Domain: 추후 결정 (예: women-org.vercel.app)
- Analytics: Vercel Analytics
```

### 3.3 기타
```
- Form Handling: React Hook Form + Zod
- 이미지 최적화: Next.js Image Component
- SEO: Next.js Metadata API
```

---

## 4. 정보 구조 (IA)

```
홈(/)
├── 단체소개(/about)
│   ├── 인사말(/about/greeting)
│   ├── 설립목적(/about/purpose)
│   ├── 연혁(/about/history)
│   ├── 조직도(/about/organization)
│   └── 오시는 길(/about/location)
│
├── 교육프로그램(/programs)
│   ├── 프로그램 목록(/programs)
│   ├── 프로그램 상세(/programs/[id])
│   └── 수강신청(/programs/apply)
│
├── 자격증안내(/certification)
│   ├── 자격증 종류(/certification)
│   ├── 취득절차(/certification/process)
│   └── 수료현황(/certification/graduates)
│
├── 정부지원사업(/support)
│   ├── 지원사업 안내(/support)
│   ├── 신청방법(/support/how-to-apply)
│   └── 지원현황(/support/status)
│
├── 커뮤니티(/community)
│   ├── 공지사항(/community/notice)
│   ├── 갤러리(/community/gallery)
│   └── 자료실(/community/resources)
│
└── 상담문의(/contact)
    ├── 온라인 상담(/contact)
    └── 자주 묻는 질문(/contact/faq)
```

---

## 5. 페이지별 요구사항

### 5.1 홈페이지 (/)

#### 레이아웃
```
┌─────────────────────────────────────┐
│            Header/GNB               │
├─────────────────────────────────────┤
│          Hero Section               │
│   (단체 슬로건 + CTA 버튼)           │
├─────────────────────────────────────┤
│      Quick Menu (4개 아이콘)         │
│  [교육신청] [자격증] [지원사업] [상담] │
├─────────────────────────────────────┤
│    공지사항 (3개)  │  갤러리 (4개)    │
├─────────────────────────────────────┤
│      진행중인 프로그램 (3개 카드)     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

#### 기능 요구사항
- [ ] 반응형 Hero 배너 (이미지 또는 단색 배경)
- [ ] 퀵메뉴 4개 (아이콘 + 텍스트)
- [ ] 최신 공지사항 3개 표시
- [ ] 갤러리 썸네일 4개 표시
- [ ] 진행중인 프로그램 카드 3개

### 5.2 단체소개 (/about/*)

#### 인사말 페이지
- [ ] 대표 인사말 텍스트
- [ ] 대표 사진 (선택)
- [ ] 단체 비전/미션 문구

#### 연혁 페이지
- [ ] 타임라인 형식 연혁 표시
- [ ] 연도별 주요 활동 내역

#### 오시는 길
- [ ] 주소, 전화번호, 이메일
- [ ] 지도 이미지 또는 카카오맵 임베드
- [ ] 대중교통 안내

### 5.3 교육프로그램 (/programs/*)

#### 프로그램 목록
```typescript
interface Program {
  id: string;
  title: string;           // 프로그램명
  category: string;        // 분류 (자격증/취미/직업훈련)
  description: string;     // 간단 설명
  thumbnail: string;       // 썸네일 이미지
  duration: string;        // 교육기간
  schedule: string;        // 교육일정
  capacity: number;        // 정원
  currentApplicants: number; // 현재 신청자
  status: 'recruiting' | 'ongoing' | 'closed'; // 상태
  isFree: boolean;         // 무료여부
  governmentSupport: boolean; // 정부지원여부
}
```

#### 기능 요구사항
- [ ] 프로그램 카드 리스트 (그리드)
- [ ] 카테고리 필터 (전체/자격증/취미/직업훈련)
- [ ] 상태 필터 (모집중/진행중/마감)
- [ ] 프로그램 상세 페이지
- [ ] 수강신청 폼 (이름, 연락처, 생년월일, 신청동기)

### 5.4 자격증안내 (/certification/*)

#### 자격증 종류
```typescript
interface Certification {
  id: string;
  name: string;            // 자격증명
  type: 'private' | 'national'; // 민간/국가
  description: string;     // 설명
  targetAudience: string;  // 대상
  curriculum: string[];    // 교육과정
  duration: string;        // 취득기간
  fee: number;             // 비용
  benefits: string[];      // 취득 후 혜택
}
```

#### 주요 자격증 (대화 내용 기반)
1. **수족관리사** - 관상어 사육 및 수조 관리
2. **수조테라리움 전문가** - 수초 재배, 테라리움 제작

### 5.5 정부지원사업 (/support/*)

- [ ] 현재 진행중인 지원사업 목록
- [ ] 지원자격 및 신청방법 안내
- [ ] 지원사업 신청 폼 또는 외부 링크

### 5.6 커뮤니티 (/community/*)

#### 공지사항
- [ ] 게시글 목록 (제목, 날짜, 조회수)
- [ ] 페이지네이션
- [ ] 상세 페이지

#### 갤러리
- [ ] 이미지 그리드 레이아웃
- [ ] 라이트박스 팝업
- [ ] 카테고리별 필터

#### 자료실
- [ ] 파일 다운로드 목록
- [ ] 파일 형식 아이콘 표시

### 5.7 상담문의 (/contact/*)

#### 온라인 상담 폼
```typescript
interface InquiryForm {
  name: string;            // 이름
  phone: string;           // 연락처
  email: string;           // 이메일
  category: string;        // 문의유형
  title: string;           // 제목
  content: string;         // 내용
  agreePrivacy: boolean;   // 개인정보동의
}
```

#### FAQ
- [ ] 아코디언 형식 FAQ 목록
- [ ] 카테고리별 분류

---

## 6. 공통 컴포넌트

### 6.1 Header
```
┌─────────────────────────────────────────────┐
│ [로고]                    [GNB 메뉴 6개]     │
│                          ☰ (모바일 햄버거)   │
└─────────────────────────────────────────────┘
```
- 스크롤 시 고정 (sticky)
- 모바일: 햄버거 메뉴 → 슬라이드 네비게이션

### 6.2 Footer
```
┌─────────────────────────────────────────────┐
│ [로고]  단체명                              │
│ 주소: OOO시 OOO구 OOO로 123                 │
│ 전화: 000-0000-0000 | 이메일: info@org.kr   │
│ Copyright © 2026 여성단체. All rights reserved. │
└─────────────────────────────────────────────┘
```

### 6.3 공통 UI 컴포넌트
- Button (Primary, Secondary, Outline)
- Card (프로그램 카드, 공지사항 카드)
- Input, Textarea, Select
- Modal
- Breadcrumb
- Pagination
- Toast/Alert

---

## 7. 디자인 가이드라인

### 7.1 컬러 팔레트
```css
:root {
  /* Primary - 따뜻한 보라/마젠타 계열 */
  --primary-50: #fdf4ff;
  --primary-100: #fae8ff;
  --primary-500: #a855f7;
  --primary-600: #9333ea;
  --primary-700: #7e22ce;
  
  /* Secondary - 청록 계열 */
  --secondary-500: #14b8a6;
  --secondary-600: #0d9488;
  
  /* Neutral */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-900: #111827;
  
  /* Semantic */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### 7.2 타이포그래피
```css
/* 타겟 사용자(중장년)를 고려한 큰 폰트 사이즈 */
--font-family: 'Pretendard', 'Noto Sans KR', sans-serif;

--text-xs: 14px;    /* 최소 14px */
--text-sm: 16px;
--text-base: 18px;  /* 기본 18px */
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 30px;
--text-3xl: 36px;

--line-height: 1.7; /* 넉넉한 행간 */
```

### 7.3 반응형 브레이크포인트
```css
--mobile: 0px ~ 767px
--tablet: 768px ~ 1023px
--desktop: 1024px ~
```

### 7.4 접근성 고려사항
- 최소 폰트 크기 14px 이상
- 색상 대비 WCAG AA 기준 충족 (4.5:1 이상)
- 버튼/링크 터치 영역 최소 44x44px
- 포커스 표시 명확하게
- alt 텍스트 필수

---

## 8. 프로젝트 구조

```
women-org-website/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 홈페이지
│   ├── about/
│   │   ├── page.tsx            # 단체소개 메인
│   │   ├── greeting/page.tsx   # 인사말
│   │   ├── purpose/page.tsx    # 설립목적
│   │   ├── history/page.tsx    # 연혁
│   │   ├── organization/page.tsx # 조직도
│   │   └── location/page.tsx   # 오시는 길
│   ├── programs/
│   │   ├── page.tsx            # 프로그램 목록
│   │   ├── [id]/page.tsx       # 프로그램 상세
│   │   └── apply/page.tsx      # 수강신청
│   ├── certification/
│   │   ├── page.tsx            # 자격증 목록
│   │   ├── process/page.tsx    # 취득절차
│   │   └── graduates/page.tsx  # 수료현황
│   ├── support/
│   │   ├── page.tsx            # 지원사업 안내
│   │   ├── how-to-apply/page.tsx
│   │   └── status/page.tsx
│   ├── community/
│   │   ├── notice/
│   │   │   ├── page.tsx        # 공지사항 목록
│   │   │   └── [id]/page.tsx   # 공지사항 상세
│   │   ├── gallery/page.tsx    # 갤러리
│   │   └── resources/page.tsx  # 자료실
│   └── contact/
│       ├── page.tsx            # 온라인 상담
│       └── faq/page.tsx        # FAQ
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/                     # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── QuickMenu.tsx
│   │   ├── NoticeSection.tsx
│   │   ├── GalleryPreview.tsx
│   │   └── ProgramCards.tsx
│   ├── programs/
│   │   ├── ProgramCard.tsx
│   │   ├── ProgramFilter.tsx
│   │   └── ApplyForm.tsx
│   └── common/
│       ├── Breadcrumb.tsx
│       ├── Pagination.tsx
│       ├── PageTitle.tsx
│       └── SectionTitle.tsx
├── lib/
│   ├── utils.ts                # 유틸리티 함수
│   └── constants.ts            # 상수 정의
├── data/
│   ├── programs.ts             # 프로그램 더미 데이터
│   ├── certifications.ts       # 자격증 데이터
│   ├── notices.ts              # 공지사항 데이터
│   └── faq.ts                  # FAQ 데이터
├── types/
│   └── index.ts                # TypeScript 타입 정의
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

---

## 9. 데이터 관리

### 9.1 Phase 1 (MVP)
- **정적 데이터**: JSON/TypeScript 파일로 관리
- 공지사항, 프로그램, 자격증 정보 등 하드코딩
- 콘텐츠 수정 시 코드 배포 필요

### 9.2 Phase 2 (향후 확장)
- **CMS 연동**: Notion API 또는 Sanity
- 관리자가 직접 콘텐츠 수정 가능
- 실시간 수강신청 현황 반영

---

## 10. 배포 설정

### 10.1 Vercel 설정
```json
// vercel.json
{
  "framework": "nextjs",
  "regions": ["icn1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://women-org.vercel.app"
  }
}
```

### 10.2 환경변수
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://women-org.vercel.app
NEXT_PUBLIC_SITE_NAME=여성단체
NEXT_PUBLIC_CONTACT_EMAIL=info@women-org.kr
NEXT_PUBLIC_CONTACT_PHONE=000-0000-0000
```

### 10.3 SEO 메타데이터
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: '여성단체',
    template: '%s | 여성단체'
  },
  description: '여성을 위한 교육 프로그램 및 자격증 취득 지원',
  keywords: ['여성단체', '여성교육', '자격증', '정부지원'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '여성단체'
  }
};
```

---

## 11. 개발 일정

### Phase 1: MVP (5일)

| 일차 | 작업 내용 |
|------|----------|
| Day 1 | 프로젝트 셋업, 공통 레이아웃 (Header, Footer), 홈페이지 |
| Day 2 | 단체소개 페이지 전체 |
| Day 3 | 교육프로그램 목록/상세, 수강신청 폼 |
| Day 4 | 자격증안내, 정부지원사업 페이지 |
| Day 5 | 커뮤니티(공지사항, 갤러리), 상담문의, QA 및 배포 |

### Phase 2: 고도화 (추후)
- CMS 연동
- 실제 데이터 입력
- 관리자 기능

---

## 12. 체크리스트

### 개발 완료 기준
- [ ] 모든 페이지 구현 완료
- [ ] 반응형 (모바일/태블릿/데스크톱) 확인
- [ ] 폼 유효성 검사 동작
- [ ] 이미지 최적화 적용
- [ ] SEO 메타데이터 설정
- [ ] Vercel 배포 완료
- [ ] Lighthouse 성능 점수 80점 이상

### 접근성 체크
- [ ] 키보드 네비게이션 가능
- [ ] 스크린 리더 호환
- [ ] 색상 대비 충족
- [ ] 폰트 크기 적절

---

## 13. 참고 사이트

벤치마킹할 복지관/단체 홈페이지:
1. 지역 여성회관/여성인력개발센터
2. 종합사회복지관
3. 노인복지관
4. 장애인복지관

---

## 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 1.0 | 2026-01-16 | Claude | 최초 작성 |
