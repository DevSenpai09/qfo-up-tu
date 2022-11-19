import "../../../styles/new-product-page/inputs.css";
import SelectInput from "../../select-input";

const PriceInput = ({ id, title }) => {
  const options = [
    "CNY - Chinese Yuan",
    "USD - US Dollar",
    "EUR - Europa Euro ",
    "CAD - Canadian Dollar",
    "GPB - British Pound",
    "AUD - Australian Dollar",
    "NZD - New Zealand Dollar",
    "BRL - Brazilian Real",
    "DKK - Danish Krone",
  ];
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-title">
        {title}
      </label>
      <div className="price-input">
        <img src="/src/assets/close.svg" alt="Icon" />
        <input type="text" className="price-input__input input" />
        <SelectInput
          placeholder="GPB"
          className="price-input__select"
          options={options}
          dropDownPos="down"
        />
      </div>
    </div>
  );
};

export default PriceInput;
