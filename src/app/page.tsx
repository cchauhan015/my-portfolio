import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
