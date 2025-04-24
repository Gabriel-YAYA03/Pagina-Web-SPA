import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?q=80&w=1965&auto=format&fit=crop')" }}>
      <h1>Bienvenido al SPA "Sentirse Bien"</h1>
      <nav>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#turnos">Turnos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;