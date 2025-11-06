import React, { useState, useEffect, useContext } from 'react';
import TimerComponent from './TimerComponent';
import { TitleContext } from './App';
function ApiFetchComponent() {
  const [title, setTitle] = useContext(TitleContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchApi();
  }, [count]);
  const fetchApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => response.json())
      .then((json) => {
        setTitle(json.title);
      });
  };
  return (
    <div style={{ border: '1px solid green' }}>
      {title ? title : 'Loading...'}
      <br />
      ApiCalledCount {count}
      <h3>
        <button onClick={() => setCount(count + 1)}>Call API Again</button>
      </h3>
    </div>
  );
}

export default ApiFetchComponent;
