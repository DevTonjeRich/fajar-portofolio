import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import projects from '../../../data/projects'

import PageContainer from '../../../components/layout/PageContainer'
import Section from '../../../components/ui/Section'

function ProjectPreview() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3)

  return (
    <Section>
      <PageContainer>

        {/* Section Header */}
        <div className="text-center">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-500">
            Selected work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-secondary sm:text-base">
            proyek yang telah saya kerjakan di bidang pengembangan aplikasi seluler, pembelajaran mesin, dan produk digital.
          </p>

        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

              </div>

              {/* Project Content */}
              <div className="p-5">

                {/* Category */}
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-blue-500">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-blue-500">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-secondary">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:!text-blue-400"
          >
            View all projects

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

      </PageContainer>
    </Section>
  )
}

export default ProjectPreview