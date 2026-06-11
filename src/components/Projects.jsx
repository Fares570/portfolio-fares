import argentBankImage from "../assets/argentbank.webp";
import kanbanImage from "../assets/kanban.webp";
import pkiImage from "../assets/pki.webp";
import vulnImage from "../assets/vuln.webp";

const projects = [
  {
    title: "ArgentBank",
    subtitle: "Application bancaire React",
    image: argentBankImage,
    description: "Développement d’une application bancaire moderne avec React et Redux, incluant l’authentification utilisateur, la gestion du profil et une architecture en composants.",
    stack: ["React", "Redux", "JavaScript", "API REST", "CSS", "MongoDB"],
    skills: "Développement React, gestion d’état avec Redux, intégration d’API REST, responsive design et architecture en composants réutilisables, gestion utilisateur et backend",
    result: "Application responsive, structurée et maintenable, avec gestion d’état globale.",
    improvements: "Ajout d’une authentification renforcée, optimisation des performances et amélioration de l’expérience utilisateur.",
    github: "https://github.com/Fares570/ArgentBank.git",
    demo: "https://argent-bank-76wqrdhe1-fares89.vercel.app/"
  },
  {
    title: "Planification d’un site client",
    subtitle: "Gestion de projet web",
    image: kanbanImage,
    description: "Organisation complète du développement d’un site client avec tableau Kanban, user stories, estimation des tâches et priorisation.",
    stack: ["Kanban", "Agile", "Notion", "User Stories", "Gestion de projet"],
    skills: "Gestion de projet Agile, organisation des tâches, rédaction de user stories, priorisation et suivi d’avancement.",
    result: "Projet cadré de manière professionnelle avec tâches détaillées, priorités et suivi d’avancement.",
    improvements: "Amélioration possible avec une planification plus détaillée des sprints et un suivi collaboratif en temps réel.",
    github: "https://github.com/Fares570/portfolio-fares",
    demo: "https://www.notion.so/Kanban-Menu-Maker-Qwenta-35e22039296c8021a865ecf434e720d1"
  },
  {
    title: "Renouvellemnent Certificat PKI",
    subtitle: "Pilotage de projet IT",
    image: pkiImage,
    description: "Renouvellement du certificat PKI pour assurer la continuité de l'infrastructure de sécurité.",
    stack: ["GRC", "Protection des données", "Audit de sécurité", "Conformité","PKI", "Gestion de projet"],
    skills: "Gestion de projet IT, cybersécurité GRC, protection des données, audit de sécurité et conformité réglementaire, Environnement Linux,Windows",
    result: "Amélioration de la posture de sécurité et conformité réglementaire.",
    improvements: "Intégration continue des meilleures pratiques en cybersécurité.",
  },
  {
    title: "Gestion des vulnérabilités",
    subtitle: "Analyse et mitigation des risques",
    image: vulnImage,
    description: "Analyse et gestion des vulnérabilités dans l'infrastructure informatique.",
    stack: ["GRC", "Protection des données", "Audit de sécurité", "Conformité","Gestion des vulnérabilités", "Plan de réponse aux incidents","Sensibilisation à la sécurité"],
    skills: "Analyse de risques, gestion des vulnérabilités, cybersécurité GRC, protection des données, audit de sécurité et conformité réglementaire, Environnement Linux,Windows",
    result: "Réduction des risques et amélioration de la posture de sécurité.",
    improvements: "Intégration continue des meilleures pratiques en cybersécurité.",
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-kicker">Réalisations</p>
      <h2>Projets sélectionnés</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card fade-up" key={project.title}>
            <div className="project-visual">
              <img src={project.image} alt={`Capture d’écran du projet ${project.title}`} loading="lazy" />
            </div>

            <div className="project-content">
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="stack-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <p className="project-result">
                <strong>Résultat :</strong> {project.result}
              </p>
              <p className="project-skills">
                <strong>Compétences développées :</strong> {project.skills}
              </p>

              <p className="project-improvements">
                <strong>Perspectives d’amélioration :</strong> {project.improvements}
              </p>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Démo live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;