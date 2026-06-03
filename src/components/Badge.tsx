type BadgeVariant = "amber" | "green" | "slate"

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  amber: "bg-amber text-text-dark",
  green: "bg-green text-white",
  slate: "bg-border-subtle text-white",
}

export default function Badge({
  variant = "amber",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-[var(--radius-badge)] px-2 py-0.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
