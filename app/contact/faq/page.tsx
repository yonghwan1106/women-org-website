import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Leaf, HelpCircle, Phone } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faq';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description: '여성단체 자주 묻는 질문 FAQ',
};

const categoryStyles: Record<string, { bg: string; text: string; dot: string }> = {
  '교육': { bg: 'bg-coral-50', text: 'text-coral-700', dot: 'bg-coral-400' },
  '자격증': { bg: 'bg-sage-50', text: 'text-sage-700', dot: 'bg-sage-400' },
  '지원사업': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-400' },
  '일반': { bg: 'bg-cream-100', text: 'text-brown-700', dot: 'bg-brown-400' },
};

export default function FAQPage() {
  const groupedFaqs = {
    교육: faqs.filter(f => f.category === '교육'),
    자격증: faqs.filter(f => f.category === '자격증'),
    지원사업: faqs.filter(f => f.category === '지원사업'),
    일반: faqs.filter(f => f.category === '일반'),
  };

  return (
    <>
      <PageHeader
        title="자주 묻는 질문"
        description="자주 묻는 질문들을 모았습니다."
        breadcrumbs={[
          { label: '상담문의', href: '/contact' },
          { label: '자주 묻는 질문' }
        ]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 right-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 -rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto">
            {/* 헤더 */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
                <HelpCircle className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-coral-700">FAQ</span>
              </div>
            </div>

            {/* FAQ 목록 */}
            <div className="space-y-8">
              {Object.entries(groupedFaqs).map(([category, items], categoryIndex) => {
                const style = categoryStyles[category] || categoryStyles['일반'];
                return (
                  items.length > 0 && (
                    <div
                      key={category}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${categoryIndex * 100}ms` }}
                    >
                      <h2 className="font-serif text-xl font-bold text-brown-800 mb-4 flex items-center gap-3">
                        <span className={cn('w-3 h-3 rounded-full', style.dot)} />
                        {category}
                      </h2>
                      <div className="card-floating overflow-hidden">
                        <Accordion type="single" collapsible className="divide-y divide-cream-200">
                          {items.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border-0">
                              <AccordionTrigger className={cn(
                                'px-6 py-5 text-left text-base font-medium',
                                'hover:bg-cream-50 transition-colors',
                                'text-brown-800 hover:text-coral-600'
                              )}>
                                <span className="pr-4">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-5 text-brown-600 leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  )
                );
              })}
            </div>

            {/* 추가 문의 안내 */}
            <div className={cn(
              'mt-12 rounded-3xl p-8 text-center',
              'bg-gradient-to-br from-coral-50 to-sage-50',
              'border-2 border-cream-200',
              'animate-fade-in-up'
            )} style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-coral-100 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-800 mb-4">
                원하시는 답변을 찾지 못하셨나요?
              </h3>
              <p className="text-brown-600 mb-6">
                전화 또는 온라인 문의를 통해 더 자세한 상담을 받으실 수 있습니다.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6 font-medium',
                    'bg-gradient-to-r from-coral-500 to-coral-400',
                    'hover:from-coral-600 hover:to-coral-500',
                    'shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40',
                    'transition-all duration-300'
                  )}
                >
                  <Link href="/contact">
                    온라인 문의하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6 font-medium',
                    'bg-transparent border-2 border-sage-200 text-sage-600',
                    'hover:bg-sage-500 hover:text-white hover:border-sage-500',
                    'transition-all duration-300'
                  )}
                >
                  <a href="tel:000-0000-0000">
                    <Phone className="w-4 h-4 mr-2" />
                    전화 상담
                  </a>
                </Button>
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
