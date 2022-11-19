import Info from "../SettingsInfo";
import Options from "../Options";
import Button from "../Button";
import { useState } from "react";

const ProductSettings = () => {
  const [isShowSettings, setIsShowSettings] = useState(false);
  const options = [
    "ID",
    "Brand",
    "IMEI/Serial",
    "Model",
    "Colour",
    "Supplier Name",
    "Shipping Date",
    "Price",
    "PO No",
    "Status",
    "Supplier Return Date",
    "Complaint Date",
    "Complaints",
    "Return Reason",
    "Customer Return Date",
    "Customer Name",
    "Cutomer Postcode",
    "Order ID",
    "Customer Tracking Number",
    "Channel",
    "Sold Date",
    "Sold Price",
    "Is Auction",
  ];
  return (
    <div className="settings">
      <img
        src="/src/assets/cog.svg"
        alt="Icon"
        onClick={() => setIsShowSettings(!isShowSettings)}
      />
      {isShowSettings && (
        <div className="settings-wrapper">
          <Info />
          <p className="settings__visible">1 of 22 visible</p>
          <Options options={options} />
          <div className="settings__buttons">
            <Button text="cancel" />
            <Button text="save" primary />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSettings;
