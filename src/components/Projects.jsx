import argentBankImage from "../assets/argentbank.webp";
import kanbanImage from "../assets/kanban.webp";

const projects = [
  {
    title: "ArgentBank",
    subtitle: "Application bancaire React",
    image: argentBankImage,
    description:
      "Développement d’une application bancaire moderne avec React et Redux, incluant l’authentification utilisateur, la gestion du profil et une architecture en composants.",
    stack: ["React", "Redux", "JavaScript", "API REST", "CSS"],
    result:
      "Application responsive, structurée et maintenable, avec gestion d’état globale.",
    github: "https://github.com/Fares570/NOM-DU-REPO-ARGENTBANK",
    demo: "https://argentbank-demo.netlify.app"
  },
  {
    title: "Planification d’un site client",
    subtitle: "Gestion de projet web",
    image: kanbanImage,
    description:
      "Organisation complète du développement d’un site client avec tableau Kanban, user stories, estimation des tâches et priorisation.",
    stack: ["Kanban", "Agile", "Notion", "User Stories", "Gestion de projet"],
    result:
      "Projet cadré de manière professionnelle avec tâches détaillées, priorités et suivi d’avancement.",
    github: "https://github.com/Fares570/portfolio-fares",
    demo: "https://www.notion.so/Kanban-Menu-Maker-Qwenta-35e22039296c8021a865ecf434e720d1"
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
              <img src={project.image} alt={`Capture d’écran du projet ${project.title}`} loading="lazy"/>
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