import React, { useContext } from 'react';
import { TitleContext } from './App';
export default function DisplayResult() {
  const [title, _] = useContext(TitleContext);
  return (
    <div style={{ border: '1px solid red' }}>
      Display box
      <br />
      {title ? title : 'Loading...'}
    </div>
  );
}
