import { Link } from 'react-router'
import { contact } from '../../data/contact'
import './Hero.css'

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        Valentin Alcala
      </h1>

      <p className="hero__role">Développeur web et mobile junior, à Caen.</p>

      <p className="hero__intro">
        Je cherche une alternance ou un CDI. J'ai travaillé sur des
        applications web en Vue et Symfony, des applications Android en Kotlin
        et une API en Spring Boot.
      </p>

      <div className="hero__actions">
        <Link to="/projets" className="button button--primary">
          Voir mes projets
        </Link>
        <a href={contact.cvPath} download className="button button--ghost">
          Télécharger mon CV
        </a>
      </div>
    </section>
  )
}

export default Hero