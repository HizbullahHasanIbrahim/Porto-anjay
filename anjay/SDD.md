# System Design Document (SDD): High-Conversion Engineering Portfolio & Interactive Playground

* **Nama Dokumen:** `SYSTEM_DESIGN.md`
* **Versi:** 1.0.0
* **Peran Arsitek:** Principal Frontend Engineer & Tech Recruiter Advisor
* **Subjek Portofolio:** Hizbullah Hasan Ibrahim (Sistem Informasi UAD & Alumni RPL SMK N 1 Bantul)
* **Stack Utama:** Next.js (App Router), TypeScript (Strict), Tailwind CSS, Lucide React
* **Target Konversi:** Memikat Tech Recruiter, Engineering Manager, & Dosen Riset dalam $\le 30$ detik pertama.

---

## 0. INSTRUKSI WAJIB UNTUK AUTONOMOUS AI AGENT (SKILLS ACTIVATION)

> **DIRECTIVE UNTUK AI AGENT:**  
> Sebelum mengeksekusi baris kode pertama dari dokumen `SYSTEM_DESIGN.md` ini, Anda **WAJIB mengaktifkan dan menggunakan seluruh *Skills* relevan** yang tersedia pada *environment* Anda:
> 1. **Frontend Design & UI/UX Skill:** Gunakan untuk merancang tata letak berhirarki tinggi, *micro-interactions* halus, tipografi *monospace* yang presisi, serta estetika *Observability Dark Mode* tanpa terlihat seperti *template* generik.
> 2. **Next.js App Router & React Architecture Skill:** Gunakan untuk memisahkan *Server Components* (statik, SEO-friendly) dan *Client Components* (`"use client"` hanya pada *leaf components* interaktif seperti *Playground*, *Simulator*, dan *CLI*).
> 3. **TypeScript Strict Modeling Skill:** Gunakan untuk memastikan seluruh kontrak data pada `src/types/system.ts` tervalidasi ketat tanpa penggunaan tipe `any`.
> 4. **Tailwind CSS Design System Skill:** Gunakan untuk menerapkan *design tokens*, *glassmorphism* tipis (`backdrop-blur`), serta *responsive grid* yang bebas dari *horizontal overflow* pada layar $375\text{px}$.
> 5. **Self-Verification & Debugging Skill:** Gunakan untuk menjalankan pengecekan kompilasi TypeScript (`tsc --noEmit`) dan *linter* setiap kali menyelesaikan satu fase komponen.

---

## 1. Strategi "30-Second Recruiter Hook" & Component Hierarchy

Tech Recruiter rata-rata menghabiskan waktu $20\text{--}30$ detik pada kunjungan pertama. Alih-alih hanya menulis klaim *"Saya menguasai Frontend & Sistem Informasi"*, arsitektur ini langsung menyuguhkan **bukti kapabilitas rekayasa (*engineering proof*)** tepat di bawah *Hero Section* melalui **Interactive System Playground**.

### 1.1 Hirarki Komponen (Server vs. Client Boundary)

* `RootLayout` (**Server Component**) $\rightarrow$ Konfigurasi font (`Plus Jakarta Sans` & `JetBrains Mono`), metadata SEO, dan *dark theme wrapper*.
* `HomePage` (**Server Component**) $\rightarrow$ Mengimpor data statis JSON/TS dan merangkai seluruh *section*:
  * `Navbar` (**Client Component**) $\rightarrow$ *Sticky glass header* dengan indikator status sistem (`SYSTEM: ONLINE`) & *quick jump links*.
  * `HeroSection` (**Server Component**) $\rightarrow$ *Status Badge*, *Value Proposition Headline*, dan *Primary CTA* (Download CV PDF & GitHub).
  * `SystemPlaygroundSection` (**Client Wrapper**) $\rightarrow$ Fitur pembeda utama (*The 30-Second Hook*):
    * `ArchitectureShowcase` (**Client Component**) $\rightarrow$ Diagram sistem modular dengan tombol simulasi *event* dan animasi paket data.
    * `MiniTerminalCLI` (**Client Component**) $\rightarrow$ Emulator *command line* interaktif (`help`, `projects`, `techstack`, `contact`, `whoami`, `clear`).
  * `TradeOffProjectsSection` (**Client/Server Hybrid**) $\rightarrow$ Kartu studi kasus dengan alur **Problem $\rightarrow$ Technical Trade-Off $\rightarrow$ Measured Impact**.
  * `AcademicAndOrgSection` (**Server Component**) $\rightarrow$ *Timeline* UAD & SMK N 1 Bantul serta pengalaman P2K FAST UAD & HMSI UAD.
  * `SkillsMatrixSection` (**Server Component**) $\rightarrow$ Pengelompokan *Languages*, *Frameworks*, dan *Developer Tools*.
  * `DirectContactFooter` (**Client Component**) $\rightarrow$ *Quick message generator* ke WhatsApp/Email profesional.

