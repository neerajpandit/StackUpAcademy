import HeroSection from '@/components/home/HeroSection'
import ProcessSection from '@/components/home/ProcessSection'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'
import CoursesOverview from '@/components/home/CoursesOverview'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesOverview />
      <StatsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}