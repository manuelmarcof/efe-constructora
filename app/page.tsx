import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Certificaciones from "@/components/Certificaciones";
import Proyectos from "@/components/Proyectos";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Certificaciones />
        <Proyectos />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
