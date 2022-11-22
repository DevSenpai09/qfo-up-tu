import GroupsTableContent from "./GroupsTableContent";
import GroupsTableHeader from "./GroupsTableHeader";

const GroupsTable = () => {
  return (
    <div className="groups-table">
      <GroupsTableHeader />
      <GroupsTableContent />
    </div>
  );
};

export default GroupsTable;
