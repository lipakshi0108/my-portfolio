import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>
          Lipakshi Kumari
        </h1>

        <h2>
          Computer Science & Engineering Graduate
        </h2>

        <p className="hero-description">
            Computer Science & Engineering graduate passionate about building
            practical, user-friendly web applications and solving real-world
            problems through technology.

        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn primary-btn"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="hero-btn secondary-btn"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;