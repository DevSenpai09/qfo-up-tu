import CheckBox from "../CheckBox";
import "../../styles/ap-table/TableHeader.css";

const TableHeader = () => {
  return (
    <header className="table-header">
      <CheckBox />
      <div className="table-header__data table__id">ID</div>
      <div className="table-header__data table__brand">Brand</div>
      <div className="table-header__data table__model">Model</div>
      <div className="table-header__data table__colour">Colour</div>
      <div className="table-header__data table__serial">IMEI/Serial</div>
      <div className="table-header__data table__po">PO No.</div>
      <div className="table-header__data table__status">Status</div>
      <div className="table-header__data table__archived-reason">
        Archived Reason
      </div>
      <div className="table-header__data table-header__archived-date">
        Archived Date
      </div>
    </header>
  );
};

export default TableHeader;
