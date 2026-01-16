import { Metadata } from 'next';
import { TrendingUp, Users, CreditCard, Briefcase } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '지원현황',
  description: '정부지원사업 지원 현황',
};

const stats = [
  {
    label: '내일배움카드 연계',
    value: '650+',
    description: '2021년 ~ 현재',
    icon: CreditCard,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    label: '교육 수료생',
    value: '580+',
    description: '수료율 89%',
    icon: Users,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    label: '취업 연계',
    value: '180+',
    description: '관련 분야 취업',
    icon: Briefcase,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    label: '지원금액',
    value: '2.5억+',
    description: '누적 지원금',
    icon: TrendingUp,
    color: 'bg-pink-100 text-pink-600'
  }
];

const yearlyData = [
  { year: '2025', trainees: 280, completed: 250, employed: 75 },
  { year: '2024', trainees: 220, completed: 195, employed: 60 },
  { year: '2023', trainees: 120, completed: 105, employed: 35 },
  { year: '2022', trainees: 30, completed: 30, employed: 10 },
];

export default function StatusPage() {
  return (
    <>
      <PageHeader
        title="지원현황"
        description="정부지원사업을 통한 교육 및 취업 지원 현황입니다."
        breadcrumbs={[
          { label: '정부지원사업', href: '/support' },
          { label: '지원현황' }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 통계 카드 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="font-medium text-gray-700">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 연도별 현황 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">연도별 지원 현황</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">연도</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">교육생</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">수료</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">취업 연계</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {yearlyData.map((data) => (
                      <tr key={data.year} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{data.year}년</td>
                        <td className="px-6 py-4 text-center text-gray-600">{data.trainees}명</td>
                        <td className="px-6 py-4 text-center text-gray-600">{data.completed}명</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                            {data.employed}명
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 지원 프로그램별 현황 */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">국민내일배움카드</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">연계 교육생</span>
                      <span className="font-bold text-purple-600">650명</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-500">전체 교육생의 85%가 내일배움카드를 활용했습니다.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">여성새로일하기센터 연계</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">연계 교육생</span>
                      <span className="font-bold text-teal-600">120명</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-500">경력단절여성 대상 맞춤형 취업 지원을 제공했습니다.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 성공 사례 */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">지원 성공 사례</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { type: '펫샵 취업', count: 85, desc: '수족관리사 자격 활용' },
                  { type: '플랜테리어 창업', count: 25, desc: '테라리움 전문가 자격 활용' },
                  { type: '관련 업체 취업', count: 70, desc: '기타 관련 분야' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-purple-600 mb-1">{item.count}명</p>
                    <p className="font-medium text-gray-900">{item.type}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
