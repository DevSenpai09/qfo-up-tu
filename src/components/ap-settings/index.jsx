import "../../styles/ap-settings/index.css";
import Button from "../Button";
import Info from "./Info";
import Options from "./Options";

const APSettings = () => {
  return (
    <div className="ap-settings">
      <Info />
      <p className="ap-settings__visible">1 of 15 visible</p>
      <Options />
      <div className="ap-settings__buttons">
        <Button text="cancel" />
        <Button text="save" primary />
      </div>
    </div>
  );
};

export default APSettings;
