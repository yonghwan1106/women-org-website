'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Mail, Clock, MapPin, Leaf, Sparkles, Send, MessageCircle } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SITE_CONFIG, INQUIRY_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

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
        <section className="section-padding relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
          <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />

          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in-up">
              <div className={cn(
                'w-24 h-24 rounded-3xl mx-auto mb-8',
                'bg-gradient-to-br from-sage-400 to-sage-500',
                'flex items-center justify-center shadow-xl shadow-sage-500/25'
              )}>
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-brown-800 mb-4">
                문의가 접수되었습니다
              </h2>
              <p className="text-brown-600 mb-8 text-lg">
                담당자가 확인 후 빠른 시일 내에 답변드리겠습니다.<br />
                급한 문의는 전화({SITE_CONFIG.phone})로 연락해주세요.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6',
                    'bg-transparent border-2 border-coral-200 text-coral-600',
                    'hover:bg-coral-500 hover:text-white hover:border-coral-500',
                    'transition-all duration-300'
                  )}
                >
                  <Link href="/contact/faq">자주 묻는 질문</Link>
                </Button>
                <Button
                  asChild
                  className={cn(
                    'rounded-full px-8 py-6',
                    'bg-gradient-to-r from-coral-500 to-coral-400',
                    'hover:from-coral-600 hover:to-coral-500',
                    'shadow-lg shadow-coral-500/25'
                  )}
                >
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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 연락처 정보 */}
              <div className="lg:col-span-1 space-y-6">
                <div className="card-floating p-6 animate-fade-in-up">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-coral-600" />
                    </div>
                    <h3 className="font-serif font-bold text-brown-800">연락처</h3>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-coral-600" />
                      </div>
                      <div>
                        <p className="font-medium text-brown-800">전화</p>
                        <p className="text-brown-600">{SITE_CONFIG.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <p className="font-medium text-brown-800">이메일</p>
                        <p className="text-brown-600">{SITE_CONFIG.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-brown-800">운영시간</p>
                        <p className="text-brown-600">{SITE_CONFIG.businessHours}</p>
                        <p className="text-sm text-brown-500">{SITE_CONFIG.closedDays}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-coral-600" />
                      </div>
                      <div>
                        <p className="font-medium text-brown-800">주소</p>
                        <p className="text-brown-600">{SITE_CONFIG.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact/faq"
                  className={cn(
                    'block rounded-3xl p-6 animate-fade-in-up',
                    'bg-gradient-to-br from-coral-50 to-sage-50',
                    'border-2 border-cream-200',
                    'hover:shadow-lg transition-all duration-300 group'
                  )}
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-coral-600" />
                    <p className="font-medium text-coral-700">자주 묻는 질문 (FAQ)</p>
                  </div>
                  <p className="text-sm text-brown-600">문의 전 FAQ를 확인해보세요</p>
                </Link>
              </div>

              {/* 문의 폼 */}
              <div className="lg:col-span-2">
                <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                      <Send className="w-5 h-5 text-sage-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brown-800">온라인 상담 신청</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brown-700 mb-2">
                          이름 <span className="text-coral-500">*</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="이름"
                          required
                          className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brown-700 mb-2">
                          연락처 <span className="text-coral-500">*</span>
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="010-0000-0000"
                          required
                          className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        이메일
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        문의 유형 <span className="text-coral-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                        className={cn(
                          'w-full px-5 py-4 rounded-2xl text-base',
                          'border-2 border-cream-200 bg-white',
                          'focus:ring-2 focus:ring-coral-500 focus:border-coral-300',
                          'transition-all duration-300'
                        )}
                      >
                        <option value="">선택해주세요</option>
                        {INQUIRY_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        제목 <span className="text-coral-500">*</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="문의 제목"
                        required
                        className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        문의 내용 <span className="text-coral-500">*</span>
                      </label>
                      <Textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="문의하실 내용을 자세히 작성해주세요"
                        rows={5}
                        required
                        className="text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
                      />
                    </div>

                    <div className={cn(
                      'rounded-2xl p-6',
                      'bg-gradient-to-r from-cream-100 to-cream-200',
                      'border-2 border-cream-300'
                    )}>
                      <label className="flex items-start gap-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreePrivacy}
                          onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                          required
                          className="w-5 h-5 mt-0.5 rounded border-cream-300 text-coral-500 focus:ring-coral-500"
                        />
                        <span className="text-sm text-brown-600">
                          <span className="text-coral-500 font-medium">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className={cn(
                        'w-full py-7 text-lg rounded-2xl font-medium',
                        'bg-gradient-to-r from-coral-500 to-coral-400',
                        'hover:from-coral-600 hover:to-coral-500',
                        'shadow-xl shadow-coral-500/25 hover:shadow-coral-500/40',
                        'transition-all duration-300'
                      )}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      문의하기
                    </Button>
                  </form>
                </div>
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
