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
} from "@/constants";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, PROFILE_WEBSITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${PROFILE_NAME}` : `${PROFILE_NAME} - Portfolio`;
  const url = absoluteUrl(path);
  const image = absoluteUrl(PROFILE_IMAGE_PATH);

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
      images: [{ url: image, width: 1200, height: 630 }],
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
    name: PROFILE_NAME,
    url: PROFILE_WEBSITE_URL,
    image: absoluteUrl(PROFILE_IMAGE_PATH),
    sameAs: [PROFILE_GITHUB_URL, PROFILE_LINKEDIN_URL, PROFILE_X_URL],
    jobTitle: PROFILE_TITLE,
    worksFor: { "@type": "Organization", name: "Freelance" },
  };
}
