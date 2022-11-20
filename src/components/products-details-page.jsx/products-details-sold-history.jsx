import { useState } from "react";
import "../../styles/products-details-page/products-details-sold-history.css";
import ProductsDetailsTable from "./products-details-table";
import ProductsDetailsTableSoldHistoryContent from "./products-details-table/products-details-sold-history-table-content";
import ProductsDetailsSoldHistoryTableHeader from "./products-details-table/products-details-table-sold-history-header";

const ProdcutsDetailsSoldHistory = () => {
  const [isData] = useState(false);
  return (
    <div className="products-details-sold-history">
      <h4 className="products-details-sold-history__title">Sold History</h4>
      {isData ? (
        <ProductsDetailsTable>
          <ProductsDetailsSoldHistoryTableHeader />
          <ProductsDetailsTableSoldHistoryContent />
          <ProductsDetailsTableSoldHistoryContent />
        </ProductsDetailsTable>
      ) : (
        <div className="products-details-no-data">
          <img
            src="/src/assets/no-data.svg"
            alt="Image"
            className="products-details-sold-history__no-data-img"
          />
          <p className="products-details-sold-history__no-data-text">
            No data found
          </p>
        </div>
      )}
    </div>
  );
};

export default ProdcutsDetailsSoldHistory;
