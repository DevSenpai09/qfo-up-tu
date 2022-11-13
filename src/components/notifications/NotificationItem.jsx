import "../../styles/notifications/notificationItem.css";
import { BsFillCircleFill } from "react-icons/bs";
import { IoIosRemoveCircle } from "react-icons/io";
import userImg from "/src/assets/userimg.jpg";

const NotificationItem = ({ active, unread, remove }) => {
  return (
    <div
      className={`notification-item ${active && "notification-item--active"}`}
    >
      {/* Header */}
      <div className="notification-item__header">
        <h4 className="notification-item__thread-name">Thread Name</h4>
        <span className="notification-item__date">Sep 19, 2002 08:00AM</span>
      </div>

      {/* Content */}
      <div className="notification-item__content">
        <img
          src={userImg}
          alt="Image"
          className="notification-item__content__image"
        />
        <div className="notification-item__details">
          <h5 className="notification-item__details__name">John Doe</h5>
          <p className="notification-item__details__message">
            @Eva_Wang Please check this file
          </p>
          <span className="notification-item__details__time">
            20 Minutes ago
          </span>
        </div>
        <div>
          {unread && (
            <BsFillCircleFill className="notification-item__dot-icon" />
          )}
          {remove && (
            <IoIosRemoveCircle className="notification-item__remove-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
