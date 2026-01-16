import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Eye, Leaf, Sparkles, Bell } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Badge } from '@/components/ui/badge';
import { notices } from '@/data/notices';
import { cn } from '@/lib/utils';

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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <div className="card-floating overflow-hidden animate-fade-in-up">
              {/* 테이블 헤더 */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gradient-to-r from-cream-100 to-cream-200 border-b-2 border-cream-300 text-sm font-medium text-brown-600">
                <div className="col-span-1 text-center">번호</div>
                <div className="col-span-7">제목</div>
                <div className="col-span-2 text-center">작성일</div>
                <div className="col-span-2 text-center">조회수</div>
              </div>

              {/* 목록 */}
              <div className="divide-y divide-cream-200">
                {notices.map((notice, index) => (
                  <Link
                    key={notice.id}
                    href={`/community/notice/${notice.id}`}
                    className="block hover:bg-cream-50 transition-colors group"
                  >
                    <div className="grid md:grid-cols-12 gap-4 px-6 py-5 items-center">
                      {/* 번호 */}
                      <div className="hidden md:block md:col-span-1 text-center text-brown-500">
                        {notices.length - index}
                      </div>

                      {/* 제목 */}
                      <div className="md:col-span-7">
                        <div className="flex items-center gap-2 flex-wrap">
                          {notice.isImportant && (
                            <Badge className="bg-coral-100 text-coral-700 border-coral-200 shrink-0">
                              <Bell className="w-3 h-3 mr-1" />
                              중요
                            </Badge>
                          )}
                          <Badge className="bg-cream-100 text-brown-600 border-cream-200 shrink-0">
                            {notice.category}
                          </Badge>
                          <span className="font-medium text-brown-800 group-hover:text-coral-600 transition-colors line-clamp-1">
                            {notice.title}
                          </span>
                        </div>
                      </div>

                      {/* 작성일 */}
                      <div className="md:col-span-2 text-center">
                        <span className="flex items-center justify-center md:justify-center gap-1 text-sm text-brown-500">
                          <Calendar className="w-4 h-4 md:hidden" />
                          {notice.date}
                        </span>
                      </div>

                      {/* 조회수 */}
                      <div className="md:col-span-2 text-center">
                        <span className="flex items-center justify-center md:justify-center gap-1 text-sm text-brown-500">
                          <Eye className="w-4 h-4 md:hidden" />
                          {notice.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center gap-2 mt-8">
              {[1].map((page) => (
                <button
                  key={page}
                  className={cn(
                    'w-10 h-10 rounded-xl font-medium transition-all duration-300',
                    'bg-gradient-to-r from-coral-500 to-coral-400 text-white',
                    'shadow-lg shadow-coral-500/25'
                  )}
                >
                  {page}
                </button>
              ))}
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
