import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { SITE_CONFIG } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Bus, Train, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '오시는 길',
  description: '여성단체 찾아오시는 방법',
};

const transportInfo = [
  {
    icon: Train,
    title: '지하철',
    description: 'OO역 3번 출구에서 도보 5분',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Bus,
    title: '버스',
    description: 'OO정류장 하차 (100, 200, 300번)',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Car,
    title: '자가용',
    description: '건물 지하 1층 주차장 이용 (2시간 무료)',
    color: 'text-purple-600 bg-purple-100'
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 지도 영역 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-purple-600" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      지도가 표시되는 영역입니다
                    </p>
                    <a
                      href={`https://map.kakao.com/link/search/${encodeURIComponent(SITE_CONFIG.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      <MapPin className="w-5 h-5" />
                      카카오맵에서 보기
                    </a>
                  </div>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">연락처 정보</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">주소</p>
                          <p className="text-gray-600">{SITE_CONFIG.address}</p>
                          <p className="text-gray-500 text-sm">{SITE_CONFIG.addressDetail}</p>
                          <p className="text-gray-500 text-sm">우편번호 {SITE_CONFIG.postalCode}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                          <Phone className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">전화</p>
                          <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                          <Mail className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">이메일</p>
                          <p className="text-gray-600">{SITE_CONFIG.email}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                          <Clock className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">운영시간</p>
                          <p className="text-gray-600">{SITE_CONFIG.businessHours}</p>
                          <p className="text-gray-500 text-sm">{SITE_CONFIG.closedDays}</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">교통 안내</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {transportInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4`}>
                        <info.icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 주차 안내 */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">주차 안내</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span>건물 지하 1층 주차장 이용 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span>교육 수강생은 2시간 무료 주차 가능 (이후 30분당 1,000원)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span>방문 시 안내데스크에서 주차권 수령</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
