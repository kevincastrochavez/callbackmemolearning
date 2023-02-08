import React, { useCallback, useState } from "react";
import List from "./List";

function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useCallback is a hook that allows to use a function as a callback. It returns the function that was passed in.
  // useMemo is a hook that allows to use a function as a cache. It stores the result of the function in the cache.

  // WITHOUT USING THE HOOK
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  // USING THE HOOK
  // Use it when you want to perform expensive operations
  //   const getItems = useCallback(() => {
  //     return [number, number + 1, number + 2];
  //   }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <List getItems={getItems} />
    </div>
  );
}

export default Callback;
