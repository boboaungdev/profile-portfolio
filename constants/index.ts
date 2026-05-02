export const PROFILE_NAME = "Bo Bo Aung";
export const PROFILE_TITLE = "Full-Stack Developer";

export const PROFILE_GITHUB_URL = "https://github.com/boboaungdev";
export const PROFILE_LINKEDIN_URL = "https://www.linkedin.com/in/boboaung";
export const PROFILE_X_URL = "https://x.com/boboaungdev";
export const PROFILE_X_HANDLE = "@boboaungdev";
export const PROFILE_WEBSITE_URL = "https://bobo.stratarena.com";
export const PROFILE_EMAIL = "boboaungdev@gmail.com";
export const PROFILE_IMAGE_PATH = "/profile/profile.jpg";

const EXPERIENCE_START_YEAR = 2019;
export const EXPERIENCE_YEARS = Math.max(
  0,
  new Date().getUTCFullYear() - EXPERIENCE_START_YEAR,
);
export const EXPERIENCE_LABEL = `${EXPERIENCE_YEARS}+`;

// Environment variables
export const PORTFOLIO_RESUME_URL = process.env.PORTFOLIO_RESUME_URL || "";
export const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
export const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "";
export const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "";
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION || "";
