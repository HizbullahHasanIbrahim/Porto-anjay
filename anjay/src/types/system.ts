// src/types/system.ts

export type ProjectCategory = "Tugas Kampus" | "Personal Project" | "Open-Source";

export interface TechnicalTradeOff {
  decisionChosen: string;
  alternativeRejected: string;
  engineeringRationale: string;
}

export interface MeasuredImpact {
  primaryMetric: string;
  secondaryMetric?: string;
  qualitativeOutcome: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: ProjectCategory;
  problemStatement: string;
  tradeOff: TechnicalTradeOff;
  impact: MeasuredImpact;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export type NodeLayer = "CLIENT" | "EDGE_GATEWAY" | "CORE_SERVICE" | "DATA_STORE";
export type NodeStatus = "IDLE" | "PROCESSING" | "SUCCESS" | "CACHED";

export interface ArchitectureNode {
  id: string;
  label: string;
  subLabel: string;
  layer: NodeLayer;
  techBadge: string;
  iconName: "Monitor" | "Cpu" | "Database" | "ShieldCheck" | "Layers" | "Zap";
  description: string;
  latencyMs: number;
}

export interface ArchitectureEdge {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  protocolLabel: string;
}

export interface SimulationStep {
  stepIndex: number;
  activeNodeId: string;
  activeEdgeId?: string;
  status: NodeStatus;
  logMessage: string;
  durationMs: number;
}

export interface ArchitectureSimulationScenario {
  id: string;
  name: string;
  triggerButtonLabel: string;
  summary: string;
  steps: SimulationStep[];
}

export type TerminalCommandName =
  | "help"
  | "projects"
  | "techstack"
  | "contact"
  | "education"
  | "orgs"
  | "clear";

export type TerminalOutputFormat = "ASCII" | "JSON" | "TABLE_TEXT" | "ERROR";

export interface TerminalCommandConfig {
  command: TerminalCommandName;
  description: string;
  outputFormat: TerminalOutputFormat;
  responsePayload: string | Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface TerminalHistoryEntry {
  id: string;
  timestamp: string;
  rawInput: string;
  outputFormat: TerminalOutputFormat;
  renderedOutput: string;
}
