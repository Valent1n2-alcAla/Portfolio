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
        J'aide les gens à développer leurs idées et à les mettre en place dans
        l'entreprise. J'ai travaillé en Vue, Symfony, Kotlin et Spring Boot. Je
        cherche une alternance ou un CDI.
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