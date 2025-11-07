import { useRef, useState, useEffect } from 'react';

export default function InputApp() {
  const [inputValue, setInputValue] = useState('');
  // 1. Create a ref to hold a reference to the input element
  const inputRef = useRef(null);
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  // Tracking State Changes

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="input_text"
        ref={inputRef}
      />
      <br />
      <br />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <button onClick={focusInput}>Focus on Input</button>
    </>
  );
}
