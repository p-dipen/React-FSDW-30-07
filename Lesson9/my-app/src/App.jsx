import { createContext, useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ApiFetchComponent from './ExampleComponent.jsx';
import DisplayResult from './DisplayResult.jsx';
import DummyComponent from './DummyComponent';
import WrapperComponent from './WrapperComponent.jsx';
import Counter from './Counter.jsx';

export const AppContext = createContext();

export const initialState = { count: 0, title: '' };
// Work as Reducer
export const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SETTITLE':
      return { ...state, title: action.value };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Counter />
      <br />

      <WrapperComponent />
      <br />
      <br />
      <DisplayResult />
      <br />
      <br />
      <DummyComponent />
    </AppContext.Provider>
  );
}

export default App;
