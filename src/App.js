import React, { useState, useEffect } from "react";

const App = () => {
  const [isActive, toggleActive] = useState(false);
  const [initialTime, setInitialTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setInitialTime((prev) => prev + 1);
      }, 1000);
    }
  }, [isActive]);
  return (
    <div>
      <h1>Timer: {initialTime}</h1>
      <button onClick={() => toggleActive(true)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button>Reset</button>
    </div>
  );
};

export default App;
