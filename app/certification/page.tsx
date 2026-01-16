import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: '자격증안내',
  description: '여성단체에서 취득할 수 있는 민간자격증을 안내합니다.',
};

export default function CertificationPage() {
  return (
    <>
      <PageHeader
        title="자격증안내"
        description="취업과 창업에 도움이 되는 전문 자격증을 취득하세요."
        breadcrumbs={[{ label: '자격증안내' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* 자격증 목록 */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={cert.id} className="border-0 shadow-xl overflow-hidden">
                <div className={`h-2 ${index === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-teal-500 to-teal-600'}`} />
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* 썸네일 */}
                    <div className={`w-full lg:w-48 h-48 rounded-2xl flex items-center justify-center shrink-0 ${
                      index === 0 ? 'bg-gradient-to-br from-purple-100 to-purple-200' : 'bg-gradient-to-br from-teal-100 to-teal-200'
                    }`}>
                      <Award className={`w-20 h-20 ${index === 0 ? 'text-purple-500' : 'text-teal-500'}`} />
                    </div>

                    {/* 정보 */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h2 className="text-2xl font-bold text-gray-900">{cert.name}</h2>
                        <Badge variant="outline" className={index === 0 ? 'border-purple-300 text-purple-700' : 'border-teal-300 text-teal-700'}>
                          {cert.type === 'private' ? '민간자격' : '국가자격'}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Clock className={`w-5 h-5 ${index === 0 ? 'text-purple-500' : 'text-teal-500'}`} />
                          <div>
                            <p className="text-sm text-gray-500">교육기간</p>
                            <p className="font-medium">{cert.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className={`w-5 h-5 ${index === 0 ? 'text-purple-500' : 'text-teal-500'}`} />
                          <div>
                            <p className="text-sm text-gray-500">교육비</p>
                            <p className="font-medium">{cert.fee.toLocaleString()}원</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">교육대상</p>
                        <p className="text-gray-700">{cert.targetAudience}</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">취득 후 혜택</p>
                        <ul className="space-y-1">
                          {cert.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <Button asChild className={index === 0 ? 'bg-purple-600 hover:bg-purple-700' : 'bg-teal-600 hover:bg-teal-700'}>
                          <Link href="/programs/apply">
                            수강 신청
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/certification/process">
                            취득절차 보기
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 자격증 등록 정보 */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">자격증 등록 정보</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">등록기관:</span> 한국직업능력개발원
                </p>
                <p>
                  <span className="font-medium text-gray-900">자격관리:</span> 여성단체
                </p>
                <p>
                  <span className="font-medium text-gray-900">문의:</span> 000-0000-0000
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * 민간자격증은 한국직업능력개발원에 정식 등록된 자격으로, 관련 분야 취업 및 창업 시 전문성을 인정받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
