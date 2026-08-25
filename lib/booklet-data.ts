/**
 * Single typed source of truth for the /booklet page (13 bagian).
 * This site is canonical — if a PDF or WhatsApp message disagrees with this
 * file, this file wins. Revise here; the page re-renders automatically.
 */

export const BOOKLET_VERSION = {
  label: "Versi 25 Agustus 2026",
  revision: "rev.12",
  updatedAt: "2026-08-25",
};

export const bookletTruthNote =
  "Booklet ini merupakan the source of truth program (dapat berubah sewaktu-waktu dengan pemberitahuan).";

export const bookletChangeNotice =
  "Isi, jadwal, dan keterangan dapat berubah dengan pemberitahuan dari panitia";

// ---- Bagian 1 — Pembuka ----

export const bookletIntro = {
  eyebrow: "Booklet Program",
  title: "Graduate Mentorship 2026",
  tagline: "Connecting Ambition with Leadership Excellence",
  org: "ILUNI GPTK FTUI",
  positioning:
    "Graduate Mentorship 2026 adalah program pembelajaran terstruktur selama tiga bulan yang mempertemukan alumni DTK UI angkatan 2020–2022 dengan alumni yang telah berpengalaman di industri untuk memperkuat silaturahmi ILUNI GPTK FTUI, berbagi pengalaman, dan menguatkan kepemimpinan.",
};

export const bookletStats: { value: string; label: string }[] = [
  { value: "106", label: "Mentee aktif" },
  { value: "42", label: "Mentor" },
  { value: "20", label: "Kelompok mentoring" },
  { value: "2", label: "Jalur karier" },
  { value: "3", label: "Bulan program" },
];

// ---- Bagian 2 — Dua jalur peserta ----

export const tracks = {
  entering: {
    name: "Entering the Industry",
    count: 55,
    desc: "Belum bekerja penuh atau sedang magang. Pertanyaan khasnya: bagaimana masuk ke industri tujuan, kompetensi apa yang menentukan, jalur rekrutmen seperti apa.",
  },
  growing: {
    name: "Growing in the Industry",
    count: 51,
    desc: "Sudah atau pernah bekerja full-time/kontrak. Pertanyaan khasnya: bagaimana naik ke tahap berikutnya, mengelola stakeholder, memilih spesialisasi.",
  },
  placementRules: [
    "Magang/intern/early joiner → Entering",
    "Pekerjaan tetap atau kontrak penuh → Growing.",
  ],
};

// ---- Bagian 3 — Tiga pilar kurikulum ----

export const pillars: { name: string; subtitle: string; content: string; deliveredIn: string }[] = [
  {
    name: "Read the Map",
    subtitle: "Ekosistem & Industri",
    content: "Lanskap industri, jalur karier, kompetensi teknis, cara kerja perusahaan.",
    deliveredIn: "Group Mentoring",
  },
  {
    name: "Steer the Ship",
    subtitle: "Kepemimpinan & Profesionalisme",
    content: "Strategic thinking, komunikasi, stakeholder management, etika & integritas.",
    deliveredIn: "Kuliah Umum",
  },
  {
    name: "Know Your Compass",
    subtitle: "Pengembangan Diri",
    content: "Self-leadership, resiliensi, learning agility, personal branding.",
    deliveredIn: "Kuliah Umum + refleksi mandiri",
  },
];

export const pillarsPrinciple =
  "Topik yang jawabannya sama untuk semua orang → kuliah umum. Topik yang jawabannya bergantung industri → kelompok.";

// ---- Bagian 4 — Empat lapis kegiatan ----

