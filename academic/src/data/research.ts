export interface Collaborator {
  name: string
  url?: string
}

export interface ResearchProject {
  slug: string
  title: string
  summary: string
  image?: string
  overview: string
  contributions: string[]
  collaborators: Collaborator[]
  relatedPubs: string[]
  links: { label: string; url: string }[]
}

export const researchProjects: ResearchProject[] = [
  {
    slug: "kg-discovery",
    title: "LLM-Driven Serendipitous Knowledge Discovery on Knowledge Graphs",
    summary: "",
    image: undefined,
    overview: "",
    contributions: [],
    collaborators: [],
    relatedPubs: [
      "Assessing LLMs for Serendipity Discovery in Knowledge Graphs: A Case for Drug Repurposing",
    ],
    links: [],
  },
]
