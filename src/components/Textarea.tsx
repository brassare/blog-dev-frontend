import type { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export default function Textarea({
  label,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="font-inter text-sm font-semibold uppercase tracking-[0.2px] text-text-secondary"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`min-h-[120px] resize-y rounded-[var(--radius-input)] border border-border-subtle bg-bg-dark px-3 py-2 font-inter text-sm text-white outline-none transition-shadow placeholder:text-text-secondary focus:ring-2 focus:ring-cyan ${className}`}
        {...props}
      />
    </div>
  )
}
