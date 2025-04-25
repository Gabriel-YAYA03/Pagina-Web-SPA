const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM turno';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo turnos:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    router.post('/', (req, res) => {
        const { fecha, hora, estado, id_cliente, id_servicio, id_empleado, comentarios } = req.body;
        const query = 'INSERT INTO turno (fecha, hora, estado, id_cliente, id_servicio, id_empleado, comentarios) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [fecha, hora, estado, id_cliente, id_servicio, id_empleado, comentarios], (err, results) => {
            if (err) {
                console.error('Error al crear turno:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Turno creado exitosamente');
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { fecha, hora, estado, id_cliente, id_servicio, id_empleado, comentarios } = req.body;
        const query = 'UPDATE turno SET fecha = ?, hora = ?, estado = ?, id_cliente = ?, id_servicio = ?, id_empleado = ?, comentarios = ? WHERE id_turno = ?';
        db.query(query, [fecha, hora, estado, id_cliente, id_servicio, id_empleado, comentarios, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar turno:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Turno no encontrado');
            } else {
                res.send('Turno actualizado exitosamente');
            }
        });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM turno WHERE id_turno = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar turno:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Turno no encontrado');
            } else {
                res.send('Turno eliminado exitosamente');
            }
        });
    });

    return router;
};