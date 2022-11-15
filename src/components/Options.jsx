import { v4 as uuid } from "uuid";
import CheckBox from "./CheckBox";
import "../styles/Options.css";

const Options = ({ options }) => {
  return (
    <div className="options-wrapper">
      {options &&
        options.map((option) => (
          <div key={uuid()} className="option">
            <CheckBox />
            <p className="option__text">{option}</p>
          </div>
        ))}
    </div>
  );
};

export default Options;
