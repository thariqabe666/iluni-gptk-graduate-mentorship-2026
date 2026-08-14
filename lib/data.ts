export const event = {
  org: "ILUNI GPTK FTUI",
  name: "Graduate Mentorship 2026",
  tagline: "Connecting Ambition with Leadership Excellence",
  price: "Gratis untuk seluruh peserta (mentor & mentee)",
  registerLinks: {
    mentee: "https://bit.ly/RegistrationMentorshipILUNIGPTKUI",
    mentor: "https://bit.ly/RegistrationMentorILUNIGPTKUI",
  },
  contacts: [
    { name: "Ivan Prasetyadi", phone: "081398479340" },
    { name: "Gyman Mardhiana", phone: "085795253394" },
    { name: "Arif Al-Fath", phone: "081283839720" },
  ],
};

export const audienceCopy = {
  mentee: {
    heroDescription:
      "Program mentorship gratis untuk alumni DTK UI Batch 2020–2022. Dapatkan bimbingan karier langsung dari profesional industri.",
    objectives: [
      "Mendapatkan akses langsung ke insider industri dan membangun jejaring yang relevan dengan jalur karier.",
      "Menyusun blueprint karier yang lebih konkret dengan bimbingan personal.",
      "Memahami lanskap dunia kerja nyata di 5 bidang industri DTK UI.",
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
      "Menyusun Individual Development Plan (IDP) bersama mentor.",
      "Menjaga komunikasi yang baik dan menindaklanjuti tugas dari mentor.",
    ],
    benefitsHeading: "Real Benefits",
    benefits: [
      { icon: "Sparkles", title: "Access Industry Insiders", desc: "Build a network that matters." },
      { icon: "Bookmark", title: "Get a Blueprint", desc: "Custom guidance for your career." },
      { icon: "Play", title: "Engineer Your Future", desc: "" },
    ],
  },
  mentor: {
    heroDescription:
      "Undangan khusus untuk profesional DTK UI: bimbing generasi penerus lewat program mentorship fleksibel selama 3 bulan.",
    objectives: [
      "Mengasah kemampuan coaching dan kepemimpinan.",
      "Memperluas personal branding & jejaring profesional.",
      "Mendapat perspektif segar dari generasi gen-Z/fresh graduate.",
      "Berkontribusi langsung membentuk masa depan komunitas DTK UI.",
    ],
    eligibility: [
      "Alumni GPTK FTUI — S1, S2, S3, maupun Program Profesi.",
      "Pengalaman profesional minimal 5 tahun.",
      "Terbuka untuk semua latar belakang industri, termasuk wirausaha dan yang berdomisili di luar daerah maupun luar negeri.",
      "Bersedia meluangkan waktu mendampingi selama periode mentoring.",
    ],
    responsibilities: [
      "Menjadi pembimbing sekaligus fasilitator dalam proses pengembangan diri mentee.",
      "Berbagi pengalaman kerja, kepemimpinan, dan dinamika industri.",
      "Memberi masukan untuk pengembangan kompetensi mentee.",
      "Membantu mentee menyusun Individual Development Plan (IDP).",
      "Mendorong mentee mengeksplorasi potensi kariernya.",
    ],
    benefitsHeading: "The Rewards of Paying It Forward",
    benefits: [
      { icon: "Sparkles", title: "Refine Your Leadership", desc: "Honing coaching skills." },
      { icon: "Asterisk", title: "Expand Your Footprint", desc: "Elevating personal branding & networking." },
      { icon: "MessageCircle", title: "Gain Fresh Perspectives", desc: "Gathering critical insights from gen-Z." },
      { icon: "Play", title: "Shape DTK UI's Tomorrow", desc: "" },
    ],
  },
} as const;

export const industries = [
  { icon: "Send", label: "Entering the Industry", desc: "54 mentee · belum bekerja penuh atau sedang magang" },
  { icon: "Cog", label: "Growing in the Industry", desc: "49 mentee · sudah bekerja tetap" },
] as const;

export const pairingScheme = {
  ratio: "20 kelompok · 1 Anchor Mentor + 1 Co-Mentor",
  note: "103 mentee dan 41 mentor terbagi ke 20 kelompok kecil per jalur & minat industri. Tiap kelompok punya 1 Anchor Mentor yang mendampingi penuh dan 1 Co-Mentor sebagai pendalaman teknis & cadangan. Detail lengkap tiap kelompok — nama mentor, perusahaan, dan jabatan — ada di halaman Booklet.",
};

export const timeline = [
  { phase: "Pendaftaran Mentor", date: "7 Jul – 7 Agu 2026", note: "" },
  { phase: "Pendaftaran Mentee", date: "12 Jul – 12 Agu 2026", note: "" },
  { phase: "Pengumuman & Pembagian Kelompok", date: "18 Agu 2026", note: "" },
  { phase: "Grand Launch & Onboarding", date: "22 Agu 2026", note: "Hybrid — Jakarta + Zoom" },
  { phase: "Periode Mentoring", date: "20 Agu – 20 Nov 2026", note: "~3 bulan, fleksibel" },
  { phase: "Closing Ceremony", date: "22 Nov 2026", note: "Offline / onsite" },
];

/** Onboarding moved 17→22 Agustus because 14–17 Agustus is a long holiday + HUT RI. See /booklet for the full timeline. */
export const timelineNote =
  "Onboarding bergeser dari 17 ke 22 Agustus karena 14–17 Agustus adalah libur panjang & HUT RI. Linimasa lengkap ada di Booklet.";

/** Headline numbers for how the mentoring actually runs. */
export const mechanism = {
  stats: [
    { value: "3 Bulan", label: "20 Agu – 20 Nov 2026" },
    { value: "4+ Sesi", label: "Minimal per kelompok" },
    { value: "60–90 Menit", label: "Durasi tiap sesi" },
    { value: "Fleksibel", label: "Daring, luring, atau hybrid" },
  ],
  note: "Jadwal disepakati bersama antara mentor dan kelompok mentee-nya, menyesuaikan kesibukan kedua pihak. Ini program pendampingan — bukan magang.",
};

export const mentoringTopics = [
  {
    title: "Career Planning",
    desc: "Tujuan karier, jalur profesi industri energi, rencana jangka pendek & panjang.",
  },
  {
    title: "Leadership Development",
    desc: "Self-leadership, pengambilan keputusan, manajemen waktu, kerja tim.",
  },
  {
    title: "Personal Branding",
    desc: "Citra profesional, optimalisasi LinkedIn, strategi jejaring.",
  },
  {
    title: "CV & Resume Review",
    desc: "Penyusunan CV efektif, penyesuaian posisi lamaran, portofolio.",
  },
  {
    title: "Interview Preparation",
    desc: "Simulasi wawancara, teknik menjawab HR & user, etika komunikasi.",
  },
  {
    title: "Industry Insight",
    desc: "Perkembangan industri energi, tantangan & peluang karier, budaya kerja.",
  },
  {
    title: "Networking Session",
    desc: "Membangun hubungan profesional, etika komunikasi, komunitas alumni.",
  },
  {
    title: "Reflection & Development",
    desc: "Evaluasi diri, rencana tindak lanjut, refleksi capaian program.",
  },
];

export type FaqCategory = "general" | "mentor" | "mentee";

export type Faq = {
  q: string;
  a: string;
  category: FaqCategory;
  /** Optional links rendered under the answer body. */
  links?: { label: string; href: string }[];
};

export const faqCategories: { value: FaqCategory | "all"; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "general", label: "Umum" },
  { value: "mentor", label: "Mentor" },
  { value: "mentee", label: "Mentee" },
];

export const faqs: Faq[] = [
  // ---- Umum ----
  {
    category: "general",
    q: "Apa itu Graduate Mentorship 2026?",
    a: "Program pendampingan (mentoring) gratis dari ILUNI GPTK FTUI yang mempertemukan alumni GPTK FTUI berpengalaman sebagai mentor dengan fresh graduate DTK UI angkatan 2020–2022 sebagai mentee, selama 3 bulan, untuk membekali kesiapan karier dan pengembangan diri.",
  },
  {
    category: "general",
    q: "Apakah program ini berbayar?",
    a: "Tidak. Program ini 100% gratis, baik untuk mentor maupun mentee — tidak ada biaya pendaftaran.",
  },
  {
    category: "general",
    q: "Apa tema program tahun ini?",
    a: "“Connecting Ambition with Leadership Excellence” — menekankan pentingnya pengembangan kepemimpinan, kesiapan karier, dan kolaborasi lintas generasi alumni.",
  },
  {
    category: "general",
    q: "Industri atau bidang apa saja yang tercakup dalam program ini?",
    a: "Mentee dibagi ke 2 jalur (Entering the Industry & Growing in the Industry), lalu ke 20 kelompok kecil yang mencakup Oil & Gas, Process Safety, Transisi Energi, ESG, FMCG, Engineering Consultancy, Business & Finance, hingga Wirausaha. Peta lengkap 20 kelompok ada di halaman Booklet.",
  },
  {
    category: "general",
    q: "Kapan timeline lengkap program ini?",
    a: "Registrasi Mentor 7 Juli – 7 Agustus 2026; Registrasi Mentee 12 Juli – 12 Agustus 2026; Pengumuman & Pembagian Kelompok 18 Agustus 2026; Grand Launch & Onboarding 22 Agustus 2026; Pelaksanaan Mentoring 20 Agustus – 20 November 2026; Closing Ceremony 22 November 2026. Linimasa lengkap ada di halaman Booklet.",
  },
  // ---- Mentor ----
  {
    category: "mentor",
    q: "Siapa yang bisa menjadi mentor?",
    a: "Alumni GPTK FTUI (S1, S2, S3, maupun Program Profesi) dengan pengalaman profesional minimal 5 tahun, dan bersedia meluangkan waktu untuk mendampingi peserta.",
  },
  {
    category: "mentor",
    q: "Apakah mentor harus dari industri energi/migas saja?",
    a: "Tidak. Kesempatan terbuka untuk semua latar belakang industri — termasuk yang berwirausaha, atau berdomisili di luar daerah maupun luar negeri.",
  },
  {
    category: "mentor",
    q: "Satu mentor akan membimbing berapa mentee?",
    a: "Tiap kelompok punya 1 Anchor Mentor (memegang kelompok penuh dari awal sampai akhir) dan 1 Co-Mentor (hadir di sesi pendalaman teknis, jadi cadangan bila Anchor berhalangan), mendampingi rata-rata 5 mentee. Bukan beberapa mentor setara — supaya ada satu penanggung jawab yang benar-benar mengenal tiap mentee.",
  },
  {
    category: "mentor",
    q: "Apa saja yang diharapkan dari seorang mentor?",
    a: "Menjadi pembimbing sekaligus fasilitator, berbagi pengalaman kerja dan kepemimpinan, memberi masukan pengembangan kompetensi, membantu mentee menyusun Individual Development Plan (IDP), serta mendorong mentee mengeksplorasi potensi kariernya.",
  },
  {
    category: "mentor",
    q: "Apa manfaat menjadi mentor?",
    a: "Mengasah kemampuan coaching & leadership, memperluas jejaring dengan sesama alumni dan fresh graduate, mendapat perspektif segar dari gen-Z, serta berkontribusi nyata (paying it forward) bagi almamater.",
  },
  {
    category: "mentor",
    q: "Bagaimana cara daftar menjadi mentor?",
    a: "Registrasi mentor sudah ditutup sejak 7 Agustus 2026. Mentor terpilih diumumkan 18 Agustus — lihat linimasa dan peta kelompok lengkap di halaman Booklet.",
  },
  // ---- Mentee ----
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
    category: "mentee",
    q: "Bagaimana cara daftar menjadi mentee?",
    a: "Registrasi mentee sudah ditutup sejak 12 Agustus 2026. Mentee terpilih diumumkan 18 Agustus — lihat linimasa lengkap di halaman Booklet.",
  },
  // ---- Teknis pelaksanaan ----
  {
    category: "general",
    q: "Format mentoring-nya seperti apa — online, offline, atau magang di kantor?",
    a: "Fleksibel/mix, dan bukan magang. Bisa daring, luring, maupun hybrid, sesuai kesepakatan mentor dengan kelompoknya masing-masing selama periode 3 bulan.",
  },
  {
    category: "general",
    q: "Berapa kali minimal sesi mentoring dilakukan?",
    a: "Minimal 4 sesi selama periode mentoring, masing-masing sekitar 60–90 menit. Tidak ada aturan baku minimal per minggu, tapi disarankan disepakati porsi minimal per minggu/bulan supaya ada keseragaman delivery — dan tentu boleh lebih dari itu.",
  },
  {
    category: "general",
    q: "Topik apa saja yang dibahas saat mentoring?",
    a: "Career Planning, Leadership Development, Personal Branding, CV & Resume Review, Interview Preparation, Industry Insight, Networking Session, dan Reflection & Personal Development. Topik bersifat fleksibel dan disesuaikan kebutuhan mentee.",
  },
  {
    category: "general",
    q: "Siapa yang menentukan jadwal sesi mentoring?",
    a: "Disepakati bersama antara mentor dan kelompok mentee-nya masing-masing, menyesuaikan kesibukan kedua pihak.",
  },
  {
    category: "general",
    q: "Bagaimana pengelompokan mentor dan mentee ditentukan?",
    a: "Pengelompokan mempertimbangkan kolom topik dan kolom motivasi yang diisi saat pendaftaran — bukan diundi acak. Setiap kelompok berisi mentee di jalur dan minat yang sama, didampingi 1 Anchor Mentor + 1 Co-Mentor. Peta lengkap 20 kelompok ada di halaman Booklet.",
  },
  {
    category: "general",
    q: "Ke mana bisa bertanya lebih lanjut soal program ini?",
    a: "Hubungi salah satu narahubung panitia yang tercantum di bagian bawah halaman ini.",
  },
];

export type Audience = "mentee" | "mentor";
