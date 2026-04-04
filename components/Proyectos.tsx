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
type StatusType = 'Todos' | 'En Ejecucion' | 'Entregada';

export default function Proyectos() {
  const [filter, setFilter] = useState<FilterType>('Todos');
  const [status, setStatus] = useState<StatusType>('Todos');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = proyectos.filter((p) => {
    const catMatch = filter === 'Todos' || p.category === filter;
    const statusMatch = status === 'Todos' || p.status === status;
    return catMatch && statusMatch;
  });

  return (
    <section id="proyectos" className="py-24 md:py-36 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
            Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-editorial text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1]">
              Proyectos<br />
              <span className="italic text-[#c4b8a8]">seleccionados.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="flex gap-2">
                {(['Todos', 'En Ejecucion', 'Entregada'] as StatusType[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                      status === s
                        ? 'border-[#8b7355] text-[#8b7355]'
                        : 'border-white/15 text-white/40 hover:text-white/70'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((proyecto, i) => (
            <motion.div
              key={proyecto.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <Image
                src={proyecto.image}
                alt={proyecto.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

              <div className="absolute top-4 right-4">
                <span className={`text-[10px] uppercase tracking-[0.15em] px-3 py-1 ${
                  proyecto.status === 'En Ejecucion'
                    ? 'bg-[#8b7355] text-white'
                    : 'bg-white/90 text-[#1a1a1a]'
                }`}>
                  {proyecto.status}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white/60 text-[11px] uppercase tracking-[0.2em] mb-1">
                  {proyecto.category} &mdash; {proyecto.area}
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
      </div>
    </section>
  );
}
