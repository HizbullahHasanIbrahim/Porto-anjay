import React from 'react';
import { educationData, organizationData } from '@/data/portfolioSystemData';
import { SectionHeader } from '@/components/ui/SystemUI';

export function AcademicAndOrgSection() {
  return (
    <section id="education" className="py-20 border-b border-zinc-900">
      <SectionHeader title="ACADEMIC_&_ORGANIZATIONAL_TIMELINE" index="03" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest">EDUCATION</h3>
          <div className="space-y-6">
            {educationData.map(edu => (
              <div key={edu.id} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-zinc-100">{edu.institution}</h4>
                    <p className="text-xs text-zinc-400">{edu.major}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{edu.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {edu.courses.map(course => (
                    <span key={course} className="px-2 py-0.5 bg-zinc-800 text-emerald-400/80 rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div id="organizations" className="space-y-6">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest">ORGANIZATIONS</h3>
          <div className="space-y-6">
            {organizationData.map(org => (
              <div key={org.id} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-zinc-100">{org.title}</h4>
                    <p className="text-xs text-zinc-400">{org.org}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{org.period}</span>
                </div>
                <p className="text-xs text-zinc-400">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
