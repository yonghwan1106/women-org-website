import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, History, Building, MapPin, Leaf, Sparkles } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '단체소개',
  description: '여성단체 소개 - 인사말, 설립목적, 연혁, 조직도, 오시는 길',
};

const aboutMenus = [
  {
    title: '인사말',
    description: '단체장 인사말과 비전을 확인하세요',
    href: '/about/greeting',
    icon: Users,
    gradient: 'from-coral-400 to-coral-500',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600',
    hoverBg: 'group-hover:bg-coral-50'
  },
  {
    title: '설립목적',
    description: '단체의 설립 목적과 미션을 소개합니다',
    href: '/about/purpose',
    icon: Target,
    gradient: 'from-sage-400 to-sage-500',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
    hoverBg: 'group-hover:bg-sage-50'
  },
  {
    title: '연혁',
    description: '단체의 발자취를 확인하세요',
    href: '/about/history',
    icon: History,
    gradient: 'from-amber-400 to-amber-500',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    hoverBg: 'group-hover:bg-amber-50'
  },
  {
    title: '조직도',
    description: '단체 조직 구성을 소개합니다',
    href: '/about/organization',
    icon: Building,
    gradient: 'from-coral-300 to-sage-400',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600',
    hoverBg: 'group-hover:bg-coral-50'
  },
  {
    title: '오시는 길',
    description: '찾아오시는 방법을 안내합니다',
    href: '/about/location',
    icon: MapPin,
    gradient: 'from-sage-300 to-coral-400',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
    hoverBg: 'group-hover:bg-sage-50'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="단체소개"
        description="여성의 자립과 성장을 함께하는 여성단체를 소개합니다."
        breadcrumbs={[{ label: '단체소개' }]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-40 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-coral-700">ABOUT US</span>
            </div>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              여성단체의 다양한 정보를 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutMenus.map((menu, index) => (
              <Link
                key={menu.title}
                href={menu.href}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  'group h-full bg-white rounded-3xl overflow-hidden',
                  'border-2 border-cream-200 hover:border-coral-200',
                  'shadow-lg hover:shadow-xl transition-all duration-500',
                  'hover:-translate-y-2'
                )}>
                  {/* Top Gradient Line */}
                  <div className={cn(
                    'h-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    menu.gradient
                  )} />

                  <div className={cn('p-8', menu.hoverBg, 'transition-colors duration-300')}>
                    {/* Icon */}
                    <div className={cn(
                      'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                      'group-hover:scale-110 group-hover:rotate-3 transition-all duration-300',
                      menu.iconBg
                    )}>
                      <menu.icon className={cn('w-8 h-8', menu.iconColor)} />
                    </div>

                    {/* Content */}
                    <h2 className="font-serif text-2xl font-bold text-brown-800 mb-3 group-hover:text-coral-600 transition-colors">
                      {menu.title}
                    </h2>
                    <p className="text-brown-600 mb-6 leading-relaxed">
                      {menu.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center text-coral-600 font-medium">
                      자세히 보기
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
