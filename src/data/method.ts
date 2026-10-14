export type MethodStep = {
  title: string
  text: string
  proof: string
  projectSlug?: string
}

export const methodSteps: MethodStep[] = [
  {
    title: 'Comprendre le besoin',
    text: "Je pars de l'utilisateur : qui utilise l'outil, et pour faire quoi.",
    proof: 'User stories rédigées et développées sur Calanques et E-Music',
    projectSlug: 'calanques',
  },
  {
    title: "S'organiser",
    text: 'Je découpe le travail en tâches claires et je suis leur avancement.',
    proof: 'Scrum Master sur InterVizio, backlog Trello sur E-Music',
    projectSlug: 'intervizio',
  },
  {
    title: 'Concevoir',
    text: "Je structure le code avant d'écrire les fonctionnalités.",
    proof: 'Architecture Controller / Service / Repository et DTO sur AzurImmo',
    projectSlug: 'azurimmo',
  },
  {
    title: 'Développer',
    text: "Je travaille côté front comme côté back, jusqu'au produit utilisable.",
    proof: 'API et application mobile codées seul sur monAppliImmo',
    projectSlug: 'mon-appli-immo',
  },
  {
    title: 'Corriger et améliorer',
    text: 'Je reviens sur ce qui ne fonctionne pas bien pour le rendre plus fiable.',
    proof: 'Correction du bug de navigation de la sidebar sur E-Music',
    projectSlug: '25darkwolf',
  },
  {
    title: 'Apprendre en continu',
    text: 'Chaque projet me sert à progresser sur une nouvelle technologie.',
    proof: 'Ce portfolio, construit en React et TypeScript',
  },
]