export const activityLayers: { name: string; type: string; wajib: string; dinilai: string; desc: string }[] = [
  {
    name: "Kuliah Umum",
    type: "INTI",
    wajib: "Wajib 3 sesi",
    dinilai: "Dinilai 15%",
    desc: "Seluruh 106 mentee. KU1 Know Your Compass, KU2 Steer the Ship, KU3 Panel Jalur Karier Alternatif.",
  },
  {
    name: "Group Mentoring",
    type: "INTI",
    wajib: "Minimal 4 sesi",
    dinilai: "Dinilai 40%",
    desc: "Inti program. Minimal 4 sesi, 60–90 menit, daring/luring/hybrid sesuai kesepakatan kelompok.",
  },
  {
    name: "Sesi Tematik Terbuka",
    type: "OPSIONAL",
    wajib: "Tidak wajib",
    dinilai: "Tidak dinilai",
    desc: "Dua sesi tematik untuk permintaan yang tersebar di banyak kelompok.",
  },
  {
    name: "Individual Mentoring",
    type: "OPSIONAL",
    wajib: "Tidak wajib",
    dinilai: "Tidak dinilai",
    desc: "Opsional, menyesuaikan permintaan mentee dan kesediaan mentor.",
  },
];

// ---- Bagian 5 — Anchor Mentor & Co-Mentor ----

export const mentorRoles = {
  anchor: {
    title: "Anchor Mentor",
    desc: "Hadir di seluruh sesi bersama Co-Mentor, memimpin diskusi, dan mengenal tiap mentee. Secara administratif, Anchor Mentor yang mengisi formulir penilaian di akhir program dan menjadi penanggung jawab kelompok bagi panitia.",
    commitment: "Seluruh sesi",
  },
  coMentor: {
    title: "Co-Mentor",
    desc: "Hadir di seluruh sesi bersama Anchor Mentor, sama-sama memimpin diskusi, dan sama-sama mengenal tiap mentee. Bedanya tinggal satu hal administratif: tidak mengisi formulir penilaian akhir.",
    commitment: "Seluruh sesi, setara Anchor",
  },
  teamStatement: {
    lead: "Anchor Mentor dan Co-Mentor bekerja sebagai satu tim.",
    body: "Keduanya diharapkan hadir di seluruh sesi, sama-sama memimpin diskusi, dan sama-sama mengenal tiap mentee. Pembedaannya tinggal satu hal administratif: Anchor Mentor yang mengisi formulir penilaian di akhir program dan menjadi penanggung jawab kelompok bagi panitia.",
  },
  diversityNote:
    "Dua mentor di ruangan yang sama adalah upaya untuk mendiversifikasi sudut pandang dan memperkaya diskusi, sekaligus menguatkan silaturahmi dan meringankan beban individual",
  composition:
    "20 Anchor + 22 Co-Mentor = 42 mentor. Seluruh mentor memegang kelompok, hadir penuh di tiap sesi. Peran kuliah umum, panel, narasumber sesi tematik, dan dewan juri bersifat tambahan di atas peran kelompok.",
};

// ---- Bagian 6 — Agenda Sesi ----

export const agendaSesiFrame =
  "Agenda ini hanya usulan yang bisa dijadikan dasar dalam membangun agenda di dalam kelompok. Yang terpenting adalah bahan yang akan dibawa pulang oleh para mentee. Bagaimana kelompok sampai ke sana sepenuhnya keputusan masing-masing.";

export type AgendaSesiRow = {
  sesi: string;
  kapan: string;
  fokus: string;
  pillarMain: string;
  pillarSupport: string[];
  bahan: string;
  briefLabel: string;
  briefRefs: string[];
  open?: boolean;
};

