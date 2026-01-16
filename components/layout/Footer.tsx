import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ExternalLink, Leaf, Heart } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brown-800/5 pointer-events-none" />

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-cream-200 to-cream-300 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-coral-200/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-sage-200/30 blur-3xl" />

        <div className="container-custom py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral-400 to-coral-500 flex items-center justify-center shadow-lg shadow-coral-500/20">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown-800">{SITE_CONFIG.name}</h3>
                  <p className="text-sm text-brown-500">Women&apos;s Education Center</p>
                </div>
              </div>
              <p className="text-brown-600 leading-relaxed mb-8">
                여성들의 자립과 성장을 지원하는 교육 전문 기관입니다.
                따뜻한 마음으로 함께 성장하는 아름다운 동행을 약속합니다.
              </p>

              {/* Social Media */}
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.socialMedia.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white hover:bg-coral-50 border border-cream-300 hover:border-coral-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  aria-label="카카오톡 채널"
                >
                  <svg className="w-5 h-5 text-brown-600 group-hover:text-coral-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.463 2 10.742c0 2.753 1.833 5.166 4.584 6.527-.194.726-.714 2.625-.818 3.032-.127.497.182.488.382.356.157-.104 2.5-1.696 3.508-2.383.434.066.878.1 1.344.1 5.523 0 10-3.463 10-7.632C22 6.463 17.523 3 12 3z"/>
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white hover:bg-coral-50 border border-cream-300 hover:border-coral-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  aria-label="인스타그램"
                >
                  <svg className="w-5 h-5 text-brown-600 group-hover:text-coral-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white hover:bg-coral-50 border border-cream-300 hover:border-coral-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  aria-label="네이버 블로그"
                >
                  <svg className="w-5 h-5 text-brown-600 group-hover:text-coral-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-brown-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coral-400" />
                바로가기
              </h4>
              <ul className="space-y-4">
                {NAVIGATION.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-brown-600 hover:text-coral-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-coral-400 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-bold text-brown-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage-400" />
                연락처
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-coral-600" />
                  </div>
                  <div>
                    <p className="font-medium text-brown-800">{SITE_CONFIG.phone}</p>
                    <p className="text-sm text-brown-500">전화문의</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <p className="font-medium text-brown-800">{SITE_CONFIG.email}</p>
                    <p className="text-sm text-brown-500">이메일</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-brown-800">{SITE_CONFIG.businessHours}</p>
                    <p className="text-sm text-brown-500">{SITE_CONFIG.closedDays}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-serif text-lg font-bold text-brown-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coral-400" />
                오시는 길
              </h4>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-coral-600" />
                </div>
                <div>
                  <p className="font-medium text-brown-800">{SITE_CONFIG.address}</p>
                  <p className="text-brown-600">{SITE_CONFIG.addressDetail}</p>
                  <p className="text-sm text-brown-500 mt-1">우편번호 {SITE_CONFIG.postalCode}</p>
                </div>
              </div>
              <Link
                href="/about/location"
                className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium transition-colors group"
              >
                자세히 보기
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brown-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-cream-300 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-coral-400 fill-coral-400" />
              <span className="text-cream-200">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}</span>
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-cream-400 hover:text-coral-300 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-cream-400 hover:text-coral-300 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
