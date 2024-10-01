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
        <p>{personalDetails.github}</p>
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
                <p>{exp.startDate + " - " + exp.endDate}</p>
                <div className="job-info">
                  <p>{exp.jobTitle}</p>
                  <p>
                    {exp.company + " / " + exp.sector + " / " + exp.location}
                  </p>
                </div>
              </div>

              <div className="job-core-tasks">
                <p>Core Tasks</p>
                <p>{exp.coreTasks}</p>
              </div>

              <div className="job-impact">
                <p>Impact</p>
                <p>{exp.impact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Resume;
