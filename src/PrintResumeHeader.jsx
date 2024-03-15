export default function PrintResumeHeader({ personalInfo }) {
  return (
    <div className="headerContainer">
      <div className="headerName">{personalInfo.name}</div>
      <div className="headerBot">
        <div className="headerMail">{personalInfo.email}</div>
        <div className="headerPhone">{personalInfo.tel}</div>
        <div className="headerLocation">{personalInfo.address}</div>
      </div>
    </div>
  );
}
