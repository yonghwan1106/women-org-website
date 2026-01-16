import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { HISTORY_DATA } from '@/lib/constants';
import { History, Sparkles, Leaf, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '연혁',
  description: '여성단체 연혁 - 설립부터 현재까지의 발자취',
};

const yearColors = [
  { gradient: 'from-coral-400 to-coral-500', ring: 'ring-coral-200', dot: 'bg-coral-400' },
  { gradient: 'from-sage-400 to-sage-500', ring: 'ring-sage-200', dot: 'bg-sage-400' },
  { gradient: 'from-amber-400 to-amber-500', ring: 'ring-amber-200', dot: 'bg-amber-400' },
  { gradient: 'from-coral-300 to-sage-400', ring: 'ring-coral-200', dot: 'bg-coral-400' },
];

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="연혁"
        description="여성단체의 발자취를 소개합니다."
        breadcrumbs={[
          { label: '단체소개', href: '/about' },
          { label: '연혁' }
        ]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/3 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-45" />
        </div>

        <div className="container-custom relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
              <History className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-coral-700">HISTORY</span>
            </div>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              설립부터 현재까지, 여성과 함께한 발자취
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* 타임라인 */}
            <div className="relative">
              {/* 세로선 */}
              <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-gradient-to-b from-coral-400 via-sage-400 to-amber-300 rounded-full" />

              {HISTORY_DATA.map((item, index) => {
                const colorSet = yearColors[index % yearColors.length];
                return (
                  <div
                    key={item.year}
                    className={cn(
                      'relative pl-28 pb-12 last:pb-0 animate-fade-in-up'
                    )}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* 연도 원 */}
                    <div className={cn(
                      'absolute left-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl',
                      'bg-gradient-to-br ring-4 ring-white',
                      colorSet.gradient
                    )}>
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>

                    {/* 콘텐츠 */}
                    <div className="card-floating p-6 ml-4 group hover:shadow-xl transition-all duration-300">
                      <ul className="space-y-3">
                        {item.events.map((event, eventIndex) => (
                          <li
                            key={eventIndex}
                            className="flex items-start gap-3 text-brown-700 group-hover:text-brown-800 transition-colors"
                          >
                            <span className={cn(
                              'w-2 h-2 rounded-full mt-2 shrink-0 transition-transform group-hover:scale-125',
                              colorSet.dot
                            )} />
                            <span className="leading-relaxed">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 앞으로의 비전 */}
            <div className={cn(
              'mt-16 rounded-3xl p-10 text-center animate-fade-in-up',
              'bg-gradient-to-br from-coral-50 via-cream-100 to-sage-50',
              'border-2 border-cream-200'
            )}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-coral-700">FUTURE VISION</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brown-800 mb-4">
                앞으로의 비전
              </h3>
              <p className="text-lg text-brown-600 leading-relaxed max-w-2xl mx-auto mb-6">
                더 많은 여성들이 자신의 꿈을 실현할 수 있도록,
                지속적인 프로그램 개발과 지원 확대를 통해
                지역사회 여성 교육의 중심이 되겠습니다.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
                <div className="w-2 h-2 rounded-full bg-sage-400" />
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
