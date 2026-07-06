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
    benefitsHeading: "Real Benefits",
    benefits: [
      { icon: "Sparkles", title: "Access Industry Insiders", desc: "Build a network that matters." },
      { icon: "Bookmark", title: "Get a Blueprint", desc: "Custom guidance for your career." },
      { icon: "Play", title: "Engineer Your Future", desc: "" },
    ],
  },
  mentor: {
    heroDescription:
      "Undangan khusus untuk profesional DTK UI: bimbing generasi penerus lewat program mentorship fleksibel selama 2 bulan.",
    objectives: [
      "Mengasah kemampuan coaching dan kepemimpinan.",
      "Memperluas personal branding & jejaring profesional.",
      "Mendapat perspektif segar dari generasi gen-Z/fresh graduate.",
      "Berkontribusi langsung membentuk masa depan komunitas DTK UI.",
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
  { icon: "Droplet", label: "Oil & Gas Operations" },
  { icon: "Leaf", label: "ESG, Climate Change, & Decarbonization" },
  { icon: "Package", label: "FMCG Process & Supply Chain" },
  { icon: "Cog", label: "Energy & Engineering Consultancy" },
  { icon: "Banknote", label: "Finance & Business" },
] as const;

export const pairingScheme = {
  ratio: "1 mentor : 2–4 mentee",
  note: "Rasio aktual menyesuaikan jumlah & minat pendaftar. Pengelompokan berdasarkan kecocokan minat industri yang diisi saat pendaftaran — bukan diundi acak. Target perencanaan: 5 kategori × 2 mentor × rata-rata 3 mentee (~30 mentee), bukan kuota keras.",
};

export const timeline = [
  { phase: "Pre-event: Alumni Gathering", date: "9 Jul 2026", note: "" },
  { phase: "Pendaftaran Mentor", date: "7 Jul – 7 Agu 2026", note: "" },
  { phase: "Pendaftaran Mentee", date: "12 Jul – 12 Agu 2026", note: "" },
  { phase: "Matching & Kurasi Grup", date: "13 – 17 Agu 2026", note: "" },
  { phase: "Pengumuman Terpilih", date: "18 Agu 2026", note: "" },
  { phase: "Onboarding Session", date: "19 Agu 2026", note: "Offline / onsite" },
  { phase: "Periode Mentoring", date: "20 Agu – 20 Nov 2026", note: "~3 bulan, fleksibel" },
  { phase: "Closing Ceremony", date: "22 Nov 2026", note: "Offline / onsite" },
];

export type Audience = "mentee" | "mentor";
