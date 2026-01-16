import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ExternalLink, Leaf, Sparkles, HandHeart } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supportPrograms } from '@/data/support';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '정부지원사업',
  description: '정부지원 교육 프로그램 및 취업 지원 사업 안내',
};

const statusLabels = {
  open: { text: '접수중', className: 'bg-sage-100 text-sage-700 border-sage-200' },
  closed: { text: '마감', className: 'bg-cream-200 text-brown-500 border-cream-300' },
  upcoming: { text: '예정', className: 'bg-amber-100 text-amber-700 border-amber-200' }
};

const statusGradients = {
  open: 'from-sage-400 to-sage-500',
  closed: 'from-brown-300 to-brown-400',
  upcoming: 'from-amber-400 to-amber-500'
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="정부지원사업"
        description="정부지원 프로그램을 통해 경제적 부담 없이 교육받으세요."
        breadcrumbs={[{ label: '정부지원사업' }]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            {/* 지원사업 목록 */}
            <div className="space-y-8">
              {supportPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="card-floating overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Top Gradient Bar */}
                  <div className={cn(
                    'h-2 bg-gradient-to-r',
                    statusGradients[program.status]
                  )} />

                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h2 className="font-serif text-2xl font-bold text-brown-800">{program.title}</h2>
                      <Badge className={cn(statusLabels[program.status].className, 'py-1.5 px-4')}>
                        <Sparkles className="w-3 h-3 mr-1.5" />
                        {statusLabels[program.status].text}
                      </Badge>
                    </div>

                    <p className="text-brown-600 mb-6 leading-relaxed text-lg">
                      {program.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="font-bold text-brown-800 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sage-400" />
                          지원 자격
                        </h3>
                        <ul className="space-y-3">
                          {program.eligibility.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-brown-600">
                              <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-sage-600" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-brown-800 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-coral-400" />
                          지원 혜택
                        </h3>
                        <ul className="space-y-3">
                          {program.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-brown-600">
                              <div className="w-5 h-5 rounded-full bg-coral-100 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-coral-600" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-cream-200">
                      <p className="text-brown-500">
                        신청기간: <span className="font-medium text-brown-700">{program.applicationPeriod}</span>
                      </p>
                      <div className="flex gap-3">
                        <Button
                          asChild
                          className={cn(
                            'rounded-full px-6 py-5 font-medium',
                            'bg-transparent border-2 border-sage-200 text-sage-600',
                            'hover:bg-sage-500 hover:text-white hover:border-sage-500',
                            'transition-all duration-300'
                          )}
                        >
                          <Link href="/support/how-to-apply">
                            신청방법 보기
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                        {program.status === 'open' && (
                          <Button
                            asChild
                            className={cn(
                              'rounded-full px-6 py-5 font-medium',
                              'bg-gradient-to-r from-coral-500 to-coral-400',
                              'hover:from-coral-600 hover:to-coral-500',
                              'shadow-lg shadow-coral-500/25',
                              'transition-all duration-300'
                            )}
                          >
                            <Link href="/contact">
                              상담 신청
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 관련 링크 */}
            <div className={cn(
              'mt-12 rounded-3xl p-8',
              'bg-gradient-to-r from-cream-100 to-cream-200',
              'border-2 border-cream-300'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                  <HandHeart className="w-5 h-5 text-sage-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">관련 사이트 바로가기</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'HRD-Net (직업훈련포털)', url: 'https://www.hrd.go.kr' },
                  { name: '고용24', url: 'https://www.work24.go.kr' },
                  { name: '여성새로일하기센터', url: 'https://www.saeil.mogef.go.kr' },
                  { name: '국민내일배움카드', url: 'https://www.hrd.go.kr' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-between p-4 rounded-2xl',
                      'bg-white border-2 border-cream-200',
                      'hover:border-coral-200 hover:shadow-lg',
                      'transition-all duration-300 group'
                    )}
                  >
                    <span className="font-medium text-brown-700 group-hover:text-coral-600 transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-brown-400 group-hover:text-coral-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Decorative */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
              <div className="w-3 h-3 rounded-full bg-sage-400" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
