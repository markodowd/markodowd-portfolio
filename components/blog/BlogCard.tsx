"use client";

import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { format } from "date-fns";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <ScrollAnimation direction="up" delay={0.1 + index * 0.1}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-lg hover:scale-[1.02]"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="mb-4 text-muted-foreground flex-grow">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="text-xs flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{post.tags.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </ScrollAnimation>
  );
}


