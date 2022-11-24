import Button from "../../Button";
import NewSelectInput from "../../inputs/new-select-input";
import ManageUsersPermissionsNav from "./ManageUsersPermissionsNav";
import ManageUsersPermissionsToggle from "./ManageUsersPermissionsToggle";
import ManageUsersPermissionsUserPermission from "./ManageUsersPermissionsUserPermission";

const ManageUsersPermissionsRightSide = () => {
  const subSchema = [
    { permission: <ManageUsersPermissionsUserPermission /> },
    { permission: <ManageUsersPermissionsUserPermission /> },
    { permission: <ManageUsersPermissionsUserPermission /> },
    { permission: <ManageUsersPermissionsUserPermission /> },
    { permission: <ManageUsersPermissionsUserPermission /> },
  ];
  const schema = [
    { permission: <ManageUsersPermissionsUserPermission /> },
    {
      permission: (
        <ManageUsersPermissionsUserPermission dropDownPermissions={subSchema} />
      ),
    },
  ];
  return (
    <div className="manage-users-permissions-right-side">
      <div className="manage-users-permissions-right-side__header">
        <h4 className="manage-users-permissions-right-side__header__email">
          eva.wang@gmail.com
        </h4>
        <div className="manage-users-permissions-right-side__header__close-icon">
          <img src="/src/assets/close.svg" alt="icon" />
        </div>
        <NewSelectInput title="Group" placeholder="Select" />
      </div>
      <div className="manage-users-permissions-right-side__permissions">
        <h5 className="manage-users-permissions-right-side__permissions__title">
          Permissions
        </h5>
        <ManageUsersPermissionsNav />
        <div className="manage-users-permissions-right-side__permissions__nav-permission">
          <h4 className="manage-users-permissions-right-side__permissions__nav-title">
            Purchase
          </h4>
          <ManageUsersPermissionsToggle />
        </div>
        <div className="manage-users-permissions-user-permissions-wrapper">
          <div className="manage-users-permissions-user-permissions-wrapper__sub-wrapper">
            <ManageUsersPermissionsUserPermission
              dropDownPermissions={schema}
            />
          </div>
        </div>
      </div>
      <div className="manage-users-permissions-right-side__btns">
        <Button text="Cancel" secondary />
        <Button text="Save" primary />
      </div>
    </div>
  );
};

export default ManageUsersPermissionsRightSide;
