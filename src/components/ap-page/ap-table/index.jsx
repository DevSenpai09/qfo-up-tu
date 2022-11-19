import "../../../styles/ap-page/ap-table/index.css";
import TableHeader from "./apTableHeader";
// import TableContent from "../../product-page/products-table/products-table-content";
import apTable from "../../../api/ap-table";

const APTable = () => {
  return (
    <div className="ap-table">
      <TableHeader />
      <TableContent table={apTable} />
    </div>
  );
};

export default APTable;
