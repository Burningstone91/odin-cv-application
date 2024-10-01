import { useState } from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import PersonalDetails from "./components/PersonalDetails";
import ShortProfile from "./components/ShortProfile";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import sampleData from "./sampleData";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    sampleData.personalDetails
  );
  const [shortProfile, setShortProfile] = useState(sampleData.shortProfile);
  const [profExperience, setProfExperience] = useState(
    sampleData.professionalExperience
  );
  const [education, setEducation] = useState(sampleData.education);
  function handlePersonalDetailsChange(e) {
    const { key } = e.target.dataset;
    setPersonalDetails({ ...personalDetails, [key]: e.target.value });
  }

  function handleShortProfileChange(e) {
    const { key } = e.target.dataset;
    setShortProfile({ ...shortProfile, [key]: e.target.value });
  }

  function handleProfExperienceChange(e) {
    const { key } = e.target.dataset;
    const value = e.target.value;
    const id = e.target.closest(".experience-form").id.slice(3);
    const index = profExperience.findIndex((exp) => exp.id === id);

    const newProfExperience = [...profExperience];
    newProfExperience[index] = { ...newProfExperience[index], [key]: value };

    setProfExperience(newProfExperience);
  }

  function addProfExperience(experience) {
    const exp = [...profExperience];
    exp.push(experience);
    setProfExperience(exp);
  }

  function addProfExperienceForm() {
    addProfExperience({
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      sector: "",
      location: "",
      coreTasks: "",
      impact: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleEducationChange(e) {
    const { key } = e.target.dataset;
    const value = e.target.value;
    const id = e.target.closest(".education-form").id.slice(3);
    const index = education.findIndex((exp) => exp.id === id);

    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [key]: value };

    setEducation(newEducation);
  }

  function addEducation(education) {
    const exp = [...education];
    exp.push(education);
    setEducation(education);
  }

  function addEducationForm() {
    addEducation({
      id: crypto.randomUUID(),
      certificate: "",
      school: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
      <div className="app">
        <div className="input-forms">
          <PersonalDetails
            onChange={handlePersonalDetailsChange}
            fullName={personalDetails.fullName}
            address={personalDetails.address}
            phone={personalDetails.phone}
            email={personalDetails.email}
            linkedin={personalDetails.linkedin}
            github={personalDetails.github}
            birthday={personalDetails.birthday}
          />
          <ShortProfile
            onChange={handleShortProfileChange}
            short1={shortProfile.short1}
            short2={shortProfile.short2}
            short3={shortProfile.short3}
            short4={shortProfile.short4}
          />
          <ProfessionalExperience
            onChange={handleProfExperienceChange}
            profExperience={profExperience}
            addProfExperience={addProfExperienceForm}
          />
          <Education
            onChange={handleEducationChange}
            education={education}
            addEducation={addEducationForm}
          />
        </div>
        <div className="resume">
          <Resume
            personalDetails={personalDetails}
            shortProfile={shortProfile}
            profExperience={profExperience}
            education={education}
          />
        </div>
      </div>
  );
}

export default App;
library.add(fab, fas, far);