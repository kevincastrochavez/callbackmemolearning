import React, { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //  without using useMemo
  const doubleNumber = slowFunction(number);

  //  using useMemo for expensive computation or referential equality
  //  Every time state changes, we need to re-render the component. When it gets to this point, it will run the function if the value is exactly the same as last time.
  //   const doubleNumber = useMemo(() => {
  //     return slowFunction(number);
  //   }, [number]);

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

      <div style={theme}>{doubleNumber}</div>
    </div>
  );
}

export default Memo;

function slowFunction(number) {
  for (let index = 0; index < 1000000000; index++) {}

  return number * 2;
}
