import { Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useParams } from "@solidjs/router"
import { Title, Meta } from "@solidjs/meta"
import { researchProjects } from "~/data/research"
import { getResearchContent } from "~/lib/content"
import { mdxComponents } from "~/lib/mdx"
import Prose from "~/components/blog/Prose"
import NotFound from "~/components/common/NotFound"
import DetailLayout from "~/components/common/DetailLayout"
import ProjectDetail from "~/components/research/ProjectDetail"

export default function ResearchDetail() {
  const params = useParams()
  const slug = () => params.slug ?? ""
  const project = () => researchProjects.find((p) => p.slug === slug())
  const mdxContent = () => getResearchContent(slug())
  const found = () => !!(project() || mdxContent())
  const title = () => mdxContent()?.frontmatter.title ?? project()?.title ?? ""

  return (
    <Show
      when={found()}
      fallback={<NotFound message="Project not found." backHref="/" backLabel="Back to Home" />}
    >
      <DetailLayout backHref="/" backLabel="Home" title={title()}>
        <Title>{title()} | Ao Jiao</Title>
        <Meta name="description" content={project()?.summary || title()} />
        <Meta property="og:title" content={`${title()} | Ao Jiao`} />
        <Meta property="og:description" content={project()?.summary || title()} />
        <Meta property="og:type" content="website" />
        <Show when={mdxContent()}>
          {(m) => (
            <>
              <Show when={m().frontmatter.image}>
                <img src={m().frontmatter.image} alt={m().frontmatter.title} class="mt-6 w-full rounded object-cover" />
              </Show>
              <Prose>
                <Dynamic component={m().Component} components={mdxComponents} />
              </Prose>
            </>
          )}
        </Show>
        <Show when={!mdxContent() && project()}>
          {(proj) => <ProjectDetail project={proj()} />}
        </Show>
      </DetailLayout>
    </Show>
  )
}
