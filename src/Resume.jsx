import "./styles/Resume.css";
import PrintResumeEducation from "./PrintResumeEducation";
import PrintResumeHeader from "./PrintResumeHeader";
import PrintResumeExperience from "./PrintResumeExperience";

function Resume({ educationInfo, experienceInfo, personalInfo }) {
  return (
    <div className="rightSide">
      <div className="header">
        <PrintResumeHeader personalInfo={personalInfo}></PrintResumeHeader>
      </div>
      <div className="bottomResume">
        <h3 className="eduHeader">Education</h3>
        <PrintResumeEducation
          educationInfo={educationInfo}
        ></PrintResumeEducation>
        <h3 className="expHeader">Professional Experience</h3>
        <PrintResumeExperience
          experienceInfo={experienceInfo}
        ></PrintResumeExperience>
      </div>
    </div>
  );
}

export default Resume;
