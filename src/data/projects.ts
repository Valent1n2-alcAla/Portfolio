import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'intervizio',
    title: 'InterVizio',
    category: 'Professionnel',
    summary:
      'Outil de gestion des interventions, développé pendant mon stage chez DeltInfo.',
    technologies: ['Vue', 'Vite'],
    team: 'Équipe projet — stage DeltInfo, janvier–février 2026',
    context:
      "Projet de digitalisation et d'automatisation de la gestion des interventions, mené en mode projet.",
    role: [
      "Scrum Master de l'équipe",
      'Développement front-end et back-end',
      'Mise en œuvre de la séparation des accès par rôles',
    ],
    features: [
      "Gestion de l'affichage sur télévisions",
      'Gestion des colis à recevoir lors des interventions',
      'Signature des contrats',
      'Ajout des compétences des employés dans leur profil',
    ],
    featured: true
  },
  {
    slug: 'mon-appli-immo',
    title: 'monAppliImmo',
    category: 'Formation',
    summary:
      "Application Android de gestion immobilière, connectée à l'API AzurImmo.",
    technologies: ['Kotlin', 'Android'],
    githubUrl: 'https://github.com/Valent1n2-alcAla/monAppliImmo',
    team: 'Projet solo',
    context:
      "Application mobile qui récupère les bâtiments et appartements via l'API AzurImmo, que j'ai aussi développée.",
    role: ["Conception et développement complets de l'application mobile"],
    features: [
      'Liste des bâtiments et appartements',
      "Nom du propriétaire de l'appartement",
      'Montants payés et loyer',
      "Caractéristiques de l'appartement",
    ],
    featured: true
  },
  {
    slug: 'azurimmo',
    title: 'AzurImmo API',
    category: 'Formation',
    summary:
      'API REST de gestion immobilière (bâtiments, appartements) consommée par monAppliImmo.',
    technologies: ['Java', 'Spring Boot', 'JPA', 'MariaDB', 'Maven'],
    githubUrl: 'https://github.com/Valent1n2-alcAla/azurimmo',
    team: 'Projet solo',
    context:
      "Back-end du projet immobilier : expose les données des bâtiments et appartements à l'application mobile.",
    role: ["Conception et développement complets de l'API"],
    features: [
      'Architecture en couches : Controller, Service, Repository',
      'Utilisation de DTO pour séparer API et modèle JPA',
      'Gestion des entités Bâtiment et Appartement',
    ],
  },
  {
    slug: 'calanques',
    title: 'Calanques',
    category: 'Formation',
    summary:
      'Application Android pour découvrir les activités des Calanques de Marseille et gérer ses réservations.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'OSMDroid'],
    githubUrl: 'https://github.com/Nolann-Gueguen/Calanques',
    team: 'Projet en équipe, organisé en user stories',
    context:
      'Application mobile de réservation : activités, panier, carte interactive, compte utilisateur.',
    role: [
      "Page d'accueil de l'application",
      'Consultation et modification des informations personnelles',
      'Affichage des réservations dans le profil',
      'Consultation du détail et du statut des réservations',
      "Annulation d'une réservation",
    ],
  },
  {
    slug: '25darkwolf',
    title: 'E-Music',
    category: 'Formation',
    summary:
      "Application web de gestion d'école de musique : élèves, cours, instruments, paiements.",
    technologies: ['Symfony', 'PHP', 'MariaDB', 'Twig', 'Bootstrap'],
    githubUrl: 'https://github.com/ZakinaA/25darkwolf',
    team: 'Équipe de 3 développeurs, méthode Agile avec Trello',
    context:
      'Application centralisant la gestion administrative, pédagogique et logistique d’une école de musique.',
    role: [
      'Création du tableau Trello et rédaction du backlog initial',
      "Page de connexion et page d'accueil visiteur",
      'Mise en place des rôles (avec l’équipe)',
      'CRUD complet des élèves et des instruments',
      'Inscription d’un élève à un cours',
      'Consultation des paiements et des interventions',
    ],
    featured: true
  },
]