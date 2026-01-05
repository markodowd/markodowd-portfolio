"use client";

import { useState, useMemo } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag, X, Search } from "lucide-react";

interface BlogClientProps {
  posts: BlogPost[];
}

export function BlogClient({ posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique tags and categories
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach((post) => {
      categories.add(post.category);
    });
    return Array.from(categories).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTag && matchesCategory && matchesSearch;
    });
  }, [posts, selectedTag, selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedTag(null);
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedTag !== null || selectedCategory !== null || searchQuery !== "";

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Categories:
          </span>
          {allCategories.map((category) => (
            <Badge
              key={category}
              variant={
                selectedCategory === category ? "default" : "outline"
              }
              className="cursor-pointer"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Tags:
          </span>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            Clear filters
          </Button>
        )}
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {filteredPosts.length} of {posts.length} articles
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No articles found matching your filters.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
            className="mt-4"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}


