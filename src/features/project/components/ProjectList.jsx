import projects from '../../../data/projects'

import ProjectCard from './ProjectCard'

function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProjectList