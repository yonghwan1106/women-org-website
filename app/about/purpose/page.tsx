import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Target, Heart, Users, Award, Lightbulb, Shield, Leaf, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '설립목적',
  description: '여성단체 설립목적 및 핵심가치',
};

const coreValues = [
  {
    icon: Heart,
    title: '존중',
    description: '모든 여성의 가치와 잠재력을 존중합니다.',
    gradient: 'from-coral-400 to-coral-500',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    icon: Users,
    title: '동행',
    description: '함께 성장하고 발전하는 동반자가 됩니다.',
    gradient: 'from-sage-400 to-sage-500',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    icon: Lightbulb,
    title: '혁신',
    description: '시대에 맞는 새로운 교육 프로그램을 개발합니다.',
    gradient: 'from-amber-400 to-amber-500',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    icon: Shield,
    title: '신뢰',
    description: '투명하고 정직한 운영으로 신뢰를 쌓아갑니다.',
    gradient: 'from-coral-300 to-sage-400',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  }
];

const purposes = [
  {
    number: '01',
    title: '여성 교육 기회 확대',
    description: '다양한 분야의 교육 프로그램을 통해 여성들에게 배움의 기회를 제공합니다. 연령, 학력, 경력에 상관없이 누구나 참여할 수 있는 열린 교육을 지향합니다.',
    color: 'coral'
  },
  {
    number: '02',
    title: '전문 자격증 취득 지원',
    description: '수족관리사, 테라리움 전문가 등 취업과 창업에 실질적으로 도움이 되는 민간자격증 취득을 지원합니다. 체계적인 커리큘럼과 실습 교육을 제공합니다.',
    color: 'sage'
  },
  {
    number: '03',
    title: '경력단절여성 재취업 지원',
    description: '결혼, 출산, 육아 등으로 경력이 단절된 여성들의 사회 복귀를 돕습니다. 맞춤형 상담과 취업 연계 서비스를 제공합니다.',
    color: 'amber'
  },
  {
    number: '04',
    title: '정부지원사업 연계',
    description: '국민내일배움카드, 여성새로일하기센터 등 정부지원 프로그램과 연계하여 경제적 부담 없이 교육받을 수 있도록 지원합니다.',
    color: 'coral'
  }
];

const colorMap = {
  coral: {
    gradient: 'from-coral-400 to-coral-500',
    bg: 'bg-coral-50',
    border: 'border-coral-200',
    text: 'text-coral-600'
  },
  sage: {
    gradient: 'from-sage-400 to-sage-500',
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    text: 'text-sage-600'
  },
  amber: {
    gradient: 'from-amber-400 to-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600'
  }
};

export default function PurposePage() {
  return (
    <>
      <PageHeader
        title="설립목적"
        description="여성단체의 설립 목적과 핵심 가치를 소개합니다."
        breadcrumbs={[
          { label: '단체소개', href: '/about' },
          { label: '설립목적' }
        ]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 -rotate-12" />
        </div>

        <div className="container-custom relative">
          {/* 설립 목적 */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
                <Target className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-coral-700">PURPOSE</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-800 mb-4">
                설립 목적
              </h2>
              <p className="text-lg text-brown-600">
                여성의 자립과 성장을 위한 4가지 핵심 목표
              </p>
            </div>

            <div className="space-y-6">
              {purposes.map((purpose, index) => {
                const colors = colorMap[purpose.color as keyof typeof colorMap];
                return (
                  <div
                    key={index}
                    className={cn(
                      'card-floating p-8 animate-fade-in-up',
                      'hover:shadow-xl transition-all duration-300 group'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={cn(
                        'shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center',
                        'bg-gradient-to-br shadow-lg transition-transform duration-300',
                        'group-hover:scale-110 group-hover:rotate-3',
                        colors.gradient
                      )}>
                        <span className="text-white font-bold text-xl">{purpose.number}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-brown-800 mb-3 group-hover:text-coral-600 transition-colors">
                          {purpose.title}
                        </h3>
                        <p className="text-brown-600 leading-relaxed">
                          {purpose.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 핵심 가치 */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-full mb-4">
                <Award className="w-4 h-4 text-sage-500" />
                <span className="text-sm font-medium text-sage-700">CORE VALUES</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-800 mb-4">
                핵심 가치
              </h2>
              <p className="text-lg text-brown-600">
                우리가 추구하는 4가지 핵심 가치
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    'card-floating p-8 animate-fade-in-up group',
                    'hover:shadow-xl transition-all duration-300'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient line */}
                  <div className={cn(
                    'absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity',
                    value.gradient
                  )} />

                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mb-5',
                    'group-hover:scale-110 transition-transform duration-300',
                    value.iconBg
                  )}>
                    <value.icon className={cn('w-7 h-7', value.iconColor)} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brown-800 mb-3 group-hover:text-coral-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-brown-600 leading-relaxed">
                    {value.description}
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
      </section>
    </>
  );
}
