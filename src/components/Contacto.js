import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <img src="https://images.unsplash.com/photo-1653924295827-ca8551c174c8?q=80&w=1170&auto=format&fit=crop" alt="Contacto" />
      <p>Envíanos tus consultas y te responderemos a la brevedad.</p>
      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;