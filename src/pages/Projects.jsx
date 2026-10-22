import PageContainer from '../components/layout/PageContainer'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import ProjectList from '../features/project/components/ProjectList'
import projectsHero from '../assets/images/hero-projects.webp'

function Projects() {
  return (
    <>
      {/* Hero Section langsung merapat ke atas tanpa padding tambahan */}
      <div
        className="relative overflow-hidden bg-cover bg-center border-b border-neutral-800"
        style={{
          backgroundImage: `url(${projectsHero})`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        <PageContainer>
          {/* Header / Content Hero */}
          <div className="relative z-10 max-w-3xl pt-20 pb-24 sm:pt-28 sm:pb-32">
            <Badge variant="accent">
              Portfolio Saya
            </Badge>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
              Proyek yang telah
              <br />
              saya bangun
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              Kumpulan proyek yang saya kerjakan dalam pengembangan aplikasi, machine learning, dan produk digital.
            </p>
          </div>
        </PageContainer>
      </div>

      {/* Projects List dengan jarak yang pas dan ideal di bawah hero */}
      <div className="py-16 sm:py-24">
        <PageContainer>
          <ProjectList />
        </PageContainer>
      </div>
    </>
  )
}

export default Projects