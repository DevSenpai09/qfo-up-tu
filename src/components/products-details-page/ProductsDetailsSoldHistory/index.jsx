import { useState } from "react";
import "../../../styles/products-details-page/products-details-sold-history.css";
import ProductsDetailsTableSoldHistoryContent from "./products-details-sold-history-table-content";
import ProductsDetailsSoldHistoryTableHeader from "./products-details-table-sold-history-header";
import ProductsDetailsNoData from "../ProductsDetailsNoData";

const ProdcutsDetailsSoldHistory = () => {
  const [isData] = useState(false);
  return (
    <div className="products-details-sold-history">
      <h4 className="products-details-sub-sections__title">Sold History</h4>
      <div className="products-details-sold-history-table">
        <ProductsDetailsSoldHistoryTableHeader />
        {isData && <ProductsDetailsTableSoldHistoryContent />}
      </div>
      {!isData && <ProductsDetailsNoData />}
    </div>
  );
};

export default ProdcutsDetailsSoldHistory;
