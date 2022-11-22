import Button from "../../Button";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import ManageUsersCreateUser from "./ManageUsersCreateUser";
import { useState } from "react";

const ManageUsersSubHeader = () => {
  const [isCreateUser, setIsCreateUser] = useState(false);
  return (
    <div className="manage-user-sub-header">
      <label className="manage-user-sub-header__input-wrapper">
        <img
          src="/src/assets/search.svg"
          alt="Icon"
          className="manage-user-sub-header__input-icon"
        />
        <input
          type="text"
          placeholder="Search by name, email, role, group"
          className="manage-user-sub-header__input"
        />
      </label>

      <div onClick={() => setIsCreateUser(!isCreateUser)}>
        <Button text="+ New User" primary />
      </div>
      {isCreateUser && (
        <ManageUsersCreateUser
          isCreateUser={isCreateUser}
          setIsCreateUser={setIsCreateUser}
        />
      )}
    </div>
  );
};

export default ManageUsersSubHeader;
