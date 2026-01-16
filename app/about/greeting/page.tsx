import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Quote, Heart, Sparkles, Leaf } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-40 right-1/4 opacity-5">
          <Leaf className="w-32 h-32 text-sage-600 rotate-45" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            {/* 인사말 카드 */}
            <div className="card-floating overflow-hidden animate-fade-in-up">
              {/* Header with Quote */}
              <div className="relative bg-gradient-to-br from-coral-400 via-coral-500 to-sage-400 p-10 text-white overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                }} />

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />

                <Quote className="w-14 h-14 opacity-40 mb-6" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold leading-relaxed relative">
                  &ldquo;여성의 꿈을 현실로 만드는<br />
                  든든한 동반자가 되겠습니다&rdquo;
                </h2>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 bg-white">
                <div className="prose prose-lg max-w-none text-brown-600">
                  <div className="flex flex-col md:flex-row gap-8 mb-6 text-brown-800 font-medium items-start">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-coral-100 shadow-lg">
                      <Image
                        src="/images/greeting/chairman.jpg"
                        alt="홍길동 이사장"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xl leading-relaxed mt-4 md:mt-8">
                      안녕하세요, 여성단체 이사장 홍길동입니다.
                    </p>
                  </div>

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

                  {/* Signature */}
                  <div className="border-t-2 border-cream-200 pt-8 mt-8">
                    <div className="flex items-center justify-end gap-4">
                      <Heart className="w-5 h-5 text-coral-400 fill-coral-400" />
                      <div className="text-right">
                        <p className="text-brown-700 font-medium mb-1">
                          여성단체 이사장
                        </p>
                        <p className="font-serif text-3xl font-bold text-brown-800">
                          홍 길 동
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 비전 & 미션 */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className={cn(
                'rounded-3xl p-8 animate-fade-in-up',
                'bg-gradient-to-br from-coral-50 to-coral-100/50',
                'border-2 border-coral-200'
              )} style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-coral-200 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-coral-600" />
                  </div>
                  <h3 className="text-xl font-bold text-coral-700">VISION</h3>
                </div>
                <p className="text-lg text-coral-800 leading-relaxed">
                  여성이 당당하게 자신의 가치를 실현하는 사회를 만듭니다.
                </p>
              </div>

              <div className={cn(
                'rounded-3xl p-8 animate-fade-in-up',
                'bg-gradient-to-br from-sage-50 to-sage-100/50',
                'border-2 border-sage-200'
              )} style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-200 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-sage-600" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-700">MISSION</h3>
                </div>
                <p className="text-lg text-sage-800 leading-relaxed">
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
