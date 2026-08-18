export const event = {
  org: "ILUNI GPTK FTUI",
  name: "Graduate Mentorship 2026",
  tagline: "Connecting AMBITION with Leadership EXCELLENCE",
  price: "Gratis untuk seluruh peserta (mentor & mentee)",
  registerLinks: {
    mentee: "https://bit.ly/RegistrationMentorshipILUNIGPTKUI",
    mentor: "https://bit.ly/RegistrationMentorILUNIGPTKUI",
    website: "https://bit.ly/GraduateMentorshipWebsite",
  },
  stats: {
    mentorsJoined: 42,
    menteesEnrolled: 106,
    groupsCount: 20,
    industryTracks: 5,
    durationMonths: 3,
  },
  contacts: [
    { name: "Ivan Prasetyadi", phone: "081398479340" },
    { name: "Gyman Mardhiana", phone: "085795253394" },
    { name: "Arif Al-Fath", phone: "081283839720" },
  ],
};

export const companies: { name: string; variant: "blue" | "red" | "black" }[] = [
  { name: "bp", variant: "blue" },
  { name: "Shell", variant: "red" },
  { name: "ExxonMobil", variant: "black" },
  { name: "Unilever", variant: "blue" },
  { name: "Pertamina", variant: "red" },
  { name: "L'Oréal", variant: "black" },
  { name: "Deloitte", variant: "blue" },
  { name: "Mondelez", variant: "red" },
  { name: "Qatar Energy", variant: "red" },
  { name: "SKK Migas", variant: "red" },
  { name: "Garuda Indonesia", variant: "blue" },
  { name: "ADNOC", variant: "blue" },
  { name: "PLN", variant: "blue" },
  { name: "INEOS", variant: "red" },
  { name: "PGN LNG", variant: "blue" },
  { name: "Protelindo", variant: "black" },
  { name: "BRIN", variant: "red" },
];

export const industryFocusAreas = [
  {
    name: "Oil & Gas Operations",
    shape: "droplet",
    desc: "Hulu, hilir migas, operasi kilang, dan keteknikan proses energi.",
  },
  {
    name: "ESG, Climate Change, & Decarbonization",
    shape: "flower",
    desc: "Keberlanjutan, transisi energi, audit emisi, dan dekarbonisasi industri.",
  },
  {
    name: "FMCG Process & Supply Chain",
    shape: "diamond",
    desc: "Operasi manufaktur, rantai pasok global, dan optimasi produksi consumer goods.",
  },
  {
    name: "Energy & Engineering Consultancy",
    shape: "gear",
    desc: "Konsultansi teknik, studi kelayakan, EPC, dan perancangan pabrik.",
  },
  {
    name: "Finance & Business",
    shape: "burst",
    desc: "Analisis bisnis, investasi energi, strategi komersial, dan perbankan.",
  },
] as const;

