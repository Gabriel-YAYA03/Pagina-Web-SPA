const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM empleado';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo empleados:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    router.post('/', (req, res) => {
        const { nombre, apellido, especialidad, telefono, email } = req.body;
        const query = 'INSERT INTO empleado (nombre, apellido, especialidad, telefono, email) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [nombre, apellido, especialidad, telefono, email], (err, results) => {
            if (err) {
                console.error('Error al registrar empleado:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Empleado registrado exitosamente');
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, especialidad, telefono, email } = req.body;
        const query = 'UPDATE empleado SET nombre = ?, apellido = ?, especialidad = ?, telefono = ?, email = ? WHERE id_empleado = ?';
        db.query(query, [nombre, apellido, especialidad, telefono, email, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar empleado:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Empleado no encontrado');
            } else {
                res.send('Empleado actualizado exitosamente');
            }
        });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM empleado WHERE id_empleado = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar empleado:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Empleado no encontrado');
            } else {
                res.send('Empleado eliminado exitosamente');
            }
        });
    });

    return router;
};