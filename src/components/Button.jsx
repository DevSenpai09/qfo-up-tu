import "../styles/Button.css";

const Button = ({ text, primary, secondary }) => {
  return (
    <button
      className={`button ${primary && "button--primary"} ${
        secondary && "button--secondary"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
