export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`
}
