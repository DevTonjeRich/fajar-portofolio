import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <article className="group border-t border-border py-10">
      <div className="grid gap-8 lg:grid-cols-[80px_1fr_1fr] lg:items-start lg:gap-12">

        {/* Number */}
        <div>
          <span className="text-sm text-secondary">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Information */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-500">
              {project.category}
            </span>

            <span className="text-sm text-secondary">
              / {project.year}
            </span>
          </div>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-blue-500 sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-lg text-base leading-7 text-secondary">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-secondary"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">

           <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all duration-200 group-hover:border-blue-500 group-hover:bg-blue-600">
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </div>

        </div>

      </div>
    </article>
  )
}

export default ProjectCard