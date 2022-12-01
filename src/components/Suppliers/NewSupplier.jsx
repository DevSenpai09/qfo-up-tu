import TextInput from "../inputs/text-input";
import NewSelectInput from "../inputs/new-select-input";
import RadioInput from "../inputs/radio-input";

const NewSupplier = () => {
  const ODM = ["Yes", "No"];
  return (
    <div className="new-supplier">
      <div className="new-supplier__form">
        <TextInput title="Name" placeholder="Name" />
        <TextInput title="Contact Name" placeholder="Contact Name" />
        <TextInput title="Email" placeholder="Email" />
        <TextInput title="Phone" placeholder="Phone" />
        <TextInput title="WeChat" placeholder="WeChat" />
        <NewSelectInput title="Category" placeholder="Category" />
        <TextInput title="Address" placeholder="Address" />
        <TextInput title="R&D Staff" placeholder="Select" />
        <RadioInput title="ODM" name="ODM" radioInputs={ODM} />
        <TextInput title="Sample Lead Time" placeholder="Sample Lead Time" />
      </div>
      <div className="new-supplier__settings">
        <h4 className="new-supplier__settings-title">Settings</h4>
        <div className="new-supplier__settings-inputs">
          <NewSelectInput title="Supplier Type" placeholder="Select" />
          <NewSelectInput title="Allow Currency" placeholder="Select" />
        </div>
      </div>
    </div>
  );
};

export default NewSupplier;
