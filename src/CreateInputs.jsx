function CreateInputs({
  type,
  id,
  labelText,
  placeholder,
  onChange,
  name,
  value,
  maxlength,
}) {
  return (
    <div className="inputs">
      <label htmlFor={id} className="inputLabel">
        {labelText}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          maxLength={maxlength}
        />
      )}
    </div>
  );
}

export default CreateInputs;
