import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import OurFarm from './pages/OurFarm';
import OurKinnow from './pages/OurKinnow';
import OrderKinnow from './pages/OrderKinnow';
import DeliveryPolicy from './pages/DeliveryPolicy';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-farm" element={<OurFarm />} />
          <Route path="/our-kinnow" element={<OurKinnow />} />
          <Route path="/order" element={<OrderKinnow />} />
          <Route path="/delivery" element={<DeliveryPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
