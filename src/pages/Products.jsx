import Pagination from "../components/pagination";
import ProductPageTable from "../components/products-page/products-table/product-page-table";
import SubHeader from "../components/products-page/sub-header";

const ProductPage1 = () => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        gap: "24px",
      }}
    >
      <SubHeader />
      <ProductPageTable />
      <Pagination />
    </main>
  );
};

export default ProductPage1;
