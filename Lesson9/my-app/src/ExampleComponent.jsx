import React, { useState, useEffect, useContext } from 'react';
import TimerComponent from './TimerComponent';
import { AppContext } from './App';
function ApiFetchComponent() {
  const [state, dispatch] = useContext(AppContext);
  const [count, setCount] = useState(1);
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    fetchApi();
  }, [count]);
  const fetchApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SETTITLE', value: json.title });
      });
  };
  return (
    <div style={{ border: '1px solid green' }}>
      {state.title ? state.title : 'Loading...'}
      <br />
      ApiCalledCount {count}
      <h3>
        <button onClick={() => setCount(count + 1)}>Call API Again</button>
      </h3>
    </div>
  );
}

export default ApiFetchComponent;
