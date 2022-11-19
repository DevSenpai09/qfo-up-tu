import "../styles/new-product-page/index.css";

import PriceInput from "../components/new-product-page/inputs/price-input";
import NumberInput from "../components/new-product-page/inputs/number-input";
import RadioInput from "../components/new-product-page/inputs/radio-input";
import TextInput from "../components/new-product-page/inputs/text-input";
import SubHeader from "../components/new-product-page/sub-header";
import NewSelectInput from "../components/new-product-page/inputs/new-select-input";

const NewProductPage = () => {
  const deviceTypes = ["Mobile Phone", "Others"];
  return (
    <main
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        gap: "24px",
      }}
    >
      <SubHeader />
      <div className="new-product-form">
        <div className="new-product__details-inputs">
          <RadioInput
            title="Device Type*"
            name="device_type"
            radioInputs={deviceTypes}
          />
          <NewSelectInput id="brand" title="Brand*" placeholder="Select" />
          <NewSelectInput id="model" title="Model*" placeholder="Select" />
          <TextInput id="imei" title="IMEI/Serial*" placeholder="IMEI" />
          <NewSelectInput id="color" title="Color*" placeholder="Select" />
          <TextInput id="status" title="Status*" placeholder="Shipped" />
          <TextInput id="po" title="PO No*" placeholder="PO -" />
          <PriceInput id="price" title="Price*" />
        </div>

        {/* IMEI Duplicates */}
        <div className="imei-duplicates">
          <h4 className="imei-duplicates__title">IMEI Duplicates</h4>
          <div className="imei-duplicates__number">
            <NumberInput
              id="duplicate_qty"
              title="Duplicate Qty*"
              placeholder="0"
            />
          </div>
          <div className="imei-duplicates__inputs">
            <TextInput
              id="imei-duplicate1"
              title="IMEI/Serial Duplicate*"
              placeholder="IMEI"
            />
            <TextInput
              id="imei-duplicate2"
              title="IMEI/Serial Duplicate*"
              placeholder="IMEI"
            />
            <TextInput
              id="imei-duplicate3"
              title="IMEI/Serial Duplicate*"
              placeholder="IMEI"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewProductPage;
