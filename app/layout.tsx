import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import BackToTop from "@/components/navigation/BackToTop";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/shared/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: "Mark O'Dowd | Full-stack Developer | AWS Certified",
  description:
    "Full-stack software developer from Ireland specializing in modern web applications, cloud architecture, and AWS. Building fast, reliable, and maintainable solutions with Next.js, React, TypeScript, and AWS.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PersonStructuredData />
        <WebsiteStructuredData url={siteConfig.url} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
