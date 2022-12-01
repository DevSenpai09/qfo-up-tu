import suppliersTable from "../../api/suppliers-table";
import CheckBox from "../CheckBox";

const SuppliersTableContent = () => {
  return (
    <div className="suppliers-table-content">
      {suppliersTable.map((row) => (
        <div className="suppliers-table-row">
          <CheckBox />
          <div className="suppliers-table-row__row-info">
            <div className="suppliers-table-content__table-row__data suppliers-table__name">
              {row.name}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__contractName">
              {row.contractName}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__email">
              {row.email}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__phone">
              {row.phone}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__wechat">
              {row.wechat}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__category">
              {row.category}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__addressess">
              {row.addressess}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__ODM">
              {row.ODM}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__address">
              {row.address}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__sampleLeadTime">
              {row.sampleLeadTime}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__supplierReturnDate">
              {row.supplierReturnDate}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__supplierType">
              {row.supplierType}
            </div>
            <div className="suppliers-table-content__table-row__data suppliers-table__allowCurrency">
              {row.allowCurrency}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuppliersTableContent;
