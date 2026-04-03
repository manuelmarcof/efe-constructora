"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-surface">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-6">
            Diseño & Construcción
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            Transformamos sueños en espacios que{" "}
            <span className="italic font-light">trascienden</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Diseñamos y construimos con pasión, combinando arte, técnica y
            detalle para crear experiencias únicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-foreground text-white text-sm tracking-wide hover:bg-accent transition-colors"
          >
            Iniciar Proyecto
          </a>
          <a
            href="#proyectos"
            className="px-8 py-4 border border-border text-sm tracking-wide hover:bg-surface transition-colors"
          >
            Ver Proyectos
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-border mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
