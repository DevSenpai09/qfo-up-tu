import "../../styles/inputs.css";

const TextInput = ({ title, placeholder, id }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input__title">
        {title}
      </label>
      <input id={id} type="text" placeholder={placeholder} className="input" />
      <p className="input__error-message">
        IMEI should be 15 digit numeric and must not contain spaces
      </p>
    </div>
  );
};

export default TextInput;