export const agendaSesiTable: AgendaSesiRow[] = [
  {
    sesi: "1",
    kapan: "25–31 Agu",
    fokus: "Memetakan wilayah",
    pillarMain: "Read the Map",
    pillarSupport: ["Know Your Compass", "Steer the Ship"],
    bahan: "Satu pertanyaan utama",
    briefLabel: "1. Pertanyaan",
    briefRefs: ["ib-1"],
  },
  {
    sesi: "2",
    kapan: "Akhir Sep",
    fokus: "Pendalaman teknis",
    pillarMain: "Read the Map",
    pillarSupport: ["Steer the Ship", "Know Your Compass"],
    bahan: "Kerangka ±200 kata",
    briefLabel: "2. Apa yang saya pelajari",
    briefRefs: ["ib-2"],
  },
  {
    sesi: "3",
    kapan: "Akhir Okt",
    fokus: "Ulasan draft",
    pillarMain: "Steer the Ship",
    pillarSupport: ["Read the Map", "Know Your Compass"],
    bahan: "Draft lengkap",
    briefLabel: "3. Analisis",
    briefRefs: ["ib-3"],
  },
  {
    sesi: "4",
    kapan: "5–10 Nov",
    fokus: "Refleksi & finalisasi",
    pillarMain: "Know Your Compass",
    pillarSupport: ["Steer the Ship", "Read the Map"],
    bahan: "Rekomendasi",
    briefLabel: "4. Rekomendasi · 5. Kredit",
    briefRefs: ["ib-4", "ib-5"],
  },
  {
    sesi: "5, 6, …",
    kapan: "Sesuai kesepakatan",
    fokus: "Ditentukan kelompok",
    pillarMain: "",
    pillarSupport: [],
    bahan: "Opsional",
    briefLabel: "Memperkuat bagian mana pun",
    briefRefs: [],
    open: true,
  },
];

export const agendaSesiTableNotes: string[] = [
  "Pilar yang ditebalkan adalah porsi utama sesi itu; dua lainnya porsi pendukung.",
  "Empat sesi adalah jumlah minimum yang bisa ditambah lebih banyak sesuai kesepakatan kelompok",
];

export const agendaSesiDeadlineNote =
  "Tenggat tiap bahan: 3 hari setelah sesi, dikumpulkan di Google Drive.";

export const agendaThreePillars = {
  lead: "",
  bold: "",
  tail: "",
  paragraphs: [
    "",
  ],
};

export type AgendaSesiCard = {
  num: string;
  title: string;
  duration: string;
  pillar: string;
  items: string[];
  extra?: string;
};

export const agendaSesiCards: AgendaSesiCard[] = [
  {
    num: "Sesi 1",
    title: "Memetakan Wilayah",
    duration: "90 menit",
    pillar: "Read the Map",
    items: [
      "Perkenalan mendalam",
      "Kedua mentor bercerita tentang perjalanan karier masing-masing",
      "Lanskap industri sesuai jalur",
      "Merumuskan pertanyaan utama (case study) bersama",
      "Sepakati tanggal Sesi 2",
    ],
    extra:
      "Tiga kriteria case study: bisa dijawab dengan data publik · ada orang lain yang ingin mengetahui jawabannya · mentee (ataupun mentor) benar-benar ingin tahu.",
  },
  {
    num: "Sesi 2",
    title: "Pendalaman Teknis",
    duration: "90 menit",
    pillar: "Read the Map",
    items: [
      "Kompetensi yang benar-benar menentukan",
      "Bedah pertanyaan tiap mentee 5–7 menit, dibagi antara kedua mentor",
      "Diskusi silang: kedua mentor menanggapi satu kasus yang sama dari sudut masing-masing",
    ],
  },
  {
    num: "Sesi 3",
    title: "Ulasan Draft",
    duration: "90 menit",
    pillar: "Steer the Ship",
    items: [
      "Draft dikirim ke kedua mentor H-3 sebelum sesi",
      "Ulasan bergilir 10–12 menit per mentee",
      "Rangkuman pola kesalahan yang berulang",
    ],
    extra:
      "Ini pelajaran Steer the Ship paling nyata di program: mengubah pemahaman teknis menjadi tulisan yang bisa dibaca orang yang bukan ahli.",
  },
  {
    num: "Sesi 4",
    title: "Refleksi & Finalisasi",
    duration: "90 menit",
    pillar: "Know Your Compass",
    items: [
      "Apa yang berubah dalam tiga bulan selama program",
      "Menajamkan rekomendasi",
      "Pandangan kedua mentor tentang 3–5 tahun ke depan",
      "Rencana setelah program",
      "Foto kelompok",
    ],
  },
];

export const agendaSesiNonNegotiable =
  "Bila kelompok hanya sanggup 60 menit per sesi, bagian mana pun boleh dipersingkat kecuali dua: merumuskan pertanyaan di Sesi 1 dan ulasan draft di Sesi 3. Tanpa keduanya, Insight Brief tidak akan selesai.";

