import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; 
import ProductListing from './pages/ProductListing';
// import Cart from './pages/Cart'; // Un-commented for better functionality
// import NotFound from './pages/NotFound'; // Added 404 for improved UX

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home Page with Carousel & Feature Section */}
        <Route index element={<Home />} />

        {/* Cart Route */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/allproducts" element={<ProductListing/>} /> 

        {/* 404 - Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
