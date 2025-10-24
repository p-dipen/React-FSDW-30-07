const Counter = require('./counter');
const MyName = require('./myname');
// const App = () => {
//     return React.createElement("div", {}, React.createElement("h1", {}, "Adopt Me"), React.createElement(Counter, null))

// }

function MyButton() {
  return <button>I'm a button</button>;
}
// App component is the parent of Mybutton component.Nested Component
const App = () => {
  return (
    <div>
      // My First Calling
      <MyName color={'red'} num={2} />
      <h1>AdoptME</h1>
      // My Second Calling
      <MyName color={'green'} num={1} />
      <MyButton />
      <Counter />
      // My Third Calling
      <MyName />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
