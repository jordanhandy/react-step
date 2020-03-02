import React, { useState } from "react";

function App() {
  // State vars
  const [count, setCount] = useState(0);

  // Inrease function
  function increase() {
    setCount(count + 1);
  }

  //Decrease function
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
