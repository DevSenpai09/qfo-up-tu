import "../../styles/settings.css";
import Button from "../Button";
import Info from "../SettingsInfo";
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
    <div className="settings">
      <Info />
      <p className="settings__visible">1 of 15 visible</p>
      <Options options={options} />
      <div className="settings__buttons">
        <Button text="cancel" />
        <Button text="save" primary />
      </div>
    </div>
  );
};

export default APSettings;
