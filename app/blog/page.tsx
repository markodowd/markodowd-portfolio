import { getAllPosts } from "@/lib/blog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogClient } from "./BlogClient";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog & Articles",
  description:
    "Technical writing, tutorials, and thought pieces on web development, cloud architecture, and software engineering.",
  path: "/blog",
  tags: [
    "web development",
    "cloud architecture",
    "software engineering",
    "tutorials",
    "technical writing",
  ],
});

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


