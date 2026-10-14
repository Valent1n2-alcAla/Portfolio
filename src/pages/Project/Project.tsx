import { Link, useParams } from 'react-router'
import { projects } from '../../data/projects'
import './Project.css'

function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="project container">
        <h1>Projet introuvable</h1>
        <Link to="/projets" className="project__back">
          ← Retour aux projets
        </Link>
      </main>
    )
  }

  return (
    <main className="project container">
      <Link to="/projets" className="project__back">
        ← Tous les projets
      </Link>

      <header className="project__header">
        <p className="project__category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project__summary">{project.summary}</p>
      </header>

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
                GitHub ↗
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