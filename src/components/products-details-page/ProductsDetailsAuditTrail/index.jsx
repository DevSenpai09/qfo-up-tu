import { useState } from "react";
import "../../../styles/products-details-page/products-details-audit-trail.css";
import ProductsDetailsNoData from "../ProductsDetailsNoData";
import ProductsDetailsAuditTrailTableContent from "./ProductsDetailsAuditTrailTableContent";
import ProductsDetailsAudtTrailTableHeader from "./ProductsDetailsAudtTrailTableHeader";

const ProductsDetailsAuditTrail = () => {
  const [isData] = useState(false);
  return (
    <div className="products-details-audit-trail">
      <h4 className="products-details-sub-sections__title">Audit Trail</h4>
      <div className="products-details-audit-trail-table">
        <ProductsDetailsAudtTrailTableHeader />
        {isData && <ProductsDetailsAuditTrailTableContent />}
      </div>
      {!isData && <ProductsDetailsNoData />}
    </div>
  );
};

export default ProductsDetailsAuditTrail;
