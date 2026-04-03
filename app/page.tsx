import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
