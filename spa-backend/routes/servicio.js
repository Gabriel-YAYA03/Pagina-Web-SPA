const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM servicio';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo servicios:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    router.post('/', (req, res) => {
        const { nombre, descripcion, tipo, duracion, precio } = req.body;
        const query = 'INSERT INTO servicio (nombre, descripcion, tipo, duracion, precio) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [nombre, descripcion, tipo, duracion, precio], (err, results) => {
            if (err) {
                console.error('Error al registrar servicio:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Servicio registrado exitosamente');
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, tipo, duracion, precio } = req.body;
        const query = 'UPDATE servicio SET nombre = ?, descripcion = ?, tipo = ?, duracion = ?, precio = ? WHERE id_servicio = ?';
        db.query(query, [nombre, descripcion, tipo, duracion, precio, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar servicio:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Servicio no encontrado');
            } else {
                res.send('Servicio actualizado exitosamente');
            }
        });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM servicio WHERE id_servicio = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar servicio:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Servicio no encontrado');
            } else {
                res.send('Servicio eliminado exitosamente');
            }
        });
    });

    return router;
};