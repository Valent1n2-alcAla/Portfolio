import { contact } from '../../data/contact'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          Valentin Alcala <span>© {year}</span>
        </p>

        <ul className="footer__links">
          <li>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer">
              GitHub
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </li>
          {contact.linkedinUrl && (
            <li>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          )}
          <li>
            <a href="#top">Haut de page</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer