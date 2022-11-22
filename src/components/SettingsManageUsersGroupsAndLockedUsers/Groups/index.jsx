import GroupsSubHeader from "./GroupsSubHeader";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/groups.css";
import GroupsTable from "./GroupsTable";
import Pagination from "../../pagination";

const Groups = () => {
  return (
    <div className="groups">
      <GroupsSubHeader />
      <GroupsTable />
      <Pagination />
    </div>
  );
};

export default Groups;
