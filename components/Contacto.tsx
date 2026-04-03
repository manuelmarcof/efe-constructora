"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contacto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-muted mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl">
            Hablemos de tu proyecto
          </h2>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="+595 999 999 999"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-foreground text-white text-sm tracking-wide hover:bg-accent transition-colors"
            >
              Enviar Mensaje
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Ubicación
              </h3>
              <p className="text-lg">Asunción, Paraguay</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Email
              </h3>
              <a
                href="mailto:contacto@efeconstructora.com.py"
                className="text-lg hover:text-muted transition-colors"
              >
                contacto@efeconstructora.com.py
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Teléfono
              </h3>
              <a
                href="tel:+595999999999"
                className="text-lg hover:text-muted transition-colors"
              >
                +595 999 999 999
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Horario
              </h3>
              <p className="text-lg">Lunes a Viernes</p>
              <p className="text-muted">9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
