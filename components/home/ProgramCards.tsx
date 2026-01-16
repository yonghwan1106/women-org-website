'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar, Sparkles, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getRecruitingPrograms } from '@/data/programs';
import { cn } from '@/lib/utils';

const statusLabels = {
  recruiting: { text: '모집중', className: 'bg-sage-100 text-sage-700 border-sage-200' },
  ongoing: { text: '진행중', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  closed: { text: '마감', className: 'bg-gray-100 text-gray-600 border-gray-200' }
};

const categoryStyles = {
  '자격증': {
    gradient: 'from-coral-400 to-coral-500',
    badge: 'bg-coral-100 text-coral-700',
    accent: 'text-coral-600',
    ring: 'ring-coral-200'
  },
  '취미': {
    gradient: 'from-amber-400 to-amber-500',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'text-amber-600',
    ring: 'ring-amber-200'
  },
  '직업훈련': {
    gradient: 'from-sage-400 to-sage-500',
    badge: 'bg-sage-100 text-sage-700',
    accent: 'text-sage-600',
    ring: 'ring-sage-200'
  }
};

export default function ProgramCards() {
  const programs = getRecruitingPrograms().slice(0, 3);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-6">
            <Award className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700 tracking-wide">PROGRAMS</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            진행중인 교육 프로그램
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto leading-relaxed">
            지금 바로 신청 가능한 교육 프로그램을 확인하세요.
            <br className="hidden sm:block" />
            정부지원 과정은 교육비 지원을 받으실 수 있습니다.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const style = categoryStyles[program.category] || categoryStyles['자격증'];

            return (
              <Card
                key={program.id}
                className={cn(
                  'group overflow-hidden border-0 bg-white rounded-3xl',
                  'shadow-xl shadow-brown-800/5 hover:shadow-2xl hover:shadow-brown-800/10',
                  'transition-all duration-500 hover:-translate-y-2',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br',
                    style.gradient
                  )} />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                  }} />

                  {/* Large Letter */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-[120px] font-serif font-bold leading-none">
                      {program.title.charAt(0)}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={cn(statusLabels[program.status].className, 'shadow-sm')}>
                      <Sparkles className="w-3 h-3 mr-1" />
                      {statusLabels[program.status].text}
                    </Badge>
                    {program.governmentSupport && (
                      <Badge className="bg-amber-100 text-amber-700 border-amber-200 shadow-sm">
                        정부지원
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={cn(style.badge, 'shadow-sm')}>
                      {program.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 pt-6">
                  <h3 className={cn(
                    'text-xl font-bold text-brown-800 line-clamp-1',
                    'group-hover:text-coral-600 transition-colors'
                  )}>
                    {program.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4 pb-4">
                  <p className="text-brown-600 line-clamp-2 min-h-[48px] leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-brown-500">
                      <div className="w-8 h-8 rounded-lg bg-coral-50 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-coral-500" />
                      </div>
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brown-500">
                      <div className="w-8 h-8 rounded-lg bg-sage-50 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-sage-500" />
                      </div>
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brown-500">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-amber-500" />
                      </div>
                      <span>정원 {program.capacity}명 (현재 {program.currentApplicants}명 신청)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-brown-500 mb-2">
                      <span className="font-medium">모집 현황</span>
                      <span className="font-bold text-coral-600">
                        {Math.round((program.currentApplicants / program.capacity) * 100)}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-cream-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          'h-full rounded-full transition-all duration-700 bg-gradient-to-r',
                          style.gradient
                        )}
                        style={{ width: `${(program.currentApplicants / program.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-6">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      {program.isFree ? (
                        <span className="text-xl font-bold text-sage-600">무료</span>
                      ) : (
                        <span className="text-xl font-bold text-brown-800">유료</span>
                      )}
                    </div>
                    <Button
                      asChild
                      className={cn(
                        'rounded-full px-6 py-5 font-medium',
                        'bg-transparent border-2 border-coral-200 text-coral-600',
                        'hover:bg-coral-500 hover:text-white hover:border-coral-500',
                        'transition-all duration-300'
                      )}
                    >
                      <Link href={`/programs/${program.id}`}>
                        자세히 보기
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-600 hover:to-coral-500 text-white rounded-full px-10 py-7 text-lg font-medium shadow-xl shadow-coral-500/25 hover:shadow-coral-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <Link href="/programs">
              전체 프로그램 보기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
