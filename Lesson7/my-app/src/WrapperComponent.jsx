import React from 'react';
import ApiFetchComponent from './ExampleComponent.jsx';
function WrapperComponent() {
  console.log('Rendering WrapperComponent');
  return (
    <div style={{ border: '1px solid yellow', padding: '10px' }}>
      Wrapper Component
      <ApiFetchComponent />
    </div>
  );
}
export default React.memo(WrapperComponent);
