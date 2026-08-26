function Projects() {
  const projects = [
    {
      icon: "🚑",
      title: "Advanced Ambulance Route Optimizer",
      description:
        "An emergency route planning system that finds optimal ambulance routes using Dijkstra's shortest-path algorithm. It includes traffic simulation, route visualization and hospital and ambulance station management.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Dijkstra",
        "Graph Algorithms",
      ],
      github:
        "https://github.com/Kothari2006/ambulance-routing-system",
      live:
        "https://ambulance-routing-system-theta.vercel.app/",
    },

    {
      icon: "🎵",
      title: "SoundStack",
      description:
        "An AI-powered full-stack music assistant that provides personalized music recommendations through a modern conversational interface with direct YouTube links.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Groq",
      ],
      github:
        "https://github.com/Kothari2006/SoundStack",
      live: null,
    },

    {
      icon: "💻",
      title: "CodeVault",
      description:
        "A code snippet management platform designed to help developers create, discover, organize and manage useful code snippets with search, filtering and favorites.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github:
        "https://github.com/Kothari2006/CodeVault",
      live: null,
    },

    {
      icon: "🗂️",
      title: "File Recovery & Optimization Tool",
      description:
        "A Windows desktop utility for file scanning, deletion monitoring, file recovery, storage optimization and real-time CPU and RAM monitoring.",
      tech: [
        "Python",
        "PyQt5",
        "psutil",
        "watchdog",
        "pyqtgraph",
      ],
      github:
        "https://github.com/Kothari2006/file_recovery",
      live: null,
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
    >

      {/* SECTION HEADER */}

      <p className="section-tag projects-tag">
        MY WORK
      </p>

      <h2>
        Latest <span>Projects</span>
      </h2>

      <p className="projects-intro">
        A collection of projects I have built while exploring
        web development, full-stack development, algorithms,
        databases and practical software solutions.
      </p>


      {/* PROJECT CARDS */}

      <div className="projects-container">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            {/* PROJECT ICON */}

            <div className="project-image">

              <div className="project-icon">
                {project.icon}
              </div>

            </div>


            {/* PROJECT INFORMATION */}

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-tech">

                {project.tech.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* PROJECT LINKS */}

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


      {/* ALL PROJECTS */}

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