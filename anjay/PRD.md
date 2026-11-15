# Product Requirements Document (PRD): Personal Portfolio Website

- **Nama Dokumen:** `PRD.md`
- **Versi:** 1.0.0
- **Peran Arsitek:** UI/UX Designer & Frontend Architect
- **Subjek Portofolio:** Hizbullah Hasan Ibrahim
- **Target Framework:** Next.js (App Router), TypeScript, Tailwind CSS

---

## 1. Ringkasan Produk & Tujuan (Product Overview)

Website portofolio personal *single-page* yang dirancang untuk menampilkan kapabilitas teknis, kepekaan desain antarmuka, latar belakang akademik, dan keaktifan organisasi **Hizbullah Hasan Ibrahim**, seorang mahasiswa S1 Sistem Informasi di **Universitas Ahmad Dahlan (UAD)** dengan fokus spesialisasi pada **Frontend Development** dan **UI/UX Design**.

* **Tujuan Utama:** Memudahkan konversi profil menjadi peluang wawancara pada program magang (*internship*), *bootcamp*, *fast-track hiring*, maupun kolaborasi proyek riset bersama dosen pembimbing.
* **Target Audiens:** *Tech Recruiter*, tim HR program magang, *Engineering Manager*, dan dosen pembimbing proyek riset.
* **Positioning & Tone:** Mahasiswa aktif yang masih dalam perjalanan belajar (*continuous learner*), adaptif, memiliki fondasi teknis sejak SMK Rekayasa Perangkat Lunak hingga perguruan tinggi, serta mampu menerjemahkan masalah pengguna menjadi antarmuka web yang fungsional dan estetis.

---

## 2. Arsitektur Teknis & Desain UI/UX

### 2.1 Spesifikasi Teknis (Tech Stack)
* **Framework:** Next.js (App Router, kombinasi Server & Client Components).
* **Bahasa Pemrograman:** TypeScript (Strict Mode untuk *type-safety* pada seluruh *props* dan data JSON).
* **Styling:** Tailwind CSS (Mobile-first responsive design, sistem *spacing* konsisten, rasio kontras warna memenuhi standar WCAG AA).
* **Ikonografi & Tipografi:** `lucide-react` untuk ikon antarmuka; Google Fonts **Plus Jakarta Sans** (Heading), **Inter** (Body), dan **JetBrains Mono** (Tech tags & kode).
* **Sumber Data:** File statis lokal (`src/data/portfolioData.json`) yang diimpor langsung ke dalam komponen agar AI agent dapat merender seluruh tampilan tanpa *placeholder* kosong.

### 2.2 Prinsip UI/UX & Responsivitas
* **Mobile-First Layout:** Navigasi yang beradaptasi menjadi *sticky navigation* atau *hamburger menu* yang rapi pada perangkat seluler (`< 768px`) serta tata letak *grid* multi-kolom pada layar desktop.
* **Scannability Tinggi:** Hirarki visual menonjolkan *Status Badge*, *Primary CTA* (Download CV & GitHub), serta blok *Problem & Solution* pada setiap kartu proyek.
* **Zero Empty Placeholder:** Seluruh komponen wajib dirender menggunakan struktur data JSON yang telah disiapkan tanpa teks *dummy* seperti *Lorem Ipsum*.

---

## 3. Spesifikasi Fitur & Struktur Section (Single-Page Architecture)

### Section 1: Hero Section (`#hero`)
* **Status Badge:** Komponen *pill badge* di bagian atas dengan indikator titik hijau berdenyut (*animated pulse dot*) bertuliskan `"Looking for Internship"` atau `"Open to Connect"`.
* **Headline & Sub-headline:**
  * Menampilkan nama lengkap **Hizbullah Hasan Ibrahim**.
  * Menyatakan status akademik dan perjalanan belajar secara eksplisit: **Mahasiswa S1 Sistem Informasi — Universitas Ahmad Dahlan** (masih dalam perjalanan belajar) dengan fokus spesialisasi **Frontend Development & UI/UX Design**.
* **Primary Call-to-Action (CTA):**
  * **Primary Button:** `Download CV (PDF)` (mengarah ke file PDF CV dengan atribut `download`).
  * **Secondary Button:** `GitHub Profile` (membuka tab baru ke profil GitHub resmi).

