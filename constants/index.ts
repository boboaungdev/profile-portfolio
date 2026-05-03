export const PROFILE_NAME = "Bo Bo Aung";
export const PROFILE_TITLE = "Full-Stack Developer";

export const PROFILE_X_URL = "https://x.com/boboaungdev";
export const PROFILE_WEBSITE_URL = "https://bobo.stratarena.com";
export const PROFILE_GITHUB_URL = "https://github.com/boboaungdev";
export const PROFILE_LINKEDIN_URL = "https://linkedin.com/in/boboaung";
export const PROFILE_X_HANDLE = "@boboaungdev";
export const PROFILE_EMAIL = "bobo@stratarena.com";
export const PROFILE_IMAGE_PATH = "/logo.png";
export const SEO_IMAGE_PATH = "/seo-banner.png";
const EXPERIENCE_START_YEAR = 2019;
export const EXPERIENCE_YEARS = Math.max(
  0,
  new Date().getUTCFullYear() - EXPERIENCE_START_YEAR,
);
export const EXPERIENCE_LABEL = `${EXPERIENCE_YEARS}+`;

// Environment variables
export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio Website <onboarding@resend.dev>";

export const PORTFOLIO_RESUME_URL = process.env.PORTFOLIO_RESUME_URL || "";
export const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION || "";
