import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailBody = `
Name: ${formData.name}

Email: ${formData.email}

Message:

${formData.message}
    `;

    const mailtoLink =
      `mailto:kotharivaibhav812@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="contact-info">

          <p className="section-tag">
            GET IN TOUCH
          </p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <h3>
            Let's Work Together
          </h3>

          <p className="contact-description">
            Have a project idea, a question, or simply want to
            connect? Feel free to reach out. I am always open to
            discussing new projects, creative ideas and
            opportunities.
          </p>


          {/* CONTACT DETAILS */}

          <div className="contact-details">

            {/* EMAIL */}

            <div className="contact-detail">

              <span>✉</span>

              <a href="mailto:kotharivaibhav812@gmail.com">
                kotharivaibhav812@gmail.com
              </a>

            </div>


            {/* PHONE */}

            <div className="contact-detail">

              <span>☎</span>

              <a href="tel:+917976617742">
                +91 79766 17742
              </a>

            </div>


            {/* LOCATION */}

            <div className="contact-detail">

              <span>📍</span>

              <span className="contact-location">
                India
              </span>

            </div>

          </div>


          {/* SOCIAL LINKS */}

          <div className="contact-socials">

            <a
              href="https://github.com/Kothari2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-kothari31/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://www.instagram.com/kothari_vaibhav_2006/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE - CONTACT FORM
        ================================= */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />


          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />


          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
            required
          />


          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            rows="7"
            required
          ></textarea>


          <button
            type="submit"
            className="contact-submit"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;