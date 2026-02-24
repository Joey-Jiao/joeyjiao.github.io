import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { ErrorBoundary, Suspense } from "solid-js"
import "~/index.css"
import Navbar from "~/components/common/Navbar"
import Footer from "~/components/common/Footer"

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="mx-auto max-w-4xl px-6 py-8 font-serif text-text-primary min-h-screen leading-relaxed">
          <Navbar />
          <ErrorBoundary fallback={(err) => (
            <section class="py-20 text-center">
              <h1 class="text-4xl font-bold text-text-secondary">Error</h1>
              <p class="mt-4 text-text-secondary">{err.message}</p>
              <a href="/" class="link mt-4 inline-block">Back to Home</a>
            </section>
          )}>
            <Suspense>{props.children}</Suspense>
          </ErrorBoundary>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
