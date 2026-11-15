"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SystemUI';
import { Mail, MessageSquare } from 'lucide-react';

export function DirectContactFooter() {
  return (
    <section id="contact" className="py-20">
      <SectionHeader title="DIRECT_CONTACT_&_COLLABORATION" index="05" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-100">{`Let's build something exceptional together.`}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Terbuka untuk peluang magang (*internship*), kolaborasi proyek riset dosen, maupun diskusi seputar pengembangan frontend dan UI/UX.
          </p>

          <div className="space-y-4 pt-4 font-mono text-xs">
            <a 
              href="mailto:hizbullah.ibrahim@webmail.uad.ac.id" 
              className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-emerald-500/50 transition-colors text-zinc-300"
            >
              <Mail size={16} className="text-emerald-400" />
              hizbullah.ibrahim@webmail.uad.ac.id
            </a>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-emerald-500/50 transition-colors text-zinc-300"
            >
              <MessageSquare size={16} className="text-cyan-400" />
              WhatsApp Direct Message
            </a>
          </div>
        </div>

        <form onSubmit={e => { e.preventDefault(); alert('Message sent successfully.'); }} className="space-y-4 font-mono text-xs">
          <div className="space-y-1">
            <label className="text-zinc-500">Your Name</label>
            <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-zinc-100 outline-none focus:border-emerald-500" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-zinc-500">Email Address</label>
            <input type="email" required className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-zinc-100 outline-none focus:border-emerald-500" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-zinc-500">Message / Purpose</label>
            <textarea rows={4} required className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-zinc-100 outline-none focus:border-emerald-500" placeholder="Discussing internship / project..."></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-500 text-zinc-950 font-bold rounded uppercase hover:bg-emerald-400 transition-colors">
            Transmit Message
          </button>
        </form>
      </div>

      <div className="mt-20 pt-8 border-t border-zinc-950 text-center font-mono text-xs text-zinc-600">
        © 2026 Hizbullah Hasan Ibrahim. Built with Next.js App Router & Tailwind CSS v4.
      </div>
    </section>
  );
}
