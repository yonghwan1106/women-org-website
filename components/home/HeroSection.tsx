'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Leaf, Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Organic Background */}
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/90 to-sage-50/80 z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Women collaborating in a bright workshop"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-brown-800/5 border border-coral-100 mb-10 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-coral-700">2026년 상반기 수강생 모집중</span>
              <Heart className="w-3 h-3 text-coral-400 fill-coral-400" />
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brown-800 mb-8 leading-[1.15] animate-fade-in-up delay-100">
              <span className="text-gradient-warm">여성의 꿈</span>을 위한
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">교육 파트너</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 bg-gradient-to-r from-coral-200 to-sage-200 -z-0 rounded-full opacity-60"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-brown-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
              다양한 교육 프로그램과 자격증 취득 지원으로
              <br className="hidden sm:block" />
              <span className="text-coral-600 font-medium">여성의 자립과 성장</span>을 함께합니다
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-600 hover:to-coral-500 text-white text-lg px-10 py-7 rounded-full shadow-xl shadow-coral-500/30 hover:shadow-coral-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/programs">
                  프로그램 둘러보기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 rounded-full border-2 border-sage-300 text-sage-700 hover:bg-sage-50 hover:border-sage-400 transition-all duration-300"
              >
                <Link href="/contact">
                  상담 신청하기
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in-up delay-500">
              <div className="text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-coral-500 mb-2 group-hover:scale-110 transition-transform">
                    300<span className="text-2xl">+</span>
                  </div>
                  <div className="absolute -inset-4 bg-coral-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="text-sm md:text-base text-brown-500 font-medium">연간 수료생</div>
              </div>
              <div className="text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-sage-500 mb-2 group-hover:scale-110 transition-transform">
                    15<span className="text-2xl">+</span>
                  </div>
                  <div className="absolute -inset-4 bg-sage-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="text-sm md:text-base text-brown-500 font-medium">교육 과정</div>
              </div>
              <div className="text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-coral-500 mb-2 group-hover:scale-110 transition-transform">
                    98<span className="text-2xl">%</span>
                  </div>
                  <div className="absolute -inset-4 bg-coral-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="text-sm md:text-base text-brown-500 font-medium">수료 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 100V60C120 80 240 90 360 85C480 80 600 60 720 50C840 40 960 40 1080 50C1200 60 1320 80 1380 85L1440 90V100H0Z"
            fill="#faf8f3"
          />
        </svg>
      </div>
    </section>
  );
}
