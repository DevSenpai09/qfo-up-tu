import "../../styles/settings.css";
import Button from "../Button";
import Info from "../SettingsInfo";
import Options from "../Options";

const ProductsSettings = () => {
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
    <div className="settings" style={{ maxWidth: "790px" }}>
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

export default ProductsSettings;
