import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: '인사말',
  description: '여성단체 이사장 인사말',
};

export default function GreetingPage() {
  return (
    <>
      <PageHeader
        title="인사말"
        description="여성단체를 찾아주신 여러분을 환영합니다."
        breadcrumbs={[
          { label: '단체소개', href: '/about' },
          { label: '인사말' }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 인사말 카드 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white">
                <Quote className="w-12 h-12 opacity-50 mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                  &ldquo;여성의 꿈을 현실로 만드는<br />
                  든든한 동반자가 되겠습니다&rdquo;
                </h2>
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    안녕하세요, 여성단체 이사장 홍길동입니다.
                  </p>

                  <p className="leading-relaxed mb-6">
                    먼저 저희 여성단체 홈페이지를 방문해 주신 여러분께 진심으로 감사의 말씀을 드립니다.
                  </p>

                  <p className="leading-relaxed mb-6">
                    저희 단체는 지역 여성들의 자립과 성장을 돕기 위해 2021년에 설립되었습니다.
                    그동안 많은 분들이 저희와 함께하며 새로운 시작을 준비하셨고,
                    수많은 성공 사례를 만들어 왔습니다.
                  </p>

                  <p className="leading-relaxed mb-6">
                    우리 사회에서 여성은 결혼, 출산, 육아 등의 이유로 경력이 단절되는 경우가 많습니다.
                    하지만 이것이 끝이 아닙니다. 저희는 다양한 교육 프로그램과 자격증 취득 지원을 통해
                    여성분들이 다시 사회로 나아갈 수 있도록 징검다리 역할을 하고자 합니다.
                  </p>

                  <p className="leading-relaxed mb-6">
                    특히 수족관리사, 수조테라리움 전문가 등 새로운 분야의 자격증 과정을 통해
                    취업과 창업의 기회를 넓히고 있으며, 정부지원 직업훈련 과정을 통해
                    경제적 부담 없이 교육받으실 수 있도록 노력하고 있습니다.
                  </p>

                  <p className="leading-relaxed mb-8">
                    앞으로도 여성분들의 꿈을 응원하고 함께 걸어가는 든든한 동반자가 되겠습니다.
                    언제든지 저희 문을 두드려 주세요. 감사합니다.
                  </p>

                  <div className="border-t pt-6 mt-8">
                    <p className="text-right text-gray-900 font-bold text-xl">
                      여성단체 이사장<br />
                      <span className="text-2xl">홍 길 동</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 비전 & 미션 */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">VISION</h3>
                <p className="text-lg text-purple-700 leading-relaxed">
                  여성이 당당하게 자신의 가치를 실현하는 사회를 만듭니다.
                </p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">MISSION</h3>
                <p className="text-lg text-teal-700 leading-relaxed">
                  맞춤형 교육과 전문 자격증 과정을 통해 여성의 사회 진출과 경제적 자립을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
