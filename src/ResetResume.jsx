import "./styles/ResetResume.css";

export default function ResetResume({ onClick, onClear }) {
  return (
    <div className="leftTop">
      <button onClick={onClear}>Clear Resume</button>
      <button onClick={onClick}>Load Example</button>
    </div>
  );
}
