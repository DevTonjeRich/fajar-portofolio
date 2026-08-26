function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading