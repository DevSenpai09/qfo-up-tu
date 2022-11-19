import CheckBox from "../../CheckBox";
import "../../../styles/TableHeader.css";

const TableHeader = () => {
  return (
    <header className="table-header">
      <CheckBox />
      <div className="table-header__data table__id">ID</div>
      <div className="table-header__data table__brand">Brand</div>
      <div className="table-header__data table__model">Model</div>
      <div className="table-header__data table__colour">Colour</div>
      <div className="table-header__data table__price">Price</div>
      <div className="table-header__data table__po">PO No.</div>
      <div className="table-header__data table__serial">IMEI/Serial</div>
      <div className="table-header__data table__status">Status</div>
      <div className="table-header__data table__sold-date">Sold Date</div>
      <div className="table-header__data table__return-date">
        Supplier Return Date
      </div>
    </header>
  );
};

export default TableHeader;
