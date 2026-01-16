import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Eye } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Badge } from '@/components/ui/badge';
import { notices } from '@/data/notices';

export const metadata: Metadata = {
  title: '공지사항',
  description: '여성단체 공지사항',
};

export default function NoticePage() {
  return (
    <>
      <PageHeader
        title="공지사항"
        description="여성단체의 새로운 소식을 확인하세요."
        breadcrumbs={[
          { label: '커뮤니티', href: '/community' },
          { label: '공지사항' }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 테이블 헤더 */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b text-sm font-medium text-gray-500">
                <div className="col-span-1 text-center">번호</div>
                <div className="col-span-7">제목</div>
                <div className="col-span-2 text-center">작성일</div>
                <div className="col-span-2 text-center">조회수</div>
              </div>

              {/* 목록 */}
              <div className="divide-y divide-gray-100">
                {notices.map((notice, index) => (
                  <Link
                    key={notice.id}
                    href={`/community/notice/${notice.id}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid md:grid-cols-12 gap-4 px-6 py-5 items-center">
                      {/* 번호 */}
                      <div className="hidden md:block md:col-span-1 text-center text-gray-500">
                        {notices.length - index}
                      </div>

                      {/* 제목 */}
                      <div className="md:col-span-7">
                        <div className="flex items-center gap-2">
                          {notice.isImportant && (
                            <Badge className="bg-purple-100 text-purple-700 shrink-0">
                              중요
                            </Badge>
                          )}
                          <Badge variant="outline" className="shrink-0">
                            {notice.category}
                          </Badge>
                          <span className="font-medium text-gray-900 hover:text-purple-600 transition-colors line-clamp-1">
                            {notice.title}
                          </span>
                        </div>
                      </div>

                      {/* 작성일 */}
                      <div className="md:col-span-2 text-center">
                        <span className="flex items-center justify-center md:justify-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4 md:hidden" />
                          {notice.date}
                        </span>
                      </div>

                      {/* 조회수 */}
                      <div className="md:col-span-2 text-center">
                        <span className="flex items-center justify-center md:justify-center gap-1 text-sm text-gray-500">
                          <Eye className="w-4 h-4 md:hidden" />
                          {notice.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 페이지네이션 (더미) */}
            <div className="flex justify-center gap-2 mt-8">
              {[1].map((page) => (
                <button
                  key={page}
                  className="w-10 h-10 rounded-lg bg-purple-600 text-white font-medium"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
