import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, ClipboardCheck, Award, Briefcase, Leaf, Sparkles } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '취득절차',
  description: '자격증 취득 절차 안내',
};

const steps = [
  {
    step: 1,
    title: '상담 및 접수',
    description: '전화 또는 방문 상담을 통해 적합한 과정을 안내받고, 수강 신청서를 작성합니다.',
    icon: FileText,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    step: 2,
    title: '교육 수강',
    description: '이론 수업과 실습 교육을 병행하여 전문 지식과 기술을 습득합니다.',
    icon: BookOpen,
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    step: 3,
    title: '자격 시험',
    description: '교육 과정 수료 후 필기 및 실기 시험을 통해 자격을 검증합니다.',
    icon: ClipboardCheck,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    step: 4,
    title: '자격증 발급',
    description: '시험 합격 후 한국직업능력개발원 등록 민간자격증을 발급받습니다.',
    icon: Award,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    step: 5,
    title: '취업/창업 연계',
    description: '희망자에 한해 취업 알선 및 창업 컨설팅 서비스를 제공합니다.',
    icon: Briefcase,
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  }
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="취득절차"
        description="자격증 취득까지의 과정을 안내합니다."
        breadcrumbs={[
          { label: '자격증안내', href: '/certification' },
          { label: '취득절차' }
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
            {/* 취득 절차 */}
            <div className="relative">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className={cn(
                    'relative flex gap-6 pb-12 last:pb-0 animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* 연결선 */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b from-coral-200 to-sage-200 rounded-full" />
                  )}

                  {/* 스텝 아이콘 */}
                  <div className={cn(
                    'w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg z-10',
                    item.iconBg
                  )}>
                    <item.icon className={cn('w-9 h-9', item.iconColor)} />
                  </div>

                  {/* 내용 */}
                  <div className="card-floating flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={cn(
                        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                        'bg-coral-100 text-coral-700'
                      )}>
                        <Sparkles className="w-3 h-3 mr-1" />
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brown-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brown-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 시험 안내 */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-coral-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brown-800">필기시험</h3>
                </div>
                <ul className="space-y-3 text-brown-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                    <span>객관식 50문항</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                    <span>시험시간: 60분</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                    <span>합격기준: 60점 이상</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                    <span>출제범위: 교육 이론 전반</span>
                  </li>
                </ul>
              </div>

              <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brown-800">실기시험</h3>
                </div>
                <ul className="space-y-3 text-brown-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                    <span>실습형 평가</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                    <span>시험시간: 90분</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                    <span>합격기준: 70점 이상</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                    <span>현장 적용 능력 평가</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 응시 자격 */}
            <div className={cn(
              'mt-12 rounded-3xl p-8 animate-fade-in-up',
              'bg-gradient-to-br from-coral-50 to-sage-50',
              'border-2 border-cream-200'
            )} style={{ animationDelay: '700ms' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-coral-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">응시 자격</h3>
              </div>
              <ul className="space-y-3 text-brown-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                  <span>해당 교육과정 수료자</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                  <span>출석률 80% 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>과제물 및 중간평가 통과자</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <p className="text-brown-600 mb-6 text-lg">
                더 궁금한 점이 있으시면 언제든 문의해주세요.
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
                  <Link href="/programs/apply">
                    수강 신청하기
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
                  <Link href="/contact">
                    상담 문의
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
