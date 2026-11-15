"use client";

import React, { useState, useEffect } from 'react';
import { architectureNodes, architectureEdges, simulationScenarios } from '@/data/portfolioSystemData';
import { Monitor, Cpu, Database, ShieldCheck, Layers, Zap, Play } from 'lucide-react';

const icons = { Monitor, Cpu, Database, ShieldCheck, Layers, Zap };

export function ArchitectureShowcase() {
  const [currentScenario, setCurrentScenario] = useState(simulationScenarios[0]);
  const [stepIndex, setStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>(["System initialized. Ready for simulation."]);

  const runSimulation = () => {
    setStepIndex(0);
    setLogs([`Starting: ${currentScenario.name}`]);
  };

  useEffect(() => {
    if (stepIndex >= 0 && stepIndex < currentScenario.steps.length) {
      const step = currentScenario.steps[stepIndex];
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${step.logMessage}`]);
        if (stepIndex < currentScenario.steps.length - 1) {
          setStepIndex(prev => prev + 1);
        } else {
          setStepIndex(-1);
          setLogs(prev => [...prev, "Simulation complete."]);
        }
      }, step.durationMs);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, currentScenario]);

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Architecture Telemetry</h3>
        <button 
          onClick={runSimulation}
          disabled={stepIndex !== -1}
          className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 text-zinc-950 text-xs font-bold rounded uppercase hover:bg-emerald-400 transition-colors disabled:opacity-50"
        >
          <Play size={14} fill="currentColor" />
          {currentScenario.triggerButtonLabel}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
        {architectureNodes.map((node, i) => {
          const Icon = icons[node.iconName];
          const isActive = stepIndex !== -1 && currentScenario.steps[stepIndex].activeNodeId === node.id;
          
          return (
            <React.Fragment key={node.id}>
              <div className={`
                relative z-10 w-full lg:w-40 p-4 rounded-lg border transition-all duration-300
                ${isActive ? 'border-emerald-500 bg-emerald-500/10 ring-1 ring-emerald-500/50' : 'border-zinc-800 bg-zinc-900'}
              `}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${isActive ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-tighter">
                    {node.latencyMs}ms
                  </span>
                </div>
                <div className="font-bold text-xs text-zinc-100">{node.label}</div>
                <div className="text-[10px] text-zinc-500 uppercase">{node.subLabel}</div>
              </div>
              {i < architectureNodes.length - 1 && (
                <div className="hidden lg:block h-px w-8 bg-zinc-800 relative">
                  <div className={`absolute inset-0 bg-emerald-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-8 bg-black/40 rounded p-4 border border-zinc-800/50 h-32 overflow-y-auto font-mono text-[10px]">
        {logs.map((log, i) => (
          <div key={i} className={i === logs.length - 1 ? 'text-emerald-400' : 'text-zinc-600'}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