// ---- Bagian 7 — Peta 20 kelompok ----

export type MentorProfile = { name: string; org: string; role: string };
export type Group = {
  code: string;
  track: string;
  anchor: MentorProfile;
  coMentor: MentorProfile[];
  count: number;
};

export const groupsGrowing: Group[] = [
  {
    code: "G1",
    track: "Process Safety — Sisi Operator",
    anchor: { name: "Bugi Setiadi", org: "bp", role: "Process & Process Safety Engineering Team Lead" },
    coMentor: [{ name: "Fakhrian Abqari", org: "QatarEnergy", role: "Sr. Process Safety Engineer" }],
    count: 4,
  },
  {
    code: "G2",
    track: "Process Safety — Sistem Manajemen, Investigasi & Sisi Kontraktor",
    anchor: { name: "Muchammad Ali Lukman", org: "Pertamina (Persero)", role: "Expert Process Safety" },
    coMentor: [{ name: "Yan Mulders Togar", org: "INEOS Aromatics Indonesia", role: "Senior Process Safety Engineer" }],
    count: 5,
  },
  {
    code: "G3",
    track: "O&G Operations & Karier Global",
    anchor: { name: "Rieski Anna Dewi", org: "ExxonMobil Papua New Guinea", role: "Manager Operations Support" },
    coMentor: [{ name: "Khofiful Walidani", org: "Pertamina Hulu Mahakam", role: "Engineer Process" }],
    count: 6,
  },
  {
    code: "G4",
    track: "O&G Projects, Petrokimia & Reliability",
    anchor: { name: "Alif Kurniaputera Artanto", org: "Pertamina Hulu Rokan", role: "Engineer Rotating Equipment" },
    coMentor: [{ name: "Hamzah", org: "Medco Energi", role: "Engineer Concept Development (Process)" }],
    count: 5,
  },
  {
    code: "G5",
    track: "EPC, Commissioning & Plant Start-Up",
    anchor: { name: "Yulan Ibnu Mulkam", org: "INPEX Masela", role: "Sr. Engineer Process Safety SURF GEP" },
    coMentor: [{ name: "Wiyoga Nugroho", org: "Inti Karya Persada Tehnik", role: "Senior Cost Engineer/Coordinator" }],
    count: 5,
  },
  {
    code: "G6",
    track: "Engineering Consultancy, Strategi & Transisi Peran",
    anchor: { name: "Bagus Syaiful Utomo", org: "PGN LNG Indonesia", role: "Process Engineer" },
    coMentor: [{ name: "Muhammad Luthfi Shidqi", org: "Pertamina Hulu Energi", role: "Analyst Long Term Plan & Strategy" }],
    count: 6,
  },
  {
    code: "G7",
    track: "FMCG & Supply Chain",
    anchor: { name: "Alver Berlianta Mahdapati", org: "Mondelez International", role: "AMEA Logistics Lead" },
    coMentor: [{ name: "Putranto Manuhoro", org: "Shell", role: "Supply Chain Strategy and Planning Manager" }],
    count: 5,
  },
  {
    code: "G8",
    track: "FMCG Product, R&D & Procurement",
    anchor: { name: "Raiska Pramadhanya", org: "Unilever", role: "Procurement Manager Rigids" },
    coMentor: [{ name: "Cahyani Fitria Utami", org: "Sterling Products Indonesia (Haleon)", role: "Packaging Engineer" }],
    count: 4,
  },
  {
    code: "G9",
    track: "ESG, Sustainability & Karier Lintas Sektor",
    anchor: { name: "Ichsan", org: "Arsari Enviro Industri", role: "Vice President/Head R&D" },
    coMentor: [{ name: "Fauzan Al Chalifa", org: "Kurita Water Industry", role: "Manager" }],
    count: 5,
  },
  {
    code: "G10",
    track: "Business, Finance & Advisory",
    anchor: { name: "Rayhan Hafidz Ibrahim", org: "Deloitte", role: "Global Trade Advisory Consultant" },
    coMentor: [{ name: "Wong TjinTak", org: "Protelindo", role: "CIO" }],
    count: 6,
  },
];

