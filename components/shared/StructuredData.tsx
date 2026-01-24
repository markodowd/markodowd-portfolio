import { siteConfig } from "@/lib/metadata";

interface PersonStructuredDataProps {
  type?: "Person" | "ProfilePage";
}

export function PersonStructuredData({
  type = "Person",
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name: siteConfig.author.name,
    jobTitle: siteConfig.jobTitleFull,
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      "https://github.com/markodowd",
      "https://www.linkedin.com/in/markodowd2/",
      "https://x.com/markodowd_dev",
      "https://bsky.app/profile/markodowd.dev",
    ],
    knowsAbout: [
      "Web Development",
      "Full-stack Development",
      "Cloud Architecture",
      "AWS",
      "Next.js",
      "React",
      "TypeScript",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Queen's University Belfast",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  tags?: string[];
}

export function ArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
  tags,
}: ArticleStructuredDataProps) {
  const siteUrl = siteConfig.url;
  const articleImage = image || `${siteUrl}/og-image.webp`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: articleImage,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: tags?.join(", ") || "",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  url: string;
}

export function WebsiteStructuredData({ url }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
