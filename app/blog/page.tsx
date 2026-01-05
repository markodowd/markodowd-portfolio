import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { BlogClient } from "./BlogClient";

export const metadata = {
  title: "Blog & Articles | Mark O'Dowd",
  description: "Technical writing, tutorials, and thought pieces on web development, cloud architecture, and software engineering.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-6xl z-10">
          <BlogHeader />
          <BlogClient posts={posts} />
        </div>
      </section>
    </main>
  );
}


