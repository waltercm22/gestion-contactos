const express = require('express');
const path = require('path');
const sequelize = require('./db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/contacts', contactRoutes);

sequelize.sync()
  .then(() => {
    console.log('Conectado a MySQL y tabla lista');
    app.listen(3000, () => console.log('API REST corriendo en http://localhost:3000'));
  })
  .catch(err => console.error('Error de conexión a MySQL:', err.message));