import {
  BOOKLET_VERSION,
  bookletTruthNote,
  bookletChangeNotice,
  bookletIntro,
  bookletStats,
  tracks,
  pillars,
  pillarsPrinciple,
  activityLayers,
  mentorRoles,
  agendaSesiFrame,
  agendaSesiTable,
  agendaSesiDeadlineNote,
  agendaThreePillars,
  agendaSesiCards,
  agendaSesiNonNegotiable,
  groupsGrowing,
  groupsEntering,
  groupsAssignmentNote,
  thematicSessions,
  thematicSessionsNote,
  thematicMoreTopicsNote,
  thematicHowTo,
  thematicQuotaNote,
  thematicOptionalNote,
  bookletTimeline,
  bookletTimelineNote,
  insightBriefParts,
  insightBriefVariants,
  insightBriefLength,
  insightBriefConfidentiality,
  assessmentComponents,
  assessmentKuliahUmumNote,
  certificates,
  platform,
  platformToolsNote,
  driveJoin,
  bookletFaqs,
  closing,
  Group,
} from "./booklet-data";

function formatGroupTable(groups: Group[]): string {
  const header = "| Kode | Topik / Jalur | Anchor Mentor | Co-Mentor | Mentee |\n|:---|:---|:---|:---|:---:|";
  const rows = groups.map((g) => {
    const anchor = `${g.anchor.name}${g.anchor.role ? ` (${g.anchor.role}${g.anchor.org ? `, ${g.anchor.org}` : ""})` : g.anchor.org ? ` (${g.anchor.org})` : ""}`;
    const coMentors = g.coMentor
      .map(
        (c) =>
          `${c.name}${c.role ? ` (${c.role}${c.org ? `, ${c.org}` : ""})` : c.org ? ` (${c.org})` : ""}`
      )
      .join("; ");
    return `| **${g.code}** | ${g.track} | ${anchor} | ${coMentors || "-"} | ${g.count} |`;
  });
  return [header, ...rows].join("\n");
}

/**
 * Dynamically converts the canonical booklet data into clean, comprehensive GitHub Flavored Markdown.
 * Any updates in `lib/booklet-data.ts` will automatically reflect in this generated output.
 */
