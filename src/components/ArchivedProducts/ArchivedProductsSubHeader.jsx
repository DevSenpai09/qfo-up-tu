import { useState } from "react";
import ArchivedProductsFilter from "./ArchivedProductsFilter";
import ArchivedProductsItemsChecked from "./ArchivedProductsItemsChecked";
import ArchivedProductsSettings from "./ArchivedProductsSettings";

const ArchivedProductsSubHeader = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  return (
    <div>
      <div className="archived-products-sub-header">
        <p className="archived-products-sub-header__archived-count">
          All archived 10000
        </p>
        {/* Input */}
        <label className="archived-products-sub-header__search-input">
          <img src="/src/assets/search.svg" alt="Icon" />
          <input
            className="archived-products-sub-header__search-input__input"
            type="text"
            placeholder="Search by ID, IMEI, PO number"
          />
        </label>
        <div className="archived-products-sub-header__filter-and-settings">
          {/* FIlter */}
          <div className="archived-products-sub-header__filter-wrapper">
            <div
              className="archived-products-sub-header__filter"
              onClick={() => setIsFilter(!isFilter)}
            >
              <img src="/src/assets/filter.svg" alt="Icon" />
              <p className="archived-products-sub-header__filter__text">
                Filters
              </p>
            </div>
            {isFilter && <ArchivedProductsFilter />}
          </div>
          {/* Settings */}
          <div className="archived-products-sub-header__settings-wrapper">
            <div
              className="archived-products-sub-header__settings"
              onClick={() => setIsSettings(!isSettings)}
            >
              <img src="/src/assets/cog.svg" alt="Icon" />
            </div>
            {isSettings && <ArchivedProductsSettings />}
          </div>
        </div>
      </div>

      {/* Items Checked */}
      <ArchivedProductsItemsChecked />
    </div>
  );
};

export default ArchivedProductsSubHeader;
