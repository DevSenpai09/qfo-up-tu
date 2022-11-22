import Button from "../../Button";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";

const ManageUsersSubHeader = () => {
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

      <Button text="+ New User" primary />
    </div>
  );
};

export default ManageUsersSubHeader;
