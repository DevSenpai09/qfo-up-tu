import { CgBell } from "react-icons/cg";
import "../styles/NotificationBell.css";

const NotificationBell = () => {
  return (
    <div className="notification-bell">
      <CgBell className="notification-bell__icon" />
      <span className="notification-bell__number">6</span>
    </div>
  );
};

export default NotificationBell;
