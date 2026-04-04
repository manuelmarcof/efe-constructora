"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clientTypes = [
  "Inversionistas de Real Estate",
  "Sector Industrial",
  "Desarrollos Premium",
  "Retail & Supermercados",
  "Sector Corporativo",
  "Residencial Privado",
];

export default function Clientes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clientes" className="py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-4">
            Nuestros Clientes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl mx-auto">
            Quiénes confían en nosotros
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Trabajamos con los principales actores del mercado inmobiliario y
            empresarial de Paraguay.
          </p>
        </motion.div>

        {/* Client type tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {clientTypes.map((type, i) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="px-6 py-4 border border-border bg-white text-sm tracking-wide text-muted hover:text-foreground hover:border-foreground transition-colors"
            >
              {type}
            </motion.div>
          ))}
        </motion.div>

        {/* Logo placeholder row */}
        <div className="mt-20 border-t border-border pt-12">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted mb-10">
            Empresas que han confiado en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="w-28 h-12 bg-neutral-100 rounded flex items-center justify-center"
              >
                <span className="text-xs text-neutral-400">Logo {i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
