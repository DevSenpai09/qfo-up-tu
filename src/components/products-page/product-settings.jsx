import Info from "../SettingsInfo";
import Options from "../Options";
import Button from "../Button";
import { useState } from "react";

const ProductSettings = () => {
  const [isShowSettings, setIsShowSettings] = useState(false);
  const options = [
    { option: "ID", drag: true },
    { option: "Brand", drag: false },
    { option: "IMEI/Serial", drag: false },
    { option: "Model", drag: false },
    { option: "Colour", drag: false },
    { option: "Supplier Name", drag: false },
    { option: "Shipping Date", drag: false },
    { option: "Price", drag: false },
    { option: "PO No", drag: false },
    { option: "Status", drag: false },
    { option: "Supplier Return Date", drag: false },
    { option: "Complaint Date", drag: false },
    { option: "Complaints", drag: false },
    { option: "Return Reason", drag: false },
    { option: "Customer Return Date", drag: false },
    { option: "Customer Name", drag: false },
    { option: "Cutomer Postcode", drag: false },
    { option: "Order ID", drag: false },
    { option: "Customer Tracking Number", drag: false },
    { option: "Channel", drag: false },
    { option: "Sold Date", drag: false },
    { option: "Sold Price", drag: false },
    { option: "Is Auction", drag: false },
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
