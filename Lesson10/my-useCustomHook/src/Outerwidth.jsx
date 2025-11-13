import React from 'react';
import useWidth from './useWidth';

export default function OuterWidth() {
  const width = useWidth();
  return <div>{width}</div>;
}
