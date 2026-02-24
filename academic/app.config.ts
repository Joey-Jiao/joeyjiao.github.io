import { defineConfig } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
    },
    rollupConfig: {
      external: ["node:async_hooks"],
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      {
        enforce: "pre" as const,
        ...mdx({
          jsx: true,
          jsxImportSource: "solid-js",
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex, [rehypePrettyCode, {
            theme: { dark: "github-dark-default", light: "github-light-default" },
            defaultLang: "plaintext",
          }]],
        }),
      },
    ],
  },
  extensions: ["mdx"],
})
