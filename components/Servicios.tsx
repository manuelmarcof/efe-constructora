"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Obra Llave en Mano",
    subtitle: "Design-Build",
    description:
      "Gestión integral desde la selección del terreno hasta la entrega final. Un solo responsable, cero conflictos entre diseño y ejecución. La tranquilidad de un proyecto sin sorpresas.",
    highlight: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    ),
  },
  {
    title: "Diseño Arquitectónico",
    description:
      "Creamos espacios que combinan estética y funcionalidad con metodología BIM. Cada detalle diseñado para reflejar tu visión y necesidades.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Construcción Comercial",
    description:
      "Supermercados, oficinas y locales comerciales. Ejecutamos proyectos a gran escala con precisión, cumpliendo plazos y presupuestos.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Construcción Residencial",
    description:
      "Casas y departamentos diseñados para vivir. Desde residencias premium en Villa Morra hasta desarrollos en zonas emergentes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Remodelación y Acabados",
    description:
      "Renovamos y transformamos espacios existentes con acabados de primera calidad. Cada detalle cuenta, cada superficie importa.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Construcción Sustentable",
    subtitle: "Green Building",
    description:
      "Diseño bioclimático, eficiencia energética, paneles solares y recolección de agua. Proyectos preparados para certificación EDGE y LEED.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
];

export default function Servicios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl">
            Lo que hacemos
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            Desde la concepción del diseño hasta la entrega final — una sola
            empresa, una sola responsabilidad.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`p-10 md:p-12 group transition-colors duration-300 ${
                service.highlight
                  ? "bg-foreground text-white hover:bg-accent"
                  : "bg-surface hover:bg-white"
              }`}
            >
              <div
                className={`mb-6 group-hover:scale-110 transition-transform ${
                  service.highlight ? "text-white" : "text-foreground"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              {service.subtitle && (
                <p
                  className={`text-xs tracking-[0.2em] uppercase mb-4 ${
                    service.highlight ? "text-white/50" : "text-muted"
                  }`}
                >
                  {service.subtitle}
                </p>
              )}
              {!service.subtitle && <div className="mb-4" />}
              <p
                className={`leading-relaxed ${
                  service.highlight ? "text-white/70" : "text-muted"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
