import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import CarProduct from './components/CarProduct';
import BikeProduct from './components/BikeProduct';
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Page404() {
  return <h1>404 Page not found</h1>;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link> | <Link to="/product">Product</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path="car" element={<CarProduct />}></Route>
            <Route path="bike" element={<BikeProduct />}></Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
