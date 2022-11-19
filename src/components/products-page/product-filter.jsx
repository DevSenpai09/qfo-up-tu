import "../../styles/products-page/product-filter.css";
import { v4 as uuid } from "uuid";
import Button from "../Button";
import Date from "../FilterDate";
import Tags from "../Tag";
import { IoIosRemoveCircle } from "react-icons/io";
import { useState } from "react";
import SelectInput from "../select-input";

const ProductFilter = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const basicTags = [
    { tag: "ID", active: false },
    { tag: "IMEI/Serial", active: false },
    { tag: "Brand", active: false },
    { tag: "Model", active: false },
    { tag: "Colour", active: false },
    { tag: "Price", active: false },
    { tag: "PO No", active: false },
    { tag: "Supplier Name", active: true },
    { tag: "Supplier Return Date", active: true },
    { tag: "Status", active: true },
  ];

  const complaintsAndReturns = [
    { tag: "Complaint Date", active: false },
    { tag: "Complaints", active: false },
    { tag: "Return Reason", active: false },
    { tag: "Customer Returned Date", active: false },
  ];

  const sold = [
    { tag: "Customer Name", active: false },
    { tag: "Customer Postcode", active: false },
    { tag: "Order ID", active: false },
    { tag: "Sold Date", active: false },
    { tag: "Customer Tracking Number", active: false },
    { tag: "Channel", active: false },
    { tag: "Sold Price", active: false },
    { tag: "Is Auction", active: true },
  ];

  return (
    <div className="product-filter">
      <div
        className="product-filter__toggle"
        onClick={() => setIsShowFilter(!isShowFilter)}
      >
        <img src="/src/assets/filter.svg" alt="" />
        <p className="product-filter__text">Filters</p>
      </div>

      {isShowFilter && (
        <div className="product-filter-wrapper">
          <div className="product-filter__sections">
            {/* BASIC */}
            <div>
              <h4 className="product-filter__section-title">basic</h4>
              <div className="product-filter__tags-wrapper">
                {basicTags.map((tag) => (
                  <Tags key={uuid()} text={tag.tag} active={tag.active} />
                ))}
              </div>
            </div>

            {/* Compliants & Return */}
            <div>
              <h4 className="product-filter__section-title">
                Complaints & Return
              </h4>
              <div className="product-filter__tags-wrapper">
                {complaintsAndReturns.map((tag) => (
                  <Tags key={uuid()} text={tag.tag} active={tag.active} />
                ))}
              </div>
            </div>

            {/* Sold */}
            <div>
              <h4 className="product-filter__section-title">Sold</h4>
              <div className="product-filter__tags-wrapper">
                {sold.map((tag) => (
                  <Tags key={uuid()} text={tag.tag} active={tag.active} />
                ))}
              </div>
            </div>

            {/* FILTER */}
            <div>
              <h4 className="product-filter__section-title">filter</h4>
              <div className="product-filter_sub-sections">
                <div className="product-filter_sub-section">
                  <div className="sub-section__header">
                    <h5 className="sub-section__header__title">ID</h5>
                    <IoIosRemoveCircle className="sub-section__header__icon" />
                  </div>
                  <div className="sub-section__dates-wrapper">
                    <Date title="from" />
                    <Date title="to" />
                  </div>
                </div>
                <div className="product-filter_sub-section">
                  <div className="sub-section__header">
                    <h5 className="sub-section__header__title">Status</h5>
                    <IoIosRemoveCircle className="sub-section__header__icon" />
                  </div>
                  <div className="sub-section__dates-wrapper">
                    <SelectInput placeholder="Select Status" />
                  </div>
                </div>
                <div className="product-filter_sub-section">
                  <div className="sub-section__header">
                    <h5 className="sub-section__header__title">
                      Archived Date
                    </h5>
                    <IoIosRemoveCircle className="sub-section__header__icon" />
                  </div>
                  <div className="sub-section__dates-wrapper">
                    <Date title="from" />
                    <Date title="to" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="product-filter__buttons-wrapper">
            <Button text="Cancel" secondary />
            <Button text="Apply Filters" primary />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
