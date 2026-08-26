function Badge({
  children,
  variant = 'default',
}) {
  const variants = {
    default:
      'border-border bg-surface text-secondary',

    accent:
      'border-accent/30 bg-accent/10 text-accent',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge