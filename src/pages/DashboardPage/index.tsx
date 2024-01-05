/* eslint-disable import/no-unresolved */
import { Suspense, lazy } from "react";
import Dashboard from "../../components/Dashboard";

const SideNav = lazy(() => import("Shared/SideNav"));

function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SideNav name="Tata AIG" />
      </Suspense>
      <div className="pl-32">
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
