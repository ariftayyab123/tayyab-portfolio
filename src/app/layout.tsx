import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tayyab-portfolio-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tayyab Arif | Full-Stack Developer",
    template: "%s | Tayyab Arif",
  },
  description:
    "Full-stack developer building complex web applications, backend services, and production systems with React, Next.js, TypeScript, Java, and Spring Boot.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Warehouse Software",
    "Survey Programming",
    "Tayyab Arif",
  ],
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "Tayyab Arif" }],
  creator: "Tayyab Arif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tayyab Arif | Full-Stack Developer",
    description:
      "Full-stack developer building complex web applications, backend services, and production systems with React, Next.js, TypeScript, Java, and Spring Boot.",
    siteName: "Tayyab Arif Portfolio",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "Tayyab Arif Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyab Arif | Full-Stack Developer",
    description:
      "Full-stack developer building complex web applications, backend services, and production systems with React, Next.js, TypeScript, Java, and Spring Boot.",
    images: ["/images/hero-illustration.png"],
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
  // Structured Data (JSON-LD) for Person
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tayyab Arif",
    "jobTitle": "Full-Stack Developer",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/ariftayyab123",
      "https://www.linkedin.com/in/tayyab-arif-24991123b"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Hexagonal Architecture",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Supabase",
      "Docker",
      "Vitest",
      "JaCoCo"
    ]
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
