# Portfolio Valentin Alcala

Portfolio personnel. Développeur web et mobile junior, basé à Caen.

## Stack

- React + TypeScript + Vite
- React Router
- CSS natif, nommage BEM, thème clair/sombre

## Lancer le projet

```bash
npm install
npm run dev
```

## Scripts

| Commande          | Rôle                        |
| ----------------- | --------------------------- |
| `npm run dev`     | Serveur de développement    |
| `npm run build`   | Vérification TS + build     |
| `npm run lint`    | ESLint                      |
| `npm run preview` | Aperçu du build             |

## Structure

```
src/
  components/   Navbar, Footer, ProjectCard, ScrollToHash, ThemeToggle
  sections/     Sections de la page d'accueil
  pages/        Home, Projects, Project
  data/         Contenu (projets, parcours, compétences, contact)
  types/        Types TypeScript
```

Le contenu se modifie dans `src/data/`, sans toucher aux composants.
