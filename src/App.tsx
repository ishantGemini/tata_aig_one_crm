/* eslint-disable import/no-unresolved */
import { lazy, Suspense, ReactElement } from "react";
import { SiMicrosoftoffice } from "react-icons/si";
import { PublicClientApplication } from "@azure/msal-browser";
import { useMutation } from "react-query";
import "./App.css";

const Header = lazy(() => import("Shared/Header"));
const CustomSharedButton = lazy(() => import("Shared/CustomSharedButton"));

function App(): ReactElement {
  const authConfig = {
    auth: {
      clientId: "7f157b52-d2ea-4dfd-ba41-8b74fe614002",
      authority: `https://login.microsoftonline.com/a134d99a-b0eb-492f-af9d-ad88fe44fb5c`,
      redirectUri: "/"
    }
  };
  const msalInstance = new PublicClientApplication(authConfig);

  const { mutate: mutateMsalLogin } = useMutation(() => msalInstance.loginPopup(), {
    onSuccess: (response) => {
      console.log("success res ", response);
    },
    onError: () => {
      console.log("error came");
    }
  });

  const handleLogin = async () => {
    try {
      await msalInstance.initialize();
      mutateMsalLogin();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="w-[50%]">
        <Suspense fallback={<div>Button Loading...</div>}>
          <CustomSharedButton
            classToOverride="w-full flex border-gray-300 border-1.5"
            type="button"
            ButtonIcon={SiMicrosoftoffice}
            onClick={() => handleLogin()}
            text="Sign in with Microsoft"
          />
        </Suspense>
      </div>
      <p className="text-blue-600">Tata Aig One Crm</p>
    </div>
  );
}

export default App;
