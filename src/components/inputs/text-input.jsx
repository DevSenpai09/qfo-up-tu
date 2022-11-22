import { useState } from "react";
import "../../styles/inputs.css";

const TextInput = ({ title, placeholder, id }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input__title">
        {title}
      </label>
      <input id={id} type="text" placeholder={placeholder} className="input" />
      {isError && (
        <p className="input__error-message">
          IMEI should be 15 digit numeric and must not contain spaces
        </p>
      )}
    </div>
  );
};

export default TextInput;