### Section 2: Education & Academics (`#education`)
* **Layout:** *Vertical Timeline* atau *Two-Column Card* yang menampilkan progres pendidikan dari sekolah kejuruan hingga bangku kuliah.
* **Konten Wajib:**
  * **Universitas Ahmad Dahlan (UAD):** S1 Sistem Informasi (Status: *Masih dalam perjalanan / Ongoing*).
  * **SMK N 1 Bantul:** Jurusan Rekayasa Perangkat Lunak / RPL (Status: *Lulus* — fondasi awal rekayasa perangkat lunak dan pemrograman).
  * **Daftar Mata Kuliah Relevan:** Ditampilkan sebagai *badge/chip* pada entri akademik untuk menunjukkan landasan teori dan praktik yang telah dipelajari.

### Section 3: Featured Projects (`#projects`)
* **Layout:** *Responsive Card Grid* (1 kolom di *mobile*, 3 kolom di *desktop*).
* **Kategori Proyek (3 Kartu Utama):**
  1. **Tugas Kampus:** Proyek berbasis studi kasus mata kuliah Sistem Informasi.
  2. **Personal Project:** Proyek eksplorasi mandiri di bidang Frontend Development & UI/UX.
  3. **Open-Source / Kontribusi:** Kontribusi komponen antarmuka atau *template* terbuka untuk komunitas.
* **Atribut Wajib per Kartu:**
  * *Category Badge* (`Tugas Kampus` / `Personal Project` / `Open-Source`).
  * Judul Proyek.
  * **Penjelasan Singkat Masalah & Solusi:** Blok terpisah untuk *Masalah (Problem)* dan *Solusi (Solution)*.
  * **Tech Stack Tags:** Daftar teknologi yang digunakan.
  * **Action Links:** Tautan ke `GitHub Repo` dan `Live Demo`.

### Section 4: Skills & Tools (`#skills`)
* **Layout:** Pengelompokan kartu berdasarkan 3 kategori utama:
  1. **Languages:** Bahasa pemrograman, *markup*, dan kueri basis data.
  2. **Frameworks & Libraries:** Kerangka kerja *frontend* dan *styling*.
  3. **Developer & Design Tools:** Perangkat pendukung *workflow* seperti Git, Postman, Docker, Figma, dan VS Code.

### Section 5: Organizations & Activities (`#organizations`)
* **Layout:** Kartu pengalaman kepanitiaan dan organisasi kampus yang menonjolkan kolaborasi tim, komunikasi, dan kepemimpinan.
* **Konten Wajib:**
  1. **Panitia P2K Fakultas FAST UAD** (Program Pengenalan Kampus Fakultas Sains dan Teknologi Terapan Universitas Ahmad Dahlan).
  2. **Himpunan Mahasiswa Sistem Informasi (HMSI) UAD**.

### Section 6: Footer & Direct Contact (`#contact`)
* **Layout:** *Split Layout* pada desktop (Informasi Kontak Langsung di sisi kiri, *Quick Message Form* di sisi kanan).
* **Komponen Kontak:**
  * **Quick Message Form:** Input `Nama`, `Email`, `Keperluan (Magang / Proyek / Riset)`, dan `Pesan`.
  * **Direct Contact Links:** Tombol aksi langsung ke **Email Profesional** (`mailto:`) dan **WhatsApp Profesional** (`https://wa.me/`) dengan teks pembuka otomatis.

---

## 4. Struktur Direktori Target (Next.js App Router)

```text
src/
├── app/
│   ├── layout.tsx           # Konfigurasi font, metadata SEO, dan root layout
│   ├── page.tsx             # Single-page assembly (Hero, Education, Projects, Skills, Org, Contact)
│   └── globals.css          # Konfigurasi Tailwind CSS dan smooth scrolling
├── components/
│   ├── Navbar.tsx           # Navigasi responsif mobile & desktop
│   ├── HeroSection.tsx      # Headline, status badge, tombol CV PDF & GitHub
│   ├── EducationSection.tsx # Riwayat UAD & SMK N 1 Bantul + mata kuliah relevan
│   ├── ProjectsSection.tsx  # Grid 3 kartu proyek dengan blok Masalah & Solusi
│   ├── SkillsSection.tsx    # Pengelompokan Languages, Frameworks, dan Developer Tools
│   ├── OrgSection.tsx       # Pengalaman P2K Fakultas FAST UAD & HMSI UAD
│   └── ContactFooter.tsx    # Quick message form + direct link Email & WhatsApp
├── data/
│   └── portfolioData.json   # Data JSON siap render tanpa placeholder kosong
└── types/
    └── portfolio.ts         # Interface TypeScript untuk validasi struktur data JSON
```

---

## 5. Struktur Data Dummy JSON Siap Pakai (`src/data/portfolioData.json`)

