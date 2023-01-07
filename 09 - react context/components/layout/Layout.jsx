import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{children}</main>

      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Layout;
