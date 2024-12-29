import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./Layouts/DashboardLayout";
import OverviewPage from "./pages/navigation/OverviewPage";
import CustomersPage from "./pages/navigation/CustomersPage";
import LoansPage from "./pages/navigation/LoansPage";
import IntegrationsPage from "./pages/navigation/IntegrationsPage";
import WorkflowsPage from "./pages/navigation/WorkflowsPage";

function App() {
  return (
    <>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="loans" element={<LoansPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="workflows" element={<WorkflowsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
