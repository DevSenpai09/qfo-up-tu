import ArchivedProductsTableContent from "./ArchivedProductsTableContent";
import ArchivedProductsTableHeader from "./ArchivedProductsTableHeader";

const ArchivedProductsTable = () => {
  return (
    <div className="archived-products-table">
      <ArchivedProductsTableHeader />
      <ArchivedProductsTableContent />
    </div>
  );
};

export default ArchivedProductsTable;
