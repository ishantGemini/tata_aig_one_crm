/* eslint-disable import/no-unresolved */
import { RouteObject, useRoutes } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    }
  ];
  const element = useRoutes(routes);
  return element;
};

export default Router;
