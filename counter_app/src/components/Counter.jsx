import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state);
  return (
    <>
      <div className="p-2 font-semibold">{count}</div>
    </>
  );
}
export default Counter;
