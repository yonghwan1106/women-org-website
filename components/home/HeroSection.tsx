'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-60 h-60 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      {/* 패턴 오버레이 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* 뱃지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-purple-100 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">2026년 상반기 수강생 모집중</span>
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">여성의 꿈</span>을 위한
              <br />
              <span className="relative">
                <span className="relative z-10">교육 파트너</span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-purple-200/50 -z-0 rounded"></span>
              </span>
            </h1>

            {/* 서브 타이틀 */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              다양한 교육 프로그램과 자격증 취득 지원으로
              <br className="hidden sm:block" />
              여성의 자립과 성장을 함께합니다
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all">
                <Link href="/programs">
                  프로그램 둘러보기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50">
                <Link href="/contact">
                  상담 신청하기
                </Link>
              </Button>
            </div>

            {/* 통계 */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-purple-100 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">300+</div>
                <div className="text-sm md:text-base text-gray-500">연간 수료생</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">15+</div>
                <div className="text-sm md:text-base text-gray-500">교육 과정</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">98%</div>
                <div className="text-sm md:text-base text-gray-500">수료 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 곡선 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
