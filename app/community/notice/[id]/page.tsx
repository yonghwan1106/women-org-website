import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Eye, ChevronLeft, ChevronRight, Leaf, Bell } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { notices, getNoticeById } from '@/data/notices';
import { cn } from '@/lib/utils';

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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 right-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 -rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            {/* 뒤로가기 */}
            <Link
              href="/community/notice"
              className="inline-flex items-center gap-2 text-brown-600 hover:text-coral-600 mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              목록으로
            </Link>

            {/* 게시글 */}
            <article className="card-floating overflow-hidden animate-fade-in-up">
              {/* 헤더 */}
              <div className="p-6 md:p-8 border-b-2 border-cream-200">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {notice.isImportant && (
                    <Badge className="bg-coral-100 text-coral-700 border-coral-200">
                      <Bell className="w-3 h-3 mr-1" />
                      중요
                    </Badge>
                  )}
                  <Badge className="bg-cream-100 text-brown-600 border-cream-200">
                    {notice.category}
                  </Badge>
                </div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-brown-800 mb-4">
                  {notice.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-brown-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {notice.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    조회 {notice.views}
                  </span>
                </div>
              </div>

              {/* 본문 */}
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {notice.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-brown-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            {/* 이전/다음 글 */}
            <div className="mt-6 card-floating overflow-hidden divide-y divide-cream-200 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {nextNotice && (
                <Link
                  href={`/community/notice/${nextNotice.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-cream-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-coral-100 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-coral-600" />
                  </div>
                  <span className="text-sm text-brown-500 shrink-0 font-medium">다음 글</span>
                  <span className="text-brown-800 truncate group-hover:text-coral-600 transition-colors">
                    {nextNotice.title}
                  </span>
                </Link>
              )}
              {prevNotice && (
                <Link
                  href={`/community/notice/${prevNotice.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-cream-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-sage-600" />
                  </div>
                  <span className="text-sm text-brown-500 shrink-0 font-medium">이전 글</span>
                  <span className="text-brown-800 truncate group-hover:text-coral-600 transition-colors">
                    {prevNotice.title}
                  </span>
                </Link>
              )}
            </div>

            {/* 목록 버튼 */}
            <div className="mt-8 text-center">
              <Button
                asChild
                className={cn(
                  'rounded-full px-8 py-6 font-medium',
                  'bg-transparent border-2 border-coral-200 text-coral-600',
                  'hover:bg-coral-500 hover:text-white hover:border-coral-500',
                  'transition-all duration-300'
                )}
              >
                <Link href="/community/notice">목록으로</Link>
              </Button>
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
