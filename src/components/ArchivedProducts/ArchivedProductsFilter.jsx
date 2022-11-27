import Button from "../Button";
import Date from "../FilterDate";
import Tags from "../Tag";
import { IoIosRemoveCircle } from "react-icons/io";

const ArchivedProductsFilter = () => {
  const basicTags = [
    { tag: "ID", active: false },
    { tag: "Brand", active: false },
    { tag: "Model", active: false },
    { tag: "IMEI/Serial", active: false },
    { tag: "PO No", active: false },
    { tag: "Status", active: true },
    { tag: "Colour", active: false },
  ];

  const archivedTags = [
    { tag: "Archived Reason", active: false },
    { tag: "Archived Date", active: true },
  ];
  return (
    <div className="archived-products-filter">
      {/* BASIC */}
      <div>
        <h4 className="archived-products-filter__section-title">basic</h4>
        <div className="archived-products-filter__tags-wrapper">
          {basicTags.map((tag) => (
            <Tags key={Math.random()} text={tag.tag} active={tag.active} />
          ))}
        </div>
      </div>

      {/* ARCHIVED */}
      <div>
        <h4 className="archived-products-filter__section-title">archived</h4>
        <div className="archived-products-filter__tags-wrapper">
          {archivedTags.map((tag) => (
            <Tags key={Math.random()} text={tag.tag} active={tag.active} />
          ))}
        </div>
      </div>

      {/* FILTER */}
      <div>
        <h4 className="archived-products-filter__section-title">filter</h4>
        <div className="archived-products-filter_sub-section">
          <div className="sub-section__header">
            <h5 className="sub-section__header__title">Archived Date</h5>
            <IoIosRemoveCircle className="sub-section__header__icon" />
          </div>
          <div className="sub-section__dates-wrapper">
            <Date title="from" />
            <Date title="to" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="archived-products-filter__buttons-wrapper">
        <Button text="Cancel" secondary />
        <Button text="Apply Filters" primary />
      </div>
    </div>
  );
};

export default ArchivedProductsFilter;
