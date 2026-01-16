import { Metadata } from 'next';
import { TrendingUp, Users, CreditCard, Briefcase, Leaf, Sparkles, Award } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';

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
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    label: '교육 수료생',
    value: '580+',
    description: '수료율 89%',
    icon: Users,
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    label: '취업 연계',
    value: '180+',
    description: '관련 분야 취업',
    icon: Briefcase,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    label: '지원금액',
    value: '2.5억+',
    description: '누적 지원금',
    icon: TrendingUp,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  }
];

const yearlyData = [
  { year: '2025', trainees: 280, completed: 250, employed: 75 },
  { year: '2024', trainees: 220, completed: 195, employed: 60 },
  { year: '2023', trainees: 120, completed: 105, employed: 35 },
  { year: '2022', trainees: 30, completed: 30, employed: 10 },
];

const successCases = [
  { type: '펫샵 취업', count: 85, desc: '수족관리사 자격 활용', color: 'bg-coral-100', textColor: 'text-coral-600' },
  { type: '플랜테리어 창업', count: 25, desc: '테라리움 전문가 자격 활용', color: 'bg-sage-100', textColor: 'text-sage-600' },
  { type: '관련 업체 취업', count: 70, desc: '기타 관련 분야', color: 'bg-amber-100', textColor: 'text-amber-600' }
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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto">
            {/* 통계 카드 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    'card-floating p-6 text-center animate-fade-in-up',
                    'group hover:shadow-xl transition-all duration-300'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4',
                    'group-hover:scale-110 transition-transform duration-300',
                    stat.iconBg
                  )}>
                    <stat.icon className={cn('w-7 h-7', stat.iconColor)} />
                  </div>
                  <p className="font-serif text-3xl font-bold text-brown-800 mb-1">{stat.value}</p>
                  <p className="font-medium text-brown-700">{stat.label}</p>
                  <p className="text-sm text-brown-500 mt-1">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* 연도별 현황 */}
            <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-coral-700">YEARLY STATISTICS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">연도별 지원 현황</h2>
              </div>
              <div className="card-floating overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-cream-100 to-cream-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-brown-600">연도</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">교육생</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">수료</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">취업 연계</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-200">
                    {yearlyData.map((data) => (
                      <tr key={data.year} className="hover:bg-cream-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-brown-800">{data.year}년</td>
                        <td className="px-6 py-4 text-center text-brown-600">{data.trainees}명</td>
                        <td className="px-6 py-4 text-center text-brown-600">{data.completed}명</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage-100 text-sage-700">
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
              <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-coral-600" />
                  </div>
                  <h3 className="font-serif font-bold text-brown-800 text-lg">국민내일배움카드</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brown-600">연계 교육생</span>
                    <span className="font-bold text-coral-600">650명</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-brown-500">활용률</span>
                      <span className="font-medium text-coral-600">85%</span>
                    </div>
                    <div className="h-3 bg-cream-200 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-coral-400 to-coral-500 rounded-full" />
                    </div>
                  </div>
                  <p className="text-sm text-brown-500">전체 교육생의 85%가 내일배움카드를 활용했습니다.</p>
                </div>
              </div>

              <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-sage-600" />
                  </div>
                  <h3 className="font-serif font-bold text-brown-800 text-lg">여성새로일하기센터 연계</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brown-600">연계 교육생</span>
                    <span className="font-bold text-sage-600">120명</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-brown-500">연계율</span>
                      <span className="font-medium text-sage-600">15%</span>
                    </div>
                    <div className="h-3 bg-cream-200 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-gradient-to-r from-sage-400 to-sage-500 rounded-full" />
                    </div>
                  </div>
                  <p className="text-sm text-brown-500">경력단절여성 대상 맞춤형 취업 지원을 제공했습니다.</p>
                </div>
              </div>
            </div>

            {/* 성공 사례 */}
            <div className={cn(
              'rounded-3xl p-8',
              'bg-gradient-to-br from-coral-50 to-sage-50',
              'border-2 border-cream-200',
              'animate-fade-in-up'
            )} style={{ animationDelay: '700ms' }}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-4">
                  <Award className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-coral-700">SUCCESS STORIES</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">지원 성공 사례</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {successCases.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      'rounded-2xl p-6 text-center bg-white',
                      'border-2 border-cream-200',
                      'hover:shadow-lg transition-all duration-300'
                    )}
                  >
                    <p className={cn('font-serif text-3xl font-bold mb-2', item.textColor)}>{item.count}명</p>
                    <p className="font-medium text-brown-800 mb-1">{item.type}</p>
                    <p className="text-sm text-brown-500">{item.desc}</p>
                  </div>
                ))}
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
