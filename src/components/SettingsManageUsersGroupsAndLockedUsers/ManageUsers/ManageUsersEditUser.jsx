import TextInput from "../../inputs/text-input";
import "../../../styles/SettingsManageUsersGroupsAndLockedUsers/manage-users.css";
import NewSelectInput from "../../inputs/new-select-input";
import Button from "../../Button";
import PasswordInput from "../../inputs/PasswordInput";

const ManageUsersEditUser = ({ isEdit, setIsEdit }) => {
  return (
    <div className="manage-users-edit-user">
      <form action="" className="manage-users-edit-user__form">
        <div className="manage-users-edit-user__form__header">
          <h4 className="manage-users-edit-user__form__title">Edit User</h4>
          <img
            src="/src/assets/close.svg"
            alt="Icon"
            onClick={() => setIsEdit(!isEdit)}
            className="manage-users-edit-user__form__close"
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

export default ManageUsersEditUser;
