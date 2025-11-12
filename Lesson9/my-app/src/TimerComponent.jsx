import React, { useEffect, useState } from 'react';

function TimerComponent() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    // Cleanup Function to clear the timer
    return () => {
      console.log('ComponentWillUnmount');
      clearInterval(interval);
    };
  }, []); // Empty dependency array: effect runs once, and cleanup occurs when the component unmounts
  return <div>{time} second have passed</div>;
}

export default TimerComponent;
