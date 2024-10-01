import InputGroup from "./InputGroup";

function ProfessionalExperience({
  onChange,
  profExperience,
  addProfExperience,
}) {
  return (
    <div className="professional-experience">
      <h2>Professional Experience</h2>
      {profExperience.map((exp) => {
        return (
          <div key={exp.id} className="experience-form" id={"id-" + exp.id}>
            <h3>
              {exp.jobTitle} at {exp.company}
            </h3>
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
              <InputGroup
                onChange={onChange}
                value={exp.company}
                name="company"
                label="Company"
                type="text"
                placeholder="Enter the company"
                dataKey="company"
              />
              <InputGroup
                onChange={onChange}
                value={exp.sector}
                name="sector"
                label="Sector"
                type="text"
                placeholder="Enter the job sector"
                dataKey="sector"
              />
              <InputGroup
                onChange={onChange}
                value={exp.location}
                name="location"
                label="Location"
                type="text"
                placeholder="Enter the company location"
                dataKey="location"
              />
              <InputGroup
                onChange={onChange}
                value={exp.coreTasks}
                name="core-tasks"
                label="Core Tasks"
                type="textarea"
                placeholder="Enter your main tasks"
                dataKey="coreTasks"
              />
              <InputGroup
                onChange={onChange}
                value={exp.impact}
                name="impact"
                label="Impact"
                type="textarea"
                placeholder="Enter the impact you made"
                dataKey="impact"
              />
              <InputGroup
                onChange={onChange}
                value={exp.startDate}
                name="start-date"
                label="Start Date"
                type="text"
                placeholder="Enter the start date"
                dataKey="startDate"
              />
              <InputGroup
                onChange={onChange}
                value={exp.endDate}
                name="end-date"
                label="End Date"
                type="text"
                placeholder="Enter the end date"
                dataKey="endDate"
              />
            </form>
          </div>
        );
      })}
      <button onClick={addProfExperience}>Add Experience</button>
    </div>
  );
}

export default ProfessionalExperience;
