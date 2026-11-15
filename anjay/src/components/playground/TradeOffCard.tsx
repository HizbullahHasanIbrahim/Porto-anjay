import React from 'react';
import { ProjectCaseStudy } from '@/types/system';
import { MetricPill } from '@/components/ui/SystemUI';

export function TradeOffCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-all">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded uppercase">
            {project.category}
          </span>
          <div className="flex gap-2">
            <MetricPill label="Impact" value={project.impact.primaryMetric} />
          </div>
        </div>

        <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>

        {/* 01. Problem */}
        <div className="space-y-1 bg-red-950/10 border border-red-500/20 p-3 rounded">
          <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">01. THE PROBLEM</span>
          <p className="text-xs text-zinc-400">{project.problemStatement}</p>
        </div>

        {/* 02. Trade-off */}
        <div className="space-y-2 bg-amber-950/10 border border-amber-500/20 p-3 rounded font-mono text-xs">
          <span className="text-[10px] text-amber-400 uppercase tracking-widest block">02. TECHNICAL TRADE-OFF</span>
          <div className="text-zinc-300"><strong className="text-emerald-400">Chosen:</strong> {project.tradeOff.decisionChosen}</div>
          <div className="text-zinc-500"><strong className="text-red-400">Rejected:</strong> {project.tradeOff.alternativeRejected}</div>
          <div className="text-zinc-400 text-[11px] pt-1 italic">{project.tradeOff.engineeringRationale}</div>
        </div>

        {/* 03. Impact */}
        <div className="space-y-1 bg-emerald-950/10 border border-emerald-500/20 p-3 rounded">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">03. MEASURED OUTCOME</span>
          <p className="text-xs text-zinc-300">{project.impact.qualitativeOutcome}</p>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-800">
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 font-mono text-xs">
          <a href={project.githubUrl} className="text-emerald-400 hover:underline">[GitHub Repo]</a>
          <a href={project.liveDemoUrl} className="text-cyan-400 hover:underline">[Live Demo]</a>
        </div>
      </div>
    </div>
  );
}
