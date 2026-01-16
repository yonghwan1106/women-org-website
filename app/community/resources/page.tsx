import { Metadata } from 'next';
import { FileText, Download, Leaf, Sparkles, FolderOpen } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '자료실',
  description: '여성단체 교육자료 및 문서 다운로드',
};

const resources = [
  {
    id: 1,
    title: '2026년 상반기 교육 프로그램 안내서',
    type: 'PDF',
    size: '2.5MB',
    date: '2026-01-10',
    category: '교육자료'
  },
  {
    id: 2,
    title: '수족관리사 자격증 안내 브로슈어',
    type: 'PDF',
    size: '1.8MB',
    date: '2025-12-15',
    category: '자격증'
  },
  {
    id: 3,
    title: '국민내일배움카드 신청 가이드',
    type: 'PDF',
    size: '3.2MB',
    date: '2025-11-20',
    category: '지원사업'
  },
  {
    id: 4,
    title: '수강신청서 양식',
    type: 'DOCX',
    size: '45KB',
    date: '2025-10-05',
    category: '양식'
  },
  {
    id: 5,
    title: '개인정보 수집 및 이용 동의서',
    type: 'PDF',
    size: '120KB',
    date: '2025-09-01',
    category: '양식'
  }
];

const fileIcons: Record<string, { bg: string; text: string }> = {
  PDF: { bg: 'bg-coral-100', text: 'text-coral-600' },
  DOCX: { bg: 'bg-sage-100', text: 'text-sage-600' },
  XLSX: { bg: 'bg-amber-100', text: 'text-amber-600' },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="자료실"
        description="교육 관련 자료 및 양식을 다운로드 받으세요."
        breadcrumbs={[
          { label: '커뮤니티', href: '/community' },
          { label: '자료실' }
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
          <div className="max-w-4xl mx-auto">
            {/* 헤더 */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-full mb-4">
                <FolderOpen className="w-4 h-4 text-sage-500" />
                <span className="text-sm font-medium text-sage-700">RESOURCES</span>
              </div>
            </div>

            <div className="card-floating overflow-hidden animate-fade-in-up">
              {/* 테이블 헤더 */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gradient-to-r from-cream-100 to-cream-200 border-b-2 border-cream-300 text-sm font-medium text-brown-600">
                <div className="col-span-6">파일명</div>
                <div className="col-span-2 text-center">형식</div>
                <div className="col-span-2 text-center">등록일</div>
                <div className="col-span-2 text-center">다운로드</div>
              </div>

              {/* 파일 목록 */}
              <div className="divide-y divide-cream-200">
                {resources.map((file, index) => {
                  const iconStyle = fileIcons[file.type] || fileIcons['PDF'];
                  return (
                    <div
                      key={file.id}
                      className={cn(
                        'grid md:grid-cols-12 gap-4 px-6 py-5 items-center',
                        'hover:bg-cream-50 transition-colors group'
                      )}
                    >
                      {/* 파일명 */}
                      <div className="md:col-span-6 flex items-center gap-4">
                        <div className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                          'group-hover:scale-110 transition-transform duration-300',
                          iconStyle.bg
                        )}>
                          <FileText className={cn('w-6 h-6', iconStyle.text)} />
                        </div>
                        <div>
                          <p className="font-medium text-brown-800 group-hover:text-coral-600 transition-colors">
                            {file.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1 md:hidden">
                            <Badge className="bg-cream-100 text-brown-600 border-cream-200 text-xs">
                              {file.type}
                            </Badge>
                            <span className="text-xs text-brown-500">{file.size}</span>
                          </div>
                        </div>
                      </div>

                      {/* 형식 */}
                      <div className="hidden md:flex md:col-span-2 justify-center">
                        <Badge className={cn(iconStyle.bg, iconStyle.text, 'border-0')}>
                          {file.type}
                        </Badge>
                      </div>

                      {/* 등록일 */}
                      <div className="hidden md:flex md:col-span-2 justify-center text-sm text-brown-500">
                        {file.date}
                      </div>

                      {/* 다운로드 */}
                      <div className="md:col-span-2 flex justify-end md:justify-center">
                        <Button
                          className={cn(
                            'rounded-full px-4 py-2 gap-2',
                            'bg-transparent border-2 border-coral-200 text-coral-600',
                            'hover:bg-coral-500 hover:text-white hover:border-coral-500',
                            'transition-all duration-300'
                          )}
                        >
                          <Download className="w-4 h-4" />
                          <span className="hidden sm:inline">다운로드</span>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 안내 문구 */}
            <div className={cn(
              'mt-8 rounded-3xl p-8',
              'bg-gradient-to-r from-cream-100 to-cream-200',
              'border-2 border-cream-300',
              'animate-fade-in-up'
            )} style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-bold text-brown-800">이용 안내</h3>
              </div>
              <ul className="space-y-2 text-brown-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                  <span>자료는 교육 및 안내 목적으로만 사용해주세요.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                  <span>양식 작성 후 방문 또는 이메일로 제출해주세요.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>다운로드가 안 되는 경우 사무실(000-0000-0000)로 문의해주세요.</span>
                </li>
              </ul>
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
