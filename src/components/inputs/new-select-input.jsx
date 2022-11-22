import "../../styles/inputs.css";
import SelectInput from "../select-input";

const NewSelectInput = ({ id, title, placeholder, options }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input__title">
        {title}
      </label>
      <div className="new-select-input__input">
        <SelectInput placeholder={placeholder} options={options} />
      </div>
    </div>
  );
};

export default NewSelectInput;
