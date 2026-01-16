import { Metadata } from 'next';
import { TrendingUp, Users, Award, Briefcase, Leaf, Sparkles, Quote } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';

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
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    label: '자격증 취득자',
    value: '720+',
    description: '합격률 85%',
    icon: Award,
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
    label: '창업 성공',
    value: '45+',
    description: '펫샵, 플랜테리어 등',
    icon: TrendingUp,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  }
];

const yearlyStats = [
  { year: '2025', graduates: 320, certified: 280 },
  { year: '2024', graduates: 280, certified: 240 },
  { year: '2023', graduates: 180, certified: 150 },
  { year: '2022', graduates: 70, certified: 50 },
];

const reviews = [
  {
    name: '김OO',
    cert: '수족관리사',
    review: '퇴직 후 새로운 시작을 할 수 있었습니다. 체계적인 교육 덕분에 자격증도 취득하고, 현재 펫샵에서 일하고 있어요.',
    color: 'bg-coral-100',
    textColor: 'text-coral-600'
  },
  {
    name: '이OO',
    cert: '수조테라리움 전문가',
    review: '취미로 시작했는데 자격증까지 취득하고, 핸드메이드 마켓에서 작품 판매도 하고 있습니다. 정말 감사해요!',
    color: 'bg-sage-100',
    textColor: 'text-sage-600'
  },
  {
    name: '박OO',
    cert: '수족관리사',
    review: '40대 후반에 도전했는데, 선생님들께서 잘 이끌어주셔서 무사히 합격했습니다. 새 인생이 열린 것 같아요.',
    color: 'bg-amber-100',
    textColor: 'text-amber-600'
  }
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
                  <span className="text-sm font-medium text-coral-700">STATISTICS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">연도별 수료 현황</h2>
              </div>
              <div className="card-floating overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-cream-100 to-cream-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-brown-600">연도</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">수료생</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">자격증 취득</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-brown-600">합격률</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-200">
                    {yearlyStats.map((stat) => (
                      <tr key={stat.year} className="hover:bg-cream-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-brown-800">{stat.year}년</td>
                        <td className="px-6 py-4 text-center text-brown-600">{stat.graduates}명</td>
                        <td className="px-6 py-4 text-center text-brown-600">{stat.certified}명</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage-100 text-sage-700">
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
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-full mb-4">
                  <Award className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-sage-700">CERTIFICATION</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">자격증별 취득 현황</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-coral-100 flex items-center justify-center">
                      <Award className="w-7 h-7 text-coral-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brown-800 text-lg">수족관리사</h3>
                      <p className="text-sm text-brown-500">2022년 ~ 현재</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-cream-200">
                      <span className="text-brown-600">총 취득자</span>
                      <span className="font-bold text-brown-800">450명</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cream-200">
                      <span className="text-brown-600">평균 합격률</span>
                      <span className="font-bold text-sage-600">87%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-brown-600">취업 연계</span>
                      <span className="font-bold text-brown-800">120명</span>
                    </div>
                  </div>
                </div>

                <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center">
                      <Award className="w-7 h-7 text-sage-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brown-800 text-lg">수조테라리움 전문가</h3>
                      <p className="text-sm text-brown-500">2024년 ~ 현재</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-cream-200">
                      <span className="text-brown-600">총 취득자</span>
                      <span className="font-bold text-brown-800">270명</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-cream-200">
                      <span className="text-brown-600">평균 합격률</span>
                      <span className="font-bold text-sage-600">82%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-brown-600">창업 연계</span>
                      <span className="font-bold text-brown-800">35명</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 수료생 후기 */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-4">
                  <Quote className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">TESTIMONIALS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">수료생 후기</h2>
              </div>
              <div className="space-y-5">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="card-floating p-8 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 7) * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center',
                        review.color
                      )}>
                        <span className={cn('font-bold text-lg', review.textColor)}>
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-brown-800">{review.name}</p>
                        <p className="text-sm text-brown-500">{review.cert} 취득</p>
                      </div>
                    </div>
                    <p className="text-brown-600 leading-relaxed italic pl-16">
                      &ldquo;{review.review}&rdquo;
                    </p>
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
