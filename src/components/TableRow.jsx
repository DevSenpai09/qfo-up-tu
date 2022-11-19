import "../styles/TableRow.css";
import CheckBox from "./CheckBox";

const TableRow = ({ children }) => {
  return (
    <div className="table-row">
      <CheckBox />
      <div className="table-row__row-info">{children}</div>
    </div>
  );
};

export default TableRow;
