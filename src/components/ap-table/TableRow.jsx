import "../../styles/ap-table/TableRow.css";
import CheckBox from "../CheckBox";

const TableColumn = ({ children }) => {
  return (
    <div className="table-row">
      <CheckBox />
      <div className="table-row__row-data">{children}</div>
    </div>
  );
};

export default TableColumn;

//   <p className="table-column__table-content">1234</p>
//   <p className="table-column__table-content">Pad</p>
//   <p className="table-column__table-content">iPhone 13 Pro</p>
//   <p className="table-column__table-content">White</p>
//   <p className="table-column__table-content">356731101641520</p>
//   <p className="table-column__table-content">001300</p>
//   <p className="table-column__table-content">Shipped</p>
//   <p className="table-column__table-content">
//     I want to archive this because I think xxxx
//   </p>
//   <p className="table-column__table-content">20/08/2022</p>
