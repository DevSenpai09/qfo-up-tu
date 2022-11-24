import ManageUsersPermissionsToggle from "./ManageUsersPermissionsToggle";

const ManageUsersPermissionsUserPermission = ({ dropDownPermissions }) => {
  return (
    <div className="manage-users-permissions-user-permission">
      <div className="manage-users-permissions-user-permission__icons">
        {/* <img src="/src/assets/downarrow.svg" alt="Icon" /> */}
        <img src="/src/assets/uparrow.svg" alt="Icon" />
      </div>
      <p className="manage-users-permissions-user-permission__text">
        Categories
      </p>
      <ManageUsersPermissionsToggle />
      <div className="manage-users-permissions-user-permission__dropDown">
        {dropDownPermissions &&
          dropDownPermissions.map((permission) => permission.permission)}
      </div>
    </div>
  );
};

export default ManageUsersPermissionsUserPermission;