### 1.2 Struktur File Tree (`src/`)

```text
src/
├── app/
│   ├── layout.tsx                        # Root Server Layout + Font & Dark Theme Setup
│   ├── page.tsx                          # Main Single-Page Assembly
│   └── globals.css                       # Tailwind directives + custom pulse/flow keyframes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                    # Sticky telemetry navbar + mobile drawer
│   │   └── DirectContactFooter.tsx       # Quick message form + direct WA & Email CTA
│   ├── sections/
│   │   ├── HeroSection.tsx               # 5-second identity hook + CV & GitHub CTA
│   │   ├── SystemPlaygroundSection.tsx   # Split/Tabbed container for Diagram & CLI
│   │   ├── TradeOffProjectsSection.tsx   # Grid of Architecture Trade-Off Cards
│   │   ├── SkillsMatrixSection.tsx       # Categorized Languages, Frameworks, Tools
│   │   └── AcademicAndOrgSection.tsx     # UAD, SMKN 1 Bantul, P2K FAST UAD, HMSI UAD
│   ├── playground/
│   │   ├── ArchitectureShowcase.tsx      # Interactive node graph + simulation trigger
│   │   ├── ArchitectureNodeCard.tsx      # Individual modular node with active/pulse state
│   │   ├── MiniTerminalCLI.tsx           # Interactive CLI emulator with JSON/ASCII output
│   │   └── TradeOffCard.tsx              # Problem -> Technical Trade-Off -> Measured Impact card
│   └── ui/
│       ├── StatusBadge.tsx               # Animated emerald/cyan status pill
│       ├── MetricPill.tsx                # Monospace badge for Measured Impact metrics
│       └── SectionHeader.tsx             # Standardized header with terminal-like index tag
├── data/
│   └── portfolioSystemData.ts            # Typed seed data (Projects, Nodes, CLI Commands, Bio)
└── types/
    └── system.ts                         # Strict TypeScript Interfaces & Data Contracts
```

---

## 2. TypeScript Interfaces & Data Contracts (`src/types/system.ts`)

AI Agent **wajib** membuat file `src/types/system.ts` dengan definisi kontrak data berikut tanpa modifikasi yang melemahkan tipe:

```typescript
// src/types/system.ts

export type ProjectCategory = "Tugas Kampus" | "Personal Project" | "Open-Source";

export interface TechnicalTradeOff {
  decisionChosen: string;       // Contoh: "Client-side Optimistic UI + LocalStorage Sync"
  alternativeRejected: string;  // Contoh: "Full Server-side Polling setiap 2 detik"
  engineeringRationale: string; // Alasan teknis pemilihan arsitektur
}

export interface MeasuredImpact {
  primaryMetric: string;        // Contoh: "-65% Waktu Konfirmasi Jadwal"
  secondaryMetric?: string;     // Contoh: "98 Lighthouse Performance Score"
  qualitativeOutcome: string;   // Dampak nyata pada pengguna/sistem
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

// --- 1. INTERACTIVE ARCHITECTURE SHOWCASE CONTRACTS ---

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
  protocolLabel: string; // Contoh: "HTTPS / JSON", "Prisma Query", "Cache Hit"
}

export interface SimulationStep {
  stepIndex: number;
  activeNodeId: string;
  activeEdgeId?: string;
  status: NodeStatus;
  logMessage: string;    // Ditampilkan pada live telemetry log bar di bawah diagram
  durationMs: number;
}

export interface ArchitectureSimulationScenario {
  id: string;
  name: string;          // Contoh: "Simulasi 1: Booking Ruang Lab (Cache Miss -> DB Write)"
  triggerButtonLabel: string;
  summary: string;
  steps: SimulationStep[];
}

// --- 2. TERMINAL CLI MINI CONTRACTS ---

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
```

