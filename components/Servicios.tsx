'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const servicios = [
  {
    number: '01',
    title: 'Construccion desde Cero',
    desc: 'Viviendas, edificios comerciales y proyectos a medida. Desde los cimientos hasta la entrega, con atencion al detalle en cada etapa.',
    image: '/images/casa-moderna.png',
  },
  {
    number: '02',
    title: 'Reformas de Viviendas',
    desc: 'Transformamos espacios segregados en hogares funcionales. Mejoramos iluminacion natural, ventilacion y flujo entre ambientes.',
    image: '/images/interior-residencial.png',
  },
  {
    number: '03',
    title: 'Diseño de Interiores',
    desc: 'Interiores que combinan estetica y funcionalidad. Cada espacio pensado para conectar con las personas y su forma de habitar.',
    image: '/images/oficina-efe.png',
  },
  {
    number: '04',
    title: 'Obra Llave en Mano',
    desc: 'Gestion integral desde la seleccion del terreno hasta la entrega final. Un unico punto de responsabilidad, sin intermediarios.',
    image: '/images/lobby-corporativo.png',
    featured: true,
  },
];

export default function Servicios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicios" className="py-28 md:py-40 bg-[#f5f0eb]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#8b7355] mb-4">
            Servicios
          </p>
          <h2 className="font-editorial text-[clamp(2rem,4vw,3.5rem)] text-[#1a1a1a] leading-[1.1] mb-16">
            Lo que <span className="italic">hacemos.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.4 }}
              className={`group grid md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-12 py-10 border-t border-[#d4cdc4] items-start ${
                servicio.featured ? 'bg-[#1a1a1a] -mx-6 md:-mx-12 px-6 md:px-12 border-t-0' : ''
              }`}
            >
              <span className={`font-editorial text-2xl ${
                servicio.featured ? 'text-[#8b7355]' : 'text-[#c4b8a8]'
              }`}>
                {servicio.number}
              </span>

              <div>
                <h3 className={`font-editorial text-2xl md:text-3xl mb-3 ${
                  servicio.featured ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {servicio.title}
                  {servicio.featured && (
                    <span className="inline-block ml-3 text-[10px] uppercase tracking-[0.15em] bg-[#8b7355] text-white px-3 py-1 align-middle font-sans">
                      Design-Build
                    </span>
                  )}
                </h3>
                <p className={`text-[15px] leading-relaxed ${
                  servicio.featured ? 'text-white/60' : 'text-[#8a8a8a]'
                }`}>
                  {servicio.desc}
                </p>
              </div>

              {/* Image loads with no delay */}
              <div className="relative aspect-[3/2] overflow-hidden img-zoom hidden md:block">
                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
