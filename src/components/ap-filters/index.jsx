import "../../styles/ap-filters/index.css";
import { v4 as uuid } from "uuid";
import Button from "../Button";
import Date from "../FilterDate";
import Tags from "../Tag";
import { IoIosRemoveCircle } from "react-icons/io";

const APFilter = () => {
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
    <div className="ap-filter">
      {/* BASIC */}
      <div>
        <h4 className="ap-filter__section-title">basic</h4>
        <div className="ap-filter__tags-wrapper">
          {basicTags.map((tag) => (
            <Tags key={uuid()} text={tag.tag} active={tag.active} />
          ))}
        </div>
      </div>

      {/* ARCHIVED */}
      <div>
        <h4 className="ap-filter__section-title">archived</h4>
        <div className="ap-filter__tags-wrapper">
          {archivedTags.map((tag) => (
            <Tags key={uuid()} text={tag.tag} active={tag.active} />
          ))}
        </div>
      </div>

      {/* FILTER */}
      <div>
        <h4 className="ap-filter__section-title">filter</h4>
        <div className="ap-filter_sub-section">
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
      <div className="ap-filter__buttons-wrapper">
        <Button text="Cancel" secondary />
        <Button text="Apply Filters" primary />
      </div>
    </div>
  );
};

export default APFilter;
