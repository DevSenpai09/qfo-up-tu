import ManageUsersPermissionsRightSide from "./ManageUsersPermissionsRightSide";
import ManageUsersPermissionsLeftSide from "./ManageUsersPermissionsLeftSide";

const ManageUsersPermissions = () => {
  return (
    <div className="manage-users-permissions">
      <ManageUsersPermissionsLeftSide />
      <ManageUsersPermissionsRightSide />
    </div>
  );
};

export default ManageUsersPermissions;
