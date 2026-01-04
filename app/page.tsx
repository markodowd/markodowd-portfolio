import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Certificates from "@/components/certificates/Certificates";
import Hobbies from "@/components/hobbies/Hobbies";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
