import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Mitul Chavda",
  title: "Mitul Chavda | Full-Stack Software Engineer",
  description:
    "Mitul Chavda is a Full-Stack Software Engineer with 2+ years of experience building scalable web and mobile applications using React, Next.js, TypeScript, Node.js, and PostgreSQL. Expert in real-time systems, secure authentication, and performance optimization.",
  authors: [
    {
      name: "Mitul Chavda",
      url: "https://your-portfolio-url.vercel.app",
    },
  ],
  creator: "Mitul Chavda",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: Keywords,
  metadataBase: new URL("https://your-portfolio-url.vercel.app"),


  alternates: {
    canonical: "https://your-portfolio-url.vercel.app",
    languages: {
      "en-US": "https://your-portfolio-url.vercel.app",
    },
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
  verification: {
    google: "", // Add your Google verification code
  },
  appleWebApp: {
    capable: true,
    title: "Mitul Chavda",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Mitul Chavda | Full-Stack Software Engineer",
    description:
      "Explore Mitul Chavda's portfolio featuring scalable web applications, real-time systems, and full-stack development projects using React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Mitul Chavda",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mitul Chavda Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Mitul Chavda | Full-Stack Software Engineer",
    description:
      "Check out Mitul Chavda's portfolio featuring full-stack web development projects using React, Next.js, TypeScript, Node.js, and real-time systems.",
    images: ["/images/thumbnail.png"],
    creator: "", // Add your Twitter handle
    site: "", // Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
