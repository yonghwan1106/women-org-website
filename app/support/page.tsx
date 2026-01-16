import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { supportPrograms } from '@/data/support';

export const metadata: Metadata = {
  title: '정부지원사업',
  description: '정부지원 교육 프로그램 및 취업 지원 사업 안내',
};

const statusLabels = {
  open: { text: '접수중', className: 'bg-green-100 text-green-700' },
  closed: { text: '마감', className: 'bg-gray-100 text-gray-600' },
  upcoming: { text: '예정', className: 'bg-blue-100 text-blue-700' }
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="정부지원사업"
        description="정부지원 프로그램을 통해 경제적 부담 없이 교육받으세요."
        breadcrumbs={[{ label: '정부지원사업' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 지원사업 목록 */}
            <div className="space-y-8">
              {supportPrograms.map((program, index) => (
                <Card key={program.id} className="border-0 shadow-xl overflow-hidden">
                  <div className={`h-2 ${
                    program.status === 'open' ? 'bg-green-500' :
                    program.status === 'upcoming' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`} />
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                      <Badge className={statusLabels[program.status].className}>
                        {statusLabels[program.status].text}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">지원 자격</h3>
                        <ul className="space-y-2">
                          {program.eligibility.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">지원 혜택</h3>
                        <ul className="space-y-2">
                          {program.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t">
                      <p className="text-sm text-gray-500">
                        신청기간: <span className="font-medium text-gray-700">{program.applicationPeriod}</span>
                      </p>
                      <div className="flex gap-3">
                        <Button asChild variant="outline">
                          <Link href="/support/how-to-apply">
                            신청방법 보기
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </Button>
                        {program.status === 'open' && (
                          <Button asChild className="bg-purple-600 hover:bg-purple-700">
                            <Link href="/contact">
                              상담 신청
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 관련 링크 */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">관련 사이트 바로가기</h3>
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
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-purple-600">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
