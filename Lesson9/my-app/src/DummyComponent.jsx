import React, { useContext } from 'react';
import { AppContext } from './App';

function DummyComponent() {
  console.log('Rendering DummyComponent');
  const [_, dispatch] = useContext(AppContext);

  return (
    <div style={{ border: '1px solid pink' }}>
      Why I am here ?
      <br />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
    </div>
  );
}
export default React.memo(DummyComponent);
