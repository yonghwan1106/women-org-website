import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Badge } from '@/components/ui/badge';
import { galleryItems } from '@/data/gallery';
import { Leaf, Sparkles, Images } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '갤러리',
  description: '여성단체 활동 사진 갤러리',
};

const colorClasses = [
  'from-coral-200 to-coral-300',
  'from-sage-200 to-sage-300',
  'from-amber-200 to-amber-300',
  'from-coral-300 to-sage-200',
  'from-sage-300 to-amber-200',
  'from-amber-300 to-coral-200',
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="갤러리"
        description="여성단체의 다양한 활동 사진을 확인하세요."
        breadcrumbs={[
          { label: '커뮤니티', href: '/community' },
          { label: '갤러리' }
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
          {/* 헤더 */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 rounded-full mb-4">
              <Images className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-coral-700">GALLERY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'group relative aspect-square rounded-3xl overflow-hidden',
                  'shadow-lg hover:shadow-2xl cursor-pointer',
                  'animate-fade-in-up transition-all duration-500',
                  'hover:-translate-y-2'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Placeholder 배경 */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br',
                  colorClasses[index % colorClasses.length]
                )} />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                }} />

                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif font-bold mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.date}</p>
                  </div>
                </div>

                {/* 카테고리 뱃지 */}
                <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity">
                  <Badge className="bg-white/90 text-brown-700 border-0 shadow-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* 안내 문구 */}
          <div className={cn(
            'mt-12 text-center rounded-3xl p-8',
            'bg-gradient-to-r from-cream-100 to-cream-200',
            'border-2 border-cream-300'
          )}>
            <p className="text-brown-600">
              더 많은 사진은 SNS에서 확인하세요
            </p>
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
