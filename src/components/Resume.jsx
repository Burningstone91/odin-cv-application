import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Resume({
  personalDetails,
  shortProfile,
  profExperience,
  education,
}) {
  return (
    <>
      <h1>Resume</h1>
      <div className="personal-details-info">
        <p>{personalDetails.address}</p>
        <p>{personalDetails.phone}</p>
        <p>{personalDetails.email}</p>
        <a href={personalDetails.linkedin}>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x"/>
        </a>
        <a href={personalDetails.github}>
          <FontAwesomeIcon icon="fa-brands fa-github" size="2x"/>
        </a>
        <p>{personalDetails.github}</p>
        
      </div>
      <div className="short-profile-info">
        <h2>Short Profile at a Glance</h2>
        {Object.values(shortProfile).map((short) => {
          return <p>{short}</p>
        })}
      </div>
    </>
  )
}

export default Resume;