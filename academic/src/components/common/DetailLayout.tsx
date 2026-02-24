import type { JSX } from "solid-js"
import { A } from "@solidjs/router"

export default function DetailLayout(props: {
  backHref: string
  backLabel: string
  title: string
  children: JSX.Element
}) {
  return (
    <article class="py-10">
      <A href={props.backHref} class="text-sm text-text-tertiary hover:text-accent transition-colors duration-200">
        ← {props.backLabel}
      </A>
      <h1 class="mt-6 text-3xl font-bold leading-snug">{props.title}</h1>
      {props.children}
    </article>
  )
}
