import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";

export function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-accent/40"
    >
      <div className="relative aspect-[16/9] w-full bg-background">
        {post.cover ? (
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-foreground-muted">
            {post.title}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="text-sm text-foreground-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-foreground-muted">
          <span className="inline-flex items-center gap-1">
            <CalendarDays size={13} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={13} />
            {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
