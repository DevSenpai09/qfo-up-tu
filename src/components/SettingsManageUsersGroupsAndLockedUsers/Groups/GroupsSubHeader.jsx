import Button from "../../Button";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/groups.css";
// import ManageUsersCreateUser from "./ManageUsersCreateUser";
import { useState } from "react";
import GroupsCreateGroup from "./GroupsCreateGroup";

const GroupsSubHeader = () => {
  const [isCreateGroup, setIsCreateGroup] = useState(false);

  return (
    <div className="groups-sub-header">
      <label className="groups-sub-header__input-wrapper">
        <img
          src="/src/assets/search.svg"
          alt="Icon"
          className="groups-sub-header__input-icon"
        />
        <input
          type="text"
          placeholder="Search by name, email, role, group"
          className="groups-sub-header__input"
        />
      </label>

      <div onClick={() => setIsCreateGroup(!isCreateGroup)}>
        <Button text="+ New User" primary />
      </div>
      {isCreateGroup && (
        <GroupsCreateGroup
          isCreateGroup={isCreateGroup}
          setIsCreateGroup={setIsCreateGroup}
        />
      )}
    </div>
  );
};

export default GroupsSubHeader;
