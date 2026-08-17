import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Sirve si ya trabajo hace años con casos crediticios?',
  a: 'Sí. El MEGAPACK LEGAL 2026 funciona como sistema de consulta y actualización para ordenar tu práctica, reducir búsquedas y trabajar con normativa, modelos y protocolos reunidos en un solo lugar actualizado a 2026.'
},
{
  q: '¿Sirve para cualquier provincia de Argentina?',
  a: 'Sí. La normativa de base es nacional (Ley 25.326, BCRA, AAIP). Los procedimientos de Veraz, Nosis y BCRA son iguales en todo el país. Las vías judiciales se diferencian por jurisdicción cuando corresponde.'
},
{
  q: '¿Necesito experiencia previa para usarlo?',
  a: 'No. El sistema está diseñado para abogados, gestores y profesionales vinculados al área legal o financiera. Cada capítulo parte desde los fundamentos y avanza hacia la acción concreta.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Inmediatamente después de confirmar el pago recibís el acceso digital al producto completo con todos los bonos incluidos.'
},
{
  q: '¿Reemplaza el asesoramiento de un abogado senior?',
  a: 'No. Es una herramienta de organización, consulta y referencia para profesionales. No reemplaza el criterio profesional ni el asesoramiento jurídico específico de cada caso.'
},
{
  q: '¿Puedo pedir reembolso?',
  a: 'Sí. Tenés 7 días desde la compra. Si el contenido no se corresponde con lo ofrecido, podés solicitar la devolución sin inconvenientes según las condiciones de compra.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EDF2F6] leading-tight">
            Respuestas a{" "}
            <em className="text-[#E0932E] font-bold italic">
              tus preguntas
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#16293B] rounded-2xl shadow-sm shadow-black/20">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#EDF2F6] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1D3550] text-[#EDF2F6] flex items-center justify-center transition-colors"
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-4 h-4" /> :

                    <Plus className="w-4 h-4" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-[#93A7B8] leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
