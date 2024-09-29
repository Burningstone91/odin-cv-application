import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";

const sampleData = {
  personalDetails: {
    fullName: "Max Muster",
    address: "Musterstrasse 29",
    phone: "+41 333 3333",
    email: "max.muster@gmail.com",
    linkedin: "https://ch.linkedin.com/in/max-muster",
    github: "https://github.com/max-muster",
    birthday: "03/03/1980",
  },
};

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    sampleData.personalDetails
  );

  function handlePersonalDetailsChange(e) {
    const { key } = e.target.dataset;
    setPersonalDetails({ ...personalDetails, [key]: e.target.value });
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
    </>
  );
}

export default App;
