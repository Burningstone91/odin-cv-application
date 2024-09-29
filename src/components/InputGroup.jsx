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
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        data-key={dataKey}
      ></input>
    </>
  );
}

export default InputGroup;
