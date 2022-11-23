import LockedUsersTableContent from "./LockedUsersTableContent";
import LockedusersTableHeader from "./LockedUsersTableHeader";

const LockedUsersTable = () => {
  return (
    <div className="locked-users-table">
      <LockedusersTableHeader />
      <LockedUsersTableContent />
    </div>
  );
};

export default LockedUsersTable;
