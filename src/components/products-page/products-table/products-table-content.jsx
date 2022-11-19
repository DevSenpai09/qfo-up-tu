import "../../../styles/TableContent.css";
import { v4 as uuid } from "uuid";
import TableRow from "../../TableRow";
import productsTable from "../../../api/products-table";

const TableContent = () => {
  return (
    <div className="table-content">
      {productsTable.map((row) => (
        <TableRow key={uuid()}>
          <div className={`table-content__table-row__data table__id`}>
            {row.id}
          </div>
          <div className={`table-content__table-row__data table__brand`}>
            {row.brand}
          </div>
          <div className={`table-content__table-row__data table__model`}>
            {row.model}
          </div>
          <div className={`table-content__table-row__data table__colour`}>
            {row.colour}
          </div>
          <div className={`table-content__table-row__data table__price`}>
            {row.price}
          </div>
          <div className={`table-content__table-row__data table__po`}>
            {row.po}
          </div>
          <div className={`table-content__table-row__data table__serial`}>
            {row.serial}
          </div>
          <div className={`table-content__table-row__data table__status`}>
            {row.status}
          </div>
          <div className={`table-content__table-row__data table__sold-date`}>
            {row.soldDate}
          </div>
          <div className={`table-content__table-row__data table__return-date`}>
            {row.returnDate}
          </div>
        </TableRow>
      ))}
    </div>
  );
};

export default TableContent;
