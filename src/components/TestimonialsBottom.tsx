import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'María L.',
  location: 'Abogada Civilista — Buenos Aires',
  text: "Antes cada consulta de Veraz me llevaba horas buscando modelos. Ahora tengo el protocolo en el PDF y resuelvo el diagnóstico en minutos."
},
{
  initial: 'F',
  color: 'bg-blue-100 text-blue-700',
  name: 'Federico G.',
  location: 'Gestor Crediticio — Córdoba',
  text: 'El módulo de prescripción me dio el criterio para refutar un dato que ya tenía 6 años. Clarísimo y con la normativa 2026 aplicada correctamente.'
},
{
  initial: 'V',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Valentina R.',
  location: 'Abogada Independiente — Rosario',
  text: 'Lo usé para mis primeros reclamos reales. Los modelos de escritos me ahorraron horas. Muy completo y actualizado a 2026.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#E0932E] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#EDF2F6]">
            Lo Que Dicen Quienes Ya Tienen el MEGAPACK LEGAL 2026
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-[#16293B] rounded-2xl p-5 shadow-sm border border-white/10 flex flex-col h-full">

              <div className="flex text-[#E0932E] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-[#DCE6ED] text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-white/10 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#EDF2F6] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#93A7B8]">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