```json
{
  "profile": {
    "name": "Hizbullah Hasan Ibrahim",
    "headline": "Mahasiswa Sistem Informasi & Aspiring Frontend / UI-UX Developer",
    "institution": "Universitas Ahmad Dahlan",
    "specialization": [
      "Frontend Development",
      "UI/UX Design"
    ],
    "learningStatus": "Masih dalam perjalanan belajar & aktif mengeksplorasi ekosistem pengembangan web modern",
    "statusBadges": [
      "Looking for Internship",
      "Open to Connect"
    ],
    "bio": "Mahasiswa S1 Sistem Informasi di Universitas Ahmad Dahlan dengan fondasi Rekayasa Perangkat Lunak dari SMK N 1 Bantul. Fokus mempelajari perancangan antarmuka yang intuitif (UI/UX) dan mengimplementasikannya menjadi aplikasi web yang responsif. Saat ini siap berkontribusi dan bertumbuh melalui program magang, bootcamp, fast-track hiring, maupun proyek riset dosen.",
    "primaryCta": {
      "cvDownloadUrl": "/files/CV-Hizbullah-Hasan-Ibrahim.pdf",
      "githubProfileUrl": "https://github.com/hizbullah-ibrahim"
    }
  },
  "education": [
    {
      "id": "edu-uad",
      "institution": "Universitas Ahmad Dahlan (UAD)",
      "major": "S1 Sistem Informasi — Fakultas Sains dan Teknologi Terapan (FAST)",
      "location": "Yogyakarta, Indonesia",
      "period": "2024 — Sekarang",
      "status": "Masih dalam perjalanan (Mahasiswa Aktif)",
      "summary": "Mempelajari siklus pengembangan sistem informasi, analisis kebutuhan pengguna, desain antarmuka (UI/UX), serta rekayasa aplikasi berbasis web.",
      "relevantCourses": [
        "Pemrograman Web Dasar & Lanjut",
        "Interaksi Manusia dan Komputer (UI/UX)",
        "Analisis dan Perancangan Sistem Informasi",
        "Sistem Basis Data",
        "Algoritma dan Struktur Data",
        "Rekayasa Perangkat Lunak"
      ]
    },
    {
      "id": "edu-smk",
      "institution": "SMK N 1 Bantul",
      "major": "Rekayasa Perangkat Lunak (RPL)",
      "location": "Bantul, DI Yogyakarta",
      "period": "2021 — 2024",
      "status": "Lulus",
      "summary": "Mempelajari dasar-dasar pemrograman perangkat lunak, pengembangan aplikasi web, manajemen basis data relasional, dan kerja proyek tim.",
      "relevantCourses": [
        "Pemrograman Web dan Perangkat Bergerak",
        "Basis Data (MySQL/SQL)",
        "Pemrograman Berorientasi Objek",
        "Desain UI Dasar & Pemodelan Perangkat Lunak",
        "Produk Kreatif dan Kewirausahaan"
      ]
    }
  ],
  "featuredProjects": [
    {
      "id": "proj-academic",
      "category": "Tugas Kampus",
      "title": "SI-RuangLab: Sistem Peminjaman & Jadwal Laboratorium Kampus",
      "problem": "Mahasiswa dan asisten laboratorium sering mengalami bentrok jadwal peminjaman ruang praktikum karena pencatatan masih dilakukan melalui formulir kertas dan konfirmasi chat manual.",
      "solution": "Merancang desain UI/UX di Figma dan membangun aplikasi web terpusat dengan kalender ketersediaan ruang secara real-time, pelacakan status persetujuan, serta tampilan ramah seluler.",
      "techStack": [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "PostgreSQL"
      ],
      "githubRepoUrl": "https://github.com/hizbullah-ibrahim/si-ruanglab-uad",
      "liveDemoUrl": "https://si-ruanglab-demo.vercel.app"
    },
    {
      "id": "proj-personal",
      "category": "Personal Project",
      "title": "StudyFlow: Student Task & Pomodoro Tracker",
      "problem": "Mahasiswa kerap kesulitan mengatur prioritas antara tugas kuliah, proyek koding mandiri, dan jadwal kegiatan kepanitiaan kampus dalam satu tampilan yang ringkas.",
      "solution": "Mengembangkan aplikasi manajemen tugas bergaya Kanban yang diintegrasikan dengan pengatur waktu Pomodoro, filter prioritas mata kuliah, dan penyimpanan lokal tanpa perlu login rumit.",
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "LocalStorage API"
      ],
      "githubRepoUrl": "https://github.com/hizbullah-ibrahim/studyflow-tracker",
      "liveDemoUrl": "https://studyflow-tracker-demo.vercel.app"
    },
    {
      "id": "proj-opensource",
      "category": "Open-Source / Kontribusi",
      "title": "IndoCampus UI: Komponen Tailwind Aksesibel untuk Web Akademik",
      "problem": "Banyak proyek web mahasiswa membutuhkan komponen siap pakai seperti kartu pengumuman, timeline akademik, dan tabel jadwal yang responsif di layar HP.",
      "solution": "Berkontribusi menyusun koleksi komponen UI berbasis Tailwind CSS & TypeScript yang mudah dikustomisasi, ringan, dan mematuhi standar aksesibilitas semantik HTML5.",
      "techStack": [
        "Next.js App Router",
        "TypeScript",
        "Tailwind CSS",
        "Lucide Icons",
        "HTML5 Semantic"
      ],
      "githubRepoUrl": "https://github.com/hizbullah-ibrahim/indocampus-ui-kit",
      "liveDemoUrl": "https://indocampus-ui-kit.vercel.app"
    }
  ],
  "skillsAndTools": {
    "languages": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "PHP"
    ],
    "frameworks": [
      "Next.js (App Router)",
      "React.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "developerTools": [
      "Git & GitHub",
      "Figma (UI/UX Design & Prototyping)",
      "Postman",
      "Docker",
      "VS Code",
      "Vercel"
    ]
  },
  "organizations": [
    {
      "id": "org-p2k",
      "title": "Panitia Pelaksana P2K Fakultas FAST UAD",
      "organization": "Program Pengenalan Kampus — Fakultas Sains dan Teknologi Terapan Universitas Ahmad Dahlan",
      "period": "Periode Kepanitiaan Mahasiswa Baru",
      "description": "Terlibat aktif dalam menyukseskan rangkaian orientasi dan pengenalan lingkungan akademik bagi mahasiswa baru Fakultas Sains dan Teknologi Terapan (FAST) UAD.",
      "keyContributions": [
        "Berkoordinasi lintas divisi untuk memastikan kesiapan teknis dan kelancaran jadwal acara.",
        "Mendampingi mahasiswa baru dalam adaptasi sistem akademik dan budaya kolaboratif kampus."
      ]
    },
    {
      "id": "org-hmsi",
      "title": "Pengurus / Anggota Aktif HMSI UAD",
      "organization": "Himpunan Mahasiswa Sistem Informasi — Universitas Ahmad Dahlan",
      "period": "Masih Aktif",
      "description": "Wadah pengembangan diri, kolaborasi akademik, dan aspirasi mahasiswa Program Studi Sistem Informasi UAD.",
      "keyContributions": [
        "Berpartisipasi dalam penyelenggaraan kegiatan peningkatan hardskill/softskill serta diskusi teknologi antar mahasiswa.",
        "Mengasah kemampuan komunikasi publik, manajemen kepanitiaan, dan kerja sama tim."
      ]
    }
  ],
  "contact": {
    "email": "hizbullah.ibrahim@webmail.uad.ac.id",
    "whatsappNumber": "6281234567890",
    "whatsappTemplate": "Halo Hizbullah, saya melihat website portofolio Anda dan ingin berdiskusi lebih lanjut terkait peluang magang/kolaborasi proyek.",
    "location": "Bantul, DI Yogyakarta, Indonesia",
    "formSubjects": [
      "Tawaran Magang / Internship",
      "Program Bootcamp / Fast-Track Hiring",
      "Kolaborasi Proyek Riset Dosen",
      "Diskusi Umum / Networking"
    ]
  }
}
```

---

## 6. Kriteria Penerimaan (Acceptance Criteria)

1. **Kelengkapan 6 Section:** Halaman merender `Hero`, `Education & Academics`, `Featured Projects`, `Skills & Tools`, `Organizations & Activities`, dan `Footer / Direct Contact` secara utuh dalam satu halaman (*single-page*).
2. **Kesesuaian Data Profil:** Menampilkan riwayat **SMK N 1 Bantul (Rekayasa Perangkat Lunak)** dan **Universitas Ahmad Dahlan (Sistem Informasi — masih dalam perjalanan)**, serta pengalaman di **P2K Fakultas FAST UAD** dan **HMSI UAD**.
3. **Standar Kartu Proyek:** Ketiga kartu proyek (`Tugas Kampus`, `Personal Project`, `Open-Source`) menampilkan *tech stack tags*, pemisahan jelas antara **Masalah & Solusi**, serta tautan aktif ke repo GitHub dan *live demo*.
4. **Kualitas Teknis & Responsivitas:** Bebas dari *error* TypeScript, responsif penuh di layar *mobile* maupun *desktop*, dan seluruh data terisi langsung dari JSON tanpa *placeholder* kosong.