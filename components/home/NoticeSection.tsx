'use client';

import Link from 'next/link';
import { ArrowRight, Bell, Calendar, Eye, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRecentNotices } from '@/data/notices';
import { getRecentGalleryItems } from '@/data/gallery';

export default function NoticeSection() {
  const notices = getRecentNotices(4);
  const galleryItems = getRecentGalleryItems(4);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 공지사항 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">공지사항</h2>
              </div>
              <Link
                href="/community/notice"
                className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
              >
                더보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {notices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={`/community/notice/${notice.id}`}
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    {notice.isImportant && (
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 shrink-0 mt-0.5">
                        중요
                      </Badge>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium truncate group-hover:text-purple-600 transition-colors">
                        {notice.title}
                      </p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {notice.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {notice.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 갤러리 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">갤러리</h2>
              </div>
              <Link
                href="/community/gallery"
                className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
              >
                더보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {galleryItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href="/community/gallery"
                    className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                  >
                    {/* Placeholder 이미지 - 실제 이미지가 없으므로 그라데이션으로 대체 */}
                    <div className={`absolute inset-0 ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-purple-200 to-purple-300' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-teal-200 to-teal-300' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-pink-200 to-pink-300' :
                      'bg-gradient-to-br from-amber-200 to-amber-300'
                    }`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-3">
                        <p className="font-medium text-sm line-clamp-2">{item.title}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
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
