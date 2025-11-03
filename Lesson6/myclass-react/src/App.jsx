import { useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const reset = () => setData(0);
  const increment = () => {
    setData((prevData) => prevData + 1);
  };
  const startIncrement = () => {
    if (!intervalId) {
      const id = setInterval(increment, 1000);
      setIntervalId(id);
    }
  };

  const stopIncrement = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  return (
    <>
      <h1 id="num">{data}</h1>
      <button onClick={startIncrement}>Start</button>
      <button onClick={stopIncrement}>Stop</button>
      <button onClick={reset}>Reset Button</button>
    </>
  );
}

export default App;
