import React, { useContext } from 'react';
import { AppContext } from './App';
function DisplayResult() {
  console.log('Rendering DisplayResult');

  const [state, _] = useContext(AppContext);
  return (
    <div style={{ border: '1px solid red' }}>
      Display box
      <br />
      {state.title ? state.title : 'Loading...'}
    </div>
  );
}
export default React.memo(DisplayResult);
