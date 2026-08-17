import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "📋",
    title: "Marco Normativo 2026",
    desc: "Ley 25.326, resoluciones AAIP y criterios operativos del BCRA actualizados a 2026.",
  },
  {
    emoji: "🏦",
    title: "BCRA: Central de Deudores",
    desc: "Protocolo de triangulación legal: BCRA + Veraz/Equifax + Nosis, paso a paso.",
  },
  {
    emoji: "🔍",
    title: "Reclamo en Veraz/Equifax",
    desc: "Guía de reclamo digital con capturas actualizadas por plataforma.",
  },
  {
    emoji: "📊",
    title: "Rectificación en Nosis",
    desc: "Matriz de decisión para saber qué escrito usar según el tipo de caso.",
  },
  {
    emoji: "⏳",
    title: "Regla del 5/2 — Prescripción",
    desc: "El reloj de la prescripción: regla del 5/2 y caducidad del dato negativo.",
  },
  {
    emoji: "📝",
    title: "Modelos Editables Copy-Paste",
    desc: "Cartas documento, notas de rectificación y escritos de Hábeas Data listos para adaptar.",
  },
  {
    emoji: "⚖️",
    title: "Hábeas Data Administrativo y Judicial",
    desc: "Escudo del Hábeas Data: vía administrativa y vía judicial diferenciadas.",
  },
  {
    emoji: "💰",
    title: "Unidad de Negocio y Honorarios",
    desc: "Guía de honorarios 2026: estructura de cobro por consulta, gestión y éxito.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Qué Incluye el MEGAPACK LEGAL 2026
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            📦 Esto es lo que recibís{" "}
            <span className="italic text-[#6FA8C9]">
              por dentro
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-1.5 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-2 bg-[#16293B] border border-white/10 rounded-xl px-2.5 py-2 shadow-sm"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <div>
                <span className="font-semibold text-[#EDF2F6] text-sm md:text-[15px] leading-tight block mb-0.5">
                  {m.title}
                </span>
                <span className="text-[#93A7B8] text-xs md:text-sm leading-snug">
                  {m.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
