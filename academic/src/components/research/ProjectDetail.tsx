import { For, Show } from "solid-js"
import type { ResearchProject } from "~/data/research"
import { publications } from "~/data/publications"

export default function ProjectDetail(props: { project: ResearchProject }) {
  return (
    <>
      <Show when={props.project.image}>
        <img src={props.project.image} alt={props.project.title} class="mt-6 w-full rounded object-cover" />
      </Show>

      <Show when={props.project.overview}>
        <section class="mt-8">
          <h2 class="text-lg font-bold">Overview</h2>
          <p class="mt-3 leading-relaxed text-text-primary">{props.project.overview}</p>
        </section>
      </Show>

      <Show when={props.project.contributions.length > 0}>
        <section class="mt-8">
          <h2 class="text-lg font-bold">Key Contributions</h2>
          <ul class="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-text-primary">
            <For each={props.project.contributions}>
              {(item) => <li>{item}</li>}
            </For>
          </ul>
        </section>
      </Show>

      <Show when={props.project.relatedPubs.length > 0}>
        <section class="mt-8">
          <h2 class="text-lg font-bold">Related Publications</h2>
          <ul class="mt-3 space-y-2 text-sm">
            <For each={props.project.relatedPubs}>
              {(title) => {
                const pub = publications.find((p) => p.title === title)
                return (
                  <li>
                    <span class="font-semibold">{title}</span>
                    <Show when={pub}>
                      <br />
                      <span class="text-text-secondary" innerHTML={pub!.authors} />
                      <br />
                      <span class="text-text-secondary italic">{pub!.venue}, {pub!.year}</span>
                    </Show>
                  </li>
                )
              }}
            </For>
          </ul>
        </section>
      </Show>

      <Show when={props.project.collaborators.length > 0}>
        <section class="mt-8">
          <h2 class="text-lg font-bold">Collaborators</h2>
          <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <For each={props.project.collaborators}>
              {(c) => (
                <Show when={c.url} fallback={<span class="text-text-secondary">{c.name}</span>}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                  >
                    {c.name}
                  </a>
                </Show>
              )}
            </For>
          </div>
        </section>
      </Show>

      <Show when={props.project.links.length > 0}>
        <section class="mt-8">
          <h2 class="text-lg font-bold">Resources</h2>
          <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <For each={props.project.links}>
              {(link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >
                  {link.label}
                </a>
              )}
            </For>
          </div>
        </section>
      </Show>
    </>
  )
}
