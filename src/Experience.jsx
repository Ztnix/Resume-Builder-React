import { useState } from "react";
import CreateInputs from "./CreateInputs";
import "./styles/EducationDetails.css"; // PLACEHOLDER

export default function Experience({
  onChange,
  experienceInfo,
  onSelection,
  selectedObj,
  onDelete,
  onAdd,
  onCancel,
  onBackUp,
}) {
  const [listActive, setListActive] = useState(false);
  const [inputsAreActive, setInputsAreActive] = useState(false);
  const [aux, setAux] = useState(false);

  const handleSaveEntry = () => {
    setInputsAreActive(false);
    setAux(true);
  };

  const handleObjectFocus = (objectID) => {
    if (objectID !== selectedObj.id || aux == true) {
      setInputsAreActive(true);
      setAux(false);
    } else {
      setInputsAreActive(false);
      setAux(true);
    }
  };

  return (
    <div className="personalDetails">
      <button
        className="showPersonalDetails"
        onClick={() => {
          setListActive(!listActive);
          setInputsAreActive(false);
          setAux(true);
        }}
      >
        Experience
      </button>

      {listActive && (
        <div className="Nose">
          {inputsAreActive ? (
            <div className="formContainer">
              <div className="inputsContainer">
                <CreateInputs
                  type="text"
                  id="company"
                  labelText="Company Name"
                  placeholder="Enter company name"
                  onChange={onChange}
                  value={selectedObj.company}
                  name="company"
                />
                <CreateInputs
                  type="text"
                  id="position"
                  labelText="Position"
                  placeholder="Enter position name"
                  onChange={onChange}
                  value={selectedObj.position}
                  name="position"
                />
                <CreateInputs
                  type="text"
                  id="dateStart"
                  labelText="Start Date"
                  placeholder="DD/MM/YYYY"
                  onChange={onChange}
                  value={selectedObj.start}
                  name="start"
                  maxlength={10}
                />
                <CreateInputs
                  type="text"
                  id="dateEnd"
                  labelText="End Date"
                  placeholder="DD/MM/YYYY"
                  onChange={onChange}
                  value={selectedObj.end}
                  name="end"
                  maxlength={10}
                />
                <CreateInputs
                  type="text"
                  id="location"
                  labelText="Location"
                  placeholder="Enter Location"
                  onChange={onChange}
                  value={selectedObj.location}
                  name="location"
                />
                <CreateInputs
                  type="textarea"
                  id="description"
                  labelText="Description"
                  placeholder="Enter a description"
                  onChange={onChange}
                  value={selectedObj.description}
                  name="description"
                />
              </div>
              <div className="bottomInputButtons">
                <button
                  className="delete"
                  onClick={() => {
                    onDelete();
                    handleSaveEntry();
                  }}
                >
                  Delete Entry
                </button>
                <div className="bottomRightInputButtons">
                  <button
                    className="cancel"
                    onClick={() => {
                      onCancel();
                      setInputsAreActive(false);
                      setAux(true);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="save" onClick={handleSaveEntry}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="eduContent">
              <ul className="showEduList">
                {experienceInfo.map((edu) => (
                  <button
                    className="eduListItem"
                    key={edu.id}
                    onClick={() => {
                      handleObjectFocus(edu.id);
                      onSelection(edu);
                      onBackUp(edu);
                    }}
                  >
                    {edu.company != "" ? edu.company : "Enter New Data"}
                  </button>
                ))}
              </ul>
              <button
                className="addEdu"
                onClick={() => {
                  onAdd();
                }}
              >
                Add Education
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
