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
  featured?: boolean
}