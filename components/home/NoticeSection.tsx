'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bell, Calendar, Eye, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRecentNotices } from '@/data/notices';
import { getRecentGalleryItems } from '@/data/gallery';

export default function NoticeSection() {
  const notices = getRecentNotices(4);
  const galleryItems = getRecentGalleryItems(4);

  const gradientColors = [
    'from-coral-200 to-coral-300',
    'from-sage-200 to-sage-300',
    'from-amber-200 to-amber-300',
    'from-coral-300 to-sage-200',
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-200" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Notice Section */}
          <div className="card-floating overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-coral-50 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral-400 to-coral-500 flex items-center justify-center shadow-lg shadow-coral-500/20">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brown-800">공지사항</h2>
                  <p className="text-sm text-brown-500">최신 소식을 확인하세요</p>
                </div>
              </div>
              <Link
                href="/community/notice"
                className="flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium transition-colors group"
              >
                더보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="divide-y divide-cream-200">
              {notices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={`/community/notice/${notice.id}`}
                  className="block px-8 py-5 hover:bg-coral-50/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {notice.isImportant && (
                      <Badge className="bg-coral-100 text-coral-700 border-coral-200 shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 mr-1" />
                        중요
                      </Badge>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-brown-800 font-medium truncate group-hover:text-coral-600 transition-colors">
                        {notice.title}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-brown-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-coral-400" />
                          {notice.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-sage-400" />
                          {notice.views}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-coral-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="card-floating overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-sage-50 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500 flex items-center justify-center shadow-lg shadow-sage-500/20">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brown-800">갤러리</h2>
                  <p className="text-sm text-brown-500">활동 사진을 확인하세요</p>
                </div>
              </div>
              <Link
                href="/community/gallery"
                className="flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors group"
              >
                더보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {galleryItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href="/community/gallery"
                    className="group relative aspect-square rounded-2xl overflow-hidden"
                  >
                    {/* Gallery Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brown-800/0 group-hover:bg-brown-800/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white text-center p-4">
                        <p className="font-medium text-sm line-clamp-2">{item.title}</p>
                        <p className="text-xs text-white/70 mt-1">{item.date}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-white/90 text-brown-700 text-xs border-0 shadow-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
