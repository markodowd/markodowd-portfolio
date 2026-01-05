"use client";

import { Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { BlogPost as BlogPostType } from "@/lib/blog";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          </div>
          <span>By {post.author}</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mb-6 text-xl text-muted-foreground">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-sm">
            {post.category}
          </Badge>
          {post.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm flex items-center gap-1"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
      />
    </article>
  );
}


