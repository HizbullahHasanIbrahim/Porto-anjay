import { 
  ArchitectureNode, 
  ArchitectureEdge, 
  ArchitectureSimulationScenario, 
  ProjectCaseStudy, 
  TerminalCommandConfig 
} from "@/types/system";

export const profileData = {
  name: "Hizbullah Hasan Ibrahim",
  headline: "Mahasiswa Sistem Informasi & Aspiring Frontend / UI-UX Developer",
  institution: "Universitas Ahmad Dahlan",
  specialization: ["Frontend Development", "UI/UX Design"],
  statusBadges: ["Looking for Internship", "Open to Connect"],
  bio: "Mahasiswa S1 Sistem Informasi di Universitas Ahmad Dahlan dengan fondasi Rekayasa Perangkat Lunak dari SMK N 1 Bantul. Fokus mempelajari perancangan antarmuka yang intuitif (UI/UX) dan mengimplementasikannya menjadi aplikasi web yang responsif.",
  links: {
    cv: "/files/CV-Hizbullah-Hasan-Ibrahim.pdf",
    github: "https://github.com/hizbullah-ibrahim"
  }
};

export const educationData = [
  {
    id: "edu-uad",
    institution: "Universitas Ahmad Dahlan (UAD)",
    major: "S1 Sistem Informasi — FAST",
    period: "2024 — Sekarang",
    status: "Ongoing",
    courses: ["Pemrograman Web", "UI/UX", "Basis Data", "RPL"]
  },
  {
    id: "edu-smk",
    institution: "SMK N 1 Bantul",
    major: "Rekayasa Perangkat Lunak (RPL)",
    period: "2021 — 2024",
    status: "Lulus",
    courses: ["Web & Mobile Dev", "MySQL", "OOP", "UI Design"]
  }
];

export const organizationData = [
  {
    id: "org-p2k",
    title: "Panitia P2K FAST UAD",
    org: "Fakultas FAST UAD",
    period: "2024",
    description: "Orientasi mahasiswa baru fakultas FAST."
  },
  {
    id: "org-hmsi",
    title: "HMSI UAD",
    org: "Himpunan Mahasiswa Sistem Informasi",
    period: "Aktif",
    description: "Pengembangan hardskill & softskill mahasiswa."
  }
];

export const skillsMatrix = {
  languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "SQL", "PHP"],
  frameworks: ["Next.js", "React", "Tailwind CSS", "Bootstrap"],
  tools: ["Git", "Figma", "Postman", "Docker", "VS Code"]
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
    name: "Simulasi 1: Booking Ruang Lab (Cache Miss -> DB Write)",
    triggerButtonLabel: "Simulasi: Booking Ruang Lab",
    summary: "Alur submit data dari UI ke Database",
    steps: [
      { stepIndex: 0, activeNodeId: "node-1", status: "PROCESSING", logMessage: "User submit form booking...", durationMs: 600 },
      { stepIndex: 1, activeNodeId: "node-2", activeEdgeId: "edge-1", status: "PROCESSING", logMessage: "Validating session at edge...", durationMs: 800 },
      { stepIndex: 2, activeNodeId: "node-3", activeEdgeId: "edge-2", status: "PROCESSING", logMessage: "Executing domain logic...", durationMs: 1000 },
      { stepIndex: 3, activeNodeId: "node-4", activeEdgeId: "edge-3", status: "SUCCESS", logMessage: "Data persisted to PostgreSQL.", durationMs: 600 }
    ]
  },
  {
    id: "scen-2",
    name: "Simulasi 2: Filter Katalog (Cache Hit)",
    triggerButtonLabel: "Simulasi: Filter Katalog",
    summary: "Fetch data cepat dari edge cache",
    steps: [
      { stepIndex: 0, activeNodeId: "node-1", status: "PROCESSING", logMessage: "Filtering projects...", durationMs: 400 },
      { stepIndex: 1, activeNodeId: "node-2", activeEdgeId: "edge-1", status: "CACHED", logMessage: "Cache hit at Edge Gateway.", durationMs: 400 },
      { stepIndex: 2, activeNodeId: "node-1", status: "SUCCESS", logMessage: "UI updated instantly.", durationMs: 400 }
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
  },
  {
    id: "proj-2",
    title: "StudyFlow",
    category: "Personal Project",
    problemStatement: "Mahasiswa kesulitan mengatur prioritas tugas.",
    tradeOff: {
      decisionChosen: "LocalStorage persistence",
      alternativeRejected: "Cloud DB for MVP",
      engineeringRationale: "Zero-latency for local task management."
    },
    impact: {
      primaryMetric: "98 Lighthouse Score",
      qualitativeOutcome: "UX mulus tanpa loading spinner."
    },
    techStack: ["React", "TypeScript", "Framer Motion"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: "proj-3",
    title: "IndoCampus UI",
    category: "Open-Source",
    problemStatement: "Kurangnya UI kit akademik yang aksesibel.",
    tradeOff: {
      decisionChosen: "Headless UI + Tailwind",
      alternativeRejected: "Ant Design / MUI",
      engineeringRationale: "Full styling flexibility & smaller bundle."
    },
    impact: {
      primaryMetric: "100% A11y Score",
      qualitativeOutcome: "Komponen siap pakai untuk mahasiswa."
    },
    techStack: ["React", "Tailwind", "TypeScript"],
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
      { cmd: "orgs", desc: "Organizations" },
      { cmd: "contact", desc: "Get contact info" },
      { cmd: "clear", desc: "Clear terminal" }
    ]
  },
  {
    command: "projects",
    description: "Show featured projects",
    outputFormat: "JSON",
    responsePayload: projectCaseStudies.map(p => ({ title: p.title, category: p.category, tech: p.techStack }))
  },
  {
    command: "techstack",
    description: "Show technologies used",
    outputFormat: "JSON",
    responsePayload: skillsMatrix
  },
  {
    command: "education",
    description: "Show academic history",
    outputFormat: "JSON",
    responsePayload: educationData
  },
  {
    command: "orgs",
    description: "Show organizations",
    outputFormat: "JSON",
    responsePayload: organizationData
  },
  {
    command: "contact",
    description: "Get contact info",
    outputFormat: "JSON",
    responsePayload: {
      email: "hizbullah.ibrahim@webmail.uad.ac.id",
      whatsapp: "+62 812-xxxx-xxxx",
      location: "Yogyakarta, ID"
    }
  }
];
