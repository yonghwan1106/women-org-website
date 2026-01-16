import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, CreditCard, GraduationCap, ClipboardList, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    color: 'bg-purple-100 text-purple-600'
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
    color: 'bg-teal-100 text-teal-600'
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
    color: 'bg-amber-100 text-amber-600'
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
    color: 'bg-pink-100 text-pink-600'
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 신청 절차 */}
            <div className="space-y-6 mb-16">
              {steps.map((item) => (
                <Card key={item.step} className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`${item.color} p-6 md:p-8 md:w-48 flex flex-col items-center justify-center text-center`}>
                        <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-3">
                          <item.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium opacity-80">STEP {item.step}</span>
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 준비 서류 */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-purple-800 mb-6">준비 서류</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-purple-700 mb-3">국민내일배움카드 발급 시</h4>
                  <ul className="space-y-2 text-purple-600 text-sm">
                    <li>• 신분증 (주민등록증, 운전면허증 등)</li>
                    <li>• 증명사진 1매</li>
                    <li>• 구직등록 완료 (HRD-Net)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-3">수강 신청 시</h4>
                  <ul className="space-y-2 text-purple-600 text-sm">
                    <li>• 국민내일배움카드</li>
                    <li>• 신분증</li>
                    <li>• 수강신청서 (현장 작성 가능)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자부담금 안내 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">자부담금 안내</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">구분</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">자부담 비율</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium">취업성공패키지 연계</td>
                      <td className="px-4 py-3 text-center text-green-600 font-medium">0%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">전액 지원</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">일반 구직자</td>
                      <td className="px-4 py-3 text-center font-medium">20~45%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">과정별 상이</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">재직자</td>
                      <td className="px-4 py-3 text-center font-medium">15~55%</td>
                      <td className="px-4 py-3 text-sm text-gray-500">기업규모별 상이</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * 정확한 자부담금은 과정 및 개인 상황에 따라 다를 수 있으니 상담 시 확인해주세요.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                신청 방법이 어려우시면 언제든 문의해주세요. 친절히 안내해드리겠습니다.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">
                    상담 신청하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/programs">
                    프로그램 보기
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
