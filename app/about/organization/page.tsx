import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { ORGANIZATION_DATA } from '@/lib/constants';
import { User, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: '조직도',
  description: '여성단체 조직 구성',
};

export default function OrganizationPage() {
  return (
    <>
      <PageHeader
        title="조직도"
        description="여성단체의 조직 구성을 소개합니다."
        breadcrumbs={[
          { label: '단체소개', href: '/about' },
          { label: '조직도' }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 이사장 */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 shadow-xl">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-lg font-medium opacity-90 mb-1">이사장</p>
                  <p className="text-2xl font-bold">{ORGANIZATION_DATA.chairman.name}</p>
                </div>
              </div>

              {/* 연결선 */}
              <div className="w-0.5 h-12 bg-purple-300 mx-auto" />
            </div>

            {/* 부서별 */}
            <div className="grid md:grid-cols-3 gap-6">
              {ORGANIZATION_DATA.departments.map((dept, index) => (
                <div key={dept.name} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  {/* 부서 헤더 */}
                  <div className={`p-4 text-center ${
                    index === 0 ? 'bg-purple-100' :
                    index === 1 ? 'bg-teal-100' :
                    'bg-pink-100'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                      index === 0 ? 'bg-purple-200' :
                      index === 1 ? 'bg-teal-200' :
                      'bg-pink-200'
                    }`}>
                      <Users className={`w-6 h-6 ${
                        index === 0 ? 'text-purple-700' :
                        index === 1 ? 'text-teal-700' :
                        'text-pink-700'
                      }`} />
                    </div>
                    <h3 className={`font-bold text-lg ${
                      index === 0 ? 'text-purple-800' :
                      index === 1 ? 'text-teal-800' :
                      'text-pink-800'
                    }`}>
                      {dept.name}
                    </h3>
                  </div>

                  {/* 부서원 목록 */}
                  <div className="p-4">
                    <ul className="space-y-3">
                      {dept.members.map((member, memberIndex) => (
                        <li
                          key={memberIndex}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.position}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* 안내 문구 */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
              <p className="text-gray-600">
                각 부서는 유기적으로 협력하여 교육생 여러분께 최상의 서비스를 제공하고 있습니다.
                <br />
                문의사항은 사무국(000-0000-0000)으로 연락 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
