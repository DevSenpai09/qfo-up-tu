import { v4 as uuid } from "uuid";
import CheckBox from "../CheckBox";
import "../../styles/ap-settings/Options.css";

const Options = () => {
  const options = [
    "ID",
    "Brand",
    "Model",
    "Colour",
    "IMEI/Serial",
    "PO No",
    "Status",
    "Archived Reason",
    "Archived Date",
  ];
  return (
    <div className="options-wrapper">
      {options.map((option) => (
        <div key={uuid()} className="option">
          <CheckBox />
          <p className="option__text">{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;
