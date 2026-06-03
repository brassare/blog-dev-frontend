export function formatDatePt(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}
