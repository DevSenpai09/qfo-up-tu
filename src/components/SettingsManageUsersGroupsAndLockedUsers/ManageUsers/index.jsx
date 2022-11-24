import ManageUsersSubHeader from "./ManageUsersSubHeader";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import Pagination from "../../pagination";
import ManageUsersTable from "./ManageUsersTable";
import ManageUsersPermissions from "./ManageUsersPermissions";

const ManageUsers = () => {
  return (
    <div className="manage-users">
      <ManageUsersSubHeader />
      {/* <ManageUsersTable /> */}
      <ManageUsersPermissions />
      <Pagination />
    </div>
  );
};

export default ManageUsers;
