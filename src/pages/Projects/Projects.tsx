import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

function Projects() {
  return (
    <main id="contenu" tabIndex={-1} className="projects container">
      <title>Projets | Valentin Alcala</title>
      <header className="projects__header">
        <h1>Projets</h1>
        <p>
          Un projet professionnel et des projets de formation. Chacun a sa
          page détaillée.
        </p>
      </header>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}

export default Projects