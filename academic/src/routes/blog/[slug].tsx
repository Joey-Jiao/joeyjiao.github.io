import { Show, For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useParams } from "@solidjs/router"
import { getBlogPost } from "~/lib/content"
import { mdxComponents } from "~/lib/mdx"
import Prose from "~/components/blog/Prose"
import NotFound from "~/components/common/NotFound"
import DetailLayout from "~/components/common/DetailLayout"

export default function BlogPost() {
  const params = useParams()
  const post = () => getBlogPost(params.slug ?? "")

  return (
    <Show
      when={post()}
      fallback={<NotFound message="Post not found." backHref="/blog" backLabel="Back to Blog" />}
    >
      {(p) => (
        <DetailLayout backHref="/blog" backLabel="Blog" title={p().frontmatter.title}>
          <div class="mt-3 flex items-center gap-3 text-sm text-text-tertiary">
            <time>{p().frontmatter.date}</time>
            <span class="text-border">|</span>
            <div class="flex gap-2">
              <For each={p().frontmatter.tags}>
                {(tag) => <span class="tag text-xs">{tag}</span>}
              </For>
            </div>
          </div>
          <Prose>
            <Dynamic component={p().Component} components={mdxComponents} />
          </Prose>
        </DetailLayout>
      )}
    </Show>
  )
}
