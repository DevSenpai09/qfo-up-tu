import Button from "../../Button";
import Tag from "../../Tag";

const ManageUsersPermissionsLeftSide = () => {
  const users = [
    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "Group 1",
    },
  ];
  return (
    <div className="manage-users-permissions-left-side">
      {/* Header */}
      <div className="manage-users-permissions-left-side__header">
        <img src="/src/assets/arrow-left-back.svg" alt="Icon" />
        <h2 className="manage-users-permissions-left-side__header__title">
          Manage Users
        </h2>
        <Button text="+ New User" primary />
        <label className="manange-users-permissions-left-side__header__input-wrapper">
          <img
            src="/src/assets/search.svg"
            alt="Icon"
            className="manange-users-permissions-left-side__header__input-icon"
          />
          <input
            type="text"
            placeholder="Search by name, email, role, group"
            className="manange-users-permissions-left-side__header__input"
          />
        </label>
      </div>
      {/* End Header */}

      {/* List */}
      <div className="manage-users-permissions-left-side__users-list">
        {users.map((user) => (
          <div className="manage-users-permissions-left-side__user manage-users-permissions-left-side__user--active">
            <div className="manage-users-permissions-left-side__user__name-and-tag">
              <h4 className="manage-users-permissions-left-side__user__name">
                {user.name}
              </h4>
              <Tag text="Staff" active />
            </div>
            <div className="manage-users-permissions-left-side__user__other-details">
              <p className="manage-users-permissions-left-side__user__email">
                {user.email}
              </p>
              <p className="manage-users-permissions-left-side__user__group">
                {user.group}
              </p>
              <div className="manage-users-permissions-left-side__user__icons">
                <img src="/src/assets/edit.svg" alt="Icon" />
                <img src="/src/assets/bin.svg" alt="Icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End List */}
    </div>
  );
};

export default ManageUsersPermissionsLeftSide;
