import React from 'react';
import './Servicios.css';

function Servicios() {
  return (
    <section className="servicios">
      <h2>Servicios</h2>
      <ul>
        <li>
          <img src="https://plus.unsplash.com/premium_photo-1661682860527-2c9dfb40a793?q=80&w=1974&auto=format&fit=crop" alt="Masajes relajantes" />
          <h3>Masajes relajantes</h3>
          <p>Relaja tu cuerpo y mente con nuestros masajes terapéuticos.</p>
        </li>
        <li>
          <img src="https://plus.unsplash.com/premium_photo-1663011449750-7c44e1d9ee1d?q=80&w=987&auto=format&fit=crop" alt="Yoga y meditación" />
          <h3>Yoga y meditación</h3>
          <p>Encuentra tu equilibrio interior con nuestras clases guiadas.</p>
        </li>
        <li>
          <img src="https://plus.unsplash.com/premium_photo-1683122082225-26022a0deb5d?q=80&w=1170&auto=format&fit=crop" alt="Tratamientos faciales" />
          <h3>Tratamientos faciales</h3>
          <p>Renueva tu piel con tratamientos personalizados.</p>
        </li>
      </ul>
    </section>
  );
}

export default Servicios;