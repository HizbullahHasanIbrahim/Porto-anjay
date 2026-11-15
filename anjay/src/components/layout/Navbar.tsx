"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "// 00. HERO" },
    { href: "#playground", label: "// 01. PLAYGROUND" },
    { href: "#projects", label: "// 02. PROJECTS" },
    { href: "#education", label: "// 03. ACADEMICS" },
    { href: "#skills", label: "// 04. SKILLS" },
    { href: "#contact", label: "// 05. CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 px-6 lg:px-24 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-mono text-xs font-bold text-zinc-100 tracking-wider">SYSTEM: ONLINE</span>
      </div>

      <nav className="hidden lg:flex items-center gap-6">
        {links.map(link => (
          <a key={link.href} href={link.href} className="font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors">
            {link.label}
          </a>
        ))}
      </nav>

      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-zinc-400 hover:text-white">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 lg:hidden">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-mono text-xs text-zinc-300">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
