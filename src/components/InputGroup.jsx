function InputGroup({
  onChange,
  value,
  name,
  label,
  type,
  placeholder,
  dataKey,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          onChange={onChange}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          data-key={dataKey}
        ></input>
      )}
    </>
  );
}

export default InputGroup;
