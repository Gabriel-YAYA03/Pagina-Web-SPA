module.exports = (db) => {
    const express = require('express');
    const router = express.Router();
    router.get('/', (req, res) => {
        const query = 'SELECT * FROM cliente';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error obteniendo clientes:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.json(results);
        });
    });

    router.post('/', (req, res) => {
        const { nombre, apellido, telefono, email } = req.body;
        const query = 'INSERT INTO cliente (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)';
        db.query(query, [nombre, apellido, telefono, email], (err, results) => {
            if (err) {
                console.error('Error al registrar cliente:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            res.status(201).send('Cliente creado exitosamente');
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, telefono, email } = req.body;
        const query = 'UPDATE cliente SET nombre = ?, apellido = ?, telefono = ?, email = ? WHERE id_cliente = ?';
        db.query(query, [nombre, apellido, telefono, email, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar cliente:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Cliente no encontrado');
            } else {
                res.send('Cliente actualizado exitosamente');
            }
        });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM cliente WHERE id_cliente = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar cliente:', err);
                res.status(500).send('Error en el servidor');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('Cliente no encontrado');
            } else {
                res.send('Cliente eliminado exitosamente');
            }
        });
    });

    return router;
};