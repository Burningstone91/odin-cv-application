import InputGroup from "./InputGroup";

function Education({
    onChange,
    education,
    addEducation,
}) {
    return (
        <div className="education">
          <h2>Education</h2>
          {education.map((edu) => {
            return (
              <div key={edu.id} className="education-form" id={"id-" + edu.id}>
                <h3>
                  {edu.certificate} at {edu.school}
                </h3>
                <form>
                  <InputGroup
                    onChange={onChange}
                    value={edu.certificate}
                    name="certificate"
                    label="Certificate"
                    type="text"
                    placeholder="Enter the certificate name"
                    dataKey="certificate"
                  />
                  <InputGroup
                    onChange={onChange}
                    value={edu.school}
                    name="school"
                    label="School"
                    type="text"
                    placeholder="Enter the school name"
                    dataKey="school"
                  />
                  <InputGroup
                    onChange={onChange}
                    value={edu.startDate}
                    name="start-date"
                    label="Start Date"
                    type="text"
                    placeholder="Enter the start date"
                    dataKey="startDate"
                  />
                  <InputGroup
                    onChange={onChange}
                    value={edu.endDate}
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
          <button onClick={addEducation}>Add Education</button>
        </div>
      );
    }
    
    export default Education;
    