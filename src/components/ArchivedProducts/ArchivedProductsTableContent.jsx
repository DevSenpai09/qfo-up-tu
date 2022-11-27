import ArchivedProductsTableRow from "./ArchivedProductsTableRow";
import productsTable from "../../api/products-table";

const ArchivedProductsTableContent = () => {
  return (
    <div className="archived-products-table-content">
      {productsTable.map((row) => (
        <ArchivedProductsTableRow>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__id`}
          >
            {row.id}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__brand`}
          >
            {row.brand}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__model`}
          >
            {row.model}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__colour`}
          >
            {row.colour}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__price`}
          >
            {row.price}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__po`}
          >
            {row.po}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__serial`}
          >
            {row.serial}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__status`}
          >
            {row.status}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__sold-date`}
          >
            {row.soldDate}
          </div>
          <div
            className={`archived-products-table-content__table-row__data archived-products-table__return-date`}
          >
            {row.returnDate}
          </div>
        </ArchivedProductsTableRow>
      ))}
    </div>
  );
};

export default ArchivedProductsTableContent;
