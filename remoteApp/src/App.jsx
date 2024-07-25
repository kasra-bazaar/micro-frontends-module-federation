import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Counter from "./Counter";
const App = () => (
  <main class=" flex flex-col  justify-center items-center">
    <div class="mt-10 text-3xl   flex flex-col gap-6">
      <h2 class=" font-bold text-white"> remote</h2>
      <h3 class=" font-bold text-white">Framework: React</h3>
      <Counter />
    </div>
  </main>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
