import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://josias-dev.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/about",
    "/blog",
    "/start-project",
    "/uses",
    "/now",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
