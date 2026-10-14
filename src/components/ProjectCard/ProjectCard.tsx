import { Link } from 'react-router'
import type { Project } from '../../types/project'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <p className="project-card__category">{project.category}</p>

      <h3 className="project-card__title">
        <Link to={`/projets/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="project-card__summary">{project.summary}</p>

      <ul className="project-card__tech" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card__github"
        >
          Code sur GitHub
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
      )}
    </article>
  )
}

export default ProjectCard