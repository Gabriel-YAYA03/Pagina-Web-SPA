
module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Obtener todas las consultas
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM consulta';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo consultas:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    // Crear una nueva consulta
    router.post('/', (req, res) => {
        const { nombre, email, mensaje } = req.body;
        const query = 'INSERT INTO consulta (nombre, email, mensaje, estado) VALUES (?, ?, ?, "pendiente")';
        db.query(query, [nombre, email, mensaje], (err, results) => {
            if (err) {
                console.error('Error al crear consulta:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Consulta creada exitosamente');
        });
    });

    // Actualizar el estado de una consulta
    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { estado } = req.body;
        const query = 'UPDATE consulta SET estado = ? WHERE id_consulta = ?';
        db.query(query, [estado, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar consulta:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Consulta no encontrada');
            } else {
                res.send('Consulta actualizada exitosamente');
            }
        });
    });

    // Eliminar una consulta
    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM consulta WHERE id_consulta = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar consulta:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Consulta no encontrada');
            } else {
                res.send('Consulta eliminada exitosamente');
            }
        });
    });

    return router;
};