import TextInput from "../../inputs/text-input";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import Button from "../../Button";

const GroupsCreateGroup = ({ isCreateGroup, setIsCreateGroup }) => {
  return (
    <div className="groups-create-user">
      <form action="" className="groups-create-user__form">
        <div className="groups-create-user__form__header">
          <h4 className="groups-create-user__form__title">Create Group</h4>
          <img
            src="/src/assets/close.svg"
            alt="Icon"
            onClick={() => setIsCreateGroup(!isCreateGroup)}
            className="groups-create-user__form__close"
          />
        </div>
        <TextInput placeholder="Group" title="Group" id="group" />
        <Button text="Save" primary />
      </form>
    </div>
  );
};

export default GroupsCreateGroup;
