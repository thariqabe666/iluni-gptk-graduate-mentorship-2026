"use client";

import { useState } from "react";
import {
  Users,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeftRight,
  Layers,
  UserCheck,
  ShieldCheck,
  Radio,
  Clock,
  ChevronDown,
  ChevronsUpDown,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { activityLayers } from "@/lib/booklet-data";
import { cn } from "@/lib/utils";

// Visual diagram definitions for each layer
function KuliahUmumDiagram() {
  return (
    <div className="mt-4 rounded-xl border border-ink/15 bg-white/80 p-4 sm:p-5 shadow-xs">
      <div className="mb-3.5 flex items-center justify-between border-b border-ink/10 pb-2.5">
        <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
          <Radio size={14} className="animate-pulse" /> Diagram Alir: 1-to-All Broadcast (1 : 106)
        </span>
        <span className="rounded-md bg-brand-red/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase text-brand-red">
          Pleno Serentak
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Mentor / Speaker Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-brand-red/40 bg-brand-red/5 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-ink">1 Mentor / Panelis</p>
              <p className="text-[11px] text-ink/60">Pembicara Utama Sesi</p>
            </div>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="rounded bg-brand-red/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-red">
              KU1 Compass
            </span>
            <span className="rounded bg-brand-red/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-red">
              KU2 Steer
            </span>
            <span className="rounded bg-brand-red/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-red">
              KU3 Panel
            </span>
          </div>
        </div>

        {/* Transmission / Flow Connector */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 py-2">
          {/* Desktop Line + Centered Arrow Badge */}
          <div className="hidden md:flex items-center justify-center w-full relative my-3">
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-red/40 via-ink/20 to-brand-red/40" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-red shadow-xs">
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Mobile Arrow Badge */}
          <div className="md:hidden flex items-center justify-center my-2">
            <div className="w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-red shadow-xs">
              <ArrowRight size={14} className="rotate-90" />
            </div>
          </div>

          <p className="font-heading text-[11px] font-bold uppercase tracking-wider text-ink mt-1.5">
            Broadcast 1 Arah + Q&A
          </p>
          <p className="text-[10px] text-ink/60 mt-0.5 leading-snug">
            Materi Universal & Fondasi Karier
          </p>
        </div>

        {/* All Mentees Receiver Pod */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-ink/[0.03] p-3.5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-ink text-cream flex items-center justify-center shrink-0">
              <Users size={16} />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-ink">Seluruh 106 Mentee</p>
              <p className="text-[11px] text-ink/60">20 Kelompok Serentak</p>
            </div>
          </div>

          {/* Mini group badges representation */}
          <div className="mt-2 grid grid-cols-5 gap-1 text-center">
            {["G1..5", "G6..10", "E1..5", "E6..10", "Semua"].map((g, idx) => (
              <div
                key={g}
                className={cn(
                  "rounded py-0.5 text-[9px] font-heading font-semibold border",
                  idx === 4
                    ? "bg-brand-red/10 border-brand-red/30 text-brand-red font-bold"
                    : "bg-white border-ink/15 text-ink/70"
                )}
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupMentoringDiagram() {
  return (
    <div className="mt-4 rounded-xl border border-ink/15 bg-white/80 p-4 sm:p-5 shadow-xs">
      <div className="mb-3.5 flex items-center justify-between border-b border-ink/10 pb-2.5">
        <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
          <Users size={14} /> Diagram Alir: Dual-Mentor Pod (2 : 5–6 Mentee)
        </span>
        <span className="rounded-md bg-brand-blue/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase text-brand-blue">
          Inti Bimbingan (35%)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Mentor Pair Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-brand-blue/40 bg-brand-blue/5 p-3.5 space-y-2">
          <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-brand-blue">
            Dual Mentor Hub
          </p>
          <div className="flex items-center gap-2 rounded-lg bg-white/90 border border-brand-blue/20 p-1.5">
            <ShieldCheck size={14} className="text-brand-red shrink-0" />
            <div className="min-w-0">
              <p className="font-heading text-[11px] font-bold text-ink truncate">Anchor Mentor</p>
              <p className="text-[9px] text-ink/60">PJ Kelompok & Penilai</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/90 border border-brand-blue/20 p-1.5">
            <Sparkles size={14} className="text-brand-blue shrink-0" />
            <div className="min-w-0">
              <p className="font-heading text-[11px] font-bold text-ink truncate">Co-Mentor</p>
              <p className="text-[9px] text-ink/60">Setara Anchor</p>
            </div>
          </div>
        </div>

        {/* Bi-directional Flow Connector */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 py-2">
          {/* Desktop Line + Centered Arrow Badge */}
          <div className="hidden md:flex items-center justify-center w-full relative my-3">
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-blue/40 via-ink/20 to-brand-blue/40" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-blue shadow-xs">
              <ArrowLeftRight size={14} />
            </div>
          </div>

          {/* Mobile Arrow Badge */}
          <div className="md:hidden flex items-center justify-center my-2">
            <div className="w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-blue shadow-xs">
              <ArrowLeftRight size={14} className="rotate-90" />
            </div>
          </div>

          <p className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink mt-1.5">
            Interaksi Intensif 2 Arah
          </p>
          <p className="text-[10px] text-ink/60 mt-0.5 leading-snug">
            Min. 4 Sesi (60–90 mnt) · IDP & Bedah Karier
          </p>
        </div>

        {/* Mentee Pod Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-ink/[0.03] p-3.5">
          <div className="flex items-center justify-between mb-2">
            <p className="font-heading text-xs font-bold uppercase text-ink">1 Kelompok Mentoring</p>
            <span className="rounded bg-ink/10 px-1.5 py-0.5 text-[9px] font-bold font-heading text-ink">
              5–6 Mentee
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center">
            {["Mentee 1", "Mentee 2", "Mentee 3", "Mentee 4", "Mentee 5", "Mentee 6"].map((m) => (
              <div
                key={m}
                className="rounded-md border border-ink/15 bg-white py-1 text-[10px] font-medium text-ink/80 flex items-center justify-center gap-1 shadow-2xs"
              >
                <User size={10} className="text-brand-blue" />
                <span>{m.replace("Mentee ", "M")}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-center text-ink/60 italic">
            Daring / Luring / Hybrid sesuai kesepakatan
          </p>
        </div>
      </div>
    </div>
  );
}

function SesiTematikDiagram() {
  return (
    <div className="mt-4 rounded-xl border border-ink/15 bg-white/80 p-4 sm:p-5 shadow-xs">
      <div className="mb-3.5 flex items-center justify-between border-b border-ink/10 pb-2.5">
        <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-ink/80 flex items-center gap-1.5">
          <Layers size={14} className="text-brand-blue" /> Diagram Alir: Open Thematic Hub (1 : N Lintas Kelompok)
        </span>
        <span className="rounded-md bg-ink/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase text-ink/60">
          Opsional · Berbasis Minat
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Specialist Speaker Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-ink/[0.03] p-3.5">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center shrink-0">
              <Sparkles size={16} className="text-yellow-400" />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-ink">Mentor Spesialis</p>
              <p className="text-[11px] text-ink/60">Narasumber Topik Khusus</p>
            </div>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="rounded border border-ink/15 bg-white px-1.5 py-0.5 text-[10px] text-ink/70">
              2 Sesi Tematik Terbuka
            </span>
          </div>
        </div>

        {/* Transmission / Open Hub Connector */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 py-2">
          {/* Desktop Line + Centered Arrow Badge */}
          <div className="hidden md:flex items-center justify-center w-full relative my-3">
            <div className="h-[2px] w-full bg-gradient-to-r from-ink/25 via-brand-blue/35 to-ink/25" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-blue shadow-xs">
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Mobile Arrow Badge */}
          <div className="md:hidden flex items-center justify-center my-2">
            <div className="w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-blue shadow-xs">
              <ArrowRight size={14} className="rotate-90" />
            </div>
          </div>

          <p className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink mt-1.5">
            Pendaftaran Terbuka
          </p>
          <p className="text-[10px] text-ink/60 mt-0.5 leading-snug">
            Mewadahi Minat Khusus Lintas Kelompok
          </p>
        </div>

        {/* Cross-Group Mentees Cluster */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-ink/[0.03] p-3.5">
          <div className="flex items-center justify-between mb-2">
            <p className="font-heading text-xs font-bold uppercase text-ink">Mentee Lintas Kelompok</p>
            <span className="text-[10px] text-ink/50">Multi-Group</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {["Mentee G2", "Mentee E4", "Mentee G7", "Mentee E1", "Mentee G9", "+ Lainnya"].map((badge, idx) => (
              <span
                key={badge}
                className={cn(
                  "rounded px-1.5 py-0.5 text-[9px] font-heading font-medium border",
                  idx === 5
                    ? "bg-brand-blue/10 border-brand-blue/30 text-brand-blue font-bold"
                    : "bg-white border-ink/15 text-ink/70"
                )}
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-ink/60 italic">
            Bergabung sesuai kebutuhan & topik yang relevan
          </p>
        </div>
      </div>
    </div>
  );
}

function IndividualMentoringDiagram() {
  return (
    <div className="mt-4 rounded-xl border border-ink/15 bg-white/80 p-4 sm:p-5 shadow-xs">
      <div className="mb-3.5 flex items-center justify-between border-b border-ink/10 pb-2.5">
        <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-ink/80 flex items-center gap-1.5">
          <UserCheck size={14} className="text-brand-red" /> Diagram Alir: 1-on-1 Personal Deep-Dive (1 : 1)
        </span>
        <span className="rounded-md bg-ink/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase text-ink/60">
          Opsional · On-Demand
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Mentor Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-white p-3.5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center shrink-0">
            <UserCheck size={16} />
          </div>
          <div>
            <p className="font-heading text-xs font-bold uppercase text-ink">1 Mentor</p>
            <p className="text-[11px] text-ink/60">Anchor / Co-Mentor</p>
          </div>
        </div>

        {/* Direct 1:1 Flow Connector */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 py-2">
          {/* Desktop Line + Centered Arrow Badge */}
          <div className="hidden md:flex items-center justify-center w-full relative my-3">
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-red/35 via-ink/20 to-brand-red/35" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-red shadow-xs">
              <ArrowLeftRight size={14} />
            </div>
          </div>

          {/* Mobile Arrow Badge */}
          <div className="md:hidden flex items-center justify-center my-2">
            <div className="w-7 h-7 rounded-full bg-cream border border-ink/30 flex items-center justify-center text-brand-red shadow-xs">
              <ArrowLeftRight size={14} className="rotate-90" />
            </div>
          </div>

          <p className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink mt-1.5">
            Sesi Konsultasi 1-on-1 Privat
          </p>
          <p className="text-[10px] text-ink/60 mt-0.5 leading-snug">
            Penyesuaian Jadwal & Kebutuhan Spesifik
          </p>
        </div>

        {/* Mentee Node */}
        <div className="md:col-span-4 rounded-xl border-[1.5px] border-ink/20 bg-white p-3.5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/30 text-brand-blue flex items-center justify-center shrink-0">
            <User size={16} />
          </div>
          <div>
            <p className="font-heading text-xs font-bold uppercase text-ink">1 Mentee</p>
            <p className="text-[11px] text-ink/60">Bimbingan Personal & Rahasia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Map layer index to diagram component
const DIAGRAMS = [
  KuliahUmumDiagram,
  GroupMentoringDiagram,
  SesiTematikDiagram,
  IndividualMentoringDiagram,
];

export function ActivityLayersSection() {
  // Accordion state: Store array of opened layer indices. Default to opening the first layer (Kuliah Umum).
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (openItems.length === activityLayers.length) {
      setOpenItems([]);
    } else {
      setOpenItems(activityLayers.map((_, i) => i));
    }
  };

  const allOpen = openItems.length === activityLayers.length;

  return (
    <section id="empat-lapis" className="scroll-mt-24 py-10">
      <SectionHeading id="empat-lapis" eyebrow="Bagian 4" title="Empat Lapis Kegiatan" />

      {/* Intro visual summary banner */}
      <div className="mb-6 rounded-2xl border-[1.5px] border-ink bg-ink p-5 text-cream shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cream/15 pb-4 mb-4">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-brand-red">
              Arsitektur Program Mentorship
            </p>
            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-cream">
              Hierarki & Alur Interaksi 4 Lapis
            </h3>
          </div>
          <span className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-cream/90 border border-cream/20">
            <Clock size={12} className="text-brand-red" /> Durasi ~3 Bulan
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="rounded-xl bg-cream/5 border border-cream/10 p-3">
            <span className="font-heading text-[10px] font-bold uppercase text-brand-red block mb-1">
              01 · Kuliah Umum
            </span>
            <p className="font-bold text-cream">1 : 106 (Pleno)</p>
            <p className="text-[11px] text-cream/60 mt-0.5">3 Sesi Wajib · 10%</p>
          </div>

          <div className="rounded-xl bg-cream/5 border border-cream/10 p-3">
            <span className="font-heading text-[10px] font-bold uppercase text-brand-blue block mb-1">
              02 · Group Mentoring
            </span>
            <p className="font-bold text-cream">2 : 5–6 (Pod Kelompok)</p>
            <p className="text-[11px] text-cream/60 mt-0.5">Min. 4 Sesi · 35%</p>
          </div>

          <div className="rounded-xl bg-cream/5 border border-cream/10 p-3">
            <span className="font-heading text-[10px] font-bold uppercase text-cream/50 block mb-1">
              03 · Sesi Tematik
            </span>
            <p className="font-bold text-cream">1 : N (Lintas Kel.)</p>
            <p className="text-[11px] text-cream/60 mt-0.5">2 Sesi · Opsional</p>
          </div>

          <div className="rounded-xl bg-cream/5 border border-cream/10 p-3">
            <span className="font-heading text-[10px] font-bold uppercase text-cream/50 block mb-1">
              04 · Individual Mentoring
            </span>
            <p className="font-bold text-cream">1 : 1 (Personal)</p>
            <p className="text-[11px] text-cream/60 mt-0.5">On-Demand · Opsional</p>
          </div>
        </div>
      </div>

      {/* Accordion Controls Bar */}
      <div className="mb-4 flex items-center justify-between">
        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-ink/60">
          Pilih lapis kegiatan untuk melihat rincian & diagram alir:
        </p>
        <button
          type="button"
          onClick={toggleAll}
          className="no-print inline-flex items-center gap-1.5 rounded-lg border border-ink/20 bg-white px-3 py-1.5 text-xs font-medium text-ink/70 hover:border-ink hover:text-ink transition-colors shadow-2xs cursor-pointer"
        >
          <ChevronsUpDown size={13} />
          <span>{allOpen ? "Tutup Semua" : "Buka Semua"}</span>
        </button>
      </div>

      {/* Accordion items */}
      <div className="space-y-3.5">
        {activityLayers.map((a, i) => {
          const DiagramComponent = DIAGRAMS[i];
          const isCore = a.type === "INTI";
          const isOpen = openItems.includes(i);

          return (
            <div
              key={a.name}
              className={cn(
                "rounded-2xl border-[1.5px] border-ink transition-all duration-200 shadow-xs overflow-hidden",
                isCore ? "bg-cream/40" : "bg-white/40",
                isOpen ? "ring-1 ring-ink/10" : ""
              )}
            >
              {/* Accordion Clickable Header */}
              <button
                type="button"
                onClick={() => toggleItem(i)}
                aria-expanded={isOpen}
                className="w-full text-left p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:bg-ink/[0.02] transition-colors cursor-pointer select-none"
              >
                <span className="shrink-0 font-heading text-2xl sm:text-3xl font-black text-brand-red pt-0.5">
                  0{i + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-ink">
                      {a.name}
                    </h3>
                    <span
                      className={
                        isCore
                          ? "rounded-full border border-brand-red/40 bg-brand-red/10 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-brand-red"
                          : "rounded-full border border-ink/20 bg-ink/5 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-ink/60"
                      }
                    >
                      {a.type}
                    </span>
                    <span className="rounded-full border border-ink/10 bg-white px-2 py-0.5 font-heading text-[10px] font-medium text-ink/70">
                      {a.wajib}
                    </span>
                    <span className="rounded-full border border-ink/10 bg-white px-2 py-0.5 font-heading text-[10px] font-medium text-ink/70">
                      {a.dinilai}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-ink/75 line-clamp-2">
                    {a.desc}
                  </p>
                </div>

                {/* Toggle icon button */}
                <div className="shrink-0 pt-1">
                  <div
                    className={cn(
                      "flex items-center gap-1 rounded-lg border border-ink/15 bg-white px-2.5 py-1 text-xs font-medium text-ink/70 transition-all",
                      isOpen ? "border-ink bg-ink text-cream" : "hover:border-ink hover:text-ink"
                    )}
                  >
                    <span className="hidden sm:inline text-[11px] font-heading font-semibold uppercase tracking-wider">
                      {isOpen ? "Tutup Diagram" : "Diagram Alir"}
                    </span>
                    <ChevronDown
                      size={15}
                      className={cn(
                        "transition-transform duration-200",
                        isOpen ? "rotate-180 text-cream" : ""
                      )}
                    />
                  </div>
                </div>
              </button>

              {/* Accordion Collapsible Content */}
              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-ink/10 animate-in fade-in-50 duration-200">
                  {DiagramComponent && <DiagramComponent />}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}


