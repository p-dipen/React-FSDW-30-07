import logo from './logo.svg';
import './App.css';

function App() {
  const fnHoursePower = (x) => {
    const hoursePower = x * 25;
    return hoursePower;
  };

  const myobj = {
    name: 'first',
    model: 'old',
    color: 'white',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Car</h1>
        <p>It has {fnHoursePower(25)} horsepower</p>
        <p>
          {' '}
          My car is a {myobj.color} {myobj.name} {myobj.model}{' '}
        </p>
      </header>
    </div>
  );
}

export default App;
