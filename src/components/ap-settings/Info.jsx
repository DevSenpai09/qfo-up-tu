import "../../styles/ap-settings/Info.css";
import { RiErrorWarningLine } from "react-icons/ri";

const Info = () => {
  return (
    <div className="info">
      <RiErrorWarningLine className="info__icon" />
      <div className="info__details">
        <h4 className="info__details__title">
          Please select columns you need and drag to adjust column order.{" "}
        </h4>
        <p className="info__details__text">
          The selected column will be displayed according to the column order
          from top to bottom and left to right
        </p>
      </div>
    </div>
  );
};

export default Info;
