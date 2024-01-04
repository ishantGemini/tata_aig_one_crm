import { ReactElement } from "react";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/DashboardPage";
import Router from "./utils/Router";

function App(): ReactElement {
  return (
    <div>
      <Router />
      {/* <LoginPage />
      <DashboardPage /> */}
    </div>
  );
}

export default App;
