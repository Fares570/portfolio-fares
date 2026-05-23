function Hero() {
  return (
    <section id="home" className="hero section fade-up">
      <div className="hero-content">
        <div className="availability">
          <span className="dot"></span>
          Disponible pour opportunités
        </div>

        <p className="eyebrow">Portfolio Développeur Web</p>

        <h1>
          Fares Zeghadi
          <span>Développeur Web Front-End</span>
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
            <h3>React</h3>
            <p>Développement moderne</p>
          </div>

          <div className="stat-card">
            <h3>SEO</h3>
            <p>Responsive & accessibilité</p>
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
        </div>
      </div>
    </section>
  );
}

export default Hero;