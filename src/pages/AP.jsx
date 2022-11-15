import AlertBox from "../components/AlertBox";
import APFilter from "../components/ap-filters";
import Date from "../components/FilterDate";
import Tags from "../components/Tag";
import APSettings from "../components/ap-settings";
import Info from "../components/SettingsInfo";
import Options from "../components/Options";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Notifications from "../components/notifications";
import NotificationItem from "../components/notifications/notificationItem";
import ToolTip from "../components/ToolTip";
import NotificationsHeader from "../components/notifications/NotificationsHeader";
import APTable from "../components/ap-table";
import NotificationBell from "../components/notificationBell";
import DropDown from "../components/drop-down";
import SelectInput from "../components/select-input";

const AP = () => {
  const options = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
    "Brand 8",
    "Brand 9",
    "Brand 10",
  ];

  return (
    <>
      <h1>Ap Components</h1>
      <div
        style={{
          display: "grid",
          justifyContent: "left",
          justifyItems: "left",
          gap: "30px",
        }}
      >
        <CheckBox />
        <Info />
        <Options />
        <Button text="primary" primary />
        <Button text="neutral" />
        <Button text="secondary" secondary />
        <APSettings />
        <ToolTip />
        <AlertBox
          title="Unarchived successfully!"
          message="3 Products have been changed to Status “Waiting test” successfully!"
        />
        <Tags text="Inactive" />
        <Tags text="active" active />
        <Date title="From" />
        <APFilter />
        <NotificationsHeader />
        <NotificationItem />
        <Notifications />
        <APTable />
        <NotificationBell />
        <SelectInput placeholder="Select Brand" />
        <DropDown options={options} />
      </div>
    </>
  );
};

export default AP;
