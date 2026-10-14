export type ExperienceItem = {
  period: string
  type: 'Formation' | 'Expérience'
  title: string
  place: string
  details?: string[]
  projectSlug?: string
}