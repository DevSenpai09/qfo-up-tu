import CheckBox from "../CheckBox";

const ArchivedProductsTableRow = ({ children }) => {
  return (
    <div className="archived-products-table-row">
      <CheckBox />
      <div className="archived-products-table-row__row-info">{children}</div>
    </div>
  );
};

export default ArchivedProductsTableRow;
