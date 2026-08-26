import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "</>",
      title: "UI/UX Design",
      description:
        "I create clean, modern and user-friendly interfaces with a strong focus on usability, visual design, responsiveness and smooth user experience.",
    },

    {
      icon: "◈",
      title: "Web Development",
      description:
        "I build responsive and interactive websites using HTML, CSS, JavaScript and React with clean structure, modern design and performance in mind.",
    },

    {
      icon: "⚡",
      title: "Full Stack Development",
      description:
        "I develop complete web applications by working with frontend interfaces, backend APIs, databases and modern full stack technologies.",
    },

    {
      icon: "⌘",
      title: "Software Development",
      description:
        "I enjoy building practical software solutions that solve real-world problems using programming, data structures, algorithms and problem-solving techniques.",
    },
  ];

  return (
    <section className="services" id="services">

      <p className="section-tag">
        WHAT I DO
      </p>

      <h2>
        My <span>Services</span>
      </h2>


      <div className="services-container">

        {services.map((service) => (
          <div
            className="service-card"
            key={service.title}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <Link
              to="/contact"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;