export const audienceCopy = {
  mentee: {
    heroDescription:
      "Program mentorship intensif dan 100% gratis untuk alumni DTK UI Batch 2020–2022. Dapatkan bimbingan karier 1-on-group langsung dari profesional terkemuka di industri!",
    objectives: [
      "Mendapatkan akses langsung ke insider industri dan membangun jejaring yang relevan dengan jalur karier.",
      "Menyusun rencana dan blueprint karier konkret dengan bimbingan personal.",
      "Memahami lanskap dunia kerja nyata dan standar rekrutmen di 5 bidang industri utama DTK UI.",
    ],
    /** Who the track is open to — shown as the eligibility column in RolesSection. */
    eligibility: [
      "Fresh graduate & alumni DTK UI, prioritas angkatan 2020, 2021, dan 2022.",
      "Dipilih lewat registrasi dan seleksi administrasi berdasarkan komitmen serta motivasi.",
      "Siap mengikuti seluruh rangkaian program selama ~3 bulan.",
    ],
    /** What the track is expected to do once accepted. */
    responsibilities: [
      "Mengikuti seluruh sesi sesuai jadwal yang disepakati bersama mentor.",
      "Berpartisipasi aktif dalam diskusi dan sesi tanya jawab.",
      "Menyusun rencana dan strategi pengembangan karier bersama mentor.",
      "Menjaga komunikasi yang baik dan menindaklanjuti tugas dari mentor.",
    ],
    benefitsHeading: "Real Benefits for Mentees",
    benefits: [
      {
        shape: "FourPointStar",
        title: "Access Industry Insiders",
        desc: "Build a network that matters langsung dengan para profesional senior alumni GPTK FTUI.",
      },
      {
        shape: "Quatrefoil",
        title: "Get a Blueprint",
        desc: "Custom guidance for your career melalui penyusunan rencana karier yang terarah.",
      },
      {
        shape: "TriangleArrow",
        title: "Engineer Your Future",
        desc: "Persiapan wawancara, review CV berstandar industri, dan pemahaman dinamika tempat kerja.",
      },
    ],
  },
  mentor: {
    heroDescription:
      "Undangan istimewa untuk alumni GPTK FTUI dengan 5+ tahun pengalaman kerja untuk berbagi wawasan, membimbing talenta muda, dan memperkuat kepemimpinan.",
    objectives: [
      "Mengasah kemampuan coaching dan kepemimpinan transformasional.",
      "Memperluas personal branding & jejaring profesional sesama alumni senior.",
      "Mendapat perspektif segar dan dinamika inovasi dari generasi gen-Z/fresh graduate.",
      "Berkontribusi langsung membentuk masa depan komunitas DTK UI (Paying it forward).",
    ],
    eligibility: [
      "Alumni GPTK FTUI — S1, S2, S3, maupun Program Profesi.",
      "Pengalaman profesional minimal 5 tahun di bidangnya.",
      "Terbuka untuk semua latar belakang industri, wirausaha, serta diaspora luar negeri.",
      "Bersedia meluangkan waktu mendampingi minimal 4 sesi selama periode 3 bulan.",
    ],
    responsibilities: [
      "Menjadi pembimbing sekaligus fasilitator dalam proses pengembangan diri mentee.",
      "Berbagi pengalaman kerja, kepemimpinan, dan dinamika industri.",
      "Memberi masukan objektif untuk pengembangan kompetensi mentee.",
      "Membantu mentee menyusun strategi pengembangan karier.",
      "Mendorong mentee mengeksplorasi potensi karier terbaiknya.",
    ],
    benefitsHeading: "The Rewards of Paying It Forward",
    benefits: [
      {
        shape: "FourPointStar",
        title: "Refine Your Leadership",
        desc: "Honing coaching skills & mempraktikkan gaya kepemimpinan suportif kepada fresh graduates.",
      },
      {
        shape: "Burst",
        title: "Expand Your Footprint",
        desc: "Elevating personal branding & networking lintas angkatan alumni GPTK FTUI.",
      },
      {
        shape: "Pinwheel",
        title: "Gain Fresh Perspectives",
        desc: "Gathering critical insights & aspirasi segar dari generasi gen-Z.",
      },
      {
        shape: "TriangleArrow",
        title: "Shape DTK UI's Tomorrow",
        desc: "Menjadi katalisator kesuksesan angkatan muda dan almamater tercinta.",
      },
    ],
  },
} as const;

export const industries = [
  {
    icon: "Send",
    label: "Entering the Industry",
    count: "55 Mentee",
    desc: "Fresh graduate yang belum bekerja penuh atau sedang dalam program magang/internship.",
  },
  {
    icon: "Cog",
    label: "Growing in the Industry",
    count: "51 Mentee",
    desc: "Alumni muda yang sudah bekerja tetap dan ingin mengakselerasi jenjang kariernya.",
  },
] as const;

export const pairingScheme = {
  ratio: "20 Kelompok · 1 Anchor Mentor + 1 Co-Mentor",
  note: "106 mentee dan 42 mentor terbagi ke 20 kelompok kecil per jalur & minat industri. Tiap kelompok punya 1 Anchor Mentor yang mendampingi penuh dan 1 Co-Mentor sebagai partner pendamping untuk memperdalam silaturahmi, memperkuat bimbingan, serta pendalaman teknis.",
};

export const timeline = [
  { phase: "Pendaftaran Mentor", date: "7 Jul – 7 Agu 2026", status: "completed", note: "Selesai" },
  { phase: "Pendaftaran Mentee", date: "12 Jul – 12 Agu 2026", status: "completed", note: "Selesai" },
  { phase: "Pengumuman Kelompok", date: "18 Agu 2026", status: "completed", note: "106 Mentee / 20 Kelompok" },
  { phase: "Grand Launch & Onboarding", date: "25 Agu 2026", status: "upcoming", note: "Hybrid — Jakarta + Zoom" },
  { phase: "Periode Mentoring", date: "20 Agu – 20 Nov 2026", status: "upcoming", note: "~3 bulan, fleksibel" },
  { phase: "Closing Ceremony", date: "22 Nov 2026", status: "upcoming", note: "Offline / Onsite" },
];

