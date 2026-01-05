"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { BlogHeader } from "./BlogHeader";
import { BlogCard } from "./BlogCard";
import { BlogPost } from "@/lib/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const { mousePosition, ref } = useMousePosition();
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section
      ref={ref}
      id="blog"
      className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.2} />
      <div className="relative mx-auto max-w-6xl z-10">
        <BlogHeader />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


