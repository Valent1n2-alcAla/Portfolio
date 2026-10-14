export type Skill = {
  name: string
  context?: string
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}