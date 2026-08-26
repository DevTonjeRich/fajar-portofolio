import PageContainer from '../components/layout/PageContainer'

function Home() {
  return (
    <section className="py-24 sm:py-32">
      <PageContainer>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-secondary">
          Personal Portfolio
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Fajar
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">
          Computer Science graduate building digital products
          with code, curiosity, and attention to detail.
        </p>
      </PageContainer>
    </section>
  )
}

export default Home