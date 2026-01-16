import Link from 'next/link';
import { ChevronRight, Home, Leaf } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50" />

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-coral-100/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-sage-100/40 blur-3xl" />
      <div className="absolute top-10 right-1/4 opacity-5">
        <Leaf className="w-40 h-40 text-sage-600 rotate-12" />
      </div>

      {/* Content */}
      <div className="container-custom relative py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:bg-coral-50 transition-colors group"
          >
            <Home className="w-4 h-4 text-brown-500 group-hover:text-coral-600 transition-colors" />
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brown-300" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm text-brown-600 hover:bg-coral-50 hover:text-coral-600 transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="px-3 py-1.5 rounded-lg bg-coral-100/80 backdrop-blur-sm text-coral-700 font-medium">
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown-800 mb-4 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-brown-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Decorative Line */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
          <div className="w-3 h-3 rounded-full bg-sage-400" />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
    </div>
  );
}
