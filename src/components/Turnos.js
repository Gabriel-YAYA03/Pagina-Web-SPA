import React from 'react';
import './Turnos.css';

function Turnos() {
  return (
    <section className="turnos">
      <h2>Reserva tu turno</h2>
      <img src="https://images.unsplash.com/photo-1700168333927-023e01cc748f?q=80&w=987&auto=format&fit=crop" alt="Agenda de turnos" />
      <p>Elige el servicio y horario que mejor se adapte a ti.</p>
      <button>Reservar ahora</button>
    </section>
  );
}

export default Turnos;