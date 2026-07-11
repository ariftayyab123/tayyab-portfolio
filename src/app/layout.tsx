import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tayyab Arif | Full-Stack Developer",
  description:
    "I build dashboards, websites, APIs, and systems that businesses actually use. Full-stack developer specializing in React, Node.js, and production-ready software.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Tayyab Arif",
    "Portfolio",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Tayyab Arif" }],
  creator: "Tayyab Arif",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tayyab Arif | Full-Stack Developer",
    description:
      "I build dashboards, websites, APIs, and systems that businesses actually use.",
    siteName: "Tayyab Arif Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyab Arif | Full-Stack Developer",
    description:
      "I build dashboards, websites, APIs, and systems that businesses actually use.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
