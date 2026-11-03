const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Obtener todos los contactos
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los contactos', detalle: error.message });
  }
});

// Obtener un contacto por ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar el contacto', detalle: error.message });
  }
});

// Crear un nuevo contacto
router.post('/', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ mensaje: 'Datos inválidos', detalle: error.message });
  }
});

// Actualizar un contacto
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    await contact.update(req.body);
    res.json(contact);
  } catch (error) {
    res.status(400).json({ mensaje: 'No se pudo actualizar', detalle: error.message });
  }
});

// Eliminar un contacto
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    await contact.destroy();
    res.json({ mensaje: 'Contacto eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', detalle: error.message });
  }
});

module.exports = router;