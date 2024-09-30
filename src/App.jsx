import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ShortProfile from "./components/ShortProfile";
import ProfessionalExperience from "./components/ProfessionalExperience";
import sampleData from "./sampleData";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    sampleData.personalDetails
  );
  const [shortProfile, setShortProfile] = useState(sampleData.shortProfile);
  const [profExperience, setProfExperience] = useState(
    sampleData.professionalExperience
  );

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

  return (
    <>
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
    </>
  );
}

export default App;
