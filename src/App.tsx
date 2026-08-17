import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1520308000113704";
const PAGE_TITLE =
  "MEGAPACK LEGAL 2026 — Desafectación y Rectificación Crediticia";
const PAGE_DESC =
  "Guías paso a paso, modelos de escritos, checklists de reclamo, fórmulas actualizadas y protocolos digitales, listos para usar desde el primer día.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.png`;

const SITE_URL = "https://megapack-desafectacion.tupuntodigital.shop";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", {
      crossorigin: "",
    });
    addLink("preload", HERO_IMAGE, {
      as: "image",
      fetchpriority: "high",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#0E1E2E");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "MEGAPACK LEGAL 2026");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "MEGAPACK LEGAL 2026 — Protocolo Definitivo de Desafectación Crediticia",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "MEGAPACK LEGAL 2026",
        },
        offers: {
          "@type": "Offer",
          price: "19990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://megapack-legal-desafectacion-total-inteligencia-crediticia.impultienda.ar/checkout",
        },
      });
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            q: "¿Sirve si ya trabajo hace años con casos crediticios?",
            a: "Sí. El MEGAPACK LEGAL 2026 funciona como sistema de consulta y actualización para ordenar tu práctica, reducir búsquedas y trabajar con normativa, modelos y protocolos reunidos en un solo lugar actualizado a 2026.",
          },
          {
            q: "¿Sirve para cualquier provincia de Argentina?",
            a: "Sí. La normativa de base es nacional (Ley 25.326, BCRA, AAIP). Los procedimientos de Veraz, Nosis y BCRA son iguales en todo el país. Las vías judiciales se diferencian por jurisdicción cuando corresponde.",
          },
          {
            q: "¿Necesito experiencia previa para usarlo?",
            a: "No. El sistema está diseñado para abogados, gestores y profesionales vinculados al área legal o financiera. Cada capítulo parte desde los fundamentos y avanza hacia la acción concreta.",
          },
          {
            q: "¿Cuándo recibo el acceso?",
            a: "Inmediatamente después de confirmar el pago recibís el acceso digital al producto completo con todos los bonos incluidos.",
          },
          {
            q: "¿Reemplaza el asesoramiento de un abogado senior?",
            a: "No. Es una herramienta de organización, consulta y referencia para profesionales. No reemplaza el criterio profesional ni el asesoramiento jurídico específico de cada caso.",
          },
          {
            q: "¿Puedo pedir reembolso?",
            a: "Sí. Tenés 7 días desde la compra. Si el contenido no se corresponde con lo ofrecido, podés solicitar la devolución sin inconvenientes según las condiciones de compra.",
          },
        ].map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const ric = (window as any).requestIdleCallback as
      | ((
          cb: () => void,
          opts?: {
            timeout: number;
          },
        ) => number)
      | undefined;
    if (ric) {
      ric(loadPixel, {
        timeout: 4000,
      });
    } else {
      const t = setTimeout(loadPixel, 2500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
