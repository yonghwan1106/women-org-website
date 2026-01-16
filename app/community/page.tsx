import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, ImageIcon, FileText, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { notices } from '@/data/notices';
import { galleryItems } from '@/data/gallery';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '커뮤니티',
  description: '여성단체 소식과 활동을 확인하세요.',
};

const communityLinks = [
  {
    title: '공지사항',
    description: '여성단체의 새로운 소식과 공지를 확인하세요.',
    icon: Bell,
    href: '/community/notice',
    gradient: 'from-coral-400 to-coral-500',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600',
  },
  {
    title: '갤러리',
    description: '교육 및 행사 활동 사진을 감상하세요.',
    icon: ImageIcon,
    href: '/community/gallery',
    gradient: 'from-sage-400 to-sage-500',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
  },
  {
    title: '자료실',
    description: '교육 자료 및 양식을 다운로드하세요.',
    icon: FileText,
    href: '/community/resources',
    gradient: 'from-amber-400 to-amber-500',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export default function CommunityPage() {
  const recentNotices = notices.slice(0, 3);
  const recentGallery = galleryItems.slice(0, 4);

  return (
    <>
      <PageHeader
        title="커뮤니티"
        description="여성단체의 소식과 활동을 확인하세요."
        breadcrumbs={[{ label: '커뮤니티' }]}
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 left-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
        </div>

        <div className="container-custom relative">
          {/* 메뉴 카드 */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {communityLinks.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  'group card-floating p-8 text-center',
                  'hover:-translate-y-2 transition-all duration-500',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  'w-16 h-16 rounded-2xl mx-auto mb-6',
                  'flex items-center justify-center',
                  'group-hover:scale-110 transition-transform duration-300',
                  item.iconBg
                )}>
                  <item.icon className={cn('w-8 h-8', item.iconColor)} />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800 mb-3 group-hover:text-coral-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-brown-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <span className={cn(
                  'inline-flex items-center gap-2 text-sm font-medium',
                  item.iconColor
                )}>
                  바로가기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* 최근 공지사항 */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-coral-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">최근 공지사항</h2>
              </div>
              <Button
                asChild
                variant="ghost"
                className="text-coral-600 hover:text-coral-700 hover:bg-coral-50"
              >
                <Link href="/community/notice">
                  더보기
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="card-floating overflow-hidden">
              <div className="divide-y divide-cream-200">
                {recentNotices.map((notice) => (
                  <Link
                    key={notice.id}
                    href={`/community/notice/${notice.id}`}
                    className="flex items-center justify-between px-6 py-4 hover:bg-cream-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      {notice.isImportant && (
                        <span className="px-2 py-1 bg-coral-100 text-coral-700 text-xs font-medium rounded-full">
                          중요
                        </span>
                      )}
                      <span className="font-medium text-brown-800 group-hover:text-coral-600 transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <span className="text-sm text-brown-500">{notice.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 최근 갤러리 */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-sage-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-brown-800">최근 갤러리</h2>
              </div>
              <Button
                asChild
                variant="ghost"
                className="text-sage-600 hover:text-sage-700 hover:bg-sage-50"
              >
                <Link href="/community/gallery">
                  더보기
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recentGallery.map((item, index) => (
                <Link
                  key={item.id}
                  href="/community/gallery"
                  className={cn(
                    'group relative aspect-square rounded-2xl overflow-hidden',
                    'shadow-lg hover:shadow-xl transition-all duration-300',
                    'animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Decorative */}
          <div className="mt-16 flex justify-center items-center gap-3">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
            <div className="w-3 h-3 rounded-full bg-sage-400" />
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
          </div>
        </div>
      </section>
    </>
  );
}
