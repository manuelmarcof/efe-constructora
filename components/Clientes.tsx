'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clientTypes = [
  'Inversionistas de Real Estate',
  'Sector Industrial',
  'Desarrollos Premium',
  'Retail & Supermercados',
  'Oficinas Corporativas',
  'Residencias de Alta Gama',
];

export default function Clientes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 md:py-28 bg-[#faf7f3]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
            Nuestros Clientes
          </p>
          <h2 className="font-editorial text-[clamp(1.8rem,3vw,2.5rem)] text-[#1a1a1a] leading-[1.1] mb-12">
            Trabajamos con quienes<br />
            <span className="italic">construyen el futuro.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {clientTypes.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="text-[13px] text-[#4a4a4a] border border-[#d4cdc4] px-5 py-2.5 hover:border-[#8b7355] hover:text-[#8b7355] transition-colors duration-300 cursor-default"
            >
              {type}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
