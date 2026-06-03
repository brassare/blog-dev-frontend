import type { ButtonHTMLAttributes } from "react"

type ButtonVariant = "primary" | "secondary" | "success"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-cyan text-bg-dark hover:opacity-90",
  secondary:
    "bg-transparent text-white border border-border-subtle hover:opacity-90",
  success: "bg-green text-white hover:opacity-90",
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[var(--radius-button)] px-4 py-2 font-inter text-sm font-bold uppercase tracking-[0.2px] transition-opacity disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
