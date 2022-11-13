import "../styles/CheckBox.css";
import { HiCheck } from "react-icons/hi";

const CheckBox = ({ id }) => {
  return (
    <label className="checkbox">
      <input id={id} type="checkbox" className="checkbox__input" />
      <HiCheck className="checkbox__icon" />
    </label>
  );
};

export default CheckBox;
