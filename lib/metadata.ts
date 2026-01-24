import type { Metadata } from "next";

function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is required");
  }
  return siteUrl;
}

const siteUrl = getSiteUrl();
const siteName = "Mark O'Dowd";
const defaultTitle = "Mark O'Dowd | Full-stack Developer | AWS Certified";
const defaultDescription =
  "Full-stack software developer from Ireland specializing in modern web applications, cloud architecture, and AWS. Building fast, reliable, and maintainable solutions with Next.js, React, TypeScript, and AWS.";

export const siteConfig = {
  name: siteName,
  title: defaultTitle,
  description: defaultDescription,
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.webp`,
  xHandle: "@markodowd_dev", // X (formerly Twitter) handle
  author: {
    name: "Mark O'Dowd",
    email: "contact@markodowd.dev",
  },
};

/**
 * Creates comprehensive metadata with Open Graph and X (Twitter) Card support
 * Note: The metadata API still uses 'twitter' as the key name for compatibility
 */
export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteName}`
    : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullUrl = `${siteUrl}${path}`;
  const ogImage = image || siteConfig.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "full-stack developer",
      "software engineer",
      "AWS certified",
      "Next.js",
      "React",
      "TypeScript",
      "web development",
      "cloud architecture",
      "Ireland",
      ...(tags || []),
    ],
    authors: authors
      ? authors.map((name) => ({ name }))
      : [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    alternates: {
      canonical: fullUrl,
      types: {
        "application/rss+xml": `${siteUrl}/feed.xml`,
      },
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "en",
      url: fullUrl,
      siteName: siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.author.name],
        tags: tags || [],
      }),
    },
    twitter: {
      // Note: Next.js Metadata API uses 'twitter' key for X (formerly Twitter) Cards
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: siteConfig.xHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },
  };

  return metadata;
}

/**
 * Creates metadata for a blog post page
 */
export async function createBlogPostMetadata(post: {
  slug: string;
  title: string;
  description: string;
  date?: string;
  author: string;
  tags: string[];
}): Promise<Metadata> {
  const publishedTime = post.date ? new Date(post.date).toISOString() : undefined;
  const articleImage = `${siteConfig.url}/og-image.webp`;

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: articleImage,
    publishedTime,
    authors: [post.author],
    tags: post.tags,
  });
}
