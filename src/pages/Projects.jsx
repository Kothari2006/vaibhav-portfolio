function Projects() {
  const projects = [
    {
      icon: "🚑",
      title: "Advanced Ambulance Route Optimizer",
      description:
        "A web-based emergency route planning system that calculates the shortest ambulance route using Dijkstra's Algorithm with dynamic traffic simulation and interactive graph visualization.",
      tech: ["HTML5", "CSS3", "JavaScript", "Dijkstra", "MySQL"],
      github:
        "https://github.com/Kothari2006/ambulance-routing-system",
      live:
        "https://ambulance-routing-system-theta.vercel.app/",
    },

    {
      icon: "🎵",
      title: "SoundStack",
      description:
        "An AI-powered full-stack music assistant that provides personalized song recommendations and direct YouTube links through a modern conversational interface.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Groq"],
      github:
        "https://github.com/Kothari2006/SoundStack",
      live:
        "https://sound-stack-sepia.vercel.app/",
    },

    {
      icon: "💻",
      title: "CodeVault",
      description:
        "A modern platform for sharing, discovering and managing code snippets with search, filtering, favorites, code validation, responsive design and a MongoDB backend.",
      tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      github:
        "https://github.com/Kothari2006/CodeVault",
      live:
        "https://code-vault-vaibhav.vercel.app/",
    },

    {
      icon: "🗂️",
      title: "File Recovery & Optimization Tool",
      description:
        "A Windows desktop utility for scanning files, monitoring deletion events, recovering files from the Recycle Bin, optimizing storage and monitoring system resources.",
      tech: ["Python", "PyQt5", "psutil", "watchdog", "pyqtgraph"],
      github:
        "https://github.com/Kothari2006/file_recovery",
      live: null,
    },
  ];

  return (
    <section className="projects">

      <p className="section-tag projects-tag">
        MY WORK
      </p>

      <h2>
        Latest <span>Projects</span>
      </h2>

      <p className="projects-intro">
        A selection of projects I have built while exploring web development,
        algorithms, backend systems and practical software solutions.
      </p>

      <div className="projects-container">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-image">
              <div className="project-icon">
                {project.icon}
              </div>
            </div>

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub ↗
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-live"
                  >
                    Live Demo ↗
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="all-projects">

        <a
          href="https://github.com/Kothari2006"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View All Projects →
        </a>

      </div>

    </section>
  );
}

export default Projects;