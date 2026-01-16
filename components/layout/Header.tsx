'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Leaf } from 'lucide-react';
import Image from 'next/image';
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brown-800/5'
        : 'bg-transparent'
    )}>
      {/* Top Bar - Warm Gradient */}
      <div className={cn(
        'transition-all duration-300 overflow-hidden',
        isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
      )}>
        <div className="bg-gradient-to-r from-coral-500 via-coral-400 to-sage-400">
          <div className="container-custom">
            <div className="flex items-center justify-between h-10 text-sm text-white">
              <div className="flex items-center gap-6">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-coral-100 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-medium">{SITE_CONFIG.phone}</span>
                </a>
                <span className="hidden sm:block text-white/80">{SITE_CONFIG.businessHours}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/90">
                <Leaf className="w-3.5 h-3.5" />
                <span className="text-xs tracking-wide">함께 성장하는 아름다운 동행</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn('transition-all duration-300', isScrolled ? 'py-3' : 'py-4')}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-coral-500/10 group-hover:shadow-coral-500/30 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-brown-800 tracking-tight">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs text-brown-500 tracking-wide">
                  Women&apos;s Education Center
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAVIGATION.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-5 py-3 rounded-full text-base font-medium transition-all duration-300',
                      pathname.startsWith(item.href)
                        ? 'text-coral-600 bg-coral-50'
                        : 'text-brown-700 hover:text-coral-600 hover:bg-coral-50/50'
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform duration-300',
                        activeMenu === item.name && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300',
                      activeMenu === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    )}>
                      <div className="bg-white rounded-2xl shadow-xl shadow-brown-800/10 border border-cream-300 py-3 min-w-[200px] overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-400 to-sage-400" />
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              'block px-5 py-3 text-sm transition-all duration-200',
                              pathname === child.href
                                ? 'text-coral-600 bg-coral-50 font-medium'
                                : 'text-brown-600 hover:text-coral-600 hover:bg-coral-50/50 hover:pl-7'
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
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                asChild
                className="bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-600 hover:to-coral-500 text-white rounded-full px-6 py-5 font-medium shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/contact">상담 신청</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-coral-50">
                  <Menu className="w-6 h-6 text-brown-700" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[380px] p-0 bg-cream-50 border-l-0">
                <SheetTitle className="sr-only">메뉴</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="p-6 bg-gradient-to-r from-coral-500 to-sage-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-serif text-lg font-bold text-white">
                          {SITE_CONFIG.name}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileOpen(false)}
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <nav className="space-y-2 px-4">
                      {NAVIGATION.map((item) => (
                        <div key={item.name} className="space-y-1">
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={cn(
                              'flex items-center justify-between px-4 py-4 rounded-2xl font-medium transition-all duration-200',
                              pathname.startsWith(item.href)
                                ? 'text-coral-600 bg-coral-100'
                                : 'text-brown-700 hover:bg-coral-50'
                            )}
                          >
                            <span className="text-lg">{item.name}</span>
                            {item.children && (
                              <ChevronDown className="w-5 h-5 text-brown-400" />
                            )}
                          </Link>
                          {item.children && (
                            <div className="ml-4 space-y-1 border-l-2 border-coral-200 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className={cn(
                                    'block px-4 py-3 rounded-xl text-base transition-all duration-200',
                                    pathname === child.href
                                      ? 'text-coral-600 bg-coral-50 font-medium'
                                      : 'text-brown-600 hover:text-coral-600 hover:bg-coral-50/50'
                                  )}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-6 bg-cream-200/50 border-t border-cream-300">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-600 hover:to-coral-500 text-white rounded-2xl py-6 text-lg font-medium shadow-lg"
                    >
                      <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                        상담 신청하기
                      </Link>
                    </Button>
                    <div className="mt-4 text-center">
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-brown-600 hover:text-coral-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
