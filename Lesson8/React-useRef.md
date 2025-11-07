# React useRef Hook

## Parameters 
- `initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render.
## Returns 
`useRef` returns an object with a single property:

- `current`: Initially, it’s set to the `initialValue` you have passed. You can later set it to something else. If you pass the `ref` object to React as a ref attribute to a JSX node, React will set its `current` property.
On the next renders, useRef will return the same object.

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

## Accessing DOM Elements
The useRef Hook is often used to access DOM elements directly.

First, we create a ref using the useRef Hook: const inputElement = useRef();.

Then, we attach the ref to a DOM element using the ref attribute in JSX: ```<input type="text" ref={inputElement} />```.

Finally, we can access the DOM element using the current property: inputElement.current.


## Tracking State Changes
The `useRef` Hook can also be used to keep track of previous state values.

This is because we are able to persist `useRef` values between renders.