export const timelineNote =
  "Grand Launch & Onboarding diselenggarakan pada 25 Agustus 2026 (bergeser dari 17, lalu 22 Agustus). Linimasa detail tersedia di Booklet.";

export const mechanism = {
  stats: [
    { value: "3 Bulan", label: "20 Agu – 20 Nov 2026", sub: "Durasi Program" },
    { value: "4+ Sesi", label: "Minimal per kelompok", sub: "Intensitas Bimbingan" },
    { value: "60–90 Menit", label: "Durasi tiap pertemuan", sub: "Waktu Efektif" },
    { value: "Fleksibel", label: "Daring / Luring / Hybrid", sub: "Format Pertemuan" },
  ],
  note: "Jadwal mentoring disepakati secara mandiri antara mentor dan kelompok mentee-nya menyesuaikan kesibukan kedua pihak. Program ini adalah pendampingan karier, bukan magang kerja.",
};

export const mentoringTopics = [
  {
    title: "Career Planning",
    desc: "Tujuan karier, pemetaan jalur profesi industri energi, rencana jangka pendek & panjang.",
  },
  {
    title: "Leadership Development",
    desc: "Self-leadership, pengambilan keputusan strategis, manajemen waktu, dan dinamika kerja tim.",
  },
  {
    title: "Personal Branding",
    desc: "Citra profesional, optimalisasi profil LinkedIn, dan strategi jejaring kerja efektif.",
  },
  {
    title: "CV & Resume Review",
    desc: "Penyusunan CV berstandar industri, penyesuaian posisi spesifik, dan portofolio.",
  },
  {
    title: "Interview Preparation",
    desc: "Simulasi wawancara HR & User, teknik STAR dalam menjawab pertanyaan, serta etika profesional.",
  },
  {
    title: "Industry Insight",
    desc: "Perkembangan industri energi, tren dekarbonisasi, tantangan riil, dan kultur korporasi.",
  },
  {
    title: "Networking Session",
    desc: "Membangun relasi mutualisme, etika komunikasi profesional, dan kontribusi komunitas alumni.",
  },
  {
    title: "Reflection & Growth",
    desc: "Evaluasi capaian pembelajaran dan penyusunan langkah tindak lanjut.",
  },
];

export type FaqCategory = "general" | "mentor" | "mentee";

export type Faq = {
  q: string;
  a: string;
  category: FaqCategory;
  links?: { label: string; href: string }[];
};

export const faqCategories: { value: FaqCategory | "all"; label: string }[] = [
  { value: "all", label: "Semua Pertanyaan" },
  { value: "general", label: "Umum" },
  { value: "mentor", label: "Mentor Track" },
  { value: "mentee", label: "Mentee Track" },
];

export const faqs: Faq[] = [
  {
    category: "general",
    q: "Apa itu Graduate Mentorship 2026?",
    a: "Program pendampingan (mentoring) gratis dari ILUNI GPTK FTUI yang mempertemukan alumni GPTK FTUI berpengalaman sebagai mentor dengan fresh graduate DTK UI angkatan 2020–2022 sebagai mentee, selama 3 bulan, untuk membekali kesiapan karier dan pengembangan diri.",
  },
  {
    category: "general",
    q: "Apakah program ini berbayar?",
    a: "Tidak. Program ini 100% GRATIS untuk seluruh peserta — baik mentor maupun mentee. Tidak ada biaya pendaftaran maupun biaya kepesertaan apapun.",
  },
  {
    category: "general",
    q: "Apa tema program tahun ini?",
    a: "“Connecting AMBITION with Leadership EXCELLENCE” — menekankan pentingnya pengembangan kepemimpinan, kesiapan karier, dan kolaborasi sinergis lintas generasi alumni.",
  },
  {
    category: "general",
    q: "Industri atau bidang apa saja yang tercakup dalam program ini?",
    a: "Mentee dibagi ke 2 jalur (Entering the Industry & Growing in the Industry), lalu ke 20 kelompok kecil yang mencakup Oil & Gas, Process Safety, Transisi Energi & ESG, FMCG, Engineering Consultancy, Business & Finance, hingga Wirausaha. Peta lengkap 20 kelompok ada di halaman Booklet.",
  },
  {
    category: "general",
    q: "Kapan timeline lengkap program ini?",
    a: "Registrasi Mentor 7 Juli – 7 Agustus 2026; Registrasi Mentee 12 Juli – 12 Agustus 2026; Pengumuman & Pembagian Kelompok 18 Agustus 2026; Grand Launch & Onboarding 25 Agustus 2026; Pelaksanaan Mentoring 20 Agustus – 20 November 2026; Closing Ceremony 22 November 2026.",
  },
  {
    category: "mentor",
    q: "Siapa yang bisa menjadi mentor?",
    a: "Alumni GPTK FTUI (S1, S2, S3, maupun Program Profesi) dengan pengalaman profesional minimal 5 tahun, dan bersedia meluangkan waktu untuk mendampingi peserta selama periode 3 bulan.",
  },
  {
    category: "mentor",
    q: "Apakah mentor harus dari industri energi/migas saja?",
    a: "Tidak. Kesempatan terbuka untuk semua latar belakang industri — termasuk FMCG, konsultan, teknologi, wirausaha, maupun diaspora alumni di luar daerah atau luar negeri.",
  },
  {
    category: "mentor",
    q: "Satu mentor akan membimbing berapa mentee?",
    a: "Tiap kelompok didampingi 1 Anchor Mentor (penanggung jawab utama) dan 1 Co-Mentor (partner pendamping teknis & sharing), membimbing rata-rata 5 mentee.",
  },
  {
    category: "mentor",
    q: "Apa saja peran dan tanggung jawab seorang mentor?",
    a: "Menjadi pembimbing sekaligus fasilitator, berbagi pengalaman kerja dan kepemimpinan, memberi masukan pengembangan kompetensi, serta mendorong mentee mengeksplorasi potensi kariernya.",
  },
  {
    category: "mentor",
    q: "Apa manfaat menjadi mentor?",
    a: "Mengasah kemampuan coaching & leadership, memperluas jejaring dengan sesama alumni senior dan talenta muda, mendapat perspektif segar dari gen-Z, serta berkontribusi nyata (paying it forward) bagi almamater.",
  },
  {
    category: "mentee",
    q: "Siapa yang bisa menjadi mentee?",
    a: "Fresh graduate dan alumni DTK UI, dengan prioritas angkatan 2020, 2021, dan 2022.",
  },
  {
    category: "mentee",
    q: "Apakah ada proses seleksi untuk mentee?",
    a: "Ya. Peserta dipilih melalui registrasi dan seleksi administrasi berdasarkan komitmen, motivasi, dan kesiapan mengikuti seluruh rangkaian program.",
  },
  {
    category: "mentee",
    q: "Apa saja yang akan didapat mentee dari program ini?",
    a: "Bimbingan langsung dari alumni berpengalaman, wawasan kebutuhan industri, peningkatan kesiapan menghadapi rekrutmen, pengembangan CV dan personal branding, hingga perluasan jejaring profesional.",
  },
  {
    category: "general",
    q: "Format mentoring-nya seperti apa — daring, luring, atau magang di kantor?",
    a: "Fleksibel dan bukan magang kerja. Bisa daring (Zoom/GMeet), luring (kopi darat/kunjungan), maupun hybrid, sesuai kesepakatan bersama mentor dengan kelompoknya masing-masing.",
  },
  {
    category: "general",
    q: "Berapa kali minimal sesi mentoring dilakukan?",
    a: "Minimal 4 sesi selama periode mentoring, masing-masing sekitar 60–90 menit. Waktu dan tanggal pertemuan disepakati bersama secara fleksibel.",
  },
  {
    category: "general",
    q: "Topik apa saja yang dibahas saat mentoring?",
    a: "Career Planning, Leadership Development, Personal Branding, CV & Resume Review, Interview Preparation, Industry Insight, Networking Session, dan Reflection & Growth.",
  },
  {
    category: "general",
    q: "Ke mana bisa bertanya lebih lanjut soal program ini?",
    a: "Hubungi salah satu narahubung panitia yang tercantum di bagian bawah halaman ini atau akses Booklet Program.",
  },
];

export type Audience = "mentee" | "mentor";
