'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Mail, Clock, MapPin } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { SITE_CONFIG, INQUIRY_CATEGORIES } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    title: '',
    content: '',
    agreePrivacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <PageHeader
          title="상담문의"
          breadcrumbs={[{ label: '상담문의' }]}
        />
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                문의가 접수되었습니다
              </h2>
              <p className="text-gray-600 mb-8">
                담당자가 확인 후 빠른 시일 내에 답변드리겠습니다.<br />
                급한 문의는 전화({SITE_CONFIG.phone})로 연락해주세요.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/contact/faq">자주 묻는 질문</Link>
                </Button>
                <Button asChild>
                  <Link href="/">홈으로</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="상담문의"
        description="궁금한 점이 있으시면 언제든지 문의해주세요."
        breadcrumbs={[{ label: '상담문의' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 연락처 정보 */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-bold text-gray-900">연락처</h3>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">전화</p>
                        <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">이메일</p>
                        <p className="text-gray-600">{SITE_CONFIG.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">운영시간</p>
                        <p className="text-gray-600">{SITE_CONFIG.businessHours}</p>
                        <p className="text-sm text-gray-500">{SITE_CONFIG.closedDays}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">주소</p>
                        <p className="text-gray-600">{SITE_CONFIG.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Link
                  href="/contact/faq"
                  className="block bg-purple-50 rounded-xl p-4 hover:bg-purple-100 transition-colors"
                >
                  <p className="font-medium text-purple-700">자주 묻는 질문 (FAQ)</p>
                  <p className="text-sm text-purple-600">문의 전 FAQ를 확인해보세요</p>
                </Link>
              </div>

              {/* 문의 폼 */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">온라인 상담 신청</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            이름 <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="이름"
                            required
                            className="py-6"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            연락처 <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="010-0000-0000"
                            required
                            className="py-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="py-6"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          문의 유형 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">선택해주세요</option>
                          {INQUIRY_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          제목 <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="문의 제목"
                          required
                          className="py-6"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          문의 내용 <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="문의하실 내용을 자세히 작성해주세요"
                          rows={5}
                          required
                        />
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.agreePrivacy}
                            onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                            required
                            className="w-5 h-5 mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-600">
                            <span className="text-red-500">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                          </span>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700"
                      >
                        문의하기
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
