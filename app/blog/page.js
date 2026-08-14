import { Rss } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogCard } from "@/components/shared/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Notes on building products, shipping code, and lessons learned along the way.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        description="Notes on building products, shipping code, and what I learn along the way."
        action={
          <a
            href="/blog/rss.xml"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            <Rss size={14} /> RSS
          </a>
        }
      />
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-foreground-muted">
          No articles yet — add an .mdx file to content/blog.
        </p>
      )}
    </Section>
  );
}
