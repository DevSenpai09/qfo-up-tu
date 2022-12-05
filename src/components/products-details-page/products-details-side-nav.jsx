import "../../styles/products-details-page/products-details-side-nav.css";

const ProductsDetailsSideNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="products-details-side-nav">
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "general" && "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("general")}
      >
        General
      </div>
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "sold_history" &&
          "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("sold_history")}
      >
        Sold History
      </div>
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "returned_history" &&
          "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("returned_history")}
      >
        Returned History
      </div>
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "comments" && "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("comments")}
      >
        Comments
      </div>
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "audit_trail" &&
          "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("audit_trail")}
      >
        Audit Trail
      </div>
      <div
        className={`products-details-side-nav__cta ${
          currentPage === "threads" && "products-details-side-nav__cta--active"
        }`}
        onClick={() => setCurrentPage("threads")}
      >
        Threads
      </div>
    </div>
  );
};

export default ProductsDetailsSideNav;
