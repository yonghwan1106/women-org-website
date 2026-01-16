'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getRecruitingPrograms } from '@/data/programs';
import { cn } from '@/lib/utils';

const statusLabels = {
  recruiting: { text: '모집중', className: 'bg-green-100 text-green-700 border-green-200' },
  ongoing: { text: '진행중', className: 'bg-blue-100 text-blue-700 border-blue-200' },
  closed: { text: '마감', className: 'bg-gray-100 text-gray-600 border-gray-200' }
};

const categoryColors = {
  '자격증': 'bg-purple-100 text-purple-700',
  '취미': 'bg-pink-100 text-pink-700',
  '직업훈련': 'bg-teal-100 text-teal-700'
};

export default function ProgramCards() {
  const programs = getRecruitingPrograms().slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            PROGRAMS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            진행중인 교육 프로그램
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            지금 바로 신청 가능한 교육 프로그램을 확인하세요.
            정부지원 과정은 교육비 지원을 받으실 수 있습니다.
          </p>
        </div>

        {/* 프로그램 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 썸네일 영역 */}
              <div className="relative h-48 overflow-hidden">
                <div className={cn(
                  'absolute inset-0',
                  program.category === '자격증' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  program.category === '취미' ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  'bg-gradient-to-br from-teal-400 to-teal-600'
                )} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-8xl font-bold">{program.title.charAt(0)}</span>
                </div>
                {/* 뱃지들 */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={statusLabels[program.status].className}>
                    {statusLabels[program.status].text}
                  </Badge>
                  {program.governmentSupport && (
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                      정부지원
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className={categoryColors[program.category]}>
                    {program.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                  {program.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-gray-600 line-clamp-2 min-h-[48px]">
                  {program.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>정원 {program.capacity}명 (현재 {program.currentApplicants}명 신청)</span>
                  </div>
                </div>

                {/* 진행률 바 */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>모집 현황</span>
                    <span>{Math.round((program.currentApplicants / program.capacity) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${(program.currentApplicants / program.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <div>
                    {program.isFree ? (
                      <span className="text-lg font-bold text-teal-600">무료</span>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">유료</span>
                    )}
                  </div>
                  <Button asChild variant="outline" className="group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                    <Link href={`/programs/${program.id}`}>
                      자세히 보기
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 전체보기 버튼 */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="px-8 border-2">
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
