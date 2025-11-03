# State and lifecycle in React

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick() {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}
tick();
```

Let’s quickly recap what’s going on and the order in which the methods are called:

1. When `<Clock />` is passed to `root.render()`, React calls the constructor of the `Clock` component. Since `Clock` needs to display the current time, it initializes `this.state` with an object including the current time. We will later update this state.
2. React then calls the `Clock` component’s `render()` method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the `Clock`’s render output.
3. When the `Clock` output is inserted in the DOM, React calls the `componentDidMount()` lifecycle method. Inside it, the `Clock` component asks the browser to set up a timer to call the component’s `tick()` method once a second.
4. Every second the browser calls the `tick() `method. Inside it, the `Clock` component schedules a UI update by calling `setState()` with an object containing the current time. Thanks to the `setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen. This time, `this.state.date` in the `render()` method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5. If the `Clock` component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.
   
![React Licycle](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

## Using the state correctly

There are three things you should know about setState().

### Do not modify state directly
for example, this will not re-render a component
```javascript 
// Wrong
this.state.comment = "Hello";
```

Instead, use setState():
```javascript
//Correct
this.setState({ comment : 'Hello' });
```

The only place where you can assign `the.state` is the constructor.

### State Updates May be asynchronous
React may batch multiple `setState()` calls into a single update for performance.

Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

For example, this code may fail to update the counter:
```javascript
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
})
```

To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
```javascript
// Correct 
this.setState((state,props) => ({
    counter: state.counter + props.increment
}))
```
We used an arrow function above, but it also works with regular functions:
```javascript
// Correct 
this.setState(function (state,props) {
   return { counter: state.counter + props.increment };
});
```

