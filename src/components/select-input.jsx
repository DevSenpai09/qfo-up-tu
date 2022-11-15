import { useState } from "react";
import "../styles/select-input.css";
import DropDown from "./drop-down";

const SelectInput = ({ placeholder, options, dropDownPos, dropDownSearch }) => {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <div className="select-input" onClick={() => setIsDrop(!isDrop)}>
      <div className="select-input__input-wrapper">
        <span className="select-input__input-wrapper__placeholder">
          {placeholder}
        </span>
        <div className="select-input__input-wrapper__icon">icon</div>
      </div>
      {options && isDrop && (
        <div
          className={`select-input__drop-down ${
            dropDownPos === "up" && "select-input__drop-down--up"
          } ${dropDownPos === "down" && "select-input__drop-down--down"}`}
        >
          <DropDown options={options} dropDownSearch={dropDownSearch} />
        </div>
      )}
    </div>
  );
};

export default SelectInput;
