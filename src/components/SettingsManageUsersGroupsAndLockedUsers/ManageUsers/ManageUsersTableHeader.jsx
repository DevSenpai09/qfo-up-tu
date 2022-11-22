import CheckBox from "../../CheckBox";

const ManageUsersTableHeader = () => {
  const headers = [
    { header: "Name" },
    { header: "Email" },
    { header: "Role" },
    { header: "Groups" },
  ];
  return (
    <div className="manage-users-table-row manage-users-table-header">
      <div className="manage-users-table-header__select">
        <CheckBox />
      </div>
      {headers.map((header) => (
        <div
          key={header.header}
          className="manage-users-table-header__data manage-users-table-row__data"
        >
          {header.header}
        </div>
      ))}
    </div>
  );
};

export default ManageUsersTableHeader;
