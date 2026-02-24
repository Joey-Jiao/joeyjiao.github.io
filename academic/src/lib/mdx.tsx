import { Dynamic } from "solid-js/web"

function el(tag: string) {
  return (props: any) => <Dynamic component={tag} {...props} />
}

export const mdxComponents: Record<string, any> = Object.fromEntries(
  [
    "p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "strong", "em", "del",
    "pre", "code", "span", "div", "figure", "figcaption",
    "ul", "ol", "li", "input",
    "table", "thead", "tbody", "tr", "th", "td",
    "blockquote", "hr", "img", "br", "sup", "sub",
    "math", "semantics", "annotation", "mrow", "mi", "mo", "mn",
    "msup", "msub", "msubsup", "mtext", "mfrac", "msqrt", "mover", "munder",
  ].map(tag => [tag, el(tag)])
)
