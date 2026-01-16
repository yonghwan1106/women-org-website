import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { notices, getNoticeById } from '@/data/notices';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = getNoticeById(id);

  if (!notice) {
    return { title: '공지사항을 찾을 수 없습니다' };
  }

  return {
    title: notice.title,
    description: notice.content.slice(0, 100),
  };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = getNoticeById(id);

  if (!notice) {
    notFound();
  }

  const currentIndex = notices.findIndex((n) => n.id === id);
  const prevNotice = currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null;
  const nextNotice = currentIndex > 0 ? notices[currentIndex - 1] : null;

  return (
    <>
      <PageHeader
        title="공지사항"
        breadcrumbs={[
          { label: '커뮤니티', href: '/community' },
          { label: '공지사항', href: '/community/notice' },
          { label: notice.title }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 뒤로가기 */}
            <Link
              href="/community/notice"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              목록으로
            </Link>

            {/* 게시글 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 헤더 */}
              <div className="p-6 md:p-8 border-b">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {notice.isImportant && (
                    <Badge className="bg-purple-100 text-purple-700">중요</Badge>
                  )}
                  <Badge variant="outline">{notice.category}</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {notice.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {notice.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    조회 {notice.views}
                  </span>
                </div>
              </div>

              {/* 본문 */}
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {notice.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            {/* 이전/다음 글 */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden divide-y">
              {nextNotice && (
                <Link
                  href={`/community/notice/${nextNotice.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500 shrink-0">다음 글</span>
                  <span className="text-gray-900 truncate">{nextNotice.title}</span>
                </Link>
              )}
              {prevNotice && (
                <Link
                  href={`/community/notice/${prevNotice.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500 shrink-0">이전 글</span>
                  <span className="text-gray-900 truncate">{prevNotice.title}</span>
                </Link>
              )}
            </div>

            {/* 목록 버튼 */}
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/community/notice">목록으로</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
