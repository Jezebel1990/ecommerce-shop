import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  return (
<div className='overflow-hidden'>
  <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    <Sidebar />
    <Footer />
  </Router>
</div>
  );
}

export default App;
