'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Leaf, Sparkles, Heart, Send } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { programs } from '@/data/programs';
import { cn } from '@/lib/utils';

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const programId = searchParams.get('program');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    motivation: '',
    programId: programId || '',
    agreePrivacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const recruitingPrograms = programs.filter(p => p.status === 'recruiting');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-20 animate-fade-in-up">
        <div className={cn(
          'w-24 h-24 rounded-3xl mx-auto mb-8',
          'bg-gradient-to-br from-sage-400 to-sage-500',
          'flex items-center justify-center shadow-xl shadow-sage-500/25'
        )}>
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-brown-800 mb-4">
          수강 신청이 완료되었습니다
        </h2>
        <p className="text-brown-600 mb-8 text-lg">
          담당자가 확인 후 연락드리겠습니다.<br />
          문의사항은 000-0000-0000으로 연락해주세요.
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
            <Link href="/programs">프로그램 목록</Link>
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
    );
  }

  return (
    <>
      <Link
        href="/programs"
        className="inline-flex items-center gap-2 text-brown-600 hover:text-coral-600 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        프로그램 목록으로
      </Link>

      <div className="card-floating p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 프로그램 선택 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
              신청 프로그램 <span className="text-coral-500">*</span>
            </label>
            <select
              value={formData.programId}
              onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
              required
              className={cn(
                'w-full px-5 py-4 rounded-2xl text-base',
                'border-2 border-cream-200 bg-white',
                'focus:ring-2 focus:ring-coral-500 focus:border-coral-300',
                'transition-all duration-300'
              )}
            >
              <option value="">프로그램을 선택해주세요</option>
              {recruitingPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.title} ({program.schedule})
                </option>
              ))}
            </select>
          </div>

          {/* 이름 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
              이름 <span className="text-coral-500">*</span>
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="이름을 입력해주세요"
              required
              className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
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

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
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

          {/* 생년월일 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
              생년월일 <span className="text-coral-500">*</span>
            </label>
            <Input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              required
              className="py-7 text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
            />
          </div>

          {/* 신청동기 */}
          <div>
            <label className="block text-sm font-medium text-brown-700 mb-3">
              신청 동기
            </label>
            <Textarea
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              placeholder="교육을 신청하시는 이유나 목표를 적어주세요"
              rows={4}
              className="text-base rounded-2xl border-2 border-cream-200 focus:border-coral-300 focus:ring-coral-500"
            />
          </div>

          {/* 개인정보 동의 */}
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
                <br />
                <span className="text-brown-500 mt-2 block">
                  수집항목: 이름, 연락처, 이메일, 생년월일<br />
                  이용목적: 수강신청 접수 및 안내<br />
                  보유기간: 교육 종료 후 1년
                </span>
              </span>
            </label>
          </div>

          {/* 제출 버튼 */}
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
            수강 신청하기
          </Button>
        </form>
      </div>

      {/* 안내 */}
      <div className={cn(
        'mt-10 rounded-3xl p-8',
        'bg-gradient-to-br from-coral-50 to-sage-50',
        'border-2 border-cream-200'
      )}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-coral-600" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brown-800">신청 안내</h3>
        </div>
        <ul className="space-y-3 text-brown-600">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
            <span>신청 후 담당자가 2~3일 내 연락드립니다.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
            <span>수강료는 확정 후 안내에 따라 납부해주세요.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
            <span>국민내일배움카드 사용자는 카드 사본을 준비해주세요.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
            <span>문의: 000-0000-0000</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        title="수강 신청"
        description="원하시는 프로그램을 선택하고 신청서를 작성해주세요."
        breadcrumbs={[
          { label: '교육프로그램', href: '/programs' },
          { label: '수강신청' }
        ]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/3 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-45" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={
              <div className="text-center py-20">
                <div className="w-12 h-12 rounded-full border-4 border-coral-200 border-t-coral-500 animate-spin mx-auto" />
              </div>
            }>
              <ApplyFormContent />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
