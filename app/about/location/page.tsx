import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { SITE_CONFIG } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Bus, Train, Car, Leaf, Navigation, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '오시는 길',
  description: '여성단체 찾아오시는 방법',
};

const transportInfo = [
  {
    icon: Train,
    title: '지하철',
    description: 'OO역 3번 출구에서 도보 5분',
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    icon: Bus,
    title: '버스',
    description: 'OO정류장 하차 (100, 200, 300번)',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    icon: Car,
    title: '자가용',
    description: '건물 지하 1층 주차장 이용 (2시간 무료)',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  }
];

const contactInfo = [
  {
    icon: MapPin,
    label: '주소',
    value: SITE_CONFIG.address,
    subValue: `${SITE_CONFIG.addressDetail} (우편번호 ${SITE_CONFIG.postalCode})`,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  },
  {
    icon: Phone,
    label: '전화',
    value: SITE_CONFIG.phone,
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600'
  },
  {
    icon: Mail,
    label: '이메일',
    value: SITE_CONFIG.email,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    icon: Clock,
    label: '운영시간',
    value: SITE_CONFIG.businessHours,
    subValue: SITE_CONFIG.closedDays,
    iconBg: 'bg-coral-100',
    iconColor: 'text-coral-600'
  }
];

export default function LocationPage() {
  return (
    <>
      <PageHeader
        title="오시는 길"
        description="여성단체를 방문하시는 방법을 안내합니다."
        breadcrumbs={[
          { label: '단체소개', href: '/about' },
          { label: '오시는 길' }
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
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 지도 영역 */}
              <div className={cn(
                'card-floating overflow-hidden animate-fade-in-up',
                'aspect-square lg:aspect-auto'
              )}>
                <div className={cn(
                  'h-full min-h-[400px] flex items-center justify-center',
                  'bg-gradient-to-br from-coral-100 via-cream-100 to-sage-100'
                )}>
                  <div className="text-center p-8">
                    <div className={cn(
                      'w-24 h-24 rounded-3xl mx-auto mb-6',
                      'bg-white/80 backdrop-blur-sm shadow-xl',
                      'flex items-center justify-center'
                    )}>
                      <MapPin className="w-12 h-12 text-coral-500" />
                    </div>
                    <p className="text-brown-600 mb-6">
                      지도가 표시되는 영역입니다
                    </p>
                    <a
                      href={`https://map.kakao.com/link/search/${encodeURIComponent(SITE_CONFIG.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'inline-flex items-center gap-2 px-8 py-4 rounded-full',
                        'bg-gradient-to-r from-coral-500 to-coral-400',
                        'text-white font-medium shadow-lg shadow-coral-500/30',
                        'hover:from-coral-600 hover:to-coral-500 hover:shadow-coral-500/40',
                        'transition-all duration-300 hover:-translate-y-1'
                      )}
                    >
                      <Navigation className="w-5 h-5" />
                      카카오맵에서 보기
                    </a>
                  </div>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="card-floating p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-coral-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-coral-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown-800">연락처 정보</h3>
                </div>

                <ul className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                        'group-hover:scale-110 transition-transform duration-300',
                        info.iconBg
                      )}>
                        <info.icon className={cn('w-6 h-6', info.iconColor)} />
                      </div>
                      <div>
                        <p className="font-medium text-brown-700 mb-1">{info.label}</p>
                        <p className="text-brown-800 font-medium">{info.value}</p>
                        {info.subValue && (
                          <p className="text-brown-500 text-sm mt-1">{info.subValue}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-full mb-4">
                  <Navigation className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-sage-700">TRANSPORTATION</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brown-800">교통 안내</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {transportInfo.map((info, index) => (
                  <div
                    key={index}
                    className={cn(
                      'card-floating p-8 text-center animate-fade-in-up group',
                      'hover:shadow-xl transition-all duration-300'
                    )}
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className={cn(
                      'w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center',
                      'group-hover:scale-110 transition-transform duration-300',
                      info.iconBg
                    )}>
                      <info.icon className={cn('w-8 h-8', info.iconColor)} />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-brown-800 mb-3">
                      {info.title}
                    </h4>
                    <p className="text-brown-600 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 주차 안내 */}
            <div className={cn(
              'mt-12 rounded-3xl p-8 animate-fade-in-up',
              'bg-gradient-to-r from-cream-100 to-cream-200',
              'border-2 border-cream-300'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Car className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-800">주차 안내</h3>
              </div>
              <ul className="space-y-3 text-brown-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                  <span>건물 지하 1층 주차장 이용 가능</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                  <span>교육 수강생은 2시간 무료 주차 가능 (이후 30분당 1,000원)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>방문 시 안내데스크에서 주차권 수령</span>
                </li>
              </ul>
            </div>

            {/* Bottom Decorative */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
              <div className="w-3 h-3 rounded-full bg-sage-400" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
