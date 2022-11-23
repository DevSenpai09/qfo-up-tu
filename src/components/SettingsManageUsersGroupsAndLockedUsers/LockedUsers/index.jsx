import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/locked-users.css";
import LockedUsersSubHeader from "./LockedUsersSubHeader";
import LockedUsersTable from "./LockedUsersTable";
import Pagination from "../../pagination";

const LockedUsers = () => {
  return (
    <div className="locked-users">
      <LockedUsersSubHeader />
      <LockedUsersTable />
      <Pagination />
    </div>
  );
};

export default LockedUsers;