export const groupsEntering: Group[] = [
  {
    code: "E1",
    track: "Oil & Gas — Jalur Masuk",
    anchor: { name: "Josia T. Simanjuntak", org: "SKK Migas", role: "Spesialis Muda Eksploitasi" },
    coMentor: [{ name: "Ismail Ghulam", org: "bp Indonesia Tangguh UCC Project", role: "Start Up Process Engineer" }],
    count: 6,
  },
  {
    code: "E2",
    track: "O&G Upstream, Drilling & Well Operations — Jalur Masuk",
    anchor: { name: "Muhammad Asyri Nugraha Hidayatullah", org: "ADNOC Offshore", role: "Well Operations Supervisor" },
    coMentor: [
      { name: "Afriandi Eka Prasetya", org: "SKK Migas", role: "Kepala Kelompok Kerja Keteknikan Kerja Ulang & Perawatan Sumur" },
      { name: "Muhammad Arif Alfat", org: "PT Pertamina Hulu Mahakam", role: "Sr Engineer Surface Facility" },
    ],
    count: 5,
  },
  {
    code: "E3",
    track: "Transisi Energi, CCS & Energi Hijau",
    anchor: { name: "Hari Purwito", org: "PLN EPI", role: "Sr. Process Engineer" },
    coMentor: [{ name: "Johanes Anton Witono", org: "Pertamina Hulu Energi", role: "Lead Engineer Surface Facilities" }],
    count: 4,
  },
  {
    code: "E4",
    track: "ESG & Sustainability — Jalur Masuk",
    anchor: { name: "Iwan Budisusanto", org: "Waste Crisis Center KLH", role: "Staf Senior Teknis & Operasional" },
    coMentor: [{ name: "Abid Kamalsyah", org: "University of Melbourne", role: "Research Assistant" }],
    count: 5,
  },
  {
    code: "E5",
    track: "Energy & Engineering Consultancy",
    anchor: { name: "Jayusandi Mulya Sentosa", org: "Meinhardt Indonesia", role: "Process Engineer" },
    coMentor: [{ name: "Justin Edgar", org: "Beca (Bimatekno Karyatama Konsultan)", role: "Process Engineer" }],
    count: 6,
  },
  {
    code: "E6",
    track: "Petrokimia, Kilang & Downstream — Jalur Masuk",
    anchor: { name: "Dani Wibowo", org: "Pertamina Patra Niaga", role: "Section Head SRU & IPAL" },
    coMentor: [{ name: "Adi Prasetyo", org: "Pertamina", role: "Process Engineer" }],
    count: 5,
  },
  {
    code: "E7",
    track: "FMCG & Consumer — Jalur Masuk",
    anchor: { name: "Vina Damayanti Anshori", org: "L'Oréal", role: "Supply Chain Planning Manager" },
    coMentor: [{ name: "Naufal Hafizh", org: "BRIN", role: "Perekayasa Ahli Pertama" }],
    count: 7,
  },
  {
    code: "E8",
    track: "Career Foundations & Rekrutmen",
    anchor: { name: "Budi Mulia Panggabean", org: "Garuda Indonesia", role: "Ground Service Design & Standard Division Head (AVP)" },
    coMentor: [{ name: "Everly Saudale", org: "ExxonMobil", role: "Business Analyst" }],
    count: 6,
  },
  {
    code: "E9",
    track: "Kepemimpinan & Kesiapan Profesional",
    anchor: { name: "Harry MAC", org: "", role: "Executive Coach" },
    coMentor: [{ name: "Alif Ahmadsyah Gibran", org: "Kurita Indonesia", role: "Sales Engineer" }],
    count: 4,
  },
  {
    code: "E10",
    track: "Wirausaha, Bisnis & Arah Karier",
    anchor: { name: "Adi Khafidh Persada", org: "Agnitek Tetra Energi", role: "Direktur" },
    coMentor: [
      { name: "Muhammad Yusuf Arya Ramadhan", org: "WearaTech", role: "CTO" },
      { name: "Vini Paramita Afriadi", org: "Clarichem Indonesia / Kimia Makmur Sentosa", role: "Finance & Direktur" },
    ],
    count: 7,
  },
];

