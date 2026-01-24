import { getAllPosts } from "./blog";
import fs from "fs";
import path from "path";
import { getSiteUrl } from "./metadata";

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export async function generateSitemap() {
  const siteUrl = getSiteUrl();
  const posts = await getAllPosts();
  const currentDate = new Date().toISOString().split("T")[0];

  const urls: SitemapUrl[] = [
    {
      loc: `${siteUrl}/`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${siteUrl}/blog/`,
      lastmod: posts.length > 0 ? posts[0].date : currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
  ];

  // Add all blog posts
  posts.forEach((post) => {
    urls.push({
      loc: `${siteUrl}/blog/${post.slug}/`,
      lastmod: post.date ? post.date.split("T")[0] : currentDate,
      changefreq: "monthly",
      priority: 0.6,
    });
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    ${url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>` : ""}
    ${url.changefreq ? `    <changefreq>${url.changefreq}</changefreq>` : ""}
    ${url.priority ? `    <priority>${url.priority}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
