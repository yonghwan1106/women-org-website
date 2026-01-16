import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Users, Calendar, MapPin, User, ArrowLeft, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
  recruiting: { text: '모집중', className: 'bg-green-100 text-green-700' },
  ongoing: { text: '진행중', className: 'bg-blue-100 text-blue-700' },
  closed: { text: '마감', className: 'bg-gray-100 text-gray-600' }
};

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={program.title}
        breadcrumbs={[
          { label: '교육프로그램', href: '/programs' },
          { label: program.title }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* 뒤로가기 */}
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              목록으로 돌아가기
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 메인 콘텐츠 */}
              <div className="lg:col-span-2 space-y-8">
                {/* 썸네일 */}
                <div className={cn(
                  'aspect-video rounded-2xl flex items-center justify-center',
                  program.category === '자격증' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  program.category === '취미' ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  'bg-gradient-to-br from-teal-400 to-teal-600'
                )}>
                  <span className="text-white/30 text-9xl font-bold">{program.title.charAt(0)}</span>
                </div>

                {/* 뱃지 */}
                <div className="flex flex-wrap gap-2">
                  <Badge className={statusLabels[program.status].className}>
                    {statusLabels[program.status].text}
                  </Badge>
                  <Badge variant="outline">{program.category}</Badge>
                  {program.governmentSupport && (
                    <Badge className="bg-amber-100 text-amber-700">정부지원</Badge>
                  )}
                  {program.isFree && (
                    <Badge className="bg-teal-100 text-teal-700">무료</Badge>
                  )}
                </div>

                {/* 설명 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">프로그램 소개</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </div>

                {/* 교육 과정 (예시) */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">교육 내용</h2>
                  <ul className="space-y-3">
                    {[
                      '기초 이론 학습',
                      '실습 교육 진행',
                      '현장 적용 사례 연구',
                      '자격 시험 대비 특강',
                      '수료 및 자격증 발급'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 안내사항 */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">안내사항</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 수강료는 교육 시작 전 납부해주시기 바랍니다.</li>
                    <li>• 교육 시작 7일 전까지 취소 시 전액 환불 가능합니다.</li>
                    <li>• 80% 이상 출석 시 수료증이 발급됩니다.</li>
                    {program.governmentSupport && (
                      <li>• 국민내일배움카드 사용 시 자부담금만 납부하시면 됩니다.</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* 사이드바 */}
              <div className="lg:col-span-1">
                <Card className="sticky top-40 border-0 shadow-xl">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center pb-6 border-b">
                      <p className="text-gray-500 mb-1">수강료</p>
                      <p className={cn(
                        'text-3xl font-bold',
                        program.isFree ? 'text-teal-600' : 'text-gray-900'
                      )}>
                        {program.isFree ? '무료' : '유료'}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">교육기간</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">교육일정</p>
                          <p className="font-medium">{program.schedule}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">모집인원</p>
                          <p className="font-medium">
                            {program.currentApplicants} / {program.capacity}명
                          </p>
                        </div>
                      </div>

                      {program.instructor && (
                        <div className="flex items-start gap-3">
                          <User className="w-5 h-5 text-purple-500 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">담당강사</p>
                            <p className="font-medium">{program.instructor}</p>
                          </div>
                        </div>
                      )}

                      {program.location && (
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-purple-500 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">교육장소</p>
                            <p className="font-medium">{program.location}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 진행률 */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">모집 현황</span>
                        <span className="font-medium">
                          {Math.round((program.currentApplicants / program.capacity) * 100)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                          style={{ width: `${(program.currentApplicants / program.capacity) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* 신청 버튼 */}
                    <Button
                      asChild
                      className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700"
                      disabled={program.status === 'closed'}
                    >
                      <Link href={`/programs/apply?program=${program.id}`}>
                        {program.status === 'closed' ? '모집 마감' : '수강 신청하기'}
                      </Link>
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      문의: 000-0000-0000
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
