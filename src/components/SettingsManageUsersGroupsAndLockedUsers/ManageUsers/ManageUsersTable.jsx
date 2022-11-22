import ManageUsersTableContent from "./ManageUsersTableContent";
import ManageUsersTableHeader from "./ManageUsersTableHeader";

const ManageUsersTable = () => {
  return (
    <div className="manage-users-table">
      <ManageUsersTableHeader />
      <ManageUsersTableContent />
    </div>
  );
};

export default ManageUsersTable;
