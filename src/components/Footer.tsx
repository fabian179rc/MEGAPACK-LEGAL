import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#0A1622] text-[#93A7B8] py-10 border-t border-[#1D3550]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ MEGAPACK LEGAL 2026
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          El MEGAPACK LEGAL 2026 es una herramienta digital de orientación
          y organización práctica para profesionales del Derecho y la
          gestión crediticia. Los modelos y guías incluidos deben
          adaptarse a la normativa, jurisprudencia y usos y costumbres
          procesales vigentes en cada jurisdicción. No constituye
          asesoramiento legal, patrocinio ni consultoría jurídica
          particular, ni reemplaza al profesional habilitado responsable
          de cada caso concreto.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@danosyperjuicios.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#5C7488]">
          <p>
            © 2026 MEGAPACK LEGAL 2026 — Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>);

}
