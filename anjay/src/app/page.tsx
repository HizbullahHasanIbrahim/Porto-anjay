import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { SystemPlaygroundSection } from '@/components/sections/SystemPlaygroundSection';
import { TradeOffProjectsSection } from '@/components/sections/TradeOffProjectsSection';
import { AcademicAndOrgSection } from '@/components/sections/AcademicAndOrgSection';
import { SkillsMatrixSection } from '@/components/sections/SkillsMatrixSection';
import { DirectContactFooter } from '@/components/layout/DirectContactFooter';

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <div className="px-6 lg:px-24">
        <HeroSection />
        <SystemPlaygroundSection />
        <TradeOffProjectsSection />
        <AcademicAndOrgSection />
        <SkillsMatrixSection />
        <DirectContactFooter />
      </div>
    </div>
  );
}
