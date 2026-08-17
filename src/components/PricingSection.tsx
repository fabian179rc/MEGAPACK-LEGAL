import React from "react";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { getCheckoutUrl, trackInitiateCheckout } from "../utils/checkoutUrl";
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-[#1D3550] via-[#12263A] to-[#091420] pt-12 md:pt-14 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          🔥 75% OFF — Precio de Lanzamiento
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          MEGAPACK LEGAL 2026{" "}
          <em className="italic font-bold text-[#CFE0EC]">
            Protocolo Definitivo
          </em>
        </h2>

        <div className="relative mx-auto mb-2 w-full max-w-[620px]">
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
              >
                <img
                  src={`${import.meta.env.BASE_URL}${bonus.image}`}
                  alt={`Bono ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 z-20 w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-[#E0932E]/40 bg-[#0b1723]/70 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:w-[300px] md:w-[360px]">
              <img
                src={`${import.meta.env.BASE_URL}princ.webp`}
                alt="MEGAPACK LEGAL 2026 — Portada principal del ebook"
                width={1254}
                height={1254}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </div>
          </div>

          <div className="absolute -top-3 -right-2 md:top-2 md:right-2 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-[#c0392b] rotate-12"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 12%, 78% 6%, 79% 24%, 96% 30%, 86% 45%, 100% 58%, 83% 64%, 86% 82%, 68% 80%, 60% 97%, 47% 84%, 30% 92%, 28% 73%, 9% 72%, 19% 56%, 4% 45%, 21% 38%, 14% 20%, 33% 22%, 38% 4%)",
              }}
            />
            <div className="relative text-center text-white leading-none rotate-12">
              <div className="text-2xl md:text-3xl font-extrabold">75%</div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-wide mt-0.5">
                OFF
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 -mt-4 scroll-mt-6"
      >
        <div className="bg-[#16293B] rounded-3xl shadow-2xl shadow-black/30 p-7 md:p-8 text-center">
          <div className="text-[#93A7B8] text-base md:text-lg mb-3">
            Precio Normal:{" "}
            <span className="line-through">$79.990 ARS</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#E0932E] text-[#0E1E2E] font-bold px-5 py-2.5 rounded-full text-sm mb-5">
            <Flame className="w-4 h-4" /> 🔥 PRECIO DE LANZAMIENTO
          </div>

          <p className="text-[#93A7B8] text-base mb-1">
            Precio especial de lanzamiento:
          </p>
          <div className="font-heading text-6xl md:text-7xl font-bold text-[#E0932E] leading-none mb-2">
            $19.990 <span className="text-3xl md:text-4xl">ARS</span>
          </div>
          <p className="text-[#93A7B8] text-sm mb-6">
            Pago único. Acceso instantáneo desde hoy.
          </p>

          <motion.a
            id="pricing-cta-button"
            href={getCheckoutUrl()}
            onClick={trackInitiateCheckout}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold text-[11.5px] sm:text-base md:text-lg px-5 py-4 sm:px-6 md:py-5 rounded-full shadow-lg shadow-[#E0932E]/30 transition-colors mb-6 whitespace-nowrap md:whitespace-normal"
          >
            <span className="flex items-center gap-2 text-center">
              🔥 Sí, Quiero Acceder Ahora
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </motion.a>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-sm text-[#93A7B8] font-medium">
            <span>
              <span aria-hidden="true">⚡</span> Acceso Inmediato
            </span>
            <span>
              <span aria-hidden="true">💳</span> Pago Único
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días
            </span>
            <span>
              <span aria-hidden="true">🔒</span> Pago Seguro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
