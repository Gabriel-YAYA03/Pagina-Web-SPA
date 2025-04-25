const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM disponibilidad_horaria';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo disponibilidad horaria:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    router.post('/', (req, res) => {
        const { id_empleado, dia_semana, hora_inicio, hora_fin } = req.body;
        const query = 'INSERT INTO disponibilidad_horaria (id_empleado, dia_semana, hora_inicio, hora_fin) VALUES (?, ?, ?, ?)';
        db.query(query, [id_empleado, dia_semana, hora_inicio, hora_fin], (err, results) => {
            if (err) {
                console.error('Error al registrar disponibilidad:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Disponibilidad registrada exitosamente');
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { id_empleado, dia_semana, hora_inicio, hora_fin } = req.body;
        const query = 'UPDATE disponibilidad_horaria SET id_empleado = ?, dia_semana = ?, hora_inicio = ?, hora_fin = ? WHERE id_disponibilidad = ?';
        db.query(query, [id_empleado, dia_semana, hora_inicio, hora_fin, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar disponibilidad:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Disponibilidad no encontrada');
            } else {
                res.send('Disponibilidad actualizada exitosamente');
            }
        });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM disponibilidad_horaria WHERE id_disponibilidad = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar disponibilidad:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Disponibilidad no encontrada');
            } else {
                res.send('Disponibilidad eliminada exitosamente');
            }
        });
    });

    return router;
};