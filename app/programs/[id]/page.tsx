import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Users, Calendar, MapPin, User, ArrowLeft, CheckCircle, Leaf, Sparkles, Phone } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { programs, getProgramById } from '@/data/programs';
import { cn } from '@/lib/utils';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    return { title: '프로그램을 찾을 수 없습니다' };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

const statusLabels = {
  recruiting: { text: '모집중', className: 'bg-sage-100 text-sage-700 border-sage-200' },
  ongoing: { text: '진행중', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  closed: { text: '마감', className: 'bg-cream-200 text-brown-500 border-cream-300' }
};

const categoryStyles = {
  '자격증': { gradient: 'from-coral-400 to-coral-500' },
  '취미': { gradient: 'from-amber-400 to-amber-500' },
  '직업훈련': { gradient: 'from-sage-400 to-sage-500' }
};

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    notFound();
  }

  const style = categoryStyles[program.category] || categoryStyles['자격증'];

  return (
    <>
      <PageHeader
        title={program.title}
        breadcrumbs={[
          { label: '교육프로그램', href: '/programs' },
          { label: program.title }
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
            {/* 뒤로가기 */}
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-brown-600 hover:text-coral-600 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              목록으로 돌아가기
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 메인 콘텐츠 */}
              <div className="lg:col-span-2 space-y-8">
                {/* 썸네일 */}
                <div className={cn(
                  'aspect-video rounded-3xl flex items-center justify-center relative overflow-hidden',
                  'bg-gradient-to-br shadow-xl',
                  style.gradient
                )}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                  <span className="text-white/20 text-[150px] font-serif font-bold relative">{program.title.charAt(0)}</span>
                </div>

                {/* 뱃지 */}
                <div className="flex flex-wrap gap-3">
                  <Badge className={cn(statusLabels[program.status].className, 'py-1.5 px-4')}>
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                    {statusLabels[program.status].text}
                  </Badge>
                  <Badge className="bg-cream-100 text-brown-700 border-cream-200 py-1.5 px-4">
                    {program.category}
                  </Badge>
                  {program.governmentSupport && (
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200 py-1.5 px-4">정부지원</Badge>
                  )}
                  {program.isFree && (
                    <Badge className="bg-sage-100 text-sage-700 border-sage-200 py-1.5 px-4">무료</Badge>
                  )}
                </div>

                {/* 설명 */}
                <div className="card-floating p-8">
                  <h2 className="font-serif text-2xl font-bold text-brown-800 mb-4">프로그램 소개</h2>
                  <p className="text-brown-600 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </div>

                {/* 교육 과정 */}
                <div className="card-floating p-8">
                  <h2 className="font-serif text-2xl font-bold text-brown-800 mb-6">교육 내용</h2>
                  <ul className="space-y-4">
                    {[
                      '기초 이론 학습',
                      '실습 교육 진행',
                      '현장 적용 사례 연구',
                      '자격 시험 대비 특강',
                      '수료 및 자격증 발급'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-sage-600" />
                        </div>
                        <span className="text-brown-600 pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 안내사항 */}
                <div className={cn(
                  'rounded-3xl p-8',
                  'bg-gradient-to-br from-cream-100 to-cream-200',
                  'border-2 border-cream-300'
                )}>
                  <h3 className="font-serif text-xl font-bold text-brown-800 mb-4">안내사항</h3>
                  <ul className="space-y-3 text-brown-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                      <span>수강료는 교육 시작 전 납부해주시기 바랍니다.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage-400 mt-2 shrink-0" />
                      <span>교육 시작 7일 전까지 취소 시 전액 환불 가능합니다.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>80% 이상 출석 시 수료증이 발급됩니다.</span>
                    </li>
                    {program.governmentSupport && (
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-coral-400 mt-2 shrink-0" />
                        <span>국민내일배움카드 사용 시 자부담금만 납부하시면 됩니다.</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* 사이드바 */}
              <div className="lg:col-span-1">
                <div className="card-floating sticky top-40 p-6 space-y-6">
                  <div className="text-center pb-6 border-b-2 border-cream-200">
                    <p className="text-brown-500 mb-2">수강료</p>
                    <p className={cn(
                      'font-serif text-4xl font-bold',
                      program.isFree ? 'text-sage-600' : 'text-brown-800'
                    )}>
                      {program.isFree ? '무료' : '유료'}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5 text-coral-600" />
                      </div>
                      <div>
                        <p className="text-sm text-brown-500">교육기간</p>
                        <p className="font-medium text-brown-800">{program.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <p className="text-sm text-brown-500">교육일정</p>
                        <p className="font-medium text-brown-800">{program.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-brown-500">모집인원</p>
                        <p className="font-medium text-brown-800">
                          {program.currentApplicants} / {program.capacity}명
                        </p>
                      </div>
                    </div>

                    {program.instructor && (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <User className="w-5 h-5 text-coral-600" />
                        </div>
                        <div>
                          <p className="text-sm text-brown-500">담당강사</p>
                          <p className="font-medium text-brown-800">{program.instructor}</p>
                        </div>
                      </div>
                    )}

                    {program.location && (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <MapPin className="w-5 h-5 text-sage-600" />
                        </div>
                        <div>
                          <p className="text-sm text-brown-500">교육장소</p>
                          <p className="font-medium text-brown-800">{program.location}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 진행률 */}
                  <div className="pt-4">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-brown-500 font-medium">모집 현황</span>
                      <span className="font-bold text-coral-600">
                        {Math.round((program.currentApplicants / program.capacity) * 100)}%
                      </span>
                    </div>
                    <div className="h-3 bg-cream-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          'h-full bg-gradient-to-r rounded-full',
                          style.gradient
                        )}
                        style={{ width: `${(program.currentApplicants / program.capacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 신청 버튼 */}
                  <Button
                    asChild
                    className={cn(
                      'w-full py-7 text-lg rounded-2xl font-medium',
                      'bg-gradient-to-r from-coral-500 to-coral-400',
                      'hover:from-coral-600 hover:to-coral-500',
                      'shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40',
                      'transition-all duration-300'
                    )}
                    disabled={program.status === 'closed'}
                  >
                    <Link href={`/programs/apply?program=${program.id}`}>
                      {program.status === 'closed' ? '모집 마감' : '수강 신청하기'}
                    </Link>
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-brown-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">문의: 000-0000-0000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