export const groupsAssignmentNote =
  "Mentor 1 dan Mentor 2 di sini hanya menunjukkan urutan pada daftar, bukan penunjukan peran. Siapa yang menjadi Anchor Mentor dan siapa Co-Mentor ditentukan sendiri oleh kedua mentor, sesuai kesepakatan internal masing-masing kelompok.";

// ---- Bagian 8 — Sesi Tematik Terbuka ----

export const thematicSessions: { name: string; audience: string; speakers: string }[] = [
  {
    name: "Karier & Kerja di Luar Negeri",
    audience: "8 mentee dari 6 kelompok",
    speakers: "12 mentor berpengalaman kerja/studi di luar negeri",
  },
  {
    name: "Klinik Studi Lanjut (S2)",
    audience: "7 mentee dari 7 kelompok",
    speakers: "11 mentor, termasuk yang menempuh S2 sambil bekerja",
  },
];

export const thematicSessionsNote =
  "Sesi tematik terbuka tidak menggantikan minimal 4 sesi kelompok wajib.";

export const thematicMoreTopicsNote =
  "Sesi Tematik Terbuka tidak terbatas pada dua topik di atas — topik tambahan dapat dibuka kemudian berdasarkan hasil diskusi mentor-mentee di masing-masing kelompok.";

export const thematicHowTo: { title: string; desc: string }[] = [
  {
    title: "Minat awal — dibuka di Grand Launch, 25 Agustus",
    desc: "Satu formulir, dua centang, tanpa komitmen. Hanya untuk memperkirakan jumlah dan memilih narasumber.",
  },
  {
    title: "Konfirmasi — H-10 sebelum sesi",
    desc: "Peserta yang menyatakan minat menerima tautan konfirmasi dan wajib menuliskan satu pertanyaan yang ingin dijawab di sesi. Tanpa pertanyaan, pendaftaran tidak dihitung.",
  },
  {
    title: "Undangan kalender — H-7",
    desc: "Peserta terkonfirmasi menerima undangan Google Calendar berisi tautan Zoom.",
  },
];

export const thematicQuotaNote =
  "Sesi digelar bila terkumpul minimal 10 pendaftar terkonfirmasi. Di bawah itu, panitia menghubungkan pendaftar langsung ke narasumber yang relevan. Pertanyaan yang masuk dikirim ke narasumber sebelum sesi, jadi paparannya menjawab pertanyaan nyata — bukan materi umum.";

export const thematicOptionalNote =
  "Sesi ini opsional dan tidak dinilai. Tidak ikut tidak mengurangi nilai apa pun. Seluruh sesi direkam dan rekamannya dibagikan ke seluruh peserta, termasuk yang tidak mendaftar.";

// ---- Bagian 9 — Linimasa ----

export const bookletTimeline: { date: string; label: string; highlight?: boolean }[] = [
  { date: "12 Agustus 2026", label: "Pendaftaran mentee ditutup" },
  { date: "18 Agustus 2026", label: "Pengumuman mentor, mentee, dan pembagian kelompok" },
  { date: "20 Agustus 2026", label: "Mentor Briefing (daring, 60 menit, direkam)" },
  { date: "25 Agustus 2026", label: "Grand Launch & Onboarding (hybrid, Jakarta + Zoom)", highlight: true },
  { date: "25–31 Agustus 2026", label: "Sesi 1 tiap kelompok" },
  { date: "20 Agustus – 20 November 2026", label: "Periode mentoring resmi" },
  { date: "Pertengahan September", label: "Kuliah Umum 2 — Steer the Ship" },
  { date: "Pertengahan Oktober", label: "Kuliah Umum 3 — Panel Jalur Karier Alternatif" },
  { date: "15 November 2026", label: "Publikasi serentak Final Project di LinkedIn" },
  { date: "22 November 2026", label: "Closing Ceremony" },
];

export const bookletTimelineNote =
  "Mentor Briefing bergeser dari 19 ke 20 Agustus, dan Grand Launch bergeser dari 22 ke 25 Agustus. Periode mentoring resmi tidak berubah.";

