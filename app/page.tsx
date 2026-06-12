import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import EmergencyBanner from "@/components/EmergencyBanner";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Reviews />
        <EmergencyBanner />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
