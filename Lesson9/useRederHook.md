# Introducing the useReducer Hook
## Introduction to useReducer in React
When building more complex React Applications, context can be a crucial feature since it helps with sharing state, across multiple components. However state management itself can become challenging as the logic for updating state grows more complex

Instead of managing state with `useState` and repeating this pattern. React provides another state management hook called `useReducer`. 

## What is a Reducer ? 
A reducer in React applications and JavaScript programming in general is typically a function that reduces one or more complex values to a simpler one. For example, it can reduce an array of numbers to a single number by adding up those numbers. The reducer function performs these additions.

## What is useReducer hook ?
The useReducer hook is an alternative to the useState hook that is preferred when you have complex state logic. It is useful when the state transitions depend on previous state values or when you need to handle actions that can update the state differently.



```javascript 
const [state, dispatch] = useReducer(reducer, initialState);
```

- reducer: A function that defines how the state should be updated based on the action. It takes two parameters: the current state and the action.
- initialState: The initial value of the state.
- State The current state returned from the useReducer hook.
- dispatch: A function used to send an action to the reducer to update the state.

```javascript 
import React, { useReducer } from 'react';
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}
export default Counter;
```