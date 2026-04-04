"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "595999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaría consultar sobre un proyecto.")}`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video-ready background — replace div with <video> when footage is available */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
        {/* Architectural grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient overlay for text readability (needed when video is added) */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.5em] uppercase text-white/60 mb-6">
            Diseño & Construcción &middot; Asunción, Paraguay
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-5xl mx-auto text-white">
            Transformamos sueños en espacios que{" "}
            <span className="italic font-light text-white/80">trascienden</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Gestión integral de proyectos — del terreno a la entrega.
            Arquitectura e ingeniería bajo un solo techo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Presupuesto
          </a>
          <a
            href="#proyectos"
            className="px-8 py-4 border border-white/30 text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            Ver Proyectos
          </a>
        </motion.div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-white/40 text-xs tracking-[0.2em] uppercase"
        >
          <span>ISO 9001</span>
          <span className="w-px h-4 bg-white/20" />
          <span>ISO 45001</span>
          <span className="w-px h-4 bg-white/20" />
          <span>BIM</span>
          <span className="w-px h-4 bg-white/20" />
          <span>CAPACO</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-white/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
