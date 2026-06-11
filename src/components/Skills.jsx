const skillGroups = [
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux"]
  },
  {
    title: "Qualité Web",
    skills: ["Responsive Design", "Accessibilité", "SEO", "Performance"]
  },
  {
    title: "Outils & Méthodes",
    skills: ["Git", "GitHub", "Vercel", "Kanban", "Agile"]
  },
  {
    title: "Cybersécurité",
    skills: ["GRC", "Protection des données", "Audit de sécurité", "Conformité"," KPI/KRI","Gestion des risques","PCA/PSA","Sensibilisation à la sécurité","Gestion des vulnérabilités","Plan de réponse aux incidents"]
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express", "MongoDB", "API REST"]
  },
  {
    title: "Base de données",
    skills: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL","YAML","JSON"]
  },
  {
    title: "Langages de programmation",
    skills: ["JavaScript", "Python", "Java", "C++"]
  },
  {
    title: "Systèmes d'exploitation",
    skills: ["Linux", "Windows", "macOS", "Unix", "Environnement cloud (AWS, Azure)","Debian","Ubuntu","Red Hat"]
  }
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-kicker">Savoir-faire</p>
      <h2>Compétences</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card fade-up" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;