import Button from "../Button";
import SelectInput from "../select-input";

const SuppliersSubHeader = ({ isNewSupplier, setIsNewSupplier }) => {
  return (
    <div className="suppliers-sub-header">
      {isNewSupplier && (
        <div className="suppliers-sub-header__left">
          <label className="suppliers-sub-header__input-wrapper">
            <img
              src="/src/assets/search.svg"
              alt="Icon"
              className="suppliers-sub-header__input-icon"
            />
            <input
              type="text"
              placeholder="Search by supplier name, contact name, email, phone..."
              className="suppliers-sub-header__input"
            />
          </label>
          <SelectInput placeholder="Select Category" />
          <img src="/src/assets/cog.svg" alt="Icon" />
        </div>
      )}
      {isNewSupplier && <Button text="+ New Supplier" primary />}
      {!isNewSupplier && (
        <div className="suppliers__save-btn">
          <Button text="save" primary />
        </div>
      )}
    </div>
  );
};

export default SuppliersSubHeader;
