import React from 'react';

export function StatusBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">{text}</span>
    </div>
  );
}

export function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">
      <span className="text-[10px] text-zinc-500 uppercase font-mono">{label}</span>
      <span className="text-xs text-emerald-400 font-mono font-bold">{value}</span>
    </div>
  );
}

export function SectionHeader({ title, index }: { title: string; index: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-zinc-600 font-mono text-sm">[{index}]</span>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 uppercase italic">
        {/* Section Title */}
        {`// ${title}`}
      </h2>
      <div className="h-px flex-1 bg-zinc-800"></div>
    </div>
  );
}
