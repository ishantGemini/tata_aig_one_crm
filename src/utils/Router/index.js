import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable import/no-unresolved */
import { useRoutes } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
var Router = function () {
    var routes = [
        {
            path: "/",
            element: _jsx(LoginPage, {})
        },
        {
            path: "/dashboard",
            element: _jsx(DashboardPage, {})
        }
    ];
    var element = useRoutes(routes);
    return element;
};
export default Router;
