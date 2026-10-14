import SectionHeading from '../SectionHeading/SectionHeading'
import { contact } from '../../data/contact'
import './Contact.css'

function Contact() {
  const links = [
    { label: 'GitHub', url: contact.githubUrl },
    { label: 'LinkedIn', url: contact.linkedinUrl },
  ].filter((link) => link.url)

  return (
    <section
      id="contact"
      className="contact container"
      aria-labelledby="contact-title"
    >
      <SectionHeading title="Contact" id="contact-title" />

      <div className="contact__grid">
        <div>
          <p className="contact__status">
            <span className="contact__dot" aria-hidden="true" />
            Disponible
          </p>
          <p className="contact__headline">
            Je recherche une alternance ou un CDI en développement web et
            mobile.
          </p>

          <div className="contact__actions">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="button button--primary"
              >
                M'écrire
              </a>
            )}
            <a href={contact.cvPath} download className="button button--ghost">
              Télécharger mon CV
            </a>
          </div>
        </div>

        <dl className="contact__list">
          {contact.email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          )}
          {links.map((link) => (
            <div key={link.label}>
              <dt>{link.label}</dt>
              <dd>
                <a href={link.url} target="_blank" rel="noreferrer">
                  Voir le profil ↗
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt>Localisation</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Contact