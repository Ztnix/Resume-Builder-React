import "./styles/PrintResumeInfo.css";

export default function PrintResumeExperience({ experienceInfo }) {
  return (
    <ul>
      {experienceInfo.map((experienceInfo) => (
        <div className="resumeCard" key={experienceInfo.id}>
          <div className="leftCard">
            <div className="dates">
              <div className="dateStart">{experienceInfo.start} </div>
              {experienceInfo.start && experienceInfo.end && (
                <span> &nbsp; - &nbsp; </span>
              )}
              <div className="dateEnd">{experienceInfo.end}</div>
            </div>
            <div className="location">{experienceInfo.location}</div>
          </div>
          <div className="rightCard">
            <div className="cardHeader">{experienceInfo.company}</div>
            <div className="cardSubHeader">{experienceInfo.position}</div>
            <div className="cardDesc">{experienceInfo.description}</div>
          </div>
        </div>
      ))}
    </ul>
  );
}
