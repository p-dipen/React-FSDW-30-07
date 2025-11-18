import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Product() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '28px' }}>
        <Link to="/product/car">Car</Link> |{' '}
        <Link to="/product/bike">Bike</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Product;
