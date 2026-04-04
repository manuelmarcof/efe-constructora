'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { number: '+50.000', label: 'm\u00b2 construidos' },
  { number: '+100', label: 'proyectos entregados' },
  { number: '100%', label: 'compromiso' },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 md:py-36 bg-[#faf7f3]">
      {/* Mission / Vision */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
            Sobre Nosotros
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mt-8">
          <FadeIn>
            <h2 className="font-editorial text-[clamp(2rem,4vw,3.5rem)] text-[#1a1a1a] leading-[1.1]">
              Damos vida a ideas que
              <br />
              <span className="italic">aun no existen.</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#8b7355] mt-8" />
          </FadeIn>

          <div className="space-y-10">
            <FadeIn delay={0.1}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-3">
                Mision
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed text-[15px]">
                Dar vida a ideas que aun no existen, transformando suenos en
                espacios que se sienten, se viven y trascienden. Disenamos y
                construimos con pasion, combinando arte, tecnica y detalle
                para crear experiencias unicas que conectan con las personas
                y su forma de habitar el mundo.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-3">
                Vision
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed text-[15px]">
                Redefinir la manera en que se conciben los espacios,
                convirtiéndonos en un referente de diseño y construcción
                que inspira, innova y deja huella. Aspiramos a crear
                arquitectura que no solo se vea, sino que se experimente
                y permanezca en el tiempo.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#d4cdc4]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-editorial text-3xl md:text-4xl text-[#1a1a1a]">
                  {stat.number}
                </p>
                <p className="text-[12px] uppercase tracking-[0.15em] text-[#8a8a8a] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Full-bleed image strip */}
      <FadeIn className="mt-24">
        <div className="relative w-full h-[50vh] md:h-[70vh] img-zoom">
          <Image
            src="/images/oficina-efe.png"
            alt="Oficina Efe Constructora"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </FadeIn>

      {/* Founder */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full max-w-md img-zoom">
              <Image
                src="/images/eliana.jpeg"
                alt="Arq. Eliana Fernandez"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
              Fundadora
            </p>
            <h3 className="font-editorial text-3xl md:text-4xl text-[#1a1a1a] mb-6">
              Arq. Eliana<br />
              <span className="italic">Fernandez Mendieta</span>
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed text-[15px] mb-4">
              Arquitecta por la Universidad Nacional de Asuncion, con
              experiencia en obras comerciales, residenciales y diseño
              integral. Se destaca por su versatilidad, atencion al
              detalle y capacidad para transformar ideas en espacios
              funcionales y bellos.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed text-[15px]">
              Con experiencia como residente de obra y disenadora,
              combina la vision artistica con la rigurosidad tecnica
              — una profesional que entiende tanto el plano como la
              obra.
            </p>
            <div className="w-16 h-[1px] bg-[#8b7355] mt-8" />
          </FadeIn>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Tecnologia BIM',
              desc: 'Modelado 3D integrado para precision, transparencia y control de costos desde la etapa de diseño.',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b7355" strokeWidth="1">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
            },
            {
              title: 'Construccion Sustentable',
              desc: 'Soluciones bioclimaticas, eficiencia energetica y materiales responsables para proyectos que cuidan el entorno.',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b7355" strokeWidth="1">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              ),
            },
            {
              title: 'Seguridad Ocupacional',
              desc: 'Protocolos rigurosos bajo estandares internacionales para la proteccion de nuestro equipo y colaboradores.',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b7355" strokeWidth="1">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
            },
          ].map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="border border-[#d4cdc4] p-8 md:p-10 hover:border-[#8b7355] transition-colors duration-500">
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-sm uppercase tracking-[0.1em] text-[#1a1a1a] mb-3">
                  {pillar.title}
                </h4>
                <p className="text-[#8a8a8a] text-[14px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
