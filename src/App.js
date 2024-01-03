var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from "react";
import "./App.css";
var Header = lazy(function () { return import("Shared/Header"); });
function App() {
    return (_jsxs("div", { children: [_jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsx(Header, {}) })), _jsx("p", __assign({ className: "text-blue-600" }, { children: "Tata Aig One Crm" }))] }));
}
export default App;
