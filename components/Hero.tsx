'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/casa-moderna.png"
        alt="Arquitectura moderna en Paraguay"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-white/60 text-[11px] uppercase tracking-[0.3em] mb-6">
            Arquitectura e Ingenieria &mdash; Asuncion, Paraguay
          </p>

          <h1 className="font-editorial text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] max-w-4xl">
            Arquitectura que
            <br />
            <span className="italic">se experimenta.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Precision tecnica, belleza funcional. Transformamos ideas en
            espacios que trascienden.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-3 bg-white text-[#1a1a1a] px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:bg-[#f5f0eb] transition-colors"
            >
              Ver Proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <a
              href="https://wa.me/595981000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
            >
              Cotizar Proyecto
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-4 bg-white/60 animate-scroll-hint" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
