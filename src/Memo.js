import React, { useState } from "react";

function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = slowFunction(number);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <div style={theme}></div>
    </div>
  );
}

export default Memo;

function slowFunction(number) {
  console.log("Slow function being called...");

  for (let index = 0; index < 10; index++) {}

  return number * 2;
}
