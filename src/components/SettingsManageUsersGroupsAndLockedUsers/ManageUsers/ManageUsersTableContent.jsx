import CheckBox from "../../CheckBox";

const ManageUsersTableContent = () => {
  const users = [
    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      role: "Supplier",
      group: "",
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
    <div>
      {users.map((user) => (
        <div key={Math.random()} className="manage-users-table-content__row">
          <div className="manage-users-table-row">
            <CheckBox />
            <div className="manage-users-table-row__data manage-users-table-row-content__data">
              {user.name}
            </div>
            <div className="manage-users-table-row__data manage-users-table-row-content__data">
              {user.email}
            </div>
            <div className="manage-users-table-row__data manage-users-table-row-content__data">
              {user.role}
            </div>
            <div className="manage-users-table-row__data manage-users-table-row-content__data">
              {user.group !== "" ? user.group : "-"}
            </div>
          </div>
          <div className="manage-users-table-content__icons">
            <img src="/src/assets/green-right-arrow.svg" alt="Icons" />
            <img src="/src/assets/edit.svg" alt="Icons" />
            <img src="/src/assets/bin.svg" alt="Icons" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageUsersTableContent;
