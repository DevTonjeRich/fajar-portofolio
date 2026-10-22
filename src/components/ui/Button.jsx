import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: `
    border
    border-neutral-600
    bg-transparent
    text-white
    hover:bg-blue-600
    hover:border-blue-600
    hover:text-white
    active:bg-blue-700
    active:border-blue-700
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-blue-500
    focus-visible:outline-offset-2
  `,

  secondary: `
    border
    border-neutral-600
    bg-transparent
    text-white
    hover:bg-blue-600
    hover:border-blue-600
    hover:text-white
    active:bg-blue-700
    active:border-blue-700
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-blue-500
    focus-visible:outline-offset-2
  `,

  ghost: `
    text-secondary
    hover:text-white
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-blue-500
    focus-visible:outline-offset-2
  `,
}

function Button({
  children,
  variant = 'primary',
  href,
  download = false,
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
    hover:-translate-y-0.5
    active:translate-y-0 
    ${variants[variant]}
    ${className}
  `

  if (href) {
    return (
      <a href={href}
       download={download}
       className={classes}>
          
        {children}

        {showArrow && (
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        )}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
    >
      {children}

      {showArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
        />
      )}
    </button>
  )
}

export default Button