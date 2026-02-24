import type { JSX } from "solid-js"

export default function Prose(props: { children: JSX.Element }) {
  return <div class="prose">{props.children}</div>
}
