# Audit Fixes & Full Portfolio Implementation Plan

**Goal:** Perbaiki seluruh temuan audit (linter error, CSS font override, CLI handler) dan selesaikan 5 section yang belum diimplementasikan sesuai PRD.md dan SDD.md.

**Architecture:** Next.js (App Router, Server & Client components boundary), Tailwind CSS v4, Lucide React icons.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Lucide React.

---

### Task 1: Fix Linter & Type Errors & CSS Font Tokens
- Modify `anjay/src/components/playground/MiniTerminalCLI.tsx`: Initial state in `useState`, fix `useEffect` cascading render.
- Modify `anjay/src/app/page.tsx` & `anjay/src/components/ui/SystemUI.tsx`: Fix JSX comment syntax.
- Modify `anjay/src/components/playground/ArchitectureShowcase.tsx`: Remove unused imports/state (`architectureEdges`, `setCurrentScenario`).
- Modify `anjay/src/components/sections/HeroSection.tsx`: Remove unused `ArrowRight` import.
- Modify `anjay/src/app/globals.css`: Fix font override (`Arial` -> `var(--font-sans)`).

### Task 2: Complete Data Seeds (`src/data/portfolioSystemData.ts`)
- Populate complete data from PRD.md & SDD.md:
  - 3 projects (`SI-RuangLab`, `StudyFlow`, `IndoCampus UI`) with trade-offs & impact.
  - Education history (UAD S1 SI & SMK N 1 Bantul RPL).
  - Organization history (P2K FAST UAD & HMSI UAD).
  - Skills matrix (Languages, Frameworks, Developer Tools).
  - CLI Command handlers for `projects`, `education`, `orgs`, `contact`, `techstack`, `help`, `clear`.
  - 2 Architecture simulation scenarios & Quick Command chips.

### Task 3: Build Missing Layout & Section Components
- Create `anjay/src/components/layout/Navbar.tsx`: Sticky telemetry header (`SYSTEM: ONLINE`), jump links, mobile menu.
- Create `anjay/src/components/playground/TradeOffCard.tsx` & `anjay/src/components/sections/TradeOffProjectsSection.tsx`.
- Create `anjay/src/components/sections/AcademicAndOrgSection.tsx`.
- Create `anjay/src/components/sections/SkillsMatrixSection.tsx`.
- Create `anjay/src/components/layout/DirectContactFooter.tsx`.

### Task 4: Enhance Playground & Update `src/app/page.tsx`
- Update `MiniTerminalCLI.tsx`: Add quick command chips & auto-scroll.
- Update `HeroSection.tsx`: Add CV link & `rel="noopener noreferrer"` for external links.
- Assemble all sections in `src/app/page.tsx` with proper section IDs (`#hero`, `#playground`, `#projects`, `#education`, `#skills`, `#organizations`, `#contact`).
- Run `npm run lint` and `npm run build` to verify 0 errors.
