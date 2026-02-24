import { A } from "@solidjs/router"

export default function NotFound(props: {
  message: string
  backHref: string
  backLabel: string
}) {
  return (
    <section class="py-20 text-center">
      <h1 class="text-4xl font-bold text-text-secondary">404</h1>
      <p class="mt-4 text-text-secondary">{props.message}</p>
      <A href={props.backHref} class="link mt-4 inline-block">{props.backLabel}</A>
    </section>
  )
}
