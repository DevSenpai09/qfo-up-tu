import ArchivedProductsSubHeader from "../components/ArchivedProducts/ArchivedProductsSubHeader";
import "../styles/archived-products.css";
import Pagination from "../components/pagination";
import ArchivedProductsTable from "../components/ArchivedProducts/ArchivedProductsTable";

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
