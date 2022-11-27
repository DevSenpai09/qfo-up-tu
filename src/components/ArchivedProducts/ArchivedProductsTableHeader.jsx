import CheckBox from "../CheckBox";

const ArchivedProductsTableHeader = () => {
  return (
    <div className="archived-products-table-header">
      <div className="archived-products-table-header__checkbox-wrapper">
        <CheckBox />
        <img
          className="archived-products-table-header__downarrow"
          src="/src/assets/downarrow.svg"
          alt="icon"
        />
      </div>
      <div className="archived-products-table-header__data archived-products-table__id">
        ID
      </div>
      <div className="archived-products-table-header__data archived-products-table__brand">
        Brand
      </div>
      <div className="archived-products-table-header__data archived-products-table__model">
        Model
      </div>
      <div className="archived-products-table-header__data archived-products-table__colour">
        Colour
      </div>
      <div className="archived-products-table-header__data archived-products-table__serial">
        IMEI/Serial
      </div>
      <div className="archived-products-table-header__data archived-products-table__po">
        PO No.
      </div>
      <div className="archived-products-table-header__data archived-products-table__status">
        Status
      </div>
      <div className="archived-products-table-header__data archived-products-table__archived-reason">
        Archived Reason
      </div>
      <div className="table-header__data table-header__archived-date">
        Archived Date
      </div>
    </div>
  );
};

export default ArchivedProductsTableHeader;
