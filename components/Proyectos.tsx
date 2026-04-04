"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Supermercado Central",
    category: "Comercial",
    status: "Entregada",
    area: "2,500 m²",
    location: "Asunción, Paraguay",
  },
  {
    title: "Oficinas Corporativas Santa Teresa",
    category: "Comercial",
    status: "Entregada",
    area: "1,800 m²",
    location: "Asunción, Paraguay",
  },
  {
    title: "Residencia Familiar Villa Morra",
    category: "Residencial",
    status: "Entregada",
    area: "350 m²",
    location: "Asunción, Paraguay",
  },
  {
    title: "Centro Comercial del Este",
    category: "Comercial",
    status: "En Ejecución",
    area: "5,000 m²",
    location: "Ciudad del Este, Paraguay",
  },
  {
    title: "Casa de Campo Areguá",
    category: "Residencial",
    status: "Entregada",
    area: "280 m²",
    location: "Areguá, Paraguay",
  },
  {
    title: "Torre Residencial Carmelitas",
    category: "Residencial",
    status: "En Ejecución",
    area: "4,200 m²",
    location: "Asunción, Paraguay",
  },
];

const categoryFilters = ["Todos", "Comercial", "Residencial"];
const statusFilters = ["Todos", "En Ejecución", "Entregada"];

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeStatus, setActiveStatus] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = projects.filter((p) => {
    const catMatch = activeCategory === "Todos" || p.category === activeCategory;
    const statusMatch = activeStatus === "Todos" || p.status === activeStatus;
    return catMatch && statusMatch;
  });

  return (
    <section id="proyectos" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-4">
            Proyectos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl">
            Nuestro trabajo
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          {/* Category filters */}
          <div className="flex gap-2">
            <span className="text-xs tracking-[0.2em] uppercase text-muted self-center mr-2">Tipo:</span>
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                  activeCategory === filter
                    ? "bg-foreground text-white"
                    : "bg-surface text-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Status filters */}
          <div className="flex gap-2">
            <span className="text-xs tracking-[0.2em] uppercase text-muted self-center mr-2">Estado:</span>
            {statusFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveStatus(filter)}
                className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                  activeStatus === filter
                    ? "bg-foreground text-white"
                    : "bg-surface text-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group relative aspect-[4/3] bg-surface overflow-hidden cursor-pointer"
            >
              {/* Placeholder gradient background — replace with drone shots */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 50%, #a3a3a3 100%)`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-sm text-white/70">
                    <span>{project.area}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs tracking-wide bg-white/90 px-3 py-1">
                  {project.category}
                </span>
                <span
                  className={`text-xs tracking-wide px-3 py-1 ${
                    project.status === "En Ejecución"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted">
            No hay proyectos que coincidan con los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  );
}