// ---- Bagian 10 — Final Project: Insight Brief ----

export const insightBriefParts: { slug: string; title: string; content: string; length: string }[] = [
  { slug: "ib-1", title: "1. Pertanyaan", content: "Persoalan nyata di industri/karier yang ingin dijawab.", length: "1 slide" },
  { slug: "ib-2", title: "2. Apa yang saya pelajari", content: "Temuan dari sesi mentoring & penelusuran mandiri.", length: "2–3 slide" },
  { slug: "ib-3", title: "3. Analisis", content: "Cara mentee memaknai temuan itu.", length: "2 slide" },
  { slug: "ib-4", title: "4. Rekomendasi / rencana", content: "Apa yang akan dilakukan atau disarankan.", length: "1 slide" },
  { slug: "ib-5", title: "5. Kredit", content: "Nama mentor, peran, dan nama program.", length: "1 slide" },
];

export const insightBriefVariants = {
  a: { label: "Ragam A — Entering", desc: "Memetakan satu peran atau industri yang dituju." },
  b: { label: "Ragam B — Growing", desc: "Mengangkat satu persoalan di bidang kerjanya, dianalisis dengan masukan mentor." },
};

export const insightBriefLength = "Disusun dalam bentuk slide presentasi (bukan esai 600–900 kata), dipublikasikan di LinkedIn, dibangun bertahap lintas empat sesi — bukan tugas tambahan di akhir program.";

export const insightBriefConfidentiality = {
  warning:
    'Secara umum, Final Project disarankan menggunakan data publik atau studi kasus terbuka, di mana mentor memberikan problem statement tanpa mewajibkan data internal perusahaan. Namun, jika mentor dan perusahaan terkait berkenan memberikan tantangan atau proyek nyata, hal tersebut dibebaskan sesuai kesepakatan bersama. Sebagai kehati-hatian etika profesional, mentee disarankan tidak mengklaim hubungan kerja resmi (seperti "Project for [Perusahaan]") di CV atau LinkedIn kecuali atas persetujuan resmi perusahaan, guna menghindari kerancuan saat background check.',
  correctCitation:
    'Final Project: Insight Brief — "Judul". Disusun dalam Graduate Mentorship 2026 ILUNI GPTK FTUI, dibimbing oleh [Nama Mentor], [Jabatan] di [Perusahaan].',
};

// ---- Bagian 11 — Penilaian & sertifikat ----

export const assessmentComponents: { component: string; weight: string; assessor: string }[] = [
  { component: "Kehadiran & keaktifan sesi kelompok", weight: "40%", assessor: "Anchor Mentor" },
  { component: "Insight Brief", weight: "45%", assessor: "Anchor Mentor + Dewan Juri (10 nominasi teratas)" },
  { component: "Kehadiran Kuliah Umum", weight: "15%", assessor: "Panitia" },
];

export const assessmentKuliahUmumNote =
  "Tiap Kuliah Umum bernilai 5%. Hadir langsung memperoleh nilai penuh. Berhalangan hadir tetap bisa memperoleh 70% dengan menonton rekaman dan mengisi refleksi tiga kalimat dalam 7 hari — ketentuan ini ada karena sebagian peserta dan mentor berada di zona waktu Qatar, UEA, Melbourne, dan Papua Nugini.";

export const certificates: { name: string; requirement: string }[] = [
  { name: "Certificate of Participation", requirement: "Hadir minimal 3 dari 4 sesi" },
  { name: "Certificate of Completion", requirement: "Hadir minimal 3 sesi + Final Project terbit" },
  { name: "Certificate of Excellence", requirement: "Completion + terpilih 10 terbaik oleh Dewan Juri" },
];

// ---- Bagian 12 — Platform & peran ----

