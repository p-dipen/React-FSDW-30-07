import React, { useEffect, useState } from 'react';
export default function InnerWidth() {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    console.log('run useEffect should trigger only once');
    const logInnerWidth = () => {
      console.log('FSDW-Window.innerWidth=', window.innerWidth);
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', logInnerWidth);
    return () => {
      console.log('Unmounted InnerWidth');
      window.removeEventListener('resize', logInnerWidth);
    };
  }, []);
  return <div>innerWidth = {innerWidth}</div>;
}
