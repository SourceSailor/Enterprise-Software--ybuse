import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar";
import Notifications from "../components/Notifications/Notifications";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <header>
          <Topbar />
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      <Notifications />
    </div>
  );
};

export default DashboardLayout;
