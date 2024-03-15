import { useState } from "react";
import "./styles/App.css";
import Resume from "./Resume";
import Education from "./Education";
import Experience from "./Experience";
import ResetResume from "./ResetResume";
import PersonalDetails from "./PersonalDetails";
import {
  exampleEducationData,
  exampleExperienceData,
  examplePersonalData,
} from "./ExampleInfo";
// import { resetEdu, resetExp, resetInfo } from "./ResetValues";
import { v4 as uuid } from "uuid";

function App() {
  const [educationInfo, setEducationInfo] = useState(exampleEducationData);
  const [experienceInfo, setExperienceInfo] = useState(exampleExperienceData);
  const [personalInfo, setPersonalInfo] = useState(examplePersonalData);
  const [selected, setSelected] = useState({});
  const [backUp, setBackUp] = useState({});

  const handleObjectSelection = (obj) => {
    setSelected(obj);
  };

  const handleCreateBackUp = (obj) => {
    setBackUp(obj);
  };

  const handleCancelButton = () => {
    const updatedData = educationInfo.map((obj) =>
      obj.id === backUp.id ? backUp : obj
    );
    setEducationInfo(updatedData);
  };

  const handlePersonalChange = (e) => {
    let updatedObj = selected;
    setSelected(updatedObj);
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    let updatedObj = selected;
    updatedObj = {
      ...updatedObj,
      [e.target.name]: e.target.value,
    };
    setSelected(updatedObj);
    const updatedData = educationInfo.map((obj) =>
      obj.id === selected.id ? updatedObj : obj
    );
    setEducationInfo(updatedData);
  };

  const handleExperienceChange = (e) => {
    let updatedObj = selected;
    updatedObj = {
      ...updatedObj,
      [e.target.name]: e.target.value,
    };
    setSelected(updatedObj);
    const updatedData = experienceInfo.map((obj) =>
      obj.id === selected.id ? updatedObj : obj
    );
    setExperienceInfo(updatedData);
  };

  const handleAddItem = () => {
    let newObj = {
      school: "",
      degree: "",
      start: "",
      end: "",
      location: "",
      id: uuid(),
    };
    setEducationInfo([...educationInfo, newObj]);
  };

  const handleAddExpItem = () => {
    let newObj = {
      company: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
      id: uuid(),
    };
    setExperienceInfo([...experienceInfo, newObj]);
  };

  const handleDeleteEntry = () => {
    const updatedArray = educationInfo.filter((obj) => obj.id !== selected.id);
    setEducationInfo(updatedArray);
  };

  const handleDeleteExpEntry = () => {
    const updatedArray = educationInfo.filter((obj) => obj.id !== selected.id);
    setExperienceInfo(updatedArray);
  };

  function handleReset() {
    setPersonalInfo(examplePersonalData);
    setEducationInfo(exampleEducationData);
    setExperienceInfo(exampleExperienceData);
  }

  function handleClear() {
    setPersonalInfo({});
    setEducationInfo([]);
    setExperienceInfo([]);
  }

  return (
    <div className="app">
      <div className="leftSide">
        <ResetResume onClick={handleReset} onClear={handleClear}></ResetResume>
        <PersonalDetails
          personalInfo={personalInfo}
          onChange={handlePersonalChange}
        />
        <Education
          educationInfo={educationInfo}
          onChange={handleEducationChange}
          onSelection={handleObjectSelection}
          onDelete={handleDeleteEntry}
          selectedObj={selected}
          onAdd={handleAddItem}
          onCancel={handleCancelButton}
          onBackUp={handleCreateBackUp}
        />
        <Experience
          experienceInfo={experienceInfo}
          onChange={handleExperienceChange}
          onSelection={handleObjectSelection}
          onDelete={handleDeleteExpEntry}
          selectedObj={selected}
          onAdd={handleAddExpItem}
          onCancel={handleCancelButton}
          onBackUp={handleCreateBackUp}
        />
      </div>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      ></Resume>
    </div>
  );
}

export default App;
