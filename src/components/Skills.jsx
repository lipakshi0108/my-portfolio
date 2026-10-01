import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>What I work with</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Java, Python</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;