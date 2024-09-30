import InputGroup from "./InputGroup";

function ProfessionalExperience({ onChange, profExperience }) {
  console.log(profExperience);
  return (
    <div className="professional-experience">
      <h2>Professional Experience</h2>
      {profExperience.map((exp) => {
        return (
          <div className="">
            <form>
              <InputGroup
                onChange={onChange}
                value={exp.jobTitle}
                name="job-title"
                label="Job Title"
                type="text"
                placeholder="Enter the job title"
                dataKey="jobTitle"
              />
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default ProfessionalExperience;
