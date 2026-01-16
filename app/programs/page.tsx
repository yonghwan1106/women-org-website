'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Users, Calendar, Filter, Sparkles, Leaf, Award } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  recruiting: { text: '모집중', className: 'bg-sage-100 text-sage-700 border-sage-200' },
  ongoing: { text: '진행중', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  closed: { text: '마감', className: 'bg-cream-200 text-brown-500 border-cream-300' }
};

const categoryStyles = {
  '자격증': {
    gradient: 'from-coral-400 to-coral-500',
    badge: 'bg-coral-100 text-coral-700',
    iconBg: 'bg-coral-50',
    iconColor: 'text-coral-500'
  },
  '취미': {
    gradient: 'from-amber-400 to-amber-500',
    badge: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500'
  },
  '직업훈련': {
    gradient: 'from-sage-400 to-sage-500',
    badge: 'bg-sage-100 text-sage-700',
    iconBg: 'bg-sage-50',
    iconColor: 'text-sage-500'
  }
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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          {/* 필터 */}
          <div className="card-floating p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                <Filter className="w-5 h-5 text-coral-600" />
              </div>
              <span className="font-serif text-xl font-bold text-brown-800">필터</span>
            </div>

            <div className="space-y-6">
              {/* 카테고리 필터 */}
              <div>
                <p className="text-sm text-brown-500 mb-3 font-medium">분류</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-coral-500 to-coral-400 text-white shadow-lg shadow-coral-500/25'
                          : 'bg-cream-100 text-brown-600 hover:bg-cream-200'
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 상태 필터 */}
              <div>
                <p className="text-sm text-brown-500 mb-3 font-medium">모집 상태</p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={cn(
                        'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                        selectedStatus === status
                          ? 'bg-gradient-to-r from-sage-500 to-sage-400 text-white shadow-lg shadow-sage-500/25'
                          : 'bg-cream-100 text-brown-600 hover:bg-cream-200'
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
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-coral-500" />
            <p className="text-brown-600">
              총 <span className="font-bold text-coral-600">{filteredPrograms.length}</span>개의 프로그램
            </p>
          </div>

          {/* 프로그램 목록 */}
          {filteredPrograms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => {
                const style = categoryStyles[program.category] || categoryStyles['자격증'];
                return (
                  <div
                    key={program.id}
                    className={cn(
                      'group bg-white rounded-3xl overflow-hidden',
                      'border-2 border-cream-200 hover:border-coral-200',
                      'shadow-lg hover:shadow-2xl transition-all duration-500',
                      'hover:-translate-y-2 animate-fade-in-up'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* 썸네일 */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={program.thumbnail}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-brown-800 mb-3 group-hover:text-coral-600 transition-colors line-clamp-1">
                        {program.title}
                      </h3>

                      <p className="text-brown-600 line-clamp-2 min-h-[48px] mb-4 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-3 text-sm mb-4">
                        <div className="flex items-center gap-3 text-brown-500">
                          <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', style.iconBg)}>
                            <Clock className={cn('w-4 h-4', style.iconColor)} />
                          </div>
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-brown-500">
                          <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', style.iconBg)}>
                            <Calendar className={cn('w-4 h-4', style.iconColor)} />
                          </div>
                          <span>{program.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 text-brown-500">
                          <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', style.iconBg)}>
                            <Users className={cn('w-4 h-4', style.iconColor)} />
                          </div>
                          <span>정원 {program.capacity}명 ({program.currentApplicants}명 신청)</span>
                        </div>
                      </div>

                      {/* 진행률 */}
                      <div className="mb-6">
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

                      <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                        <span className={cn(
                          'text-xl font-bold',
                          program.isFree ? 'text-sage-600' : 'text-brown-800'
                        )}>
                          {program.isFree ? '무료' : '유료'}
                        </span>
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
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-brown-400" />
              </div>
              <p className="text-brown-500 text-lg">해당 조건에 맞는 프로그램이 없습니다.</p>
            </div>
          )}

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
