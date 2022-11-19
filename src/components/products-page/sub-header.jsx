import Button from "../Button";
import "../../styles/products-page/products-sub-header.css";
import ProductFilter from "./product-filter";
import ProductSettings from "./product-settings";
import ProductArchive from "./product-archive";

const SubHeader = () => {
  return (
    <div className="sub-header">
      {/* Sub Header Left */}
      <div className="sub-header__left">
        <p className="sub-header__products-number">All Products 10000</p>
        <label className="sub-header__search">
          <img
            className="sub-header__search-icon"
            src="/src/assets/icon.svg"
            alt="Icon"
          />
          <input
            className="sub-header__search-input"
            type="text"
            placeholder="Search by IMEI, PO number..."
          />
        </label>

        <div className="sub-header__filter-and-settings">
          <ProductFilter />
          <ProductSettings />
        </div>
      </div>

      {/* Sub Header Right */}
      <div className="sub-header__right">
        <Button text="New Product" primary />
      </div>

      {/* Applied Filters */}
      <div className="sub-header__applied-filters">
        <h4 className="sub-header__applied-filters__title">Applied filters:</h4>
        <div className="sub-header__applied-filters__keywords">
          <p className="sub-header__applied-filters__keywords-title">
            Keyword:
          </p>
          <div className="sub-header__applied-filters__keyword">
            Martin <img src="/src/assets/filter-cancel.svg" alt="Icon" />
          </div>
          <div className="sub-header__applied-filters__keyword">
            Martin <img src="/src/assets/filter-cancel.svg" alt="Icon" />
          </div>
        </div>

        <Button text="Clear All" />
      </div>
      {/* End Applied Fillters */}

      {/* Items Checked */}
      <div className="items-checked">
        <p className="items-checked__text">1 items checked</p>
        <div className="items-checked__options">
          <ProductArchive />
          <div className="items-checked__option">
            <img src="/src/assets/export.svg" alt="Icon" /> Export
          </div>
        </div>
      </div>
      {/* End Items Checked */}
    </div>
  );
};

export default SubHeader;
