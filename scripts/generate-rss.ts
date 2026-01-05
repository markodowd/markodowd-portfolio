import { generateRSSFeed } from "../lib/rss";

async function main() {
  try {
    await generateRSSFeed();
    console.log("✅ RSS feed generated successfully!");
  } catch (error) {
    console.error("❌ Error generating RSS feed:", error);
    process.exit(1);
  }
}

main();


