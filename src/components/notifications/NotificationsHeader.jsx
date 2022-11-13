import { v4 as uuid } from "uuid";
import "../../styles/notifications/NotificationsHeader.css";
import NotificationsSort from "./NotificationsSort";

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
      <NotificationsSort />
    </div>
  );
};

export default NotificationsHeader;
