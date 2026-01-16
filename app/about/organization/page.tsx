import { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { ORGANIZATION_DATA } from '@/lib/constants';
import { User, Users, Crown, Leaf, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '조직도',
  description: '여성단체 조직 구성',
};

const departmentStyles = [
  {
    headerBg: 'bg-gradient-to-r from-coral-100 to-coral-50',
    iconBg: 'bg-coral-200',
    iconColor: 'text-coral-600',
    titleColor: 'text-coral-800',
    dotColor: 'bg-coral-400'
  },
  {
    headerBg: 'bg-gradient-to-r from-sage-100 to-sage-50',
    iconBg: 'bg-sage-200',
    iconColor: 'text-sage-600',
    titleColor: 'text-sage-800',
    dotColor: 'bg-sage-400'
  },
  {
    headerBg: 'bg-gradient-to-r from-amber-100 to-amber-50',
    iconBg: 'bg-amber-200',
    iconColor: 'text-amber-600',
    titleColor: 'text-amber-800',
    dotColor: 'bg-amber-400'
  }
];

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

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-coral-100/30 blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl" />
        <div className="absolute top-20 right-1/4 opacity-5">
          <Leaf className="w-40 h-40 text-sage-600 -rotate-12" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto">
            {/* 이사장 */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className={cn(
                'inline-block rounded-3xl p-10 shadow-2xl',
                'bg-gradient-to-br from-coral-400 via-coral-500 to-sage-400',
                'relative overflow-hidden'
              )}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                }} />

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Crown className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-lg font-medium opacity-90 mb-1">이사장</p>
                    <p className="font-serif text-3xl font-bold">{ORGANIZATION_DATA.chairman.name}</p>
                  </div>
                </div>
              </div>

              {/* 연결선 */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-coral-300 to-sage-300 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-sage-400" />
              </div>
            </div>

            {/* 부서별 */}
            <div className="grid md:grid-cols-3 gap-8">
              {ORGANIZATION_DATA.departments.map((dept, index) => {
                const style = departmentStyles[index % departmentStyles.length];
                return (
                  <div
                    key={dept.name}
                    className={cn(
                      'card-floating overflow-hidden animate-fade-in-up group',
                      'hover:shadow-xl transition-all duration-300'
                    )}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {/* 부서 헤더 */}
                    <div className={cn('p-6 text-center', style.headerBg)}>
                      <div className={cn(
                        'w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center',
                        'group-hover:scale-110 transition-transform duration-300',
                        style.iconBg
                      )}>
                        <Users className={cn('w-7 h-7', style.iconColor)} />
                      </div>
                      <h3 className={cn('font-serif text-xl font-bold', style.titleColor)}>
                        {dept.name}
                      </h3>
                    </div>

                    {/* 부서원 목록 */}
                    <div className="p-5 space-y-3">
                      {dept.members.map((member, memberIndex) => (
                        <div
                          key={memberIndex}
                          className={cn(
                            'flex items-center gap-4 p-4 rounded-2xl',
                            'bg-cream-50 hover:bg-cream-100 transition-colors duration-300'
                          )}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                            <User className="w-6 h-6 text-brown-400" />
                          </div>
                          <div>
                            <p className="font-bold text-brown-800">{member.name}</p>
                            <p className="text-sm text-brown-500">{member.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 안내 문구 */}
            <div className={cn(
              'mt-16 rounded-3xl p-8 text-center animate-fade-in-up',
              'bg-gradient-to-r from-cream-100 to-cream-200',
              'border-2 border-cream-300'
            )}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-coral-500" />
                <span className="text-coral-600 font-medium">문의 안내</span>
              </div>
              <p className="text-brown-600 leading-relaxed">
                각 부서는 유기적으로 협력하여 교육생 여러분께 최상의 서비스를 제공하고 있습니다.
                <br />
                <span className="font-medium text-brown-700">문의사항은 사무국(000-0000-0000)으로 연락 주시기 바랍니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
