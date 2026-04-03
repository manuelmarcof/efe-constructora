export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">efe</span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted">
                constructora
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Transformamos sueños en espacios que se sienten, se viven y
              trascienden.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Social / Legal */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <span
                  key={social}
                  className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Efe Constructora. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-muted">Asunción, Paraguay</p>
        </div>
      </div>
    </footer>
  );
}
