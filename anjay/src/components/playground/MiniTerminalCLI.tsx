"use client";

import React, { useState, useEffect } from 'react';
import { terminalCommands } from '@/data/portfolioSystemData';
import { TerminalCommandName, TerminalHistoryEntry } from '@/types/system';

export function MiniTerminalCLI() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalHistoryEntry[]>([]);

  useEffect(() => {
    setHistory([
      {
        id: 'init',
        timestamp: new Date().toLocaleTimeString(),
        rawInput: 'boot',
        outputFormat: 'ASCII',
        renderedOutput: 'Welcome to Hizbullah Portfolio CLI v1.0.0\nType "help" for a list of available commands.'
      }
    ]);
  }, []);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase() as TerminalCommandName;
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const matchedConfig = terminalCommands.find(c => c.command === cleanCmd);
    let output = '';

    if (matchedConfig) {
      if (typeof matchedConfig.responsePayload === 'string') {
        output = matchedConfig.responsePayload;
      } else {
        output = JSON.stringify(matchedConfig.responsePayload, null, 2);
      }
    } else {
      output = `Command not found: ${cleanCmd}. Type "help" for a list of commands.`;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString(),
        rawInput: cmdStr,
        outputFormat: matchedConfig?.outputFormat || 'ERROR',
        renderedOutput: output
      }
    ]);
    setInput('');
  };

  return (
    <div className="bg-black border border-zinc-800 rounded-lg overflow-hidden font-mono text-xs flex flex-col h-[400px]">
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        <span className="text-[10px] text-zinc-500 ml-2">hizbullah@uad-portfolio:~</span>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-4">
        {history.map(item => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="text-emerald-500">&gt;</span>
              <span className="text-zinc-200">{item.rawInput}</span>
            </div>
            <pre className="text-zinc-400 whitespace-pre-wrap font-mono text-[11px] leading-relaxed pl-4 border-l border-zinc-800">
              {item.renderedOutput}
            </pre>
          </div>
        ))}
      </div>

      <div className="p-2 border-t border-zinc-800 bg-zinc-950 flex items-center gap-2">
        <span className="text-emerald-500 pl-2">&gt;</span>
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleCommand(input)}
          placeholder="type a command (e.g. 'help')..."
          className="bg-transparent border-none outline-none text-zinc-200 w-full placeholder:text-zinc-700 text-xs"
        />
      </div>
    </div>
  );
}
