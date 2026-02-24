import { For } from "solid-js"

export default function TagFilter(props: {
  tags: string[]
  active: string | null
  onSelect: (tag: string | null) => void
}) {
  return (
    <div class="flex flex-wrap gap-2 text-sm font-sans">
      <button
        class={`rounded px-2.5 py-1 transition-colors duration-200 ${
          props.active === null
            ? "bg-accent text-white"
            : "bg-accent-subtle text-text-secondary hover:text-accent"
        }`}
        onClick={() => props.onSelect(null)}
      >
        All
      </button>
      <For each={props.tags}>
        {(tag) => (
          <button
            class={`rounded px-2.5 py-1 transition-colors duration-200 ${
              props.active === tag
                ? "bg-accent text-white"
                : "bg-accent-subtle text-text-secondary hover:text-accent"
            }`}
            onClick={() => props.onSelect(tag)}
          >
            {tag}
          </button>
        )}
      </For>
    </div>
  )
}
