import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>What I've built</p>
          <h2>Projects</h2>
        </div>

        <div className="project-card">

          <div className="project-content">

            <p className="project-label">
              Final Year Project
            </p>

            <h3>Cleanup Crew</h3>

            <p className="project-type">
              Waste Complaint & Awareness Platform
            </p>

            <p className="project-description">
              Cleanup Crew is a MERN stack web application designed to
              help users report waste-related issues and promote
              awareness about proper waste management. The platform
              includes complaint reporting, volunteer support, and
              information about waste management.
            </p>

            <div className="project-technologies">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
            </div>

            <div className="project-buttons">

              <a
                href="#"
                className="project-btn"
              >
                GitHub
              </a>

              <a
                href="#"
                className="project-btn"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;