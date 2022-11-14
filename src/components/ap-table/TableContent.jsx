import "../../styles/ap-table/TableContent.css";
import { v4 as uuid } from "uuid";
import table from "./table";
import TableRow from "./TableRow";

const TableContent = () => {
  return (
    <div className="table-content">
      {table.map((row) => (
        <TableRow key={uuid()}>
          <div className="table-content__table-row__data table__id">
            {row.id}
          </div>
          <div className="table-content__table-row__data table__brand">
            {row.brand}
          </div>
          <div className="table-content__table-row__data table__model">
            {row.model}
          </div>
          <div className="table-content__table-row__data table__colour">
            {row.colour}
          </div>
          <div className="table-content__table-row__data table__serial">
            {row.serial}
          </div>
          <div className="table-content__table-row__data table__po">
            {row.po}
          </div>
          <div className="table-content__table-row__data table__status">
            {row.status}
          </div>
          <div className="table-content__table-row__data table__archived-reason">
            {row.archivedReason}
          </div>
          <div className="table-content__table-row__data table__archived-date">
            {row.archivedDate}
          </div>
        </TableRow>
      ))}
    </div>
  );
};

export default TableContent;
