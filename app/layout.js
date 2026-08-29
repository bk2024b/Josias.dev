import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://josias-dev.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Josias Boco — Freelance Web Developer", template: "%s · Josias.dev" },
  description: "Freelance web developer building modern business websites, web applications, SaaS products and data-driven platforms for businesses and startups.",
  keywords: ["freelance web developer", "web development services", "business website development", "web application development", "SaaS development", "MVP development", "website redesign"],
  authors: [{ name: "Josias Boco", url: siteUrl }],
  creator: "Josias Boco",
  alternates: { canonical: "/", types: { "application/rss+xml": `${siteUrl}/blog/rss.xml` } },
  openGraph: { title: "Josias Boco — Freelance Web Developer", description: "Modern websites, web applications and SaaS products built for businesses, founders and startups.", url: siteUrl, siteName: "Josias.dev", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Josias Boco — Freelance Web Developer", description: "Modern websites, web applications and SaaS products built for businesses and startups." },
  robots: { index: true, follow: true },
  verification: { google: "ZilcoLVCMEUHQtUAAU3aOgfPqvd9MSjazLClBqS-CVA" },
};

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Josias Boco", url: siteUrl, jobTitle: "Freelance Web Developer", sameAs: ["https://github.com/bk2024b", "https://www.linkedin.com/in/josias-boco-70963a219/"] };
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Josias.dev", url: siteUrl, description: "Freelance web development portfolio and services by Josias Boco." };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
