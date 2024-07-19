import { createSignal } from "solid-js";
import "./Counter.css";
export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <section>
      <p> Number is: {count()} </p>
      <div>
        <button className="amber4" onClick={() => setCount(count() + 1)}>
          Increase
        </button>
        <button className="amber5" onClick={() => setCount(count() - 1)}>
          Decrease
        </button>
      </div>
    </section>
  );
}
