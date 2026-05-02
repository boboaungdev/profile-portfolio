# Bo Bo Aung Portfolio

Personal portfolio built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

Live site: [bobo.stratarena.com](https://bobo.stratarena.com)

## Overview

This app showcases:

- profile and resume
- featured projects with detail pages and image galleries
- full skills section
- contact form powered by Resend
- SEO metadata, sitemap, robots, and structured data
- light and dark theme support

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes
- Resend
- Joi

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
PORTFOLIO_RESUME_URL=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
GOOGLE_SITE_VERIFICATION=
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/            routes, pages, metadata, sitemap, robots
components/     shared UI and animated sections
constants/      profile, social, SEO, and env-backed constants
data/           profile and project content
lib/            email and SEO helpers
public/         profile image and project screenshots
types/          shared TypeScript types
```

## Environment Notes

- `PORTFOLIO_RESUME_URL` is used for the resume download link.
- `RESEND_API_KEY` must stay server-only.
- `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are used by the contact API route.
- `GOOGLE_SITE_VERIFICATION` adds the Search Console verification meta tag.
- Do not commit your real `.env` file.

## Deployment

Recommended target: Vercel

Before deploy:

- set the production environment variables
- confirm `PROFILE_WEBSITE_URL` matches the live domain
- add your Search Console meta token to `GOOGLE_SITE_VERIFICATION`
- run `npm run lint`
- run `npm run build`

## Author

Bo Bo Aung

- Website: [bobo.stratarena.com](https://bobo.stratarena.com)
- GitHub: [github.com/boboaungdev](https://github.com/boboaungdev)
- LinkedIn: [linkedin.com/in/boboaung](https://www.linkedin.com/in/boboaung)
- X: [x.com/boboaungdev](https://x.com/boboaungdev)
