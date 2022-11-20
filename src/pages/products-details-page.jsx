import { useState } from "react";
import ProductsDetailsGeneral from "../components/products-details-page.jsx/products-details-general";
import ProductsDetailsSideNav from "../components/products-details-page.jsx/products-details-side-nav";
import ProdcutsDetailsSoldHistory from "../components/products-details-page.jsx/products-details-sold-history";
import ProductsDeatilsSubHeader from "../components/products-details-page.jsx/products-details-sub-header";
import "../styles/products-details-page/index.css";

const ProductsDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState("sold");
  const [isShow, setIsShow] = useState(false);

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
        <ProductsDetailsSideNav setCurrentPage={setCurrentPage} />
        <div>
          <ProductsDetailsGeneral
            currentPage={currentPage}
            isShow={isShow}
            setIsShow={setIsShow}
          />
          {currentPage === "sold" && isShow && <ProdcutsDetailsSoldHistory />}
        </div>
      </div>
    </main>
  );
};

export default ProductsDetailsPage;
