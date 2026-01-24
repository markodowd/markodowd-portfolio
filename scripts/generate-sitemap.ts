import { generateSitemap } from "../lib/sitemap";

async function main() {
  try {
    await generateSitemap();
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
