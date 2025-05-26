import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id="hero">
      <nav className="navigation">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
          <Link to="/" className="logo"><span>Avem</span>Grija</Link>
        <ul className="menu">
          <li><a href="#team">Gaseste un Doctor</a></li>
          <li><a href="#our-services">Serviciile noastre</a></li>
          <li><a href="#testimonials">Recenzii</a></li>
        </ul>
        <Link to="/appointment" className="nav-appointment-btn">Inscriere</Link>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Un pas inainte pentru sanatatea ta</h1>
          <p>
            Centrul de Diagnostic Italian din Moldova oferă servicii medicale
            moderne, cu echipamente performante și specialiști calificați.
            Combinăm experiența italiană cu profesionalismul local pentru un
            diagnostic rapid și precis.
          </p>
          <div className="hero-text-btns">
            <a href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
              Doctor
            </a>
            <a href="#">
              <i className="fa-solid fa-check"></i>
              Cartea de vizita
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img src="/imagini/main-bg.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;