import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '🗂️',
  title: 'Modelos dispersos',
  desc: 'Escritos sueltos y desactualizados. Cada caso nuevo rehacés todo desde cero sin saber si el modelo sigue vigente para 2026.'
},
{
  emoji: '⏱️',
  title: 'Trámites que llevan horas',
  desc: 'El reclamo en Veraz, la discrepancia en BCRA y la rectificación en Nosis te comen tiempo que podrías dedicar a cerrar más casos.'
},
{
  emoji: '📌',
  title: 'Plazos inciertos',
  desc: 'No tenés claro si aplicar la regla de los 2 años, los 5 años o si el dato ya venció. Un error de interpretación puede hundir el reclamo.'
},
{
  emoji: '🎯',
  title: 'Fundamento legal débil',
  desc: 'Sin citar correctamente la Ley 25.326 y las resoluciones de la AAIP, tu reclamo se puede ignorar o rechazar sin respuesta técnica.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6] uppercase">
            ¿Te falta estructura para gestionar casos de Veraz, Nosis y BCRA sin trabarte?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Sabés reclamar, pero cada caso nuevo te hace perder horas
            buscando modelos, plazos y procedimientos actualizados.
          </p>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#DCE6ED] text-[15px]">
            ⚡ Ese no es un problema de capacidad. Es un problema de sistema.
          </p>
        </div>

        <p className="text-center text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto mb-5">
          Y mientras buscás, el tiempo corre y el cliente espera:
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {pains.map((item, i) =>
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
            className="bg-[#16293B] p-3 md:p-4 rounded-2xl shadow-sm border border-white/10">

              <div className="flex items-center gap-2 mb-1 md:mb-1.5">
                <span className="text-xl md:text-3xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#EDF2F6]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
