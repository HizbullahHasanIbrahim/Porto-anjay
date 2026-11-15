import React from 'react';
import { ArchitectureShowcase } from '@/components/playground/ArchitectureShowcase';
import { MiniTerminalCLI } from '@/components/playground/MiniTerminalCLI';
import { SectionHeader } from '@/components/ui/SystemUI';

export function SystemPlaygroundSection() {
  return (
    <section id="playground" className="py-20 border-b border-zinc-900">
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
  );
}
