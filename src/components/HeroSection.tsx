import React from "react";
import { motion } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-transparent pt-2 pb-4 md:py-2">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#e0932e]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl md:max-w-6xl lg:max-w-7xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-3 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-[8px]"
        >
          🚀 LANZAMIENTO 2026 · MEGAPACK LEGAL 2026
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-heading font-extrabold text-[#EDF2F6] mb-2 md:mb-3 text-[32px] leading-snug sm:text-3xl md:text-5xl md:leading-tight lg:text-6xl"
        >
          Si reclamás en Veraz, Nosis o BCRA sin sistema en 2026,{" "}
          <span className="text-[#E0932E]">el dato negativo siempre gana.</span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mb-3 w-full max-w-[380px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg"
        >
          <img
            src={`${import.meta.env.BASE_URL}mockup9.png`}
            width={1254}
            height={1254}
            loading="eager"
            decoding="async"
            alt="MEGAPACK LEGAL 2026 — Protocolo Definitivo de Desafectación Crediticia"
            className="w-full h-auto aspect-square object-contain rounded-2xl"
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="md:text-xl text-[#93A7B8] mb-3 max-w-2xl mx-auto text-[12px] leading-relaxed"
        >
          Guías paso a paso, modelos de escritos, checklists de reclamo,
          fórmulas actualizadas y protocolos digitales, listos para usar
          desde el primer día.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col items-center mt-0 md:mt-2"
        >
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-3 rounded-full shadow-lg shadow-[#E0932E]/30 transition-colors mb-4 md:mb-3 text-[11.5px] sm:text-base md:text-lg whitespace-nowrap md:whitespace-normal"
          >
            🚀 Quiero Mi Sistema Legal
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#93A7B8]">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Valoración de
              usuarios
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">💻</span> Producto 100% Digital —
              Acceso Inmediato
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
