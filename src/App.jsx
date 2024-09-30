import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ShortProfile from "./components/ShortProfile";
import ProfessionalExperience from "./components/ProfessionalExperience";

const sampleData = {
  personalDetails: {
    fullName: "Max Muster",
    address: "Musterstrasse 29",
    phone: "+41 333 3333",
    email: "max.muster@gmail.com",
    linkedin: "https://ch.linkedin.com/in/max-muster",
    github: "https://github.com/max-muster",
    birthday: "1980-11-18",
  },
  shortProfile: {
    short1: "Experienced in React Web Development",
    short2: "10 years of experience in object-oriented programming",
    short3: "",
    short4: "",
  },
  professionalExperience: [
    {
      jobTitle: "Senior Software Architect",
      company: "Loogle",
      sector: "Technology",
      location: "Berlin, DE",
      coreTasks: "Design complex software systems",
      impact:
        "Developed an automation process that saved the company 3 million",
      startDate: "10/2018",
      endDate: "present",
    },
  ],
};

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

  function handleProfExperienceChange(e) {}

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
      />
    </>
  );
}

export default App;
