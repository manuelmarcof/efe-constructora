"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-4">
            Nosotros
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl">
            Construimos con propósito
          </h2>
        </FadeIn>

        <div className="mt-20 grid md:grid-cols-2 gap-16">
          {/* Misión */}
          <FadeIn delay={0.1}>
            <div className="border-t border-border pt-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-6">
                Misión
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                Dar vida a ideas que aún no existen, transformando sueños en
                espacios que se sienten, se viven y trascienden. Diseñamos y
                construimos con pasión, combinando arte, técnica y detalle para
                crear experiencias únicas que conectan con las personas y su
                forma de habitar el mundo.
              </p>
            </div>
          </FadeIn>

          {/* Visión */}
          <FadeIn delay={0.2}>
            <div className="border-t border-border pt-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-6">
                Visión
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                Redefinir la manera en que se conciben los espacios,
                convirtiéndonos en un referente de diseño y construcción que
                inspira, innova y deja huella. Aspiramos a crear arquitectura
                que no solo se vea, sino que se experimente y permanezca en el
                tiempo.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Differentiators */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Proyectos Entregados" },
            { number: "15+", label: "Años de Experiencia" },
            { number: "100%", label: "Atención al Detalle" },
            { number: "2x", label: "Más Rápidos" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
