import { useState } from "react";
import 'tailwindcss/tailwind.css'
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className=" flex flex-col gap-4">
      <p className=" text-white font-bold"> Number is: {count} </p>
      <div className=" flex justify-center gap-5">
        <button
          className=" p-4 rounded-lg  text-2xl font-bold flex text-white bg-amber-400"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className=" p-4 rounded-lg  text-2xl font-bold flex text-white bg-amber-500"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </section>
  );
}
