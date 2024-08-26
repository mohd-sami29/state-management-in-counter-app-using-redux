import React from "react";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center mt-32">
        <button
          onClick={(e) => dispatch({ type: "INCREMENT" })}
          className="p-2 font-semibold border border-gray-300 rounded bg-gray-200 hover:bg-green-400"
        >
          Increment
        </button>
        <Counter />
        <button
          onClick={(e) => dispatch({ type: "DECREMENT" })}
          className="p-2 font-semibold border border-gray-300 rounded bg-gray-200 hover:bg-red-400"
        >
          Decrement
        </button>
      </div>
    </>
  );
}
export default App;
