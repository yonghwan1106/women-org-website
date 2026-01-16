import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { Badge } from '@/components/ui/badge';
import { galleryItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: '갤러리',
  description: '여성단체 활동 사진 갤러리',
};

const colorClasses = [
  'from-purple-200 to-purple-300',
  'from-teal-200 to-teal-300',
  'from-pink-200 to-pink-300',
  'from-amber-200 to-amber-300',
  'from-blue-200 to-blue-300',
  'from-green-200 to-green-300',
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Placeholder 배경 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[index % colorClasses.length]}`} />

                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                    <h3 className="font-bold mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.date}</p>
                  </div>
                </div>

                {/* 카테고리 뱃지 */}
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-white/90 text-gray-700">
                    {item.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* 안내 문구 */}
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              더 많은 사진은 SNS에서 확인하세요
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
