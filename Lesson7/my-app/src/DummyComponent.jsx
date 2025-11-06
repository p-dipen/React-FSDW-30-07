import React from 'react';

function DummyComponent() {
  console.log('Rendering DummyComponent');
  return <div style={{ border: '1px solid pink' }}>Why I am here ? </div>;
}
export default React.memo(DummyComponent);
