import { Index } from "solid-js"
import { profile } from "~/data/profile"

export default function Header() {
  return (
    <section class="flex flex-col items-center gap-6 py-10 md:flex-row md:items-start md:gap-10">
      <img
        src={profile.photo}
        alt={profile.name}
        class="h-40 w-40 shrink-0 rounded-full object-cover"
      />
      <div class="text-center md:text-left">
        <h1 class="text-4xl font-bold tracking-tight">{profile.name}</h1>
        <div class="mt-4 flex flex-wrap justify-center gap-y-1 md:justify-start">
          <Index each={profile.links}>
            {(link, i) => (
              <>
                {i > 0 && <span class="mx-2 text-text-tertiary">/</span>}
                <a
                  href={link().url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >
                  {link().label}
                </a>
              </>
            )}
          </Index>
        </div>
        <p class="mt-4 leading-relaxed text-text-primary">{profile.bio}</p>
      </div>
    </section>
  )
}
