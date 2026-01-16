import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description: '여성단체 자주 묻는 질문 FAQ',
};

const categories = ['전체', '교육', '자격증', '지원사업', '일반'] as const;

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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* FAQ 목록 */}
            <div className="space-y-8">
              {Object.entries(groupedFaqs).map(([category, items]) => (
                items.length > 0 && (
                  <div key={category}>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {category}
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <Accordion type="single" collapsible className="divide-y">
                        {items.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id} className="border-0">
                            <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 text-left text-base font-medium">
                              <span className="pr-4">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* 추가 문의 안내 */}
            <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                원하시는 답변을 찾지 못하셨나요?
              </h3>
              <p className="text-purple-600 mb-6">
                전화 또는 온라인 문의를 통해 더 자세한 상담을 받으실 수 있습니다.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">
                    온라인 문의하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100">
                  <a href="tel:000-0000-0000">
                    전화 상담
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
