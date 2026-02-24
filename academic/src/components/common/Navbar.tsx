import { For } from "solid-js"
import { A } from "@solidjs/router"
import { isDark, toggleTheme } from "~/lib/theme"

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
]

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between border-b border-border pb-4 mb-10">
      <A href="/" class="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-200">
        Ao Jiao
      </A>
      <div class="flex items-center gap-5 text-sm font-sans font-medium">
        <For each={navLinks}>
          {(link) => (
            <A
              href={link.path}
              activeClass="text-accent"
              inactiveClass="text-text-secondary hover:text-accent transition-colors duration-200"
              end
            >
              {link.label}
            </A>
          )}
        </For>
        <button
          onClick={toggleTheme}
          class="text-text-tertiary hover:text-accent transition-colors duration-200"
        >
          {isDark() ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}
