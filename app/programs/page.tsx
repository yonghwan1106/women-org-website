'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar, Filter } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { programs } from '@/data/programs';
import { cn } from '@/lib/utils';

const categories = ['전체', '자격증', '취미', '직업훈련'] as const;
const statuses = ['전체', '모집중', '진행중', '마감'] as const;

const statusMap = {
  '전체': 'all',
  '모집중': 'recruiting',
  '진행중': 'ongoing',
  '마감': 'closed'
} as const;

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

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('전체');
  const [selectedStatus, setSelectedStatus] = useState<typeof statuses[number]>('전체');

  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selectedCategory === '전체' || program.category === selectedCategory;
    const statusMatch = selectedStatus === '전체' || program.status === statusMap[selectedStatus];
    return categoryMatch && statusMatch;
  });

  return (
    <>
      <PageHeader
        title="교육프로그램"
        description="다양한 교육 프로그램을 통해 새로운 시작을 준비하세요."
        breadcrumbs={[{ label: '교육프로그램' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* 필터 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">필터</span>
            </div>

            <div className="space-y-4">
              {/* 카테고리 필터 */}
              <div>
                <p className="text-sm text-gray-500 mb-2">분류</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 상태 필터 */}
              <div>
                <p className="text-sm text-gray-500 mb-2">모집 상태</p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        selectedStatus === status
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      )}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 결과 개수 */}
          <p className="text-gray-600 mb-6">
            총 <span className="font-bold text-purple-600">{filteredPrograms.length}</span>개의 프로그램
          </p>

          {/* 프로그램 목록 */}
          {filteredPrograms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* 썸네일 */}
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
                        <span>정원 {program.capacity}명 ({program.currentApplicants}명 신청)</span>
                      </div>
                    </div>

                    {/* 진행률 */}
                    <div className="pt-2">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                          style={{ width: `${(program.currentApplicants / program.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <div className="flex items-center justify-between w-full">
                      <span className={cn(
                        'text-lg font-bold',
                        program.isFree ? 'text-teal-600' : 'text-gray-900'
                      )}>
                        {program.isFree ? '무료' : '유료'}
                      </span>
                      <Button asChild variant="outline" className="group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600">
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">해당 조건에 맞는 프로그램이 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
