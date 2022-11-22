import { useState } from "react";
import "../../styles/inputs.css";

const PasswordInput = ({ title, placeholder, id }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input__title">
        {title}
      </label>
      <div className="input pass-input">
        <input
          id={id}
          type={isShowPass ? "text" : "password"}
          placeholder={placeholder}
          className="pass-input__input"
        />
        <img
          src="/src/assets/eye-open.svg"
          alt="Icon"
          onClick={() => setIsShowPass(!isShowPass)}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
