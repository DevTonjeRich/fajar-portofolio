function Section({
  children,
  className = '',
  id,
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 lg:py-32 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section