export function generateBookletMarkdown(): string {
  const statsLine = bookletStats.map((s) => `**${s.value}** ${s.label}`).join(" · ");

  const md = `# ${bookletIntro.title} — ${bookletIntro.eyebrow}
> **${BOOKLET_VERSION.label} (${BOOKLET_VERSION.revision})** · *${bookletIntro.org}*  
> *"${bookletIntro.tagline}"*  
> **Catatan Sumber Kebenaran:** ${bookletTruthNote}

---

## Ringkasan Singkat
${statsLine}

${bookletIntro.positioning}

> ℹ️ **Catatan:** ${bookletChangeNotice}

---

## 1. Dua Jalur Peserta

| Jalur | Jumlah | Keterangan & Pertanyaan Khas |
|:---|:---:|:---|
| **${tracks.entering.name}** | ${tracks.entering.count} mentee | ${tracks.entering.desc} |
| **${tracks.growing.name}** | ${tracks.growing.count} mentee | ${tracks.growing.desc} |

### Aturan Penempatan:
${tracks.placementRules.map((rule) => `- ${rule}`).join("\n")}

---

## 2. Tiga Pilar Kurikulum

${pillars
  .map(
    (p, i) => `### ${i + 1}. ${p.name} — ${p.subtitle}
- **Fokus Materi:** ${p.content}
- **Format Pelaksanaan:** ${p.deliveredIn}`
  )
  .join("\n\n")}

> 💡 **Prinsip Kurikulum:** ${pillarsPrinciple}

---

## 3. Empat Lapis Kegiatan

${activityLayers
  .map((layer, i) => `${i + 1}. **${layer.name}** (${layer.type} · ${layer.wajib} · ${layer.dinilai}): ${layer.desc}`)
  .join("\n")}

---

## 4. Struktur Anchor & Co-Mentor

**${mentorRoles.teamStatement.lead}** ${mentorRoles.teamStatement.body}

| Peran | Komitmen Sesi | Yang Membedakan |
|:---|:---|:---|
| **${mentorRoles.anchor.title}** | ${mentorRoles.anchor.commitment} | Mengisi formulir penilaian & PJ kelompok bagi panitia |
| **${mentorRoles.coMentor.title}** | ${mentorRoles.coMentor.commitment} | Tidak mengisi formulir penilaian akhir |

- **${mentorRoles.anchor.title}:** ${mentorRoles.anchor.desc}
- **${mentorRoles.coMentor.title}:** ${mentorRoles.coMentor.desc}

> 💡 ${mentorRoles.diversityNote}

### Komposisi:
- **Total:** ${mentorRoles.composition}

---

## 5. Usulan Agenda Sesi — Bagaimana Empat Sesi Membangun Satu Tulisan

> ${agendaSesiFrame}

| Sesi | Kapan | Fokus | Pilar (utama · pendukung) | Bahan yang Terkumpul | Masuk Insight Brief |
|:---|:---|:---|:---|:---|:---|
${agendaSesiTable
  .map(
    (r) =>
      `| ${r.sesi} | ${r.kapan} | ${r.fokus} | ${r.open ? "*Menyesuaikan kebutuhan*" : `**${r.pillarMain}** · ${r.pillarSupport.join(" · ")}`} | ${r.bahan} | ${r.briefLabel} |`
  )
  .join("\n")}

> ${agendaSesiDeadlineNote}

**${agendaThreePillars.lead}** ${agendaThreePillars.bold} ${agendaThreePillars.tail}

${agendaThreePillars.paragraphs.map((p) => p).join("\n\n")}

### Empat Sesi, Diperinci:
${agendaSesiCards
  .map(
    (c) => `**${c.num} — ${c.title}** (${c.duration} · ${c.pillar})
${c.items.map((item) => `- ${item}`).join("\n")}${c.extra ? `\n> ${c.extra}` : ""}`
  )
  .join("\n\n")}

> ⚠️ **Yang Tidak Boleh Dipotong:** ${agendaSesiNonNegotiable}

---

## 6. Peta 20 Kelompok Mentoring

### Jalur Growing in the Industry (G1–G10)
${formatGroupTable(groupsGrowing)}

### Jalur Entering the Industry (E1–E10)
${formatGroupTable(groupsEntering)}

> 📌 **Catatan:** ${groupsAssignmentNote}

---

## 7. Sesi Tematik Terbuka

| Sesi | Peserta Sasaran | Narasumber & Mentor |
|:---|:---|:---|
${thematicSessions
  .map((s) => `| **${s.name}** | ${s.audience} | ${s.speakers} |`)
  .join("\n")}

> 📌 **Catatan:** ${thematicSessionsNote}
>
> 📌 ${thematicMoreTopicsNote}

### Cara Mendaftar
${thematicHowTo.map((step, i) => `${i + 1}. **${step.title}** — ${step.desc}`).join("\n")}

> ${thematicQuotaNote}
>
> ${thematicOptionalNote}

---

## 8. Linimasa Program

| Tanggal | Agenda / Kegiatan |
|:---|:---|
${bookletTimeline
  .map((t) => `| ${t.highlight ? `⭐ **${t.date}**` : t.date} | ${t.highlight ? `**${t.label}**` : t.label} |`)
  .join("\n")}

> ℹ️ **Catatan Linimasa:** ${bookletTimelineNote}

---

## 9. Final Project: Insight Brief

Deliverable utama mentee: tulisan mandiri sepanjang **${insightBriefLength}**.

### Struktur 5 Bagian Insight Brief:
${insightBriefParts.map((part) => `- **${part.title}** (${part.length}): ${part.content}`).join("\n")}

### Ragam Penulisan:
- **${insightBriefVariants.a.label}:** ${insightBriefVariants.a.desc}
- **${insightBriefVariants.b.label}:** ${insightBriefVariants.b.desc}

### Catatan Kerahasiaan & Format Sitasi:
> ⚠️ **Perhatian & Saran:** ${insightBriefConfidentiality.warning}

**Saran Format Sitasi:**
\`\`\`text
${insightBriefConfidentiality.correctCitation}
\`\`\`

---

## 10. Penilaian & Sertifikat

### Komponen Penilaian:
| Komponen | Bobot | Penilai |
|:---|:---:|:---|
${assessmentComponents.map((c) => `| ${c.component} | ${c.weight} | ${c.assessor} |`).join("\n")}

> ℹ️ ${assessmentKuliahUmumNote}

### Kategori Sertifikat:
${certificates.map((cert) => `- **${cert.name}**: ${cert.requirement}`).join("\n")}

---

## 11. Platform & Peran

${platform.map((p) => `- **${p.name}**: ${p.desc}`).join("\n")}

> ${platformToolsNote}

**${driveJoin.label}:** ${driveJoin.url}

---

## 12. Frequently Asked Questions (FAQ)

${bookletFaqs
  .map(
    (faq, i) => `### ${i + 1}. ${faq.q}
${faq.a}`
  )
  .join("\n\n")}

---

## 13. Penutup
Dokumen resmi disusun oleh panitia Graduate Mentorship 2026 ILUNI GPTK FTUI.

${closing.hashtags.join(" ")}
`;

  return md.trim();
}
