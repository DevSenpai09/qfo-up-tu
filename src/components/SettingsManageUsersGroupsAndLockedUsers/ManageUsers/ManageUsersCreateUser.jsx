import TextInput from "../../inputs/text-input";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import NewSelectInput from "../../inputs/new-select-input";
import Button from "../../Button";
import PasswordInput from "../../inputs/PasswordInput";

const ManageUsersCreateUser = ({ isCreateUser, setIsCreateUser }) => {
  return (
    <div className="manage-users-create-user">
      <form action="" className="manage-users-create-user__form">
        <div className="manage-users-create-user__form__header">
          <h4 className="manage-users-create-user__form__title">Create User</h4>
          <img
            src="/src/assets/close.svg"
            alt="Icon"
            onClick={() => setIsCreateUser(!isCreateUser)}
            className="manage-users-create-user__form__close"
          />
        </div>
        <TextInput placeholder="Name" title="Name" id="user_name" />
        <TextInput placeholder="Email" title="Email" id="user_email" />
        <PasswordInput title="Password" placeholder="Password" />
        <NewSelectInput placeholder="Select Role" title="Role" />
        <NewSelectInput placeholder="Select Group" title="Group" />
        <Button text="Save" primary />
      </form>
    </div>
  );
};

export default ManageUsersCreateUser;
