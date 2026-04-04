"use client";

import { motion, useInView } from "framer-motion";
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Arquitectura e Ingeniería bajo un solo techo
          </h2>
        </FadeIn>

        {/* Founders */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="bg-surface p-8 md:p-10">
              <div className="w-20 h-20 bg-neutral-200 rounded-full mb-6" />
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">Arquitecta</p>
              <h3 className="text-xl font-semibold mb-3">Nombre de la Arquitecta</h3>
              <p className="text-muted leading-relaxed">
                Visión creativa y sensibilidad estética que transforma cada
                proyecto en una experiencia sensorial. Especialista en diseño
                que conecta personas con espacios.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-surface p-8 md:p-10">
              <div className="w-20 h-20 bg-neutral-200 rounded-full mb-6" />
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">Ingeniero</p>
              <h3 className="text-xl font-semibold mb-3">Nombre del Ingeniero</h3>
              <p className="text-muted leading-relaxed">
                Rigor técnico y gestión de proyectos que garantizan ejecución
                impecable. Especialista en estructuras, presupuestos y
                cumplimiento de plazos.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">
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

        {/* Key Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "+50.000", label: "m² Construidos" },
            { number: "100+", label: "Proyectos Entregados" },
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

        {/* Pillars: BIM + Sustainability + Safety */}
        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0 4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
                </svg>
                <h3 className="text-sm font-semibold tracking-wide uppercase">Tecnología BIM</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Modelado de Información de Construcción bajo estándares ISO 19650.
                Transparencia total, cero retrabajos, control de costos desde el día uno.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18a.94.94 0 0 0-.662.274.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>
                <h3 className="text-sm font-semibold tracking-wide uppercase">Compromiso Sustentable</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Diseño bioclimático, recolección de aguas pluviales, aislamiento
                térmico y eficiencia energética. Preparados para certificación EDGE y LEED.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <h3 className="text-sm font-semibold tracking-wide uppercase">Seguridad Ocupacional</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Protocolos ISO 45001 en cada obra. Cero accidentes como
                objetivo permanente. Cuidamos a nuestra gente y a la tuya.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
