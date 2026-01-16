import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Target, Heart, Users, Award, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '설립목적',
  description: '여성단체 설립목적 및 핵심가치',
};

const coreValues = [
  {
    icon: Heart,
    title: '존중',
    description: '모든 여성의 가치와 잠재력을 존중합니다.',
    color: 'text-pink-600 bg-pink-100'
  },
  {
    icon: Users,
    title: '동행',
    description: '함께 성장하고 발전하는 동반자가 됩니다.',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Lightbulb,
    title: '혁신',
    description: '시대에 맞는 새로운 교육 프로그램을 개발합니다.',
    color: 'text-amber-600 bg-amber-100'
  },
  {
    icon: Shield,
    title: '신뢰',
    description: '투명하고 정직한 운영으로 신뢰를 쌓아갑니다.',
    color: 'text-teal-600 bg-teal-100'
  }
];

const purposes = [
  {
    number: '01',
    title: '여성 교육 기회 확대',
    description: '다양한 분야의 교육 프로그램을 통해 여성들에게 배움의 기회를 제공합니다. 연령, 학력, 경력에 상관없이 누구나 참여할 수 있는 열린 교육을 지향합니다.'
  },
  {
    number: '02',
    title: '전문 자격증 취득 지원',
    description: '수족관리사, 테라리움 전문가 등 취업과 창업에 실질적으로 도움이 되는 민간자격증 취득을 지원합니다. 체계적인 커리큘럼과 실습 교육을 제공합니다.'
  },
  {
    number: '03',
    title: '경력단절여성 재취업 지원',
    description: '결혼, 출산, 육아 등으로 경력이 단절된 여성들의 사회 복귀를 돕습니다. 맞춤형 상담과 취업 연계 서비스를 제공합니다.'
  },
  {
    number: '04',
    title: '정부지원사업 연계',
    description: '국민내일배움카드, 여성새로일하기센터 등 정부지원 프로그램과 연계하여 경제적 부담 없이 교육받을 수 있도록 지원합니다.'
  }
];

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

      <section className="section-padding">
        <div className="container-custom">
          {/* 설립 목적 */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                설립 목적
              </h2>
              <p className="text-lg text-gray-600">
                여성의 자립과 성장을 위한 4가지 핵심 목표
              </p>
            </div>

            <div className="space-y-6">
              {purposes.map((purpose, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      {purpose.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {purpose.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {purpose.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 핵심 가치 */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                핵심 가치
              </h2>
              <p className="text-lg text-gray-600">
                우리가 추구하는 4가지 핵심 가치
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
