import React, { useState, useEffect } from 'react';
import TimerComponent from './TimerComponent';
function ExampleComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setCount((prevVal) => prevVal + 1);
      });
  }, []);

  return (
    <div>
      {data ? data.title : 'Loading...'}
      <br />
      ApiCalledCount {count}
      <h3>
        <button onClick={() => setIsDisplay(!isDisplay)}>
          {isDisplay ? 'Hide Timer' : 'Show Timer'}
        </button>
        {isDisplay && <TimerComponent />}
      </h3>
    </div>
  );
}

export default ExampleComponent;
