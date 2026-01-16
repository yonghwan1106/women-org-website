import { Metadata } from 'next';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '수료현황',
  description: '자격증 취득 및 수료 현황',
};

const stats = [
  {
    label: '총 수료생',
    value: '850+',
    description: '2021년 ~ 현재',
    icon: Users,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    label: '자격증 취득자',
    value: '720+',
    description: '합격률 85%',
    icon: Award,
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
    label: '창업 성공',
    value: '45+',
    description: '펫샵, 플랜테리어 등',
    icon: TrendingUp,
    color: 'bg-pink-100 text-pink-600'
  }
];

const yearlyStats = [
  { year: '2025', graduates: 320, certified: 280 },
  { year: '2024', graduates: 280, certified: 240 },
  { year: '2023', graduates: 180, certified: 150 },
  { year: '2022', graduates: 70, certified: 50 },
];

export default function GraduatesPage() {
  return (
    <>
      <PageHeader
        title="수료현황"
        description="여성단체 교육 수료 및 자격증 취득 현황입니다."
        breadcrumbs={[
          { label: '자격증안내', href: '/certification' },
          { label: '수료현황' }
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">연도별 수료 현황</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">연도</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">수료생</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">자격증 취득</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">합격률</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {yearlyStats.map((stat) => (
                      <tr key={stat.year} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{stat.year}년</td>
                        <td className="px-6 py-4 text-center text-gray-600">{stat.graduates}명</td>
                        <td className="px-6 py-4 text-center text-gray-600">{stat.certified}명</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                            {Math.round((stat.certified / stat.graduates) * 100)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 자격증별 현황 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">자격증별 취득 현황</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">수족관리사</h3>
                        <p className="text-sm text-gray-500">2022년 ~ 현재</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">총 취득자</span>
                        <span className="font-medium">450명</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">평균 합격률</span>
                        <span className="font-medium text-green-600">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">취업 연계</span>
                        <span className="font-medium">120명</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                        <Award className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">수조테라리움 전문가</h3>
                        <p className="text-sm text-gray-500">2024년 ~ 현재</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">총 취득자</span>
                        <span className="font-medium">270명</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">평균 합격률</span>
                        <span className="font-medium text-green-600">82%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">창업 연계</span>
                        <span className="font-medium">35명</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 수료생 후기 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">수료생 후기</h2>
              <div className="space-y-4">
                {[
                  {
                    name: '김OO',
                    cert: '수족관리사',
                    review: '퇴직 후 새로운 시작을 할 수 있었습니다. 체계적인 교육 덕분에 자격증도 취득하고, 현재 펫샵에서 일하고 있어요.'
                  },
                  {
                    name: '이OO',
                    cert: '수조테라리움 전문가',
                    review: '취미로 시작했는데 자격증까지 취득하고, 핸드메이드 마켓에서 작품 판매도 하고 있습니다. 정말 감사해요!'
                  },
                  {
                    name: '박OO',
                    cert: '수족관리사',
                    review: '40대 후반에 도전했는데, 선생님들께서 잘 이끌어주셔서 무사히 합격했습니다. 새 인생이 열린 것 같아요.'
                  }
                ].map((review, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="font-medium text-purple-600">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.cert} 취득</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">&ldquo;{review.review}&rdquo;</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
