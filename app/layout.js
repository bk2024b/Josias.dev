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
  title: {
    default: "Josias — Developer & Product Builder",
    template: "%s · Josias.dev",
  },
  description:
    "Full-stack developer focused on building fast, modern and scalable web products. Explore projects like PhoneTimeline, TrimMyPDF and EarbudsTimeline.",
  openGraph: {
    title: "Josias — Developer & Product Builder",
    description:
      "I build products people enjoy using. Full-stack developer focused on fast, modern, scalable web products.",
    url: siteUrl,
    siteName: "Josias.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josias — Developer & Product Builder",
    description: "I build products people enjoy using.",
  },
  verification: {
    google: "ZilcoLVCMEUHQtUAAU3aOgfPqvd9MSjazLClBqS-CVA",
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteUrl}/blog/rss.xml`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
