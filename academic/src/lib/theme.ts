import { createSignal } from "solid-js"
import { isServer } from "solid-js/web"

const [dark, setDark] = createSignal(false)

if (!isServer) {
  const stored = localStorage.getItem("theme")
  setDark(stored === "dark")
  document.documentElement.setAttribute("data-theme", stored === "dark" ? "dark" : "light")
}

export function isDark() {
  return dark()
}

export function toggleTheme() {
  const next = !dark()
  setDark(next)
  const theme = next ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}
