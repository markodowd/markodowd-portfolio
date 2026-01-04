import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Hobbies from "@/components/Hobbies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Hobbies />
      <ContactForm />
      <Footer />
    </main>
  );
}
