import type { Metadata } from "next";

import {
  PROFILE_GITHUB_URL,
  PROFILE_IMAGE_PATH,
  PROFILE_LINKEDIN_URL,
  PROFILE_NAME,
  PROFILE_TITLE,
  PROFILE_WEBSITE_URL,
  PROFILE_X_HANDLE,
  PROFILE_X_URL,
  SEO_IMAGE_PATH,
} from "@/constants";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, PROFILE_WEBSITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  imagePath,
  imageWidth,
  imageHeight,
}: {
  title?: string;
  description: string;
  path?: string;
  imagePath?: string;
  imageWidth?: number;
  imageHeight?: number;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${PROFILE_NAME}`
    : `${PROFILE_NAME} - ${PROFILE_TITLE}`;
  const url = absoluteUrl(path);
  const image = absoluteUrl(imagePath ?? SEO_IMAGE_PATH);
  const openGraphImage =
    imageWidth && imageHeight
      ? [{ url: image, width: imageWidth, height: imageHeight }]
      : [{ url: image }];

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: PROFILE_NAME,
      locale: "en_US",
      type: "website",
      images: openGraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      creator: PROFILE_X_HANDLE,
      images: [image],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PROFILE_WEBSITE_URL}#person`,
    name: PROFILE_NAME,
    url: PROFILE_WEBSITE_URL,
    image: absoluteUrl(PROFILE_IMAGE_PATH),
    sameAs: [PROFILE_GITHUB_URL, PROFILE_LINKEDIN_URL, PROFILE_X_URL],
    jobTitle: PROFILE_TITLE,
    description: `${PROFILE_NAME} is a ${PROFILE_TITLE} building scalable web, mobile, realtime, and backend products.`,
    worksFor: { "@type": "Organization", name: "Freelance" },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PROFILE_WEBSITE_URL}#website`,
    url: PROFILE_WEBSITE_URL,
    name: `${PROFILE_NAME} - ${PROFILE_TITLE}`,
    description: `${PROFILE_NAME}'s portfolio website showcasing projects, skills, resume, and contact information.`,
    publisher: {
      "@id": `${PROFILE_WEBSITE_URL}#person`,
    },
    image: absoluteUrl(SEO_IMAGE_PATH),
  };
}
