import "./styles/PrintResumeInfo.css";

export default function PrintResumeEducation({ educationInfo }) {
  return (
    <ul>
      {educationInfo.map((educationInfo) => (
        <div className="resumeCard" key={educationInfo.id}>
          <div className="leftCard">
            <div className="dates">
              <div className="dateStart">{educationInfo.start} </div>
              {educationInfo.start && educationInfo.end && (
                <span> &nbsp; - &nbsp;</span>
              )}
              <div className="dateEnd">{educationInfo.end}</div>
            </div>
            <div className="location">{educationInfo.location}</div>
          </div>
          <div className="rightCard">
            <div className="cardHeader">{educationInfo.school}</div>
            <div className="cardSubHeader">{educationInfo.degree}</div>
          </div>
        </div>
      ))}
    </ul>
  );
}
