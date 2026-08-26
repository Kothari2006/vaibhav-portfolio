function Skills() {
  const technicalSkills = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 70 },
    { name: "Express.js", percentage: 70 },
    { name: "Java", percentage: 70 },
    { name: "MySQL", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
    { name: "Data Structures & Algorithms", percentage: 70 },
    { name: "Git & GitHub", percentage: 80 },
  ];

  const professionalSkills = [
    { name: "Creativity", percentage: 90 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Teamwork", percentage: 85 },
    { name: "Communication", percentage: 70 },
  ];

  return (
    <section className="skills" id="skills">

      <p className="section-tag">
        MY EXPERTISE
      </p>

      <h2>
        My <span>Skills</span>
      </h2>


      <div className="skills-container">

        {/* =================================
            TECHNICAL SKILLS
        ================================= */}

        <div className="technical-skills">

          <h3>
            Technical Skills
          </h3>

          {technicalSkills.map((skill) => (
            <div
              className="technical-skill"
              key={skill.name}
            >

              <div className="skill-info">

                <span>
                  {skill.name}
                </span>

                <span>
                  {skill.percentage}%
                </span>

              </div>


              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>

              </div>

            </div>
          ))}

        </div>


        {/* =================================
            PROFESSIONAL SKILLS
        ================================= */}

        <div className="professional-skills">

          <h3>
            Professional Skills
          </h3>


          <div className="professional-grid">

            {professionalSkills.map((skill) => (

              <div
                className="professional-skill"
                key={skill.name}
              >

                <div
                  className="skill-circle"
                  style={{
                    "--progress": `${skill.percentage * 3.6}deg`,
                  }}
                >

                  <span>
                    {skill.percentage}%
                  </span>

                </div>


                <p>
                  {skill.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;