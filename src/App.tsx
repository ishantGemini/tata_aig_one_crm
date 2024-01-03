/* eslint-disable import/no-unresolved */
import { lazy, Suspense, ReactElement } from "react";
import "./App.css";

const Header = lazy(() => import("Shared/Header"));

function App(): ReactElement {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <p className="text-blue-600">Tata Aig One Crm</p>
    </div>
  );
}

export default App;
