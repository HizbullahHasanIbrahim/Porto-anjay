import React from 'react';
import { StatusBadge } from '@/components/ui/SystemUI';
import { profileData } from '@/data/portfolioSystemData';
import { FileDown, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="py-20 lg:py-32 border-b border-zinc-900">
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap gap-3">
          {profileData.statusBadges.map(badge => (
            <StatusBadge key={badge} text={badge} />
          ))}
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-100">
          {profileData.name}
        </h1>
        
        <p className="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
          {profileData.headline}
        </p>

        <p className="text-zinc-500 max-w-xl leading-relaxed">
          {profileData.bio}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href={profileData.links.cv} 
            className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-bold rounded-lg hover:bg-white transition-all group"
          >
            <FileDown size={18} />
            Download CV (PDF)
          </a>
          <a 
            href={profileData.links.github} 
            target="_blank" 
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold rounded-lg hover:border-zinc-700 transition-all"
          >
            <span className="font-mono text-sm">[GitHub]</span>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
