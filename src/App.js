import React from 'react';
import Header from './components/Header';
import Servicios from './components/Servicios';
import Turnos from './components/Turnos'; // ¡Ahora sí, aquí está Turnos!
import Contacto from './components/Contacto';
import CalendarioUsuario from './components/CalendarioUsuario';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <Header />
        <main>
          <Servicios />
          <Turnos /> {/* Aquí lo agregamos */}
          <Contacto />
        </main>
      </div>
      <CalendarioUsuario />
    </div>
  );
}

export default App;