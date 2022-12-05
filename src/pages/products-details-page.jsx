import { useState } from "react";
import ProductsDetailsGeneral from "../components/products-details-page/products-details-general";
import ProductsDetailsSideNav from "../components/products-details-page/products-details-side-nav";
import ProdcutsDetailsSoldHistory from "../components/products-details-page/ProductsDetailsSoldHistory";
import ProductsDeatilsSubHeader from "../components/products-details-page/products-details-sub-header";
import "../styles/products-details-page/index.css";
import ProductsDetailsAuditTrail from "../components/products-details-page/ProductsDetailsAuditTrail";
import Tags from "../components/Tag";
import ProductsDetailsComments from "../components/products-details-page/ProductsDetailsComments";

const ProductsDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState("sold_history");
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
        <ProductsDetailsSideNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="products-details-page__sub-sections">
          <div className="products-details-page__sub-sections-header">
            <div className="products-details-page__sub-sections-header__details">
              <Tags text="Shipped" active />
              <p className="products-details-page__sub-sections-header__product-id">
                #148527
              </p>
              <p className="products-details-page__sub-sections-header__product-imei">
                354860095332325
              </p>
            </div>
            <div
              className="products-details-page__sub-sections-header__icons"
              onClick={() => setIsShow(!isShow)}
            >
              {!isShow ? (
                <img src="/src/assets/downarrow.svg" alt="Icon" />
              ) : (
                <img src="/src/assets/uparrow.svg" alt="Icon" />
              )}
            </div>
          </div>
          {isShow && (
            <div className="products-details-page__sub-sections__main">
              {currentPage === "general" && <ProductsDetailsGeneral />}
              {currentPage === "sold_history" && <ProdcutsDetailsSoldHistory />}
              {currentPage === "audit_trail" && <ProductsDetailsAuditTrail />}
              {currentPage === "comments" && <ProductsDetailsComments />}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsDetailsPage;
