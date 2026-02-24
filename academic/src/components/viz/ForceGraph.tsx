import { onMount, onCleanup } from "solid-js"
import * as d3 from "d3"

interface Node extends d3.SimulationNodeDatum {
  id: string
  group: number
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node
  target: string | Node
}

interface Props {
  width?: number
  height?: number
}

const defaultNodes: Node[] = [
  { id: "GNN", group: 0 },
  { id: "GCN", group: 1 },
  { id: "GAT", group: 1 },
  { id: "GraphSAGE", group: 1 },
  { id: "Message Passing", group: 2 },
  { id: "Aggregation", group: 2 },
  { id: "Attention", group: 2 },
  { id: "Explainability", group: 3 },
  { id: "GNNExplainer", group: 3 },
  { id: "PGExplainer", group: 3 },
  { id: "Knowledge Graph", group: 4 },
  { id: "Drug Repurposing", group: 4 },
]

const defaultLinks: Link[] = [
  { source: "GNN", target: "GCN" },
  { source: "GNN", target: "GAT" },
  { source: "GNN", target: "GraphSAGE" },
  { source: "GNN", target: "Message Passing" },
  { source: "GCN", target: "Message Passing" },
  { source: "GCN", target: "Aggregation" },
  { source: "GAT", target: "Attention" },
  { source: "GAT", target: "Message Passing" },
  { source: "GraphSAGE", target: "Aggregation" },
  { source: "GNN", target: "Explainability" },
  { source: "Explainability", target: "GNNExplainer" },
  { source: "Explainability", target: "PGExplainer" },
  { source: "GNN", target: "Knowledge Graph" },
  { source: "Knowledge Graph", target: "Drug Repurposing" },
]

const groupColors = ["#0f766e", "#2563eb", "#7c3aed", "#db2777", "#ea580c"]

export default function ForceGraph(props: Props) {
  let container!: HTMLDivElement
  const width = () => props.width ?? 600
  const height = () => props.height ?? 400

  onMount(() => {
    const nodes: Node[] = defaultNodes.map(d => ({ ...d }))
    const links: Link[] = defaultLinks.map(d => ({ ...d }))

    const svg = d3.select(container)
      .append("svg")
      .attr("viewBox", `0 0 ${width()} ${height()}`)
      .attr("width", "100%")
      .attr("height", height())

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width() / 2, height() / 2))
      .force("collision", d3.forceCollide().radius(30))

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "var(--color-border)")
      .attr("stroke-width", 1.5)

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag<SVGGElement, Node>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on("drag", (event, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        })
      )

    node.append("circle")
      .attr("r", d => d.id === "GNN" ? 10 : 7)
      .attr("fill", d => groupColors[d.group])
      .attr("stroke", "var(--color-surface)")
      .attr("stroke-width", 2)

    node.append("text")
      .text(d => d.id)
      .attr("dx", 12)
      .attr("dy", 4)
      .attr("font-size", "11px")
      .attr("font-family", "var(--font-sans)")
      .attr("fill", "var(--color-text-secondary)")

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!)
      node.attr("transform", d => `translate(${d.x},${d.y})`)
    })

    onCleanup(() => simulation.stop())
  })

  return <div ref={container!} class="mt-6 mb-6 rounded-lg border border-border overflow-hidden" />
}
