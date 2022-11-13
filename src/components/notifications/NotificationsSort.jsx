import "../../styles/notifications/NotificationsSort.css";
import { v4 as uuid } from "uuid";
import { TbArrowsDownUp } from "react-icons/tb";
import { useState } from "react";

const NotificationSort = () => {
  const [isModal, setIsModal] = useState(false);
  const sortOptions = [
    { option: "Thread name A to Z", active: false },
    { option: "Thread name Z to A", active: false },
    { option: "Thread created at ASC", active: true },
    { option: "Thread created at DESC", active: false },
  ];
  return (
    <div className="notification-sort">
      <TbArrowsDownUp onClick={() => setIsModal(!isModal)} />
      {isModal && (
        <div className="notification-sort__modal">
          {sortOptions.map((option) => (
            <span
              key={uuid()}
              className={`notification-sort__modal__option ${
                option.active && "notification-sort__modal__option--active"
              }`}
            >
              {option.option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationSort;
