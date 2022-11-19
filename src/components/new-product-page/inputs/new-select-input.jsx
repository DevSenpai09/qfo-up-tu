import "../../../styles/new-product-page/inputs.css";
import SelectInput from "../../select-input";

const NewSelectInput = ({ id, title, placeholder, options }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-title">
        {title}
      </label>
      <SelectInput placeholder={placeholder} options={options} />
    </div>
  );
};

export default NewSelectInput;
