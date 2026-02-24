import type { Component } from "solid-js"

export interface BlogFrontmatter {
  title: string
  date: string
  tags: string[]
  excerpt: string
}

export interface ResearchFrontmatter {
  title: string
  image?: string
}

interface MDXModule<T> {
  default: Component
  frontmatter: T
}

const blogModules = import.meta.glob<MDXModule<BlogFrontmatter>>("../content/blog/*.mdx", {
  eager: true,
})

const researchModules = import.meta.glob<MDXModule<ResearchFrontmatter>>("../content/research/*.mdx", {
  eager: true,
})

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  Component: Component
}

export interface ResearchContent {
  slug: string
  frontmatter: ResearchFrontmatter
  Component: Component
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.mdx$/, "")
}

const _blogPosts: BlogPost[] = Object.entries(blogModules)
  .map(([path, mod]) => ({
    slug: slugFromPath(path),
    frontmatter: mod.frontmatter,
    Component: mod.default,
  }))
  .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

const _blogPostsBySlug = new Map(_blogPosts.map((p) => [p.slug, p]))

const _allTags: string[] = [...new Set(_blogPosts.flatMap((p) => p.frontmatter.tags))].sort()

const _researchBySlug = new Map(
  Object.entries(researchModules).map(([path, mod]) => {
    const slug = slugFromPath(path)
    return [slug, { slug, frontmatter: mod.frontmatter, Component: mod.default } as ResearchContent]
  }),
)

export function getBlogPosts(): BlogPost[] {
  return _blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return _blogPostsBySlug.get(slug)
}

export function getAllTags(): string[] {
  return _allTags
}

export function getResearchContent(slug: string): ResearchContent | undefined {
  return _researchBySlug.get(slug)
}
