import CheckBox from "../../CheckBox";

const LockedusersTableHeader = () => {
  return (
    <div className="locked-users-table-row locked-users-table-header">
      <div className="locked-users-table-header__select">
        <CheckBox />
      </div>
      <div className="locked-users-table-header__data locked-users-table-row__data locked-users-table__name">
        Name
      </div>
      <div className="locked-users-table-header__data locked-users-table-row__data locked-users-table__email">
        Email
      </div>
      <div className="locked-users-table-header__data locked-users-table-row__data locked-users-table__reason">
        Locked Reason
      </div>
    </div>
  );
};

export default LockedusersTableHeader;
