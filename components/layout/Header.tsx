'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      )}
    >
      {/* 상단 연락처 바 */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-medium">{SITE_CONFIG.phone}</span>
            <span className="hidden sm:inline text-purple-200">|</span>
            <span className="hidden sm:inline text-purple-100">{SITE_CONFIG.businessHours}</span>
          </div>
          <Link
            href="/contact"
            className="hover:text-purple-200 transition-colors font-medium"
          >
            상담신청
          </Link>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg group-hover:shadow-purple-300 transition-shadow">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">여성단체</span>
              <span className="text-xs text-gray-500 hidden sm:block">Women&apos;s Education Center</span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-3 text-base font-medium transition-colors rounded-lg',
                    pathname.startsWith(item.href)
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform',
                      activeMenu === item.name && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.children && activeMenu === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            'block px-4 py-3 text-base transition-colors',
                            pathname === child.href
                              ? 'text-purple-700 bg-purple-50 font-medium'
                              : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="w-12 h-12">
                <Menu className="w-6 h-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
              <SheetTitle className="sr-only">메뉴</SheetTitle>
              <div className="flex flex-col h-full">
                {/* 모바일 헤더 */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                      <span className="text-white font-bold">W</span>
                    </div>
                    <span className="font-bold text-lg">여성단체</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* 모바일 메뉴 */}
                <div className="flex-1 overflow-y-auto py-4">
                  {NAVIGATION.map((item) => (
                    <div key={item.name} className="px-4 mb-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          'block py-3 text-lg font-medium border-b',
                          pathname.startsWith(item.href)
                            ? 'text-purple-700 border-purple-200'
                            : 'text-gray-900 border-gray-100'
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="pl-4 py-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={cn(
                                'block py-2 text-base',
                                pathname === child.href
                                  ? 'text-purple-700 font-medium'
                                  : 'text-gray-600'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 모바일 푸터 */}
                <div className="p-4 bg-gray-50 border-t">
                  <div className="text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">{SITE_CONFIG.phone}</span>
                    </div>
                    <p>{SITE_CONFIG.businessHours}</p>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                      상담 신청하기
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
