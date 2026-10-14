import { Link } from 'react-router'
import SectionHeading from '../SectionHeading/SectionHeading'
import { experience } from '../../data/experience'
import './Experience.css'

function Experience() {
  return (
    <section
      id="parcours"
      className="experience container"
      aria-labelledby="experience-title"
    >
      <SectionHeading title="Parcours" id="experience-title" />

      <ol className="experience__list">
        {experience.map((item) => (
          <li key={`${item.period}-${item.title}`} className="experience__item">
            <p className="experience__period">{item.period}</p>

            <div className="experience__content">
              <span className="experience__type">{item.type}</span>
              <h3>{item.title}</h3>
              <p className="experience__place">{item.place}</p>

              {item.details && (
                <ul className="experience__details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}

              {item.projectSlug && (
                <Link
                  to={`/projets/${item.projectSlug}`}
                  className="experience__link"
                >
                  Voir le projet
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience