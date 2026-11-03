require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Estado de la API y de la base de datos
app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ api: 'conectada', baseDatos: 'conectada' });
  } catch (error) {
    res.status(503).json({ api: 'conectada', baseDatos: 'desconectada' });
  }
});

app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => console.log(`API REST corriendo en http://localhost:${PORT}`));

sequelize.sync()
  .then(() => console.log('Conectado a MySQL y tabla lista'))
  .catch(err => console.error('Error de conexión a MySQL:', err.message));