import { getPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { BlogPost } from "@/components/blog/BlogPost";
import { BlogCard } from "@/components/blog/BlogCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Mark O'Dowd`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags or category)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-6xl z-10">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <BlogPost post={post} />

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="mb-8 text-3xl font-bold">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard
                    key={relatedPost.slug}
                    post={relatedPost}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


