import "../styles/AlertBox.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const AlertBox = ({ title, message }) => {
  return (
    <div className="alert-box">
      <AiOutlineCheckCircle className="alert-box__icon alert-box__check-icon" />
      <div className="alert-box__details">
        <h4 className="alert-box__details__title">{title}</h4>
        <p className="alert-box__details__text">{message}</p>
      </div>
      <span className="alertbox-box__loader" style={{ width: "70%" }}></span>
      <CgClose className="alert-box__icon" />
    </div>
  );
};

export default AlertBox;
