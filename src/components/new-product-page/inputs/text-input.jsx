import "../../../styles/new-product-page/inputs.css";

const TextInput = ({ title, placeholder, id }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-title">
        {title}
      </label>
      <input id={id} type="text" placeholder={placeholder} className="input" />
    </div>
  );
};

export default TextInput;
