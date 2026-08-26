import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function AboutDetails() {
  return (
    <section className="about-details">

      {/* HEADER */}
      <div className="about-details-header">

        <p className="section-tag">PROFILE</p>

        <h1>
          More About <span>Me</span>
        </h1>

        <p>
          A Computer Science student focused on Full Stack Web Development,
          backend technologies, problem solving and DevOps.
        </p>

      </div>


      {/* MAIN INFORMATION */}
      <div className="details-grid">

        {/* PROFILE */}
        <div className="details-card">

          <div className="details-icon">
            👨‍💻
          </div>

          <h2>Profile</h2>

          <div className="details-list">

            <p>
              <strong>Name:</strong> Vaibhav Kothari
            </p>

            <p>
              <strong>Degree:</strong> B.Tech CSE (Core)
            </p>

            <p>
              <strong>University:</strong> Lovely Professional University
            </p>

            <p>
              <strong>Duration:</strong> 2024–2028
            </p>

          </div>

        </div>


        {/* SPECIALIZATION */}
        <div className="details-card">

          <div className="details-icon">
            🚀
          </div>

          <h2>Specialization</h2>

          <p>
            My primary specialization is{" "}
            <strong>Full Stack Web Development</strong>.
          </p>

          <p>
            I am interested in developing complete web applications,
            from responsive frontend interfaces to backend APIs,
            databases and deployment.
          </p>

        </div>


        {/* DEVOPS */}
        <div className="details-card">

          <div className="details-icon">
            ☁️
          </div>

          <h2>Open Minor</h2>

          <p>
            <strong>DevOps</strong>
          </p>

          <p>
            I am exploring DevOps concepts alongside my core Computer
            Science studies, including development workflows,
            deployment and software infrastructure.
          </p>

        </div>


        {/* DEVELOPMENT FOCUS */}
        <div className="details-card">

          <div className="details-icon">
            🎯
          </div>

          <h2>Development Focus</h2>

          <ul>

            <li>Full Stack Web Development</li>
            <li>Backend Development</li>
            <li>Database Management</li>
            <li>DSA & Problem Solving</li>
            <li>DevOps</li>

          </ul>

        </div>

      </div>


      {/* TECHNICAL SKILLS */}
      <div className="skills-details">

        <p className="section-tag">
          TECHNOLOGIES
        </p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <div className="skill-tags">

          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "Java",
            "MySQL",
            "MongoDB",
            "Data Structures & Algorithms",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* PROFESSIONAL SKILLS */}
      <div className="skills-details">

        <p className="section-tag">
          SOFT SKILLS
        </p>

        <h2>
          Professional <span>Skills</span>
        </h2>

        <div className="skill-tags">

          {[
            "Problem Solving",
            "Creativity",
            "Teamwork",
            "Communication",
          ].map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* CURRENTLY LEARNING */}
      <div className="learning-section">

        <p className="section-tag">
          CURRENTLY LEARNING
        </p>

        <h2>
          Always <span>Improving</span>
        </h2>

        <div className="learning-grid">

          <div className="learning-card">

            <span className="learning-number">
              01
            </span>

            <h3>
              Full Stack Development
            </h3>

            <p>
              Improving frontend, backend and full application
              development skills.
            </p>

          </div>


          <div className="learning-card">

            <span className="learning-number">
              02
            </span>

            <h3>
              DevOps
            </h3>

            <p>
              Learning development workflows, deployment and
              infrastructure concepts.
            </p>

          </div>


          <div className="learning-card">

            <span className="learning-number">
              03
            </span>

            <h3>
              Advanced Backend
            </h3>

            <p>
              Exploring better backend architecture, APIs and
              database management.
            </p>

          </div>


          <div className="learning-card">

            <span className="learning-number">
              04
            </span>

            <h3>
              System & Project Development
            </h3>

            <p>
              Building better structured and practical software
              projects.
            </p>

          </div>

        </div>

      </div>


      {/* CAREER GOAL */}
      <div className="career-section">

        <p className="section-tag">
          CAREER GOAL
        </p>

        <h2>
          Building My <span>Future</span>
        </h2>

        <p>
          My goal is to become a strong Full Stack Developer and
          Software Engineer capable of building scalable, reliable
          and meaningful digital solutions. I want to continuously
          improve my technical skills through real-world projects,
          problem solving and practical development.
        </p>

      </div>


      {/* SOCIAL PROFILES */}
      <div className="profile-links">

        <p className="section-tag">
          CONNECT WITH ME
        </p>

        <h2>
          My <span>Profiles</span>
        </h2>

        <div className="profile-link-container">

          <a
            href="https://github.com/Kothari2006"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhav-kothari31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/kothari_vaibhav_2006/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutDetails;