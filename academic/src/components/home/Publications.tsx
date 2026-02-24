import { For } from "solid-js"
import type { Publication } from "~/data/publications"
import { publications } from "~/data/publications"

function PublicationEntry(props: { pub: Publication }) {
  return (
    <div class="py-3">
      <span class="text-base font-semibold leading-snug">
        {props.pub.highlight && <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-1.5 align-middle" />}
        {props.pub.title}
      </span>
      <br />
      <span class="text-text-secondary" innerHTML={props.pub.authors} />
      <br />
      <span class="text-text-secondary italic">{props.pub.venue}, {props.pub.year}</span>
      {props.pub.award && (
        <>
          {" "}<span class="font-bold text-award">{props.pub.award}</span>
        </>
      )}
      {props.pub.links.length > 0 && (
        <span>
          {" / "}
          <For each={props.pub.links}>
            {(link, i) => (
              <>
                {i() > 0 && " / "}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >
                  {link.label}
                </a>
              </>
            )}
          </For>
        </span>
      )}
    </div>
  )
}

export default function Publications() {
  return (
    <section class="py-10">
      <h2 class="section-title">Publications</h2>
      <p class="mb-4 text-text-tertiary">
        Representative papers are marked with <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
        <span class="mx-2 text-text-tertiary">/</span>
        Equal contribution is denoted by <span class="text-accent">∗</span>
      </p>
      <div class="flex flex-col divide-y divide-border">
        <For each={publications}>
          {(pub) => <PublicationEntry pub={pub} />}
        </For>
      </div>
    </section>
  )
}
