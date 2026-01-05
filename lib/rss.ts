import RSS from "rss";
import { getAllPosts, BlogPost } from "./blog";
import fs from "fs";
import path from "path";

export async function generateRSSFeed() {
  const posts = await getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is required");
  }

  const feed = new RSS({
    title: "Mark O'Dowd | Blog & Articles",
    description:
      "Technical writing, tutorials, and thought pieces on web development, cloud architecture, and software engineering.",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Mark O'Dowd`,
  });

  posts.forEach((post: BlogPost) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      date: new Date(post.date),
      author: post.author,
      categories: [post.category, ...post.tags],
    });
  });

  const rss = feed.xml({ indent: true });
  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "feed.xml"), rss);
}


