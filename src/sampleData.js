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
      id: crypto.randomUUID(),
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
    {
      id: crypto.randomUUID(),
      jobTitle: "Junior Software Architect",
      company: "Boogle",
      sector: "Technology",
      location: "Berlin, DE",
      coreTasks: "Automate deployment processes",
      impact:
        "Automated the deployment process to save 100k",
      startDate: "10/2018",
      endDate: "present",
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      certificate: "CAS Data Science",
      school: "ZHAW Zurich",
      startDate: "11/2021",
      endDate: "12/2022",
    },
    {
      id: crypto.randomUUID(),
      certificate: "Bachelor of Computer Science",
      school: "MIT",
      startDate: "10/2018",
      endDate: "11/2021",
    },
  ],
};

export default sampleData;