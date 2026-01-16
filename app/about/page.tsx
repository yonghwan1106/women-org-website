import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, History, Building, MapPin } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

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
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: '설립목적',
    description: '단체의 설립 목적과 미션을 소개합니다',
    href: '/about/purpose',
    icon: Target,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    title: '연혁',
    description: '단체의 발자취를 확인하세요',
    href: '/about/history',
    icon: History,
    color: 'bg-pink-100 text-pink-600'
  },
  {
    title: '조직도',
    description: '단체 조직 구성을 소개합니다',
    href: '/about/organization',
    icon: Building,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    title: '오시는 길',
    description: '찾아오시는 방법을 안내합니다',
    href: '/about/location',
    icon: MapPin,
    color: 'bg-blue-100 text-blue-600'
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutMenus.map((menu, index) => (
              <Link key={menu.title} href={menu.href}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${menu.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <menu.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {menu.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {menu.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium">
                      자세히 보기
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
