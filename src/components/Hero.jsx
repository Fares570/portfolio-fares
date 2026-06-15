function Hero() {
  return (
    <section id="home" className="hero section fade-up">
      <div className="hero-content">
        <div className="availability">
          <span className="dot"></span>
          Disponible pour opportunités
        </div>

        <p className="eyebrow">Portfolio Cybersécurité & Développement Full Stack</p>

        <h1>
          Fares Zeghadi
          <span>Cybersécurité GRC • Développement Fullstack • Gestion de Projet IT</span>
        </h1>

        <p className="hero-text">
          Je développe des interfaces modernes, responsives et accessibles
          avec React, JavaScript et les bonnes pratiques du développement web moderne.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <h3>6+</h3>
            <p>Années d’expérience IT</p>
          </div>

          <div className="stat-card">
            <h3>Frontend</h3>
            <p>Développement frontend</p>
          </div>

          <div className="stat-card">
            <h3>Backend</h3>
            <p>Développement backend</p>
          </div>
          <div className="stat-card">
            <h3>Cybersécurité</h3>
            <p>Cybersécurité GRC</p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-glow"></div>

        <p className="card-label">Stack principale</p>

        <div className="tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>SEO</span>
          <span>Accessibilité</span>
          <span>GitHub</span>
          <span>Cybersécurité</span>
          <span>Protection des données</span>
          <span>Audit de sécurité</span>
          <span>Conformité</span>
          <span>Gestion de projet IT</span>
          <span>Gestion des incidents</span>
          <span>Gestion des vulnérabilités</span>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-glow"></div>

        <p className="card-label">Certification Professionnelle</p>

        <div className="tech-list">
          <span>Certification ISO 27001</span>
          <span>Certification ISO 27005</span>
          <span>Mooc ANSSI</span>
          <span>Mooc CNIL</span>
          <span>RGPD</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;