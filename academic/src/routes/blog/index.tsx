import { For, Show, createSignal, createMemo } from "solid-js"
import { Title, Meta } from "@solidjs/meta"
import { getBlogPosts, getAllTags } from "~/lib/content"
import PostCard from "~/components/blog/PostCard"
import TagFilter from "~/components/blog/TagFilter"

export default function Blog() {
  const posts = getBlogPosts()
  const tags = getAllTags()
  const [activeTag, setActiveTag] = createSignal<string | null>(null)

  const filtered = createMemo(() => {
    const tag = activeTag()
    if (!tag) return posts
    return posts.filter((p) => p.frontmatter.tags.includes(tag))
  })

  return (
    <section class="py-10">
      <Title>Blog | Ao Jiao</Title>
      <Meta name="description" content="Blog posts by Ao Jiao" />
      <Meta property="og:title" content="Blog | Ao Jiao" />
      <Meta property="og:description" content="Blog posts by Ao Jiao" />
      <Meta property="og:type" content="website" />
      <h1 class="text-3xl font-bold">Blog</h1>
      <Show when={tags.length > 0}>
        <div class="mt-6">
          <TagFilter tags={tags} active={activeTag()} onSelect={setActiveTag} />
        </div>
      </Show>
      <Show
        when={filtered().length > 0}
        fallback={<p class="mt-8 text-text-secondary">No posts yet.</p>}
      >
        <div class="mt-8 flex flex-col gap-4">
          <For each={filtered()}>
            {(post) => <PostCard slug={post.slug} frontmatter={post.frontmatter} />}
          </For>
        </div>
      </Show>
    </section>
  )
}
