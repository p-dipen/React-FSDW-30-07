import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Clock from './Clock.jsx';
import ExampleComponent from './ExampleComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Clock /> */}
    <ExampleComponent />
  </StrictMode>,
);
