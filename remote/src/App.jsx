import { render } from "solid-js/web";

import "./index.css";
import Counter from "./Counter";

const App = () => (
  <main class=' flex flex-col  justify-center items-center'> 
    <div class="mt-10 text-3xl   flex flex-col gap-6">
    <h2 class=' font-bold text-white'> remote</h2>
    <h3 class=' font-bold text-white'>Framework: solid-js</h3>
    <Counter />
  </div>
  </main>
  
);
render(App, document.getElementById("app"));
