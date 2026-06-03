import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, className = "", id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="font-inter text-sm font-semibold uppercase tracking-[0.2px] text-text-secondary"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`rounded-[var(--radius-input)] border border-border-subtle bg-bg-dark px-3 py-2 font-inter text-sm text-white outline-none transition-shadow placeholder:text-text-secondary focus:ring-2 focus:ring-cyan ${className}`}
        {...props}
      />
    </div>
  )
}
