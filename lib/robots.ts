import fs from "fs";
import path from "path";
import { getSiteUrl } from "./metadata";

export async function generateRobotsTxt() {
  const siteUrl = getSiteUrl();

  const robotsTxt = `# robots.txt for ${siteUrl.replace(/^https?:\/\//, "")}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml

# Disallow specific paths if needed in the future
# Disallow: /admin/
# Disallow: /private/
`;

  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt);
}
