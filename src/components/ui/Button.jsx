import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary:
    'bg-primary text-white hover:bg-neutral-800',
  secondary:
    'border border-border bg-transparent text-primary hover:bg-surface',
  ghost:
    'text-secondary hover:text-primary',
}

function Button({
  children,
  variant = 'primary',
  href,
  showArrow = false,
  className = '',
}) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-5
    py-3
    text-sm
    font-medium
    transition-colors
    duration-200
    ${variants[variant]}
    ${className}
  `

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}

        {showArrow && (
          <ArrowUpRight size={16} strokeWidth={1.8} />
        )}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}

      {showArrow && (
        <ArrowUpRight size={16} strokeWidth={1.8} />
      )}
    </button>
  )
}

export default Button