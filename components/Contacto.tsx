'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Contacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" className="py-28 md:py-40 bg-[#f5f0eb]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] mb-4">
              Contacto
            </p>
            <h2 className="font-editorial text-[clamp(2rem,4vw,3.5rem)] text-[#1a1a1a] leading-[1.1] mb-8">
              Hablemos de<br />
              <span className="italic">tu proyecto.</span>
            </h2>

            <div className="space-y-6 text-[15px] text-[#4a4a4a]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-1">Ubicacion</p>
                <p>Barrio Jara, Asuncion</p>
                <p>Paraguay</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-1">Telefono</p>
                <a href="tel:+595981000000" className="hover:text-[#8b7355] transition-colors">+595 981 000 000</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-1">Email</p>
                <a href="mailto:info@efeconstructora.com.py" className="hover:text-[#8b7355] transition-colors">info@efeconstructora.com.py</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] mb-1">Horario</p>
                <p>Lunes a Viernes: 07:00 – 17:00</p>
                <p>Sabados: 07:00 – 12:00</p>
              </div>
            </div>

            <a
              href="https://wa.me/595981000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 mt-10 text-[13px] uppercase tracking-[0.1em] hover:bg-[#1fb855] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] block mb-2">Nombre</label>
                <input type="text" className="w-full bg-transparent border-b border-[#d4cdc4] py-3 text-[#1a1a1a] text-[15px] focus:outline-none focus:border-[#8b7355] transition-colors placeholder:text-[#c4b8a8]" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] block mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-[#d4cdc4] py-3 text-[#1a1a1a] text-[15px] focus:outline-none focus:border-[#8b7355] transition-colors placeholder:text-[#c4b8a8]" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] block mb-2">Telefono</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#d4cdc4] py-3 text-[#1a1a1a] text-[15px] focus:outline-none focus:border-[#8b7355] transition-colors placeholder:text-[#c4b8a8]" placeholder="+595 ..." />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] block mb-2">Tipo de Proyecto</label>
                <select className="w-full bg-transparent border-b border-[#d4cdc4] py-3 text-[#1a1a1a] text-[15px] focus:outline-none focus:border-[#8b7355] transition-colors">
                  <option value="">Seleccionar...</option>
                  <option value="construccion">Construccion desde Cero</option>
                  <option value="reforma">Reforma de Vivienda</option>
                  <option value="interiores">Diseño de Interiores</option>
                  <option value="comercial">Comercial</option>
                  <option value="llave-en-mano">Obra Llave en Mano</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] block mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-[#d4cdc4] py-3 text-[#1a1a1a] text-[15px] focus:outline-none focus:border-[#8b7355] transition-colors placeholder:text-[#c4b8a8] resize-none" placeholder="Contanos sobre tu proyecto..." />
              </div>
              <button type="submit" className="w-full bg-[#1a1a1a] text-white py-4 text-[13px] uppercase tracking-[0.15em] hover:bg-[#333] transition-colors">
                Enviar Consulta
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] mt-24 img-zoom">
        <Image
          src="/images/equipo-fundadores.png"
          alt="Equipo Efe Constructora"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
