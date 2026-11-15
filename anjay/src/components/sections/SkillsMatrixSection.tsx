import React from 'react';
import { skillsMatrix } from '@/data/portfolioSystemData';
import { SectionHeader } from '@/components/ui/SystemUI';

export function SkillsMatrixSection() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-900">
      <SectionHeader title="SKILLS_&_DEVELOPER_TOOLS" index="04" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-4">
          <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">LANGUAGES</h3>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.languages.map(lang => (
              <span key={lang} className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded border border-zinc-700/50">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-4">
          <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest">FRAMEWORKS</h3>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.frameworks.map(fw => (
              <span key={fw} className="px-3 py-1 bg-zinc-800 text-emerald-300 rounded border border-emerald-500/20">
                {fw}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-4">
          <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">TOOLS</h3>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.tools.map(tool => (
              <span key={tool} className="px-3 py-1 bg-zinc-800 text-cyan-300 rounded border border-cyan-500/20">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
