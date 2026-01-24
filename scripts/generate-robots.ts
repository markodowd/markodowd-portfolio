import { generateRobotsTxt } from "../lib/robots";

async function main() {
  try {
    await generateRobotsTxt();
    console.log("✅ robots.txt generated successfully!");
  } catch (error) {
    console.error("❌ Error generating robots.txt:", error);
    process.exit(1);
  }
}

main();
