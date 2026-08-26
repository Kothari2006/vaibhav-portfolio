import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpeg";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <div className="home-text">

          <p className="welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Vaibhav Kothari</span>
          </h1>


          <h3>
            Computer Science Student &{" "}
            <span>Full Stack Developer</span>
          </h3>

          <p>
            I am a Computer Science student passionate about Full Stack Web
            Development, backend technologies and building practical
            software solutions. I enjoy solving real-world problems and
            continuously improving my development skills.
          </p>


          <div className="home-buttons">

            <Link to="/projects" className="btn">
              View My Projects →
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>

          </div>

          <div className="home-socials">

            <a
              href="https://github.com/Kothari2006"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-kothari31/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/kothari_vaibhav_2006/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>

        <div className="home-image">

          <div className="home-image-ring">

            <img
              src={profileImage}
              alt="Vaibhav Kothari"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;