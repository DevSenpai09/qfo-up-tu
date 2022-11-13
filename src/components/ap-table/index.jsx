import "../../styles/ap-table/index.css";
import { v4 as uuid } from "uuid";
import table from "./table";
import TableRow from "./TableRow";

const APTable = () => {
  return (
    <div className="ap-table">
      <TableRow>
        {table.headers.map((item) => (
          <h4 key={uuid()} className="table-row__table-header__data">
            {item}
          </h4>
        ))}
      </TableRow>
      <div className="table-row__table-content-wrapper">
        {table.content.map((row) => (
          <TableRow key={uuid()}>
            {Object.values(row).map((data) => (
              <p key={uuid()} className="table-row__table-content__data">
                {data}
              </p>
            ))}
          </TableRow>
        ))}
      </div>
    </div>
  );
};

export default APTable;
