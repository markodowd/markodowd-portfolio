import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Certificates from "@/components/certificates/Certificates";
import Hobbies from "@/components/hobbies/Hobbies";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { getFeaturedPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Mark O'Dowd | Full-stack Developer | AWS Certified",
  description:
    "Full-stack software developer from Ireland specializing in modern web applications, cloud architecture, and AWS. Building fast, reliable, and maintainable solutions with Next.js, React, TypeScript, and AWS.",
  path: "/",
});

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Hobbies />
      <Blog posts={featuredPosts} />
      <Contact />
      <Footer />
    </main>
  );
}
