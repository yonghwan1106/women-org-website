import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Clock, Users, CheckCircle, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/certifications';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '자격증안내',
  description: '여성단체에서 취득할 수 있는 민간자격증을 안내합니다.',
};

const certStyles = [
  {
    gradient: 'from-coral-400 to-coral-500',
    bg: 'bg-coral-50',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600',
    badgeBg: 'bg-coral-100 text-coral-700 border-coral-200',
    accentColor: 'bg-coral-400'
  },
  {
    gradient: 'from-sage-400 to-sage-500',
    bg: 'bg-sage-50',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
    badgeBg: 'bg-sage-100 text-sage-700 border-sage-200',
    accentColor: 'bg-sage-400'
  }
];

export default function CertificationPage() {
  return (
    <>
      <PageHeader
        title="자격증안내"
        description="취업과 창업에 도움이 되는 전문 자격증을 취득하세요."
        breadcrumbs={[{ label: '자격증안내' }]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          {/* 자격증 목록 */}
          <div className="space-y-10 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const style = certStyles[index % certStyles.length];
              return (
                <div
                  key={cert.id}
                  className={cn(
                    'card-floating overflow-hidden animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Top Gradient Bar */}
                  <div className={cn('h-2 bg-gradient-to-r', style.gradient)} />

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* 썸네일 */}
                      <div className={cn(
                        'w-full lg:w-52 h-52 rounded-3xl shrink-0 relative overflow-hidden group'
                      )}>
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* 정보 */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h2 className="font-serif text-2xl font-bold text-brown-800">{cert.name}</h2>
                          <Badge className={cn(style.badgeBg, 'py-1 px-3')}>
                            <Sparkles className="w-3 h-3 mr-1" />
                            {cert.type === 'private' ? '민간자격' : '국가자격'}
                          </Badge>
                        </div>

                        <p className="text-brown-600 mb-6 leading-relaxed text-lg">
                          {cert.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-4 group">
                            <div className={cn(
                              'w-12 h-12 rounded-xl flex items-center justify-center',
                              'group-hover:scale-110 transition-transform',
                              style.iconBg
                            )}>
                              <Clock className={cn('w-6 h-6', style.iconColor)} />
                            </div>
                            <div>
                              <p className="text-sm text-brown-500">교육기간</p>
                              <p className="font-medium text-brown-800">{cert.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                            <div className={cn(
                              'w-12 h-12 rounded-xl flex items-center justify-center',
                              'group-hover:scale-110 transition-transform',
                              style.iconBg
                            )}>
                              <Users className={cn('w-6 h-6', style.iconColor)} />
                            </div>
                            <div>
                              <p className="text-sm text-brown-500">교육비</p>
                              <p className="font-medium text-brown-800">{cert.fee.toLocaleString()}원</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-brown-500 mb-2 font-medium">교육대상</p>
                          <p className="text-brown-700">{cert.targetAudience}</p>
                        </div>

                        <div className="mb-8">
                          <p className="text-sm text-brown-500 mb-3 font-medium">취득 후 혜택</p>
                          <ul className="space-y-2">
                            {cert.benefits.slice(0, 3).map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3 text-brown-700">
                                <div className={cn('w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5', style.iconBg)}>
                                  <CheckCircle className={cn('w-3.5 h-3.5', style.iconColor)} />
                                </div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Button
                            asChild
                            className={cn(
                              'rounded-full px-8 py-6 font-medium',
                              'bg-gradient-to-r shadow-lg',
                              style.gradient,
                              'hover:shadow-xl transition-all duration-300'
                            )}
                          >
                            <Link href="/programs/apply">
                              수강 신청
                            </Link>
                          </Button>
                          <Button
                            asChild
                            className={cn(
                              'rounded-full px-8 py-6 font-medium',
                              'bg-transparent border-2 border-coral-200 text-coral-600',
                              'hover:bg-coral-500 hover:text-white hover:border-coral-500',
                              'transition-all duration-300'
                            )}
                          >
                            <Link href="/certification/process">
                              취득절차 보기
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 자격증 등록 정보 */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className={cn(
              'rounded-3xl p-8',
              'bg-gradient-to-r from-cream-100 to-cream-200',
              'border-2 border-cream-300'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">자격증 등록 정보</h3>
              </div>
              <div className="space-y-3 text-brown-600">
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                  <span><span className="font-medium text-brown-800">등록기관:</span> 한국직업능력개발원</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                  <span><span className="font-medium text-brown-800">자격관리:</span> 여성단체</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><span className="font-medium text-brown-800">문의:</span> 000-0000-0000</span>
                </p>
              </div>
              <p className="mt-6 text-sm text-brown-500">
                * 민간자격증은 한국직업능력개발원에 정식 등록된 자격으로, 관련 분야 취업 및 창업 시 전문성을 인정받을 수 있습니다.
              </p>
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
