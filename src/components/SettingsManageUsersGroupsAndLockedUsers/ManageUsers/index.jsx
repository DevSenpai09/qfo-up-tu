import ManageUsersSubHeader from "./ManageUsersSubHeader";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import Pagination from "../../pagination";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  return (
    <div className="manage-users">
      <ManageUsersSubHeader />
      <ManageUsersTable />
      <Pagination />
    </div>
  );
};

export default ManageUsers;
