import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpeg";

function About() {
  return (
    <section className="about-section" id="about">

      {/* PROFILE IMAGE */}
      <div className="about-image">
        <div className="profile-ring">
          <img
            src={profileImage}
            alt="Vaibhav Kothari"
            className="profile-image"
          />
        </div>
      </div>


      {/* ABOUT CONTENT */}
      <div className="about-text">

        <p className="section-tag">
          ABOUT ME
        </p>

        <h2>
          About <span>Me</span>
        </h2>

        <h3>
          Full Stack <span>Web Developer!</span>
        </h3>

        <p>
          I am Vaibhav Kothari, a B.Tech Computer Science and Engineering
          (Core) student at Lovely Professional University. My academic
          journey is focused on software development, problem solving and
          modern web technologies.
        </p>

        <p>
          My specialization is Full Stack Web Development, and I am also
          pursuing DevOps as my Open Minor. I enjoy building responsive
          websites, backend systems, database-driven applications and
          practical software solutions.
        </p>

        <p>
          I am continuously improving my skills through projects,
          programming practice and hands-on learning. My goal is to become
          a strong Full Stack Developer and Software Engineer.
        </p>


        {/* INFORMATION */}
        <div className="about-info">

          <div className="info-card">
            <span>🎓</span>

            <div>
              <small>Degree</small>
              <strong>B.Tech CSE (Core)</strong>
            </div>
          </div>


          <div className="info-card">
            <span>🏫</span>

            <div>
              <small>University</small>
              <strong>Lovely Professional University</strong>
            </div>
          </div>

        </div>


        <div className="about-info">

          <div className="info-card">
            <span>🚀</span>

            <div>
              <small>Specialization</small>
              <strong>Full Stack Web Development</strong>
            </div>
          </div>


          <div className="info-card">
            <span>☁️</span>

            <div>
              <small>Open Minor</small>
              <strong>DevOps</strong>
            </div>
          </div>

        </div>


        {/* STATS */}
        <div className="about-stats">

          <div className="stat">
            <h4>2024–28</h4>
            <p>B.Tech</p>
          </div>

          <div className="stat">
            <h4>CSE</h4>
            <p>Core</p>
          </div>

          <div className="stat">
            <h4>Full Stack</h4>
            <p>Specialization</p>
          </div>

        </div>


        {/* MORE ABOUT ME */}
        <Link
          to="/about-details"
          className="cyan-btn"
        >
          More About Me <span>→</span>
        </Link>

      </div>

    </section>
  );
}

export default About;