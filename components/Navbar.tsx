import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PROFILE_NAME } from "@/constants";
import { profile } from "@/data/profile";
import AnimatedHeader from "@/components/AnimatedHeader";
import AnimatedNavLinks from "@/components/AnimatedNavLinks";
import HomeLink from "@/components/HomeLink";
import MobileNav from "@/components/MobileNav";

const profileInitials = PROFILE_NAME
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default async function Navbar() {
  const desktopItems = [
    { href: "#projects", label: "Projects", isExternal: false },
    { href: "#skills", label: "Skills", isExternal: false },
    { href: "#contact", label: "Contact", isExternal: false },
  ];

  const mobileItems = [
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
    {
      href: profile.resume,
      label: "Download Resume",
      external: true,
      download: true,
      tone: "primary" as const,
    },
  ];

  return (
    <AnimatedHeader>
      <div className="container-max flex h-18 items-center justify-between gap-4">
        <HomeLink className="flex items-center gap-3 no-underline">
          <span className="overflow-hidden rounded-2xl ring-1 ring-[rgba(var(--border))] shadow-[0_16px_36px_rgba(194,88,49,0.18)]">
            {profile.image ? (
              <Image
                src={profile.image}
                alt={`${PROFILE_NAME} profile photo`}
                width={40}
                height={40}
                className="size-10 object-cover"
                priority
              />
            ) : (
              <span className="flex size-10 items-center justify-center bg-[linear-gradient(135deg,rgba(var(--brand),0.16),rgba(var(--accent),0.2))] text-xs font-semibold tracking-[0.18em] text-[rgb(var(--fg))]">
                {profileInitials}
              </span>
            )}
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.28em] uppercase text-[rgb(var(--muted))]">
              {PROFILE_NAME}
            </span>
            <span className="text-base font-semibold text-[rgb(var(--fg))]">
              Portfolio
            </span>
          </span>
        </HomeLink>

        <nav className="hidden items-center gap-2 lg:flex">
          <HomeLink className="rounded-full px-4 py-2 text-sm font-medium text-[rgb(var(--fg))] no-underline transition hover:bg-[rgba(var(--brand),0.08)]">
            Home
          </HomeLink>
          <AnimatedNavLinks items={desktopItems} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resume}
            className="btn btn-primary no-underline"
          >
            Download Resume
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav items={mobileItems} />
        </div>
      </div>
    </AnimatedHeader>
  );
}
