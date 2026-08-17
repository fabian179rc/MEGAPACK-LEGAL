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
          Un error en Veraz, Nosis o BCRA{" "}
          <span className="text-[#E0932E]">puede costarte un cliente.</span>
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
          className="mx-auto mb-3 w-full max-w-[620px]"
        >
          <div className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[420px] md:h-[470px]">
            {[
              {
                image: 'b1.webp',
                className: 'left-0 top-8 sm:left-2 md:left-4 md:top-12 -rotate-12',
              },
              {
                image: 'b2.webp',
                className: 'left-10 top-0 sm:left-14 md:left-20 md:top-4 rotate-6',
              },
              {
                image: 'b3.webp',
                className: 'right-10 top-0 sm:right-14 md:right-16 md:top-5 -rotate-6',
              },
              {
                image: 'b4.webp',
                className: 'right-0 bottom-12 sm:right-2 md:right-4 md:bottom-16 rotate-12',
              },
              {
                image: 'b5.webp',
                className: 'left-12 bottom-6 sm:left-16 md:left-20 md:bottom-10 -rotate-3',
              },
            ].map((bonus, index) => (
              <div
                key={bonus.image}
                className={`absolute z-10 w-[112px] overflow-hidden rounded-2xl border border-white/15 bg-[#121f2b] p-1 shadow-2xl shadow-black/30 sm:w-[128px] md:w-[150px] ${bonus.className}`}
                style={{ transform: `translateZ(0) ${bonus.className.includes('rotate') ? '' : ''}` }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${bonus.image}`}
                  alt={`Bono ${index + 1}`}
                  loading="eager"
                  decoding="async"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 z-20 w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-[#E0932E]/40 bg-[#0b1723]/70 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:w-[300px] md:w-[360px]">
              <img
                src={`${import.meta.env.BASE_URL}princ.webp`}
                width={1254}
                height={1254}
                loading="eager"
                decoding="async"
                alt="MEGAPACK LEGAL 2026 — Portada principal del ebook"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </div>
          </div>
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
