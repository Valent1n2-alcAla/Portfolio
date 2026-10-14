export type Project = {
  slug: string
  title: string
  category: 'Professionnel' | 'Formation'
  summary: string
  technologies: string[]
  githubUrl?: string
  team: string
  context: string
  role: string[]
  features?: string[]
  learned?: string[]
  // Capture dans public/projets/, en deux largeurs : {name}-800.webp et {name}-1600.webp
  image?: {
    name: string
    alt: string
    // Hauteur de la version 1600px, évite un saut de mise en page au chargement
    height: number
  }
  featured?: boolean
}