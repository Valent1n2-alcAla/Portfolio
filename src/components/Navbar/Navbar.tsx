import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

const sectionLinks = [
  { label: 'À propos', to: '/#a-propos' },
  { label: 'Compétences', to: '/#competences' },
]

const endLinks = [
  { label: 'Parcours', to: '/#parcours' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          Valentin Alcala
        </Link>

        <nav
          id="main-nav"
          className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          <NavLink to="/" end className="navbar__link" onClick={closeMenu}>
            Accueil
          </NavLink>

          {sectionLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <NavLink to="/projets" className="navbar__link" onClick={closeMenu}>
            Projets
          </NavLink>

          {endLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />

          <button
            type="button"
            className={`navbar__burger ${isOpen ? 'navbar__burger--open' : ''}`}
            aria-expanded={isOpen}
            aria-controls="main-nav"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar