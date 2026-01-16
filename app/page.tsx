import HeroSection from '@/components/home/HeroSection';
import QuickMenu from '@/components/home/QuickMenu';
import NoticeSection from '@/components/home/NoticeSection';
import ProgramCards from '@/components/home/ProgramCards';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickMenu />
      <ProgramCards />
      <NoticeSection />
    </>
  );
}
