import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  mail: Mail,
};

export function SocialLink({ label, href, icon }) {
  const Icon = icons[icon] ?? Mail;
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
    >
      <Icon size={16} strokeWidth={1.75} className="h-4 w-4" />
    </Link>
  );
}
