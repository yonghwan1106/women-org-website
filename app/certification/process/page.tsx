import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, ClipboardCheck, Award, Briefcase } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    color: 'bg-purple-100 text-purple-600'
  },
  {
    step: 2,
    title: '교육 수강',
    description: '이론 수업과 실습 교육을 병행하여 전문 지식과 기술을 습득합니다.',
    icon: BookOpen,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    step: 3,
    title: '자격 시험',
    description: '교육 과정 수료 후 필기 및 실기 시험을 통해 자격을 검증합니다.',
    icon: ClipboardCheck,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    step: 4,
    title: '자격증 발급',
    description: '시험 합격 후 한국직업능력개발원 등록 민간자격증을 발급받습니다.',
    icon: Award,
    color: 'bg-pink-100 text-pink-600'
  },
  {
    step: 5,
    title: '취업/창업 연계',
    description: '희망자에 한해 취업 알선 및 창업 컨설팅 서비스를 제공합니다.',
    icon: Briefcase,
    color: 'bg-blue-100 text-blue-600'
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 취득 절차 */}
            <div className="relative">
              {steps.map((item, index) => (
                <div key={item.step} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* 연결선 */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gray-200" />
                  )}

                  {/* 스텝 번호 */}
                  <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shrink-0 shadow-lg z-10`}>
                    <item.icon className="w-8 h-8" />
                  </div>

                  {/* 내용 */}
                  <Card className="flex-1 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-purple-600">STEP {item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* 시험 안내 */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">필기시험</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 객관식 50문항</li>
                    <li>• 시험시간: 60분</li>
                    <li>• 합격기준: 60점 이상</li>
                    <li>• 출제범위: 교육 이론 전반</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">실기시험</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 실습형 평가</li>
                    <li>• 시험시간: 90분</li>
                    <li>• 합격기준: 70점 이상</li>
                    <li>• 현장 적용 능력 평가</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* 응시 자격 */}
            <div className="mt-12 bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">응시 자격</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• 해당 교육과정 수료자</li>
                <li>• 출석률 80% 이상</li>
                <li>• 과제물 및 중간평가 통과자</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                더 궁금한 점이 있으시면 언제든 문의해주세요.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/programs/apply">
                    수강 신청하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    상담 문의
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
