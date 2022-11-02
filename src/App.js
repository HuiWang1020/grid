import React, { useState } from "react";
import Cell from "./components/Cell";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid">
      Count: {count}
      <div></div>
      <Cell name="cell1" count={count} setCount={setCount} />
      <Cell name="cell2" count={count} setCount={setCount} />
      <Cell name="cell3" count={count} setCount={setCount} />
      <Cell name="cell4" count={count} setCount={setCount} />
    </div>
  );
}
