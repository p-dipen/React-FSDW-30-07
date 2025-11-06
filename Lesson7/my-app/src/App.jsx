import { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ApiFetchComponent from './ExampleComponent.jsx';
import DisplayResult from './DisplayResult.jsx';
import DummyComponent from './DummyComponent';
import WrapperComponent from './WrapperComponent.jsx';

export const TitleContext = createContext();
function App() {
  const [title, setTitle] = useState(null);
  return (
    <TitleContext.Provider value={[title, setTitle]}>
      <WrapperComponent />
      <br />
      <br />
      <DisplayResult />
      <br />
      <br />
      <DummyComponent />
    </TitleContext.Provider>
  );
}

export default App;