---

## 3. Theme & Style Tokens: "Observability Dark Mode"

Desain visual mengadopsi estetika *Developer Observability Dashboard* (terinspirasi dari Vercel, Linear, dan Grafana Dark) yang memberikan kesan *clean*, terstruktur, dan berorientasi sistem.

### 3.1 Palet Warna (Tailwind CSS Utility Mapping)

| Token Semantic | Kelas Tailwind CSS | Nilai Hex | Penggunaan Komponen |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `bg-slate-950` / `bg-zinc-950` | `#09090b` | Background utama halaman (`body`) |
| **Elevated Surface** | `bg-zinc-900/80 backdrop-blur-md` | `#18181b` | Kartu proyek, *node* arsitektur, panel terminal |
| **Subtle Surface** | `bg-zinc-900/40` | `#18181b66` | Area *input*, *code block*, kompartemen *Trade-Off* |
| **Border Default** | `border-zinc-800` | `#27272a` | Garis tepi kartu, pemisah *section*, garis *grid* |
| **Border Active/Hover** | `border-emerald-500/50` | `#10b98180` | *Node* yang sedang memproses *event* atau kartu saat *hover* |
| **Primary Accent (System Healthy)** | `text-emerald-400` / `bg-emerald-500` | `#34d399` | Indikator *online*, metrik *Measured Impact*, *prompt* CLI |
| **Secondary Accent (Telemetry)** | `text-cyan-400` / `bg-cyan-500` | `#22d3ee` | Animasi paket data, *badge* arsitektur, *link* interaktif |
| **Trade-Off Highlight** | `text-amber-400` / `border-amber-500/30` | `#fbbf24` | Penanda bagian *Technical Trade-Off* pada kartu proyek |
| **Text Primary** | `text-zinc-100` | `#f4f4f5` | Judul utama, nama komponen, *headline* |
| **Text Secondary** | `text-zinc-400` | `#a1a1aa` | Deskripsi masalah, narasi akademik, *sub-label* |
| **Text Muted / Technical** | `text-zinc-500` | `#71717a` | *Timestamp* log, nomor indeks `[01]`, label protokol |

### 3.2 Tipografi & Hirarki Monospace

* **Heading & Body (`font-sans`):** `Plus Jakarta Sans` atau `Inter` — menjaga keterbacaan narasi bagi HR dan Recruiter.
* **System & Telemetry (`font-mono`):** `JetBrains Mono` — wajib diterapkan pada:
  * Seluruh antarmuka `MiniTerminalCLI`.
  * *Badge* metrik pada `MeasuredImpact` (contoh: `[-65% Latency]`).
  * Label protokol dan latensi pada `ArchitectureShowcase` (contoh: `18ms | HTTPS/JSON`).
  * Nomor urut *section* bergaya dokumentasi teknis (`// 01_SYSTEM_PLAYGROUND`).

### 3.3 Spesifikasi Visual 3 Komponen Utama

1. **Interactive Architecture Showcase (`ArchitectureShowcase.tsx`):**
   * Menampilkan 4 *node* modular dalam barisan responsif: `[1. Next.js Client UI]` $\rightarrow$ `[2. Validation & Auth Edge]` $\rightarrow$ `[3. Domain Logic / API]` $\rightarrow$ `[4. PostgreSQL / Local Cache]`.
   * Dilengkapi 2 tombol simulasi di bagian atas:
     * `Simulasi: Pengajuan Ruang Lab (Optimistic UI)`
     * `Simulasi: Filter Katalog Cepat (Cache Hit)`
   * Saat diklik, *state* `currentStepIndex` berjalan otomatis menggunakan *timer* bertahap ($450\text{ms}$ per langkah). *Node* yang aktif menyala dengan `ring-2 ring-emerald-400 bg-emerald-950/30`, garis penghubung berganti warna menjadi `bg-cyan-400`, dan panel **Live Telemetry Log** di bawah diagram mencetak alur data secara *real-time*.

