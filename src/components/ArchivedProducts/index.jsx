import ArchivedProductsSubHeader from "./ArchivedProductsSubHeader";
import "../../styles/archived-products.css";
import Pagination from "../pagination";
import ArchivedProductsTable from "./ArchivedProductsTable";

const ArchivedProducts = () => {
  return (
    <div className="archived-products">
      <ArchivedProductsSubHeader />
      <ArchivedProductsTable />
      <Pagination />
    </div>
  );
};

export default ArchivedProducts;
