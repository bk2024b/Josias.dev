import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : undefined,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> All articles
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-foreground-muted">
          <span className="inline-flex items-center gap-1">
            <CalendarDays size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>

        {post.cover && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 672px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-p:text-foreground-muted prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground mt-10 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </Section>
  );
}
