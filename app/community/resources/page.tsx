import { Metadata } from 'next';
import { FileText, Download, Calendar } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

const fileIcons: Record<string, string> = {
  PDF: 'bg-red-100 text-red-600',
  DOCX: 'bg-blue-100 text-blue-600',
  XLSX: 'bg-green-100 text-green-600',
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 테이블 헤더 */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b text-sm font-medium text-gray-500">
                <div className="col-span-6">파일명</div>
                <div className="col-span-2 text-center">형식</div>
                <div className="col-span-2 text-center">등록일</div>
                <div className="col-span-2 text-center">다운로드</div>
              </div>

              {/* 파일 목록 */}
              <div className="divide-y divide-gray-100">
                {resources.map((file) => (
                  <div key={file.id} className="grid md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-gray-50 transition-colors">
                    {/* 파일명 */}
                    <div className="md:col-span-6 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${fileIcons[file.type] || 'bg-gray-100 text-gray-600'} flex items-center justify-center shrink-0`}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{file.title}</p>
                        <div className="flex items-center gap-2 mt-1 md:hidden">
                          <Badge variant="outline" className="text-xs">
                            {file.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{file.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* 형식 */}
                    <div className="hidden md:flex md:col-span-2 justify-center">
                      <Badge variant="outline">{file.type}</Badge>
                    </div>

                    {/* 등록일 */}
                    <div className="hidden md:flex md:col-span-2 justify-center text-sm text-gray-500">
                      {file.date}
                    </div>

                    {/* 다운로드 */}
                    <div className="md:col-span-2 flex justify-end md:justify-center">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">다운로드</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 안내 문구 */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">이용 안내</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 자료는 교육 및 안내 목적으로만 사용해주세요.</li>
                <li>• 양식 작성 후 방문 또는 이메일로 제출해주세요.</li>
                <li>• 다운로드가 안 되는 경우 사무실(000-0000-0000)로 문의해주세요.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