export const platform: { name: string; desc: string }[] = [
  {
    name: "WhatsApp Community",
    desc: "20 subgrup — pengumuman dan koordinasi harian. Satu siaran sampai ke seluruh peserta, tiap kelompok tetap punya ruang sendiri.",
  },
  {
    name: "Google Drive",
    desc: "Platform berkas utama program — materi, template, rekaman, dan arsip Insight Brief tiap kelompok. Satu folder untuk seluruh peserta.",
  },
  {
    name: "Google Form",
    desc: "Pendaftaran Sesi Tematik dan penilaian akhir Anchor Mentor.",
  },
  {
    name: "Group Coordinator",
    desc: "Satu mentee per kelompok, dipilih saat Group Huddle di Grand Launch. Tugasnya menjadwalkan sesi, mengingatkan anggota, dan melapor ke panitia. Panitia berhubungan dengan 20 koordinator, bukan 106 mentee.",
  },
];

export const platformToolsNote =
  "Seluruh materi, tenggat, dan pengumpulan bahan dilakukan lewat Google Drive, kecuali pendaftaran Sesi Tematik dan penilaian akhir yang memakai Google Form.";

export const driveJoin = {
  label: "Buka Google Drive",
  url: "https://drive.google.com/drive/folders/10PdXjbfk4QDA3c0voXBkid6JlPBAHTub?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
};

// ---- Bagian 13 — FAQ ----

export type BookletFaq = { q: string; a: string };

export const bookletFaqs: BookletFaq[] = [
  {
    q: "Kenapa saya masuk jalur Entering padahal sudah magang?",
    a: "Magang dan internship dihitung sebagai Entering. Jalur Growing untuk yang sudah memegang pekerjaan tetap atau kontrak penuh. Pembedaannya bukan soal kualitas, tapi soal pertanyaan yang sedang relevan bagi Anda.",
  },
  {
    q: "Saya angkatan 2020 tapi sedang tidak bekerja — kenapa masuk Growing?",
    a: "Karena Anda sudah pernah bekerja. Pengalaman itu mengubah jenis pertanyaan yang berguna dibahas di sesi.",
  },
  {
    q: "Kenapa kelompok saya tidak persis sesuai topik yang saya tulis?",
    a: "Penempatan mempertimbangkan kolom topik dan kolom motivasi sekaligus. Bila menurut Anda ada yang keliru, sampaikan ke Anchor Mentor pada Sesi 1 — pemindahan masih mungkin dilakukan di awal program.",
  },
  {
    q: "Saya tidak mengisi kolom topik. Bagaimana saya ditempatkan?",
    a: "Penempatan Anda bersifat sementara dan akan digali Anchor Mentor di Sesi 1.",
  },
  {
    q: "Bisakah saya ikut sesi kelompok lain?",
    a: "Untuk tema yang tersebar — kerja di luar negeri dan studi lanjut S2 — sudah disediakan Sesi Tematik Terbuka. Di luar itu, sampaikan ke Anchor Mentor.",
  },
  {
    q: "Topik yang saya minta tidak ada di kelompok saya. Bagaimana?",
    a: "Sampaikan ke Anchor Mentor. Anchor bisa mengundang mentor lain sebagai narasumber tamu di salah satu sesi kelompok — ini keputusan Anchor, tidak perlu lewat panitia.",
  },
  {
    q: "Apakah program ini menjamin pekerjaan?",
    a: "Tidak. Program ini tentang belajar terstruktur. Peluang bisa muncul, tapi bukan itu yang dijanjikan.",
  },
  {
    q: "Berapa sesi minimal yang harus saya hadiri?",
    a: "Empat sesi kelompok. Sertifikat Participation membutuhkan kehadiran minimal tiga dari empat.",
  },
  {
    q: "Apakah program ini berbayar?",
    a: "Tidak. Gratis sepenuhnya.",
  },
  {
    q: "Saya tidak bisa membuka folder Google Drive pakai email kampus/kantor.",
    a: "Gunakan akun Gmail pribadi. Akun Google Workspace institusi kadang dibatasi domainnya sehingga tidak bisa mengakses folder berbagi lintas organisasi.",
  },
];

// ---- Bagian 14 — Penutup halaman ----

export const closing = {
  hashtags: [
    "#ILUNIGPTKFTUI",
    "#GraduateMentorship2026",
    "#GreatGraduates",
    "#ValuableLeaders",
  ],
};
