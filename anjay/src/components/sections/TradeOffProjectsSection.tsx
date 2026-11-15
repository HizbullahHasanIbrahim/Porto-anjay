import React from 'react';
import { projectCaseStudies } from '@/data/portfolioSystemData';
import { TradeOffCard } from '@/components/playground/TradeOffCard';
import { SectionHeader } from '@/components/ui/SystemUI';

export function TradeOffProjectsSection() {
  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
      <SectionHeader title="FEATURED_PROJECTS_&_TRADE_OFFS" index="02" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCaseStudies.map(project => (
          <TradeOffCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
