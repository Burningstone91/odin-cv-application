import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume({ personalDetails, shortProfile, profExperience, education }) {
  return (
    <>
      <h1>Resume</h1>

      <div className="personal-details-info">
        <p>{personalDetails.address}</p>
        <p>{personalDetails.phone}</p>
        <p>{personalDetails.email}</p>
        <a href={personalDetails.linkedin}>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
        </a>
        <a href={personalDetails.github}>
          <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
        </a>
      </div>
      <div className="short-profile-info">
        <h2>Short Profile at a Glance</h2>
        {Object.values(shortProfile).map((short) => {
          return <p>{short}</p>;
        })}
      </div>

      <div className="professional-experience-info">
        <h2>Professional Experience</h2>
        {profExperience.map((exp) => {
          return (
            <div key={exp.id} className="experience-info">
              <div className="job-info">
                <p className="duration">
                  {exp.startDate + " - " + exp.endDate}
                </p>
                <div className="job-info-details">
                  <p className="job-title">{exp.jobTitle}</p>
                  <p>
                    {exp.company + " / " + exp.sector + " / " + exp.location}
                  </p>
                </div>
              </div>

              <div className="job-core-tasks">
                <p className="core-tasks-title">Core Tasks</p>
                <p className="core-tasks-content">{exp.coreTasks}</p>
              </div>

              <div className="job-impact">
                <p className="impact-title">Impact</p>
                <p className="impact-content">{exp.impact}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="education-info-section">
        <h2>Education</h2>
        {education.map((edu) => {
          return (
            <div key={edu.id} className="education-info">
              <p className="duration">{edu.startDate + " - " + edu.endDate}</p>
              <div className="education-details">
                <p className="certificate">{edu.certificate}</p>
                <p>{edu.school}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Resume;
