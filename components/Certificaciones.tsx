"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    name: "ISO 9001",
    description: "Gestión de Calidad",
    icon: "9001",
  },
  {
    name: "ISO 14001",
    description: "Gestión Ambiental",
    icon: "14001",
  },
  {
    name: "ISO 45001",
    description: "Seguridad y Salud Ocupacional",
    icon: "45001",
  },
  {
    name: "BIM",
    description: "ISO 19650 — Modelado de Información",
    icon: "BIM",
  },
  {
    name: "CAPACO",
    description: "Cámara Paraguaya de la Construcción",
    icon: "CAP",
  },
  {
    name: "EDGE Ready",
    description: "Certificación de Edificios Verdes",
    icon: "EDGE",
  },
];

export default function Certificaciones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-white/50 mb-4">
            Certificaciones & Alianzas
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Respaldados por estándares internacionales
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-neutral-900 p-6 md:p-8 text-center group hover:bg-neutral-800 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 transition-colors">
                <span className="text-sm font-bold tracking-tight">{cert.icon}</span>
              </div>
              <h3 className="text-sm font-semibold mb-1">{cert.name}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
