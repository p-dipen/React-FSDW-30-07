import React, { useEffect, useState } from 'react';
export default function useWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const logInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', logInnerWidth);
    return () => {
      window.removeEventListener('resize', logInnerWidth);
    };
  }, []);
  return innerWidth;
}
