import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarioUsuario.css';

function CalendarioUsuario() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  // Turnos reservados por el usuario con abreviaturas
  const turnosUsuario = [
    { fecha: '2025-04-15', servicio: 'MR' }, // Masaje Relajante
    { fecha: '2025-04-20', servicio: 'Y' },  // Yoga
    { fecha: '2025-04-25', servicio: 'TF' }  // Tratamiento Facial
  ];

  return (
    <div className="calendario-usuario">
      <h3>Mis Turnos</h3>
      <Calendar
        onChange={setFechaSeleccionada}
        value={fechaSeleccionada}
        tileContent={({ date }) => {
          const turno = turnosUsuario.find(t => t.fecha === date.toISOString().split('T')[0]);
          return turno ? (
            <p className="marcar-turno">{turno.servicio}</p>
          ) : null;
        }}
        tileClassName={({ date }) => {
          const turno = turnosUsuario.find(t => t.fecha === date.toISOString().split('T')[0]);
          return turno ? 'react-calendar__tile--active' : 'react-calendar__tile--available';
        }}
      />
      <p>Fecha seleccionada: {fechaSeleccionada.toDateString()}</p>
    </div>
  );
}

export default CalendarioUsuario;