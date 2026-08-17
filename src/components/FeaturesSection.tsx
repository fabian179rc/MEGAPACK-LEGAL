import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Diagnosticar casos en minutos",
    desc: "Checklists y matrices de decisión para identificar qué tipo de reclamo corresponde antes de comprometer tiempo.",
  },
  {
    lead: "Reclamar con fundamento legal",
    desc: "Protocolos para BCRA, Veraz y Nosis con base en la Ley 25.326 actualizada, orientados a reducir rechazos e inconsistencias.",
  },
  {
    lead: "Aplicar plazos sin errores",
    desc: "Dominá la Regla del 5/2, la caducidad del dato y los criterios de la AAIP sin depender de interpretaciones propias.",
  },
  {
    lead: "Usar modelos listos",
    desc: "Cartas Documento, notas de rectificación y escritos de Hábeas Data listos para adaptar sin reescribir todo desde cero.",
  },
  {
    lead: "Cobrar con criterio profesional",
    desc: "Estructura de honorarios por consulta, gestión y bono de éxito para que tu servicio tenga valor de mercado real.",
  },
  {
    lead: "Presentarte con autoridad",
    desc: "Documentación sólida, actualizada y organizada que genera confianza desde la primera consulta con cada cliente.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6]">
            TRABAJAR CON MÉTODO Y CONFIANZA EN CADA CASO CREDITICIO
          </h2>
        </div>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#E0932E]" />
              <p className="text-[#93A7B8] leading-relaxed">
                <span className="font-bold text-[#EDF2F6]">
                  {feature.lead}
                </span>{" "}
                — {feature.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
