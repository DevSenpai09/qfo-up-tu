import "../../styles/inputs.css";

const RadioInput = ({ title, name, radioInputs }) => {
  return (
    <div>
      <h4 className="input__title">{title}</h4>
      <div className="radio-input__options">
        {radioInputs &&
          radioInputs.map((input) => (
            <label key={input} className="radio-input_option">
              <input
                type="radio"
                name={name}
                className="radio-input_option-input"
              />
              {input}
            </label>
          ))}
      </div>
    </div>
  );
};

export default RadioInput;
