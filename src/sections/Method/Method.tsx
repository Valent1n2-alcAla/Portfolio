import { Link } from 'react-router'
import SectionHeading from '../SectionHeading/SectionHeading'
import { methodSteps } from '../../data/method'
import './Method.css'

function Method() {
  return (
    <section
      id="methode"
      className="method container"
      aria-labelledby="method-title"
    >
      <SectionHeading
        title="Comment je travaille"
        id="method-title"
      />

      <ol className="method__grid">
        {methodSteps.map((step, index) => (
          <li key={step.title} className="method__step">
            <span className="method__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{step.title}</h3>
            <p className="method__text">{step.text}</p>

            <p className="method__proof">
              <span>Preuve</span>
              {step.projectSlug ? (
                <Link to={`/projets/${step.projectSlug}`}>{step.proof}</Link>
              ) : (
                step.proof
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Method