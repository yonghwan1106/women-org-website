'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';

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
    // 실제로는 API 호출
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          수강 신청이 완료되었습니다
        </h2>
        <p className="text-gray-600 mb-8">
          담당자가 확인 후 연락드리겠습니다.<br />
          문의사항은 000-0000-0000으로 연락해주세요.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/programs">프로그램 목록</Link>
          </Button>
          <Button asChild>
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
        className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        프로그램 목록으로
      </Link>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 프로그램 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                신청 프로그램 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.programId}
                onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="이름을 입력해주세요"
                required
                className="py-6 text-base"
              />
            </div>

            {/* 연락처 */}
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
                className="py-6 text-base"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                className="py-6 text-base"
              />
            </div>

            {/* 생년월일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                생년월일 <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                required
                className="py-6 text-base"
              />
            </div>

            {/* 신청동기 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                신청 동기
              </label>
              <Textarea
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="교육을 신청하시는 이유나 목표를 적어주세요"
                rows={4}
                className="text-base"
              />
            </div>

            {/* 개인정보 동의 */}
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
                  <br />
                  <span className="text-gray-500">
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
              className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700"
            >
              수강 신청하기
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* 안내 */}
      <div className="mt-8 bg-purple-50 rounded-2xl p-6">
        <h3 className="font-bold text-purple-800 mb-3">신청 안내</h3>
        <ul className="space-y-2 text-purple-700 text-sm">
          <li>• 신청 후 담당자가 2~3일 내 연락드립니다.</li>
          <li>• 수강료는 확정 후 안내에 따라 납부해주세요.</li>
          <li>• 국민내일배움카드 사용자는 카드 사본을 준비해주세요.</li>
          <li>• 문의: 000-0000-0000</li>
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={<div className="text-center py-16">로딩 중...</div>}>
              <ApplyFormContent />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
