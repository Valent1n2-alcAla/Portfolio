import { Link, useParams } from 'react-router'
import { projects } from '../../data/projects'
import './Project.css'

function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main id="contenu" tabIndex={-1} className="project container">
        <title>Projet introuvable | Valentin Alcala</title>
        <h1>Projet introuvable</h1>
        <Link to="/projets" className="project__back">
          Retour aux projets
        </Link>
      </main>
    )
  }

  return (
    <main id="contenu" tabIndex={-1} className="project container">
      <title>{`${project.title} | Valentin Alcala`}</title>
      <Link to="/projets" className="project__back">
        Tous les projets
      </Link>

      <header className="project__header">
        <p className="project__category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project__summary">{project.summary}</p>
      </header>

      {project.image && (
        <img
          className="project__image"
          src={`/projets/${project.image.name}-1600.webp`}
          srcSet={`/projets/${project.image.name}-800.webp 800w, /projets/${project.image.name}-1600.webp 1600w`}
          sizes="(max-width: 860px) 100vw, 820px"
          width={1600}
          height={project.image.height}
          alt={project.image.alt}
        />
      )}

      <dl className="project__meta">
        <div>
          <dt>Équipe</dt>
          <dd>{project.team}</dd>
        </div>
        <div>
          <dt>Technologies</dt>
          <dd>{project.technologies.join(' · ')}</dd>
        </div>
        {project.githubUrl && (
          <div>
            <dt>Code</dt>
            <dd>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </dd>
          </div>
        )}
      </dl>

      <section className="project__section">
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      <section className="project__section">
        <h2>Mon rôle</h2>
        <ul>
          {project.role.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.features && (
        <section className="project__section">
          <h2>Fonctionnalités</h2>
          <ul>
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {project.learned && (
        <section className="project__section">
          <h2>Ce que j'ai appris</h2>
          <ul>
            {project.learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}

export default Project