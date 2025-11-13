import React from 'react';
import useWidth from './useWidth';

export default function CustomWidth() {
  const width = useWidth();
  return <div>Custom Width getting data from useWidth {width}</div>;
}
