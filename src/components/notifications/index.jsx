import "../../styles/notifications/index.css";
import NotificationItem from "./notificationItem";
import NotificationsHeader from "./NotificationsHeader";

const Notifications = () => {
  return (
    <div className="notifications">
      <NotificationsHeader />
      <NotificationItem unread />
      <NotificationItem unread />
      <NotificationItem unread />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem active remove />
    </div>
  );
};

export default Notifications;
