declare module '*.mdx' {
  import type { Component } from 'solid-js'
  export const frontmatter: Record<string, unknown>
  const MDXComponent: Component
  export default MDXComponent
}
