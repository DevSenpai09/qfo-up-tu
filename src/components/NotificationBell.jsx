import { CgBell } from "react-icons/cg";
import "../styles/NotificationBell.css";
import ToolTip from "./ToolTip";

const NotificationBell = () => {
  return (
    <div className="std-notification-bell">
      <div className="notification-bell">
        <CgBell className="notification-bell__icon" />
        <span className="notification-bell__number">6</span>
      </div>
      <ToolTip unread={6} className="std-notification-bell__tool-tip" />
    </div>
  );
};

export default NotificationBell;
