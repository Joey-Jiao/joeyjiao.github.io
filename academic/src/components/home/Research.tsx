import { For, Show } from "solid-js"
import { A } from "@solidjs/router"
import { researchProjects } from "~/data/research"
import type { ResearchProject } from "~/data/research"

function ResearchEntry(props: { project: ResearchProject }) {
  const href = `/research/${props.project.slug}`

  return (
    <A href={href} class="card group flex gap-6">
      <Show when={props.project.image}>
        <div class="hidden w-48 shrink-0 md:block">
          <img
            src={props.project.image}
            alt={props.project.title}
            class="w-48 rounded object-cover transition-opacity duration-200 group-hover:opacity-80"
          />
        </div>
      </Show>
      <div class="min-w-0 flex-1">
        <span class="text-base font-semibold transition-colors duration-200 group-hover:text-accent">
          {props.project.title}
        </span>
        <Show when={props.project.summary}>
          <p class="mt-2 leading-relaxed text-text-primary">{props.project.summary}</p>
        </Show>
      </div>
    </A>
  )
}

export default function Research() {
  return (
    <section class="py-10">
      <h2 class="section-title">Research</h2>
      <div class="flex flex-col gap-4">
        <For each={researchProjects}>
          {(project) => <ResearchEntry project={project} />}
        </For>
      </div>
    </section>
  )
}
