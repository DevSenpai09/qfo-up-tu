import PriceInput from "../inputs/price-input";
import RadioInput from "../inputs/radio-input";
import TextInput from "../inputs/text-input";
import NewSelectInput from "../inputs/new-select-input";
import "../../styles/products-details-page/products-details-general.css";

const ProductsDetailsGeneral = () => {
  const deviceTypes = ["Mobile Phone", "Others"];
  return (
    <div className="products-details-page__general">
      <div className="products-details-page__general-form">
        <img
          src="/src/assets/copy.svg"
          alt="Icon"
          className="products-details-page__general-form__copy"
        />
        <div className="products-details-page__general-inputs">
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
      </div>
    </div>
  );
};

export default ProductsDetailsGeneral;
