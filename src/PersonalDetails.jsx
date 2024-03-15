import { useState } from "react";
import CreateInputs from "./CreateInputs";
import "./styles/PersonalDetails.css";

function PersonalDetails({ onChange, personalInfo }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="personalDetails">
      <button
        className="showPersonalDetails"
        onClick={() => setIsActive(!isActive)}
      >
        Personal Details
      </button>
      {isActive && (
        <div className="inputContainer">
          <CreateInputs
            type="text"
            id="full-name"
            labelText="Full Name"
            placeholder="John Doe"
            onChange={onChange}
            value={personalInfo.name}
            name="name"
          />
          <CreateInputs
            type="email"
            id="email"
            labelText="Email"
            placeholder="exampleEmail@gmail.com"
            onChange={onChange}
            value={personalInfo.email}
            name="email"
          />
          <CreateInputs
            type="tel"
            id="tel"
            labelText="Telephone Number"
            placeholder="555-555-5555"
            onChange={onChange}
            value={personalInfo.tel}
            name="tel"
          />
          <CreateInputs
            type="text"
            id="address"
            labelText="Address"
            placeholder="City, State, Country"
            onChange={onChange}
            value={personalInfo.address}
            name="address"
          />
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;
