import { v4 as uuid } from "uuid";
import "../../styles/notifications/NotificationsHeader.css";

const NotificationsHeader = () => {
  const headerOptions = [
    { option: "All", active: false },
    { option: "Mentions", active: false },
    { option: "My Open", active: true },
  ];
  return (
    <div className="notifications-header">
      {headerOptions.map((option) => (
        <span
          key={uuid()}
          className={`notification-header__option ${
            option.active && "notification-header__option--active"
          }`}
        >
          {option.option}
        </span>
      ))}
    </div>
  );
};

export default NotificationsHeader;
