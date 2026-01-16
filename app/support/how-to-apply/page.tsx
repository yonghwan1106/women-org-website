import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, CreditCard, GraduationCap, ClipboardList, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '신청방법',
  description: '정부지원사업 신청 방법 안내',
};

const steps = [
  {
    step: 1,
    title: '국민내일배움카드 발급',
    description: 'HRD-Net 또는 고용센터에서 국민내일배움카드를 발급받습니다.',
    details: [
      'HRD-Net(www.hrd.go.kr) 회원가입',
      '국민내일배움카드 온라인 신청',
      '또는 관할 고용센터 방문 신청',
      '발급까지 약 2주 소요'
    ],
    icon: CreditCard,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    step: 2,
    title: '훈련과정 검색',
    description: '본 단체의 교육 프로그램을 HRD-Net에서 검색합니다.',
    details: [
      'HRD-Net 접속',
      '훈련과정 검색에서 "여성단체" 검색',
      '원하는 교육과정 선택'
    ],
    icon: FileText,
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    step: 3,
    title: '수강 신청',
    description: '온라인 또는 방문을 통해 수강 신청합니다.',
    details: [
      'HRD-Net에서 온라인 수강신청',
      '또는 본 단체 방문/전화 신청',
      '필요서류: 신분증, 내일배움카드'
    ],
    icon: ClipboardList,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    step: 4,
    title: '교육 수강',
    description: '정해진 일정에 따라 교육을 이수합니다.',
    details: [
      '출석률 80% 이상 유지',
      '자부담금 납부 (과정별 상이)',
      '수료 후 수료증 발급'
    ],
    icon: GraduationCap,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  }
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHeader
        title="신청방법"
        description="정부지원 교육 프로그램 신청 절차를 안내합니다."
        breadcrumbs={[
          { label: '정부지원사업', href: '/support' },
          { label: '신청방법' }
        ]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 right-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 -rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            {/* 신청 절차 */}
            <div className="space-y-6 mb-16">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="card-floating overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={cn(
                      'p-6 md:p-8 md:w-52 flex flex-col items-center justify-center text-center',
                      item.iconBg
                    )}>
                      <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-3">
                        <item.icon className={cn('w-8 h-8', item.iconColor)} />
                      </div>
                      <span className={cn(
                        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                        'bg-white/60',
                        item.iconColor
                      )}>
                        <Sparkles className="w-3 h-3 mr-1" />
                        STEP {item.step}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="font-serif text-xl font-bold text-brown-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-brown-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-brown-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral-400 mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 준비 서류 */}
            <div className={cn(
              'rounded-3xl p-8 mb-12',
              'bg-gradient-to-br from-coral-50 to-sage-50',
              'border-2 border-cream-200',
              'animate-fade-in-up'
            )} style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-coral-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">준비 서류</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-coral-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-coral-400" />
                    국민내일배움카드 발급 시
                  </h4>
                  <ul className="space-y-2 text-brown-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-300 mt-2 shrink-0" />
                      <span>신분증 (주민등록증, 운전면허증 등)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-300 mt-2 shrink-0" />
                      <span>증명사진 1매</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-300 mt-2 shrink-0" />
                      <span>구직등록 완료 (HRD-Net)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sage-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sage-400" />
                    수강 신청 시
                  </h4>
                  <ul className="space-y-2 text-brown-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-300 mt-2 shrink-0" />
                      <span>국민내일배움카드</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-300 mt-2 shrink-0" />
                      <span>신분증</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-300 mt-2 shrink-0" />
                      <span>수강신청서 (현장 작성 가능)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자부담금 안내 */}
            <div className="card-floating p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">자부담금 안내</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-cream-100 to-cream-200">
                    <tr>
                      <th className="px-4 py-4 text-left text-sm font-medium text-brown-600 rounded-tl-xl">구분</th>
                      <th className="px-4 py-4 text-center text-sm font-medium text-brown-600">자부담 비율</th>
                      <th className="px-4 py-4 text-left text-sm font-medium text-brown-600 rounded-tr-xl">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-200">
                    <tr className="hover:bg-cream-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-brown-800">취업성공패키지 연계</td>
                      <td className="px-4 py-4 text-center text-sage-600 font-bold">0%</td>
                      <td className="px-4 py-4 text-sm text-brown-500">전액 지원</td>
                    </tr>
                    <tr className="hover:bg-cream-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-brown-800">일반 구직자</td>
                      <td className="px-4 py-4 text-center font-medium text-brown-800">20~45%</td>
                      <td className="px-4 py-4 text-sm text-brown-500">과정별 상이</td>
                    </tr>
                    <tr className="hover:bg-cream-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-brown-800">재직자</td>
                      <td className="px-4 py-4 text-center font-medium text-brown-800">15~55%</td>
                      <td className="px-4 py-4 text-sm text-brown-500">기업규모별 상이</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-brown-500">
                * 정확한 자부담금은 과정 및 개인 상황에 따라 다를 수 있으니 상담 시 확인해주세요.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <p className="text-brown-600 mb-6 text-lg">
                신청 방법이 어려우시면 언제든 문의해주세요. 친절히 안내해드리겠습니다.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6 font-medium',
                    'bg-gradient-to-r from-coral-500 to-coral-400',
                    'hover:from-coral-600 hover:to-coral-500',
                    'shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40',
                    'transition-all duration-300'
                  )}
                >
                  <Link href="/contact">
                    상담 신청하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6 font-medium',
                    'bg-transparent border-2 border-sage-200 text-sage-600',
                    'hover:bg-sage-500 hover:text-white hover:border-sage-500',
                    'transition-all duration-300'
                  )}
                >
                  <Link href="/programs">
                    프로그램 보기
                  </Link>
                </Button>
              </div>
            </div>

            {/* Bottom Decorative */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
              <div className="w-3 h-3 rounded-full bg-sage-400" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
