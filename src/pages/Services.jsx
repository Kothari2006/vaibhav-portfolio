import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "⚙",
      title: "DevOps Engineering",
      description:
        "I work with DevOps practices to automate development workflows, manage deployments and improve software delivery using modern tools and automation.",
    },

    {
      icon: "⟳",
      title: "CI/CD & Automation",
      description:
        "I build automated CI/CD pipelines to streamline code integration, testing, deployment and software delivery.",
    },

    {
      icon: "⚡",
      title: "DevOps Tools & Deployment",
      description:
        "I use modern DevOps tools and deployment practices to improve development workflows and deliver software efficiently.",
    },

    {
      icon: "⌘",
      title: "Software Development",
      description:
        "I build practical software solutions using programming, data structures, algorithms and problem-solving techniques.",
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