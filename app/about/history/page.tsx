import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { HISTORY_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: '연혁',
  description: '여성단체 연혁 - 설립부터 현재까지의 발자취',
};

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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* 타임라인 */}
            <div className="relative">
              {/* 세로선 */}
              <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-200" />

              {HISTORY_DATA.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-24 pb-12 last:pb-0"
                >
                  {/* 연도 원 */}
                  <div className="absolute left-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-4">
                    <ul className="space-y-3">
                      {item.events.map((event, eventIndex) => (
                        <li
                          key={eventIndex}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* 앞으로의 비전 */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                앞으로의 비전
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                더 많은 여성들이 자신의 꿈을 실현할 수 있도록,
                지속적인 프로그램 개발과 지원 확대를 통해
                지역사회 여성 교육의 중심이 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
