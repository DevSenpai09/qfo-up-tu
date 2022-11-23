import CheckBox from "../../CheckBox";
import LockedUsersUnlockUser from "./LockedUsersUnlockUser";

const LockedUsersTableContent = () => {
  const lockedUsers = [
    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },

    {
      name: "Eva Wang",
      email: "eva.wang@gmail.com",
      reason:
        "Audit failed on 20/09/2022 because of missing devices: 123456789012345, 123456789012345, 123456789012345",
    },
  ];
  return (
    <div>
      {lockedUsers.map((lockedUser) => (
        <div key={Math.random()} className="locked-users-table-content__row">
          <div className="locked-users-table-row">
            <CheckBox />
            <div className="locked-users-table-row__data locked-users-table-row-content__data locked-users-table__name">
              {lockedUser.name}
            </div>
            <div className="locked-users-table-row__data locked-users-table-row-content__data locked-users-table__email">
              {lockedUser.email}
            </div>
            <div className="locked-users-table-row__data locked-users-table-row-content__data locked-users-table__reason">
              {lockedUser.reason}
            </div>
          </div>
          <div className="locked-users-table-content__icons">
            <LockedUsersUnlockUser />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LockedUsersTableContent;
