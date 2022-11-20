import ProductsDetailsGeneral from "../components/products-details-page.jsx/products-details-general";
import ProductsDetailsSideNav from "../components/products-details-page.jsx/products-details-side-nav";
import ProductsDeatilsSubHeader from "../components/products-details-page.jsx/products-details-sub-header";
import "../styles/products-details-page/index.css";

const ProductsDetailsPage = () => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gap: "24px",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <ProductsDeatilsSubHeader />
      <div className="products-details-page__content">
        <ProductsDetailsSideNav />
        <ProductsDetailsGeneral />
      </div>
    </main>
  );
};

export default ProductsDetailsPage;
