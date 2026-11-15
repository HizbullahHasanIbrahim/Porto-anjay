import { ArchitectureNode, ArchitectureEdge, ArchitectureSimulationScenario, ProjectCaseStudy, TerminalCommandConfig } from "@/types/system";

export const profileData = {
  name: "Hizbullah Hasan Ibrahim",
  headline: "Mahasiswa Sistem Informasi & Aspiring Frontend / UI-UX Developer",
  institution: "Universitas Ahmad Dahlan",
  specialization: ["Frontend Development", "UI/UX Design"],
  statusBadges: ["Looking for Internship", "Open to Connect"],
  bio: "Mahasiswa S1 Sistem Informasi di Universitas Ahmad Dahlan dengan fondasi Rekayasa Perangkat Lunak dari SMK N 1 Bantul. Fokus pada perancangan antarmuka intuitif dan aplikasi web responsif.",
  links: {
    cv: "#",
    github: "https://github.com/hizbullah-ibrahim"
  }
};

export const architectureNodes: ArchitectureNode[] = [
  { id: "node-1", label: "Next.js UI", subLabel: "Client Layer", layer: "CLIENT", techBadge: "React/TS", iconName: "Monitor", description: "Modern responsive interface", latencyMs: 12 },
  { id: "node-2", label: "Edge Auth", subLabel: "Gateway", layer: "EDGE_GATEWAY", techBadge: "Middleware", iconName: "ShieldCheck", description: "Security & Validation", latencyMs: 25 },
  { id: "node-3", label: "Domain Logic", subLabel: "Core Service", layer: "CORE_SERVICE", techBadge: "Server Actions", iconName: "Cpu", description: "Business rules execution", latencyMs: 45 },
  { id: "node-4", label: "PostgreSQL", subLabel: "Data Store", layer: "DATA_STORE", techBadge: "Prisma/DB", iconName: "Database", description: "Persistent storage", latencyMs: 18 }
];

export const architectureEdges: ArchitectureEdge[] = [
  { id: "edge-1", fromNodeId: "node-1", toNodeId: "node-2", protocolLabel: "HTTPS/JSON" },
  { id: "edge-2", fromNodeId: "node-2", toNodeId: "node-3", protocolLabel: "gRPC/Internal" },
  { id: "edge-3", fromNodeId: "node-3", toNodeId: "node-4", protocolLabel: "SQL/Prisma" }
];

export const simulationScenarios: ArchitectureSimulationScenario[] = [
  {
    id: "scen-1",
    name: "Booking Ruang Lab",
    triggerButtonLabel: "Simulasi: Booking Ruang Lab",
    summary: "Alur submit data dari UI ke Database",
    steps: [
      { stepIndex: 0, activeNodeId: "node-1", status: "PROCESSING", logMessage: "User submit form booking...", durationMs: 600 },
      { stepIndex: 1, activeNodeId: "node-2", activeEdgeId: "edge-1", status: "PROCESSING", logMessage: "Validating session at edge...", durationMs: 800 },
      { stepIndex: 2, activeNodeId: "node-3", activeEdgeId: "edge-2", status: "PROCESSING", logMessage: "Executing domain logic...", durationMs: 1000 },
      { stepIndex: 3, activeNodeId: "node-4", activeEdgeId: "edge-3", status: "SUCCESS", logMessage: "Data persisted to PostgreSQL.", durationMs: 600 }
    ]
  }
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "proj-1",
    title: "SI-RuangLab",
    category: "Tugas Kampus",
    problemStatement: "Mahasiswa sering bentrok jadwal praktikum.",
    tradeOff: {
      decisionChosen: "Optimistic UI Updates",
      alternativeRejected: "Full Page Reload on submit",
      engineeringRationale: "Menurunkan perceived latency hingga 40%."
    },
    impact: {
      primaryMetric: "-65% Konfirmasi Jadwal",
      qualitativeOutcome: "Proses peminjaman lebih transparan."
    },
    techStack: ["Next.js", "Tailwind", "Prisma"],
    githubUrl: "#",
    liveDemoUrl: "#"
  }
];

export const terminalCommands: TerminalCommandConfig[] = [
  {
    command: "help",
    description: "List available commands",
    outputFormat: "TABLE_TEXT",
    responsePayload: [
      { cmd: "projects", desc: "Show case studies" },
      { cmd: "techstack", desc: "List tech stack" },
      { cmd: "education", desc: "Academic history" },
      { cmd: "clear", desc: "Clear terminal" }
    ]
  },
  {
    command: "techstack",
    description: "Show technologies used",
    outputFormat: "JSON",
    responsePayload: {
      frontend: ["Next.js", "React", "Tailwind"],
      backend: ["Node.js", "PostgreSQL"],
      tools: ["Figma", "Docker", "Git"]
    }
  }
];
