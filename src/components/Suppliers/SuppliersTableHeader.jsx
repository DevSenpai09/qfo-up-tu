import CheckBox from "../CheckBox";

const SuppliersTableHeader = () => {
  return (
    <div className="suppliers-table-header">
      <div className="suppliers-table-header__checkbox-wrapper">
        <CheckBox />
        <img
          className="suppliers-table-header__downarrow"
          src="/src/assets/downarrow.svg"
          alt="icon"
        />
      </div>
      <div className="suppliers-table-header__data suppliers-table__name">
        Name
      </div>
      <div className="suppliers-table-header__data suppliers-table__contract-name">
        Contract Name
      </div>
      <div className="suppliers-table-header__data suppliers-table__email">
        Email
      </div>
      <div className="suppliers-table-header__data suppliers-table__phone">
        Phone
      </div>
      <div className="suppliers-table-header__data suppliers-table__wechat">
        WeChat
      </div>
      <div className="suppliers-table-header__data suppliers-table__category">
        Category
      </div>
      <div className="suppliers-table-header__data suppliers-table__addressess">
        Addressess
      </div>
      <div className="suppliers-table-header__data suppliers-table__ODM">
        ODM
      </div>
      <div className="suppliers-table-header__data suppliers-table__address-date">
        Ardress
      </div>
      <div className="suppliers-table-header__data suppliers-table__sample-lead-time">
        Sample Lead Time
      </div>
      <div className="suppliers-table-header__data suppliers-table__supplier-return-date">
        Supplier Return Date
      </div>
      <div className="suppliers-table-header__data suppliers-table__supplierType">
        SUpplier Type
      </div>
      <div className="suppliers-table-header__data suppliers-table__allow-currency">
        Allow Currency
      </div>
    </div>
  );
};

export default SuppliersTableHeader;
