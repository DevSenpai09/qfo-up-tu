import AlertBox from "./components/AlertBox";
import APFilter from "./components/ap-filters";
import Date from "./components/ap-filters/Date";
import Tags from "./components/ap-filters/Tag";
import APSettings from "./components/ap-settings";
import Info from "./components/ap-settings/Info";
import Options from "./components/ap-settings/Options";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Notifications from "./components/notifications";
import NotificationItem from "./components/notifications/notificationItem";
import ToolTip from "./components/ToolTip";
import NotificationsHeader from "./components/notifications/NotificationsHeader";

function App() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "left",
        justifyItems: "left",
        gap: "30px",
      }}
    >
      <h1>Components</h1>
      <CheckBox />
      <Info />
      <Options />
      <Button text="primary" primary />
      <Button text="neutral" />
      <Button text="secondary" secondary />
      <APSettings />
      <ToolTip />
      <AlertBox />
      <Tags text="Inactive" />
      <Tags text="active" active />
      <Date title="From" />
      <APFilter />
      <NotificationsHeader />
      <NotificationItem />
      <Notifications />
    </div>
  );
}

export default App;