2. **Terminal CLI Mini (`MiniTerminalCLI.tsx`):**
   * Memiliki *window header* bergaya OS (`● ● ●` dengan judul `hizbullah@uad-portfolio:~`).
   * Menyediakan **Quick Command Chips** yang bisa diklik langsung oleh Recruiter tanpa harus mengetik manual (`help`, `projects`, `techstack`, `contact`, `clear`), di samping *input* teks bagi *engineer* yang ingin mengetik langsung.
   * Merespons perintah `projects` dan `techstack` dengan format JSON yang di-*pretty-print* (`JSON.stringify(data, null, 2)`) berwarna *emerald/cyan*, serta perintah `help` dan `contact` dengan tabel ASCII yang rapi.

3. **Architecture Trade-Off Cards (`TradeOffCard.tsx`):**
   * Setiap kartu proyek dibagi secara visual menjadi 3 kompartemen vertikal:
     * **01. THE PROBLEM (Red/Zinc tint):** Masalah nyata di pengguna/kampus.
     * **02. TECHNICAL TRADE-OFF (Amber/Cyan tint):** *Decision Chosen* vs. *Alternative Rejected* beserta alasan rekayasanya.
     * **03. MEASURED IMPACT (Emerald tint):** *Highlight pill* metrik kuantitatif + hasil akhir, diikuti daftar *Tech Stack* serta tombol **GitHub Repo** & **Live Demo**.

---

## 4. Implementation Steps (45-Minute Autonomous AI Agent Execution Plan)

Ikuti urutan pengerjaan terisolasi di bawah ini secara berurutan agar tidak terjadi *broken import* atau kegagalan kompilasi.

### Tahap 1: Pondasi Tipe, Data Statis & Konfigurasi Tema (Menit 00 $\rightarrow$ 10)
1. **Buat `src/types/system.ts`:** Salin seluruh *interface* dari Bagian 2 dokumen ini.
2. **Buat `src/data/portfolioSystemData.ts`:**
   * Masukkan profil **Hizbullah Hasan Ibrahim** (Mahasiswa S1 Sistem Informasi UAD, Lulusan RPL SMK N 1 Bantul, masih dalam perjalanan belajar).
   * Masukkan 3 data `ProjectCaseStudy` (1 Tugas Kampus `SI-RuangLab`, 1 Personal Project `StudyFlow / Warmindo Smart POS`, 1 Open-Source `IndoCampus UI`) lengkap dengan atribut `tradeOff` dan `impact`.
   * Masukkan 4 `ArchitectureNode`, 3 `ArchitectureEdge`, dan 2 skenario `ArchitectureSimulationScenario`.
   * Masukkan konfigurasi `TerminalCommandConfig` untuk perintah `help`, `projects`, `techstack`, `education`, `orgs`, dan `contact`.
3. **Update `src/app/globals.css` & `src/app/layout.tsx`:** Setel *default background* ke `bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200` dan muat *font* `Plus_Jakarta_Sans` serta `JetBrains_Mono` dari `next/font/google`.

### Tahap 2: Komponen UI Primitif & Hero Section (Menit 10 $\rightarrow$ 18)
1. **Buat `src/components/ui/StatusBadge.tsx`, `MetricPill.tsx`, dan `SectionHeader.tsx`:**
   * Pastikan `StatusBadge` memiliki indikator titik hijau berdenyut (`animate-ping` + titik solid `bg-emerald-400`).
2. **Buat `src/components/layout/Navbar.tsx` & `src/components/sections/HeroSection.tsx`:**
   * Render nama lengkap, status kuliah di Universitas Ahmad Dahlan, fokus spesialisasi (*Frontend Development / UI-UX Design*), *badge* `"Looking for Internship | Open to Connect"`, tombol **Download CV (PDF)**, tombol **GitHub Profile**, serta tombol *scroll* cepat ke **Interactive Playground**.

