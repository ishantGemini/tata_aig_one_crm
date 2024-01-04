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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from "react";
import { SiMicrosoftoffice } from "react-icons/si";
import { PublicClientApplication } from "@azure/msal-browser";
import { useMutation } from "react-query";
var Header = lazy(function () { return import("Shared/Header"); });
var CustomSharedButton = lazy(function () { return import("Shared/CustomSharedButton"); });
function App() {
    var _this = this;
    var authConfig = {
        auth: {
            clientId: "7f157b52-d2ea-4dfd-ba41-8b74fe614002",
            authority: "https://login.microsoftonline.com/a134d99a-b0eb-492f-af9d-ad88fe44fb5c",
            redirectUri: "/"
        }
    };
    var msalInstance = new PublicClientApplication(authConfig);
    var mutateMsalLogin = useMutation(function () { return msalInstance.loginPopup(); }, {
        onSuccess: function (response) {
            console.log("success res ", response);
        },
        onError: function () {
            console.log("error came");
        }
    }).mutate;
    var handleLogin = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, msalInstance.initialize()];
                case 1:
                    _a.sent();
                    mutateMsalLogin();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("error");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("div", { children: [_jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsx(Header, {}) })), _jsx("div", __assign({ className: "w-[50%]" }, { children: _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Button Loading..." }) }, { children: _jsx(CustomSharedButton, { classToOverride: "w-full flex border-gray-300 border-1.5", type: "button", ButtonIcon: SiMicrosoftoffice, onClick: function () { return handleLogin(); }, text: "Sign in with Microsoft" }) })) })), _jsx("p", __assign({ className: "text-blue-600" }, { children: "Tata Aig One Crm" }))] }));
}
export default App;
