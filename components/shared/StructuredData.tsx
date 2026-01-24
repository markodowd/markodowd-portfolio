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
    jobTitle: "Full-stack Software Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      // Add your social media profiles here
      // "https://github.com/markodowd",
      // "https://linkedin.com/in/markodowd",
      // "https://x.com/markodowd", // X (formerly Twitter)
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
      name: "University", // Update with your actual university
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE", // Ireland
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
