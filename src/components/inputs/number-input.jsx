const NumberInput = ({ id, title, placeholder }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-title">
        {title}
      </label>
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default NumberInput;
