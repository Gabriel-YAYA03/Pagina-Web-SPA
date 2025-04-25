const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const clienteRoutes = require('./routes/cliente');
const empleadoRoutes = require('./routes/empleado');
const servicioRoutes = require('./routes/servicio');
const turnoRoutes = require('./routes/turno');
const disponibilidadRoutes = require('./routes/disponibilidad');
const consultasRoutes = require('./routes/consultas');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spa'
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Uso de rutas
app.use('/clientes', clienteRoutes(db));
app.use('/empleados', empleadoRoutes(db));
app.use('/servicios', servicioRoutes(db));
app.use('/turnos', turnoRoutes(db));
app.use('/disponibilidad', disponibilidadRoutes(db));
app.use('/consulta', consultasRoutes(db));

// Inicialización del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


