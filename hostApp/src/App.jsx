import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Counter = React.lazy(() => import("remoteApp/Counter"));
const App = () => (
  <main className=" flex flex-col  justify-center items-center">
    <div className="mt-10 text-3xl   flex flex-col gap-6">
      <h2 className=" font-bold text-white"> Host</h2>
      <h3 className=" font-bold text-white">Framework: React</h3>
      <React.Suspense fallback="Loading...">
        <Counter />
      </React.Suspense>
    </div>
  </main>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
