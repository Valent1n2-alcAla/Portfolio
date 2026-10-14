import { Link } from 'react-router'
import './NotFound.css'

function NotFound() {
  return (
    <main id="contenu" tabIndex={-1} className="not-found container">
      <title>Page introuvable | Valentin Alcala</title>
      <h1>Page introuvable</h1>
      <p>Cette adresse ne correspond à aucune page du site.</p>
      <Link to="/" className="button button--primary">
        Retour à l'accueil
      </Link>
    </main>
  )
}

export default NotFound
