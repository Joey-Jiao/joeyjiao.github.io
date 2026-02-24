import { For } from "solid-js"
import { A } from "@solidjs/router"
import type { BlogFrontmatter } from "~/lib/content"

export default function PostCard(props: { slug: string; frontmatter: BlogFrontmatter }) {
  return (
    <A
      href={`/blog/${props.slug}`}
      class="card group block"
    >
      <span class="text-base font-semibold transition-colors duration-200 group-hover:text-accent">
        {props.frontmatter.title}
      </span>
      <p class="mt-2 text-sm text-text-secondary">{props.frontmatter.excerpt}</p>
      <div class="mt-3 flex items-center gap-3 text-xs text-text-tertiary">
        <time>{props.frontmatter.date}</time>
        <span class="text-border">|</span>
        <div class="flex gap-2">
          <For each={props.frontmatter.tags}>
            {(tag) => (
              <span class="tag">{tag}</span>
            )}
          </For>
        </div>
      </div>
    </A>
  )
}
