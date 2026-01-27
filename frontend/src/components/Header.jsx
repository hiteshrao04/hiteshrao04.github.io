import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <Leaf size={24} className="logo-icon" />
          Rao Farmhouse
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`network-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="network-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/our-farm" className="network-nav-link" onClick={() => setIsMenuOpen(false)}>Our Farm</Link>
          <Link to="/our-kinnow" className="network-nav-link" onClick={() => setIsMenuOpen(false)}>Our Kinnow</Link>
          <Link to="/delivery" className="network-nav-link" onClick={() => setIsMenuOpen(false)}>Delivery</Link>
          <Link to="/contact" className="network-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/order" className="btn-primary nav-order-btn" onClick={() => setIsMenuOpen(false)}>Order Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
