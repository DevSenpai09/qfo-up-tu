import "../../styles/products-details-page/products-details-side-nav.css";

const ProductsDetailsSideNav = () => {
  return (
    <div className="products-details-side-nav">
      <div className="products-details-side-nav__cta products-details-side-nav__cta--active">
        General
      </div>
      <div className="products-details-side-nav__cta">Sold History</div>
      <div className="products-details-side-nav__cta">Returned History</div>
      <div className="products-details-side-nav__cta">Comments</div>
      <div className="products-details-side-nav__cta">Audit Trail</div>
      <div className="products-details-side-nav__cta">Threads</div>
    </div>
  );
};

export default ProductsDetailsSideNav;
