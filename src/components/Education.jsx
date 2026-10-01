import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        <div className="education-heading">
          <p>My academic background</p>
          <h2>Education</h2>
        </div>

        <div className="education-list">

          {/* Undergraduate */}
          <div className="education-card">
            <span className="education-level">Undergraduate</span>

            <h3>B.Tech. in Computer Science and Engineering</h3>

            <p className="education-institute">
              Dr. C. V. Raman University, Vaishali, Bihar
            </p>

            <p className="education-year">
              2022 – 2026
            </p>

            <p className="education-description">
              Completed my Bachelor's degree in Computer Science and
              Engineering with a focus on programming, databases,
              web development, and software technologies.
            </p>

            <p className="education-score">
              CGPA: 7.8
            </p>
          </div>

          {/* Senior Secondary */}
          <div className="education-card">
            <span className="education-level">Senior Secondary</span>

            <h3>Class 12th</h3>

            <p className="education-institute">
              L.N. College, Bhagwanpur, Vaishali, Bihar
            </p>

            <p className="education-year">
              Senior Secondary
            </p>

            <p className="education-score">
              Percentage: 82%
            </p>
          </div>

          {/* Secondary */}
          <div className="education-card">
            <span className="education-level">Secondary</span>

            <h3>Class 10th</h3>

            <p className="education-institute">
              Virtuous K-12 International School, Hajipur, Bihar
            </p>

            <p className="education-year">
              Secondary
            </p>

            <p className="education-score">
              Percentage: 84.2%
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;