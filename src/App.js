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
    } else if (!isActive && initialTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, initialTime]);

  const handleReset = () => {
    toggleActive(false);
    setInitialTime(0);
  };

  return (
    <div>
      <h1>Timer: {initialTime}</h1>
      <button onClick={() => toggleActive((prev) => !prev)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
