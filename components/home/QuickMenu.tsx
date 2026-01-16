'use client';

import Link from 'next/link';
import { GraduationCap, Award, Heart, MessageCircle } from 'lucide-react';

const quickMenuItems = [
  {
    title: '교육신청',
    description: '다양한 교육 프로그램',
    href: '/programs',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-200',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: '자격증',
    description: '민간자격증 안내',
    href: '/certification',
    icon: Award,
    color: 'from-teal-500 to-teal-600',
    shadowColor: 'shadow-teal-200',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    title: '지원사업',
    description: '정부지원 프로그램',
    href: '/support',
    icon: Heart,
    color: 'from-pink-500 to-pink-600',
    shadowColor: 'shadow-pink-200',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    title: '상담문의',
    description: '온라인 상담신청',
    href: '/contact',
    icon: MessageCircle,
    color: 'from-amber-500 to-amber-600',
    shadowColor: 'shadow-amber-200',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  }
];

export default function QuickMenu() {
  return (
    <section className="py-8 -mt-8 relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {quickMenuItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-white rounded-2xl p-6 shadow-lg ${item.shadowColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
                <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
