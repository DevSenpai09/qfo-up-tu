import { useState } from "react";
import "../../../styles/products-details-page/products-details-comments.css";
import ProductsDetailsNoData from "../ProductsDetailsNoData";
import ProductsDetailsCommentsTableContent from "./ProductsDetailsCommentsTableContent";
import ProductsDetailsCommentsTableHeader from "./ProductsDetailsCommentsTableHeader";

const ProductsDetailsComments = () => {
  const [isData] = useState(true);
  return (
    <div className="products-details-comments">
      <h4 className="products-details-sub-sections__title">Comments</h4>
      <div className="products-details-comments-table">
        <ProductsDetailsCommentsTableHeader />
        {isData && <ProductsDetailsCommentsTableContent />}
      </div>
      {!isData && <ProductsDetailsNoData />}
    </div>
  );
};

export default ProductsDetailsComments;
