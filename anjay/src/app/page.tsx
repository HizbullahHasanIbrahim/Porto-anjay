import { HeroSection } from '@/components/sections/HeroSection';
import { ArchitectureShowcase } from '@/components/playground/ArchitectureShowcase';
import { MiniTerminalCLI } from '@/components/playground/MiniTerminalCLI';
import { SectionHeader } from '@/components/ui/SystemUI';

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200 px-6 lg:px-24">
      <HeroSection />
      
      <section id="playground" className="py-20">
        <SectionHeader title="INTERACTIVE_SYSTEM_PLAYGROUND" index="01" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ArchitectureShowcase />
          </div>
          <div className="lg:col-span-5">
            <MiniTerminalCLI />
          </div>
        </div>
      </section>

      {/* Placeholder for other sections to keep it concise */}
      <section className="py-20 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
          // End of session. More sections available in system design.
        </p>
      </section>
    </main>
  );
}
