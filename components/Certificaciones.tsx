'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certs = [
  { label: 'ISO 9001', desc: 'Gestion de Calidad' },
  { label: 'ISO 14001', desc: 'Gestion Ambiental' },
  { label: 'ISO 45001', desc: 'Seguridad Ocupacional' },
  { label: 'BIM', desc: 'ISO 19650' },
  { label: 'CAPACO', desc: 'Camara Paraguaya de la Construccion' },
  { label: 'EDGE', desc: 'Certificacion Sustentable' },
];

export default function Certificaciones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 md:py-28 bg-[#2a2520]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
            Respaldo Institucional
          </p>
          <h2 className="font-editorial text-2xl md:text-3xl text-white">
            Certificaciones y <span className="italic">alianzas.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="border border-white/10 p-6 text-center hover:border-[#8b7355]/50 transition-colors duration-500"
            >
              <p className="text-white font-editorial text-lg mb-1">{cert.label}</p>
              <p className="text-white/40 text-[11px] uppercase tracking-[0.1em]">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
