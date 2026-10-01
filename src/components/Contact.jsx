import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p>Get in touch</p>
          <h2>Contact Me</h2>

          <span>
            I'm open to entry-level opportunities, collaborations,
            and professional conversations.
          </span>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p>
              If you have a job opportunity, project idea, or would
              simply like to connect, feel free to reach out.
            </p>

            <div className="contact-details">

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:lipakshik6209@gmail.com">
                  lipakshik6209@gmail.com
                </a>
              </p>

              <p>
                <strong>Location:</strong> Mumbai, India
              </p>

              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/lipakshi-kumari-0bab04343/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>

             <p>
                 <strong>GitHub:</strong>{" "}
                  <a
                     href="https://github.com/lipakshi0108"
                     target="_blank"
                     rel="noreferrer"
                  >
                  GitHub Profile
                   </a>
              </p>

            </div>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;