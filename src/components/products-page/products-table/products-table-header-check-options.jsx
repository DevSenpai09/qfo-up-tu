import "../../../styles/TableHeader.css";

const ProductsTableHeaderCheckOptions = () => {
  return (
    <div className="table-header-check-options">
      <div className="table-header-check-option">Select all on this page</div>
      <div className="table-header-check-option">Select all</div>
      <div className="table-header-check-option">Deselect all</div>
    </div>
  );
};

export default ProductsTableHeaderCheckOptions;
