import Button from "../Button";
import Options from "../Options";
import Info from "../SettingsInfo";

const ArchivedProductsSettings = () => {
  const options = [
    { option: "ID" },
    { option: "Brand" },
    { option: "Model" },
    { option: "Colour" },
    { option: "IMEI/Serial" },
    { option: "PO No" },
    { option: "Status" },
    { option: "Archived Reason" },
    { option: "Archived Date" },
  ];
  return (
    <div className="archived-products-settings">
      <Info />
      <p className="archived-products-settings__visible">1 of 15 visible</p>
      <Options options={options} />
      <div className="archived-products-settings__buttons">
        <Button text="cancel" />
        <Button text="save" primary />
      </div>
    </div>
  );
};

export default ArchivedProductsSettings;
