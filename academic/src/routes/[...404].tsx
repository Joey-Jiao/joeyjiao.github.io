import { A } from "@solidjs/router"
import { Title } from "@solidjs/meta"

export default function NotFound() {
  return (
    <section class="flex flex-col items-center gap-4 py-20 text-center">
      <Title>Not Found | Ao Jiao</Title>
      <h1 class="text-6xl font-bold text-text-secondary">404</h1>
      <p class="text-lg text-text-secondary">Page not found.</p>
      <A
        href="/"
        class="link"
      >
        Back to Home
      </A>
    </section>
  )
}
