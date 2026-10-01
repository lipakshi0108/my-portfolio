import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>Lipakshi Kumari</h3>

        <p>
          Computer Science & Engineering Graduate
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/lipakshi0108"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lipakshi-kumari-0bab04343/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:lipakshik6209@gmail.com">
            Email
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Lipakshi Kumari. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;