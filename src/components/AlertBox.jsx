import "../styles/AlertBox.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const AlertBox = () => {
  return (
    <div className="alert-box">
      <AiOutlineCheckCircle className="alert-box__icon alert-box__check-icon" />
      <div className="alert-box__details">
        <h4 className="alert-box__details__title">Unarchived successfully!</h4>
        <p className="alert-box__details__text">
          2 products unarchived successfully
        </p>
      </div>
      <CgClose className="alert-box__icon" />
    </div>
  );
};

export default AlertBox;
