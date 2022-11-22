import CheckBox from "../../CheckBox";

const GroupsTableHeader = () => {
  return (
    <div className="groups-table-header groups-table-row">
      <div className="groups-table-header__select">
        <CheckBox />
      </div>
      <div className="groups-table-header__data groups-table-row__data">
        Group
      </div>
    </div>
  );
};

export default GroupsTableHeader;
