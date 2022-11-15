import "../styles/AlertBox.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const AlertBox = ({ title, message }) => {
  const CloseButton = ({ closeToast }) => (
    <CgClose className="alert-box__icon" onClick={closeToast} />
  );

  const notify = () =>
    toast(
      <div className="alert-box__details">
        <h4 className="alert-box__details__title">{title}</h4>
        <p className="alert-box__details__text">{message}</p>
      </div>,
      {
        icon: (
          <AiOutlineCheckCircle className="alert-box__icon alert-box__check-icon" />
        ),
      }
    );
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer closeButton={CloseButton} />
    </div>
  );
};

export default AlertBox;
