export type MethodStep = {
  title: string
  text: string
  proof: string
  projectSlug?: string
}

export const methodSteps: MethodStep[] = [
  {
    title: 'Comprendre le besoin',
    text: 'Avant de coder, je cherche à comprendre le besoin, puis comment le mettre en place.',
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
    text:
      "Quand quelque chose ne va pas, je cherche la cause. Sur InterVizio, une page mettait trop de temps à afficher ses données : j'ai réécrit les requêtes SQL pour ne demander que le nécessaire.",
    proof: 'Optimisation des requêtes SQL sur InterVizio',
    projectSlug: 'intervizio',
  },
  {
    title: 'Apprendre en continu',
    text: "Je ne connais pas tout. J'apprends pour savoir faire plus de choses et aider plus de monde.",
    proof: 'Ce portfolio, construit en React et TypeScript',
  },
]