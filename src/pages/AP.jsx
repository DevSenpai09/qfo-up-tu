import AlertBox from "../components/AlertBox";
import APFilter from "../components/ap-filters";
import Date from "../components/ap-filters/Date";
import Tags from "../components/ap-filters/Tag";
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

const AP = () => {
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
          message="2 products unarchived successfully"
        />
        <Tags text="Inactive" />
        <Tags text="active" active />
        <Date title="From" />
        <APFilter />
        <NotificationsHeader />
        <NotificationItem />
        <Notifications />
        <APTable />
      </div>
    </>
  );
};

export default AP;
