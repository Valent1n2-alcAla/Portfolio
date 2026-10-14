import { Link } from 'react-router'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import './ProjectsSection.css'

function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)

  return (
    <section
      id="projets-accueil"
      className="projects-section container"
      aria-labelledby="projects-title"
    >
      <SectionHeading title="Projets" id="projects-title" />

      <div className="projects-section__grid">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Link to="/projets" className="projects-section__more">
        Voir tous les projets →
      </Link>
    </section>
  )
}

export default ProjectsSection