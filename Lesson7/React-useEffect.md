# React useEffect

## What is useEffect ? 
In React, `useEffect` is a built in hook that allows you to perform side effects in function components. Side effects, as the name suggests are operations that affect something outside of the function, such as API calls, timers, logging, or updating the DOM.

Before the introduction of hooks in React 16.8, you had to use class components and lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` to handle side effects. Now, with `useEffect`, these lifecycle events are combined into single function for functional components.

## Why Choose useEffect?
`useEffect` is a powerful hook for managing side effects in React for several reasons:
1. Simplification of code
2. Centralized side effects
3. Improved Readability
4. Flexibility
   
## How does it work?
The `useEffect` hook accepts two arguments:
1. Effect function
2. Dependency array (optional)

```javascript
useEffect(() => {
    // Side Effect logic goes here
    return () => {
        // Optional cleanup function
    }
}, [/* Dependencies go here */])
```

### Example 
```javascript 
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json));

    // Optional cleanup (in this case, not needed)
    return () => {
      // Cleanup logic if necessary
    };
  }, []); // Empty array means this effect will only run once when the component mounts

  return <div>{data ? data.title : 'Loading...'}</div>;
}
```