'use client';

import Link from 'next/link';
import { GraduationCap, Award, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';

const quickMenuItems = [
  {
    title: '교육신청',
    description: '다양한 교육 프로그램',
    href: '/programs',
    icon: GraduationCap,
    gradient: 'from-coral-400 to-coral-500',
    bgLight: 'bg-coral-50',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600',
    hoverBorder: 'hover:border-coral-300',
    shadowColor: 'hover:shadow-coral-200/50'
  },
  {
    title: '자격증',
    description: '민간자격증 안내',
    href: '/certification',
    icon: Award,
    gradient: 'from-sage-400 to-sage-500',
    bgLight: 'bg-sage-50',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
    hoverBorder: 'hover:border-sage-300',
    shadowColor: 'hover:shadow-sage-200/50'
  },
  {
    title: '지원사업',
    description: '정부지원 프로그램',
    href: '/support',
    icon: Heart,
    gradient: 'from-amber-400 to-amber-500',
    bgLight: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    hoverBorder: 'hover:border-amber-300',
    shadowColor: 'hover:shadow-amber-200/50'
  },
  {
    title: '상담문의',
    description: '온라인 상담신청',
    href: '/contact',
    icon: MessageCircle,
    gradient: 'from-coral-400 to-sage-400',
    bgLight: 'bg-coral-50',
    iconBg: 'bg-gradient-to-br from-coral-100 to-sage-100',
    iconColor: 'text-coral-600',
    hoverBorder: 'hover:border-coral-300',
    shadowColor: 'hover:shadow-coral-200/50'
  }
];

export default function QuickMenu() {
  return (
    <section className="py-4 -mt-12 relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {quickMenuItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`
                relative bg-white rounded-3xl p-6 md:p-8
                border-2 border-cream-200 ${item.hoverBorder}
                shadow-lg ${item.shadowColor}
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                overflow-hidden
              `}>
                {/* Gradient Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Decorative Background Circle */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${item.bgLight} opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150`} />

                {/* Icon */}
                <div className={`
                  relative w-16 h-16 rounded-2xl ${item.iconBg}
                  flex items-center justify-center mb-5
                  group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-300
                `}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-brown-800 mb-1 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-coral-500" />
                  </h3>
                  <p className="text-brown-500 text-sm">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
