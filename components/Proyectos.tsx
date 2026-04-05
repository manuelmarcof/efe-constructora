'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const proyectos = [
  {
    title: 'Supermercado Central',
    location: 'Asuncion, Paraguay',
    category: 'Comercial',
    status: 'Entregada',
    area: '2.800 m\u00b2',
    image: '/images/supermercado.png',
  },
  {
    title: 'Torre Residencial Manora',
    location: 'Barrio Manora, Asuncion',
    category: 'Residencial',
    status: 'En Ejecucion',
    area: '12.000 m\u00b2',
    image: '/images/torre-residencial.png',
  },
  {
    title: 'Lobby Corporativo',
    location: 'Villa Morra, Asuncion',
    category: 'Comercial',
    status: 'Entregada',
    area: '1.500 m\u00b2',
    image: '/images/lobby-corporativo.png',
  },
  {
    title: 'Residencia Familiar',
    location: 'Luque, Paraguay',
    category: 'Residencial',
    status: 'Entregada',
    area: '450 m\u00b2',
    image: '/images/casa-moderna.png',
  },
  {
    title: 'Centro Comercial',
    location: 'Ciudad del Este',
    category: 'Comercial',
    status: 'En Ejecucion',
    area: '5.200 m\u00b2',
    image: '/images/comercial-centro.png',
  },
  {
    title: 'Oficinas Efe',
    location: 'Asuncion, Paraguay',
    category: 'Comercial',
    status: 'Entregada',
    area: '600 m\u00b2',
    image: '/images/oficina-efe.png',
  },
];

type FilterType = 'Todos' | 'Comercial' | 'Residencial';

export default function Proyectos() {
  const [filter, setFilter] = useState<FilterType>('Todos');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const filtered = proyectos.filter((p) => {
    return filter === 'Todos' || p.category === filter;
  });

  return (
    <section id="proyectos" className="py-28 md:py-40 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header - text fades in after section enters view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8b7355] mb-4">
              Portfolio
            </p>
            <h2 className="font-editorial text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1]">
              Proyectos<br />
              <span className="italic text-[#c4b8a8]">seleccionados.</span>
            </h2>
          </div>

          <div className="flex gap-2">
            {(['Todos', 'Comercial', 'Residencial'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                  filter === f
                    ? 'border-[#8b7355] text-[#8b7355]'
                    : 'border-white/15 text-white/40 hover:text-white/70'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll carousel */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((proyecto, i) => (
            <motion.div
              key={proyecto.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] overflow-hidden cursor-pointer snap-start"
            >
              {/* Image loads instantly */}
              <Image
                src={proyecto.image}
                alt={proyecto.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] uppercase tracking-[0.15em] px-3 py-1 ${
                  proyecto.status === 'En Ejecucion'
                    ? 'bg-[#8b7355] text-white'
                    : 'bg-white/90 text-[#1a1a1a]'
                }`}>
                  {proyecto.status}
                </span>
              </div>

              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white/60 text-[11px] uppercase tracking-[0.2em] mb-1">
                  {proyecto.category} / {proyecto.area}
                </p>
                <h3 className="font-editorial text-white text-2xl md:text-3xl">
                  {proyecto.title}
                </h3>
                <p className="text-white/50 text-[13px] mt-1">
                  {proyecto.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-white/30 text-[11px] uppercase tracking-[0.3em] text-center mt-4"
        >
          Desliza para ver mas
        </motion.p>
      </div>
    </section>
  );
}
