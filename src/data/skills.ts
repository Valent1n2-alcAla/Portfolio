import type { SkillCategory } from '../types/skill'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML / CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React', context: 'Projets de formation' },
      { name: 'Vue', context: 'Stage DeltInfo' },
      { name: 'Vite', context: 'Stage DeltInfo' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP' },
      { name: 'Symfony' },
      { name: 'Java' },
      { name: 'Spring Boot' },
    ],
  },
  {
    title: 'Mobile',
    skills: [{ name: 'Kotlin' }, { name: 'Android' }],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MySQL' },
      { name: 'MariaDB' },
      { name: 'OracleDB' },
      { name: 'Supabase', context: 'Stage DeltInfo' },
    ],
  },
  {
    title: 'Méthodes',
    skills: [
      { name: 'Agile' },
      { name: 'Scrum' },
      { name: 'Trello' },
      { name: 'Gantt' },
      { name: 'PERT' },
    ],
  },
  {
    title: 'Systèmes & sécurité',
    skills: [
      { name: 'Windows' },
      { name: 'Linux' },
      { name: 'Cryptographie' },
      { name: 'Hash' },
      { name: 'Signature' },
    ],
  },
]