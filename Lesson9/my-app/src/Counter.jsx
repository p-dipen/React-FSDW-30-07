import React, { useContext } from 'react';
import { AppContext } from './App';
export default function Counter() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
    </div>
  );
}
