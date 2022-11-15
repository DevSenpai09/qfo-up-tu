import "../../styles/ap-settings/index.css";
import Button from "../Button";
import Info from "./Info";
import Options from "../Options";

const APSettings = () => {
  const options = [
    "ID",
    "Brand",
    "Model",
    "Colour",
    "IMEI/Serial",
    "PO No",
    "Status",
    "Archived Reason",
    "Archived Date",
  ];
  return (
    <div className="ap-settings">
      <Info />
      <p className="ap-settings__visible">1 of 15 visible</p>
      <Options options={options} />
      <div className="ap-settings__buttons">
        <Button text="cancel" />
        <Button text="save" primary />
      </div>
    </div>
  );
};

export default APSettings;
