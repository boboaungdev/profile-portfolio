import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  GOOGLE_SITE_VERIFICATION,
  PROFILE_IMAGE_PATH,
  PROFILE_NAME,
  PROFILE_TITLE,
  PROFILE_WEBSITE_URL,
  PROFILE_X_HANDLE,
} from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE_WEBSITE_URL),
  title: {
    default: `${PROFILE_NAME} - Portfolio`,
    template: `%s | ${PROFILE_NAME}`,
  },
  description: `Full-stack developer portfolio by ${PROFILE_NAME}. Projects, resume, and contact - building scalable web and mobile apps with Node.js, React, Next.js, and Expo.`,
  alternates: { canonical: PROFILE_WEBSITE_URL },
  authors: [{ name: PROFILE_NAME, url: PROFILE_WEBSITE_URL }],
  keywords: [
    "Full-stack developer",
    "Node.js",
    "React",
    "Next.js",
    "Expo",
    "MongoDB",
    "Socket.IO",
    "WebRTC",
    "Portfolio",
    "Resume",
    PROFILE_NAME,
  ],
  openGraph: {
    title: `${PROFILE_NAME} - ${PROFILE_TITLE}`,
    description: `Explore projects, skills, and resume of ${PROFILE_NAME} - full-stack developer specializing in Node.js, Express, MongoDB, Redis, Socket.IO, React, Next.js, and Expo React Native.`,
    url: PROFILE_WEBSITE_URL,
    siteName: PROFILE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      { url: absoluteUrl(PROFILE_IMAGE_PATH), width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE_NAME} - ${PROFILE_TITLE}`,
    description: `Portfolio of ${PROFILE_NAME}: projects, resume, and contact. Building scalable, real-time web and mobile applications.`,
    creator: PROFILE_X_HANDLE,
    images: [absoluteUrl(PROFILE_IMAGE_PATH)],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  applicationName: `${PROFILE_NAME} Portfolio`,
  category: "technology",
  other: {
    "msapplication-TileColor": "#2d89ef",
    "application-name": `${PROFILE_NAME} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
