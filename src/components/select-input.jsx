import "../styles/select-input.css";

const SelectInput = ({ placeholder }) => {
  return (
    <div className="select-input">
      <span className="select-input__placeholder">{placeholder}</span>
      <div className="select-input__icon">icon</div>
    </div>
  );
};

export default SelectInput;
