import "../../../styles/products-page/products-table.css";
import TableHeader from "./products-table-header";
import TableContent from "./products-table-content";

const ProductPageTable = () => {
  return (
    <div className="products-table">
      <TableHeader />
      <TableContent />
    </div>
  );
};

export default ProductPageTable;
