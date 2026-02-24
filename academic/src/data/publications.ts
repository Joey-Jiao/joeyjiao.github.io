export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  highlight: boolean
  award?: string
  links: { label: string; url: string }[]
}

export const publications: Publication[] = [
  {
    title: "Assessing LLMs for Serendipity Discovery in Knowledge Graphs: A Case for Drug Repurposing",
    authors:
      "M. Wang<span class='text-accent'>∗</span>, C. Ma<span class='text-accent'>∗</span>, <strong>A. Jiao</strong><span class='text-accent'>∗</span>, T. Liang, P. Lu, S. Hegde, Y. Yin, E. Gurkan-Cavusoglu, Y. Wu",
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    highlight: true,
    award: undefined,
    links: [],
  },
  {
    title: "A Comparative Visual Analytics Framework for Evaluating Evolutionary Processes in Multi-objective Optimization",
    authors:
      "Y. Huang<span class='text-accent'>∗</span>, Z. Zhang<span class='text-accent'>∗</span>, <strong>A. Jiao</strong>, Y. Ma, R. Cheng",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    year: 2024,
    highlight: false,
    award: undefined,
    links: [],
  },
]