### Tahap 3: Interactive System Playground — Diagram & CLI (Menit 18 $\rightarrow$ 32)
1. **Buat `src/components/playground/ArchitectureNodeCard.tsx` & `ArchitectureShowcase.tsx` (`"use client"`):**
   * Gunakan `useState` dan `useEffect` untuk mengontrol siklus simulasi (`IDLE` $\rightarrow$ langkah $0, 1, 2, 3$ $\rightarrow$ selesai).
   * Tampilkan *node* dengan ikon dari `lucide-react` (`Monitor`, `ShieldCheck`, `Cpu`, `Database`), *badge* latensi (`12ms`), dan panel *Live Telemetry Log* di bagian bawah yang menampilkan progres simulasi.
2. **Buat `src/components/playground/MiniTerminalCLI.tsx` (`"use client"`):**
   * Kelola *state* `history: TerminalHistoryEntry[]` dan `inputValue: string`.
   * Sediakan *initial boot message* saat komponen pertama kali dirender (menampilkan *banner* ASCII singkat dan petunjuk ketik `help` atau klik *chip* perintah).
   * Implementasikan fungsi `executeCommand(cmd: string)` yang menangani *command* secara *case-insensitive*, mendukung perintah `clear` untuk mengosongkan layar, dan melakukan *auto-scroll* ke bagian bawah kontainer terminal.
3. **Buat `src/components/sections/SystemPlaygroundSection.tsx`:**
   * Di layar *desktop* (`lg:grid-cols-12`), tampilkan `ArchitectureShowcase` pada $7$ kolom kiri dan `MiniTerminalCLI` pada $5$ kolom kanan agar Recruiter dapat melihat keduanya sekaligus tanpa *scrolling* berlebih.

### Tahap 4: Architecture Trade-Off Cards & Seksi Pendukung (Menit 32 $\rightarrow$ 40)
1. **Buat `src/components/playground/TradeOffCard.tsx` & `src/components/sections/TradeOffProjectsSection.tsx`:**
   * Render 3 kartu proyek dengan memisahkan secara tegas blok **Problem**, **Technical Trade-Off** (*Chosen* vs. *Rejected*), dan **Measured Impact** (*Metric Pill*).
   * Pasang tautan eksternal ke GitHub Repo dan Live Demo menggunakan ikon `Github` dan `ExternalLink` dari `lucide-react`.
2. **Buat `src/components/sections/SkillsMatrixSection.tsx`, `AcademicAndOrgSection.tsx`, dan `DirectContactFooter.tsx`:**
   * Pastikan riwayat **SMK N 1 Bantul (Rekayasa Perangkat Lunak)** dan **Universitas Ahmad Dahlan (Sistem Informasi — masih dalam perjalanan)** beserta mata kuliah relevan tampil rapi.
   * Pastikan pengalaman **Panitia P2K Fakultas FAST UAD** dan **Himpunan Mahasiswa Sistem Informasi (HMSI) UAD** tampil di bagian organisasi.
   * Buat formulir pesan cepat di *Footer* yang dapat membuka tautan `https://wa.me/` atau `mailto:` dengan isi pesan yang sudah terformat otomatis.

### Tahap 5: Perakitan Halaman Utama & Verifikasi Akhir (Menit 40 $\rightarrow$ 45)
1. **Rakit `src/app/page.tsx`:** Gabungkan seluruh *section* secara berurutan dengan ID *anchor* yang sesuai (`#hero`, `#playground`, `#projects`, `#education`, `#skills`, `#organizations`, `#contact`).
2. **Jalankan Verifikasi Mandiri (Wajib dilakukan AI Agent):**
   * Jalankan pemeriksaan tipe: `npx tsc --noEmit` $\rightarrow$ pastikan $0$ *error*.
   * Periksa responsivitas *mobile* ($375\text{px}$) $\rightarrow$ pastikan diagram arsitektur berubah menjadi alur vertikal (`flex-col`) di layar kecil dan horizontal (`lg:flex-row`) di layar besar.
   * Pastikan seluruh *command* pada `MiniTerminalCLI` (`help`, `projects`, `techstack`, `contact`, `education`, `orgs`, `clear`) merespons secara instan tanpa *runtime error*.