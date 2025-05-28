const express = require('express');
const cors = require('cors');
const pool = require('./db'); // подключаем базу

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Приём формы записи
app.post('/api/appointment', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, procedure, address } = req.body;

    await pool.query(
      `INSERT INTO appointments (first_name, last_name, phone, email, procedure, address)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [firstName, lastName, phone, email, procedure, address]
    );

    res.status(200).json({ message: 'Datele au fost trimise cu succes!' });
  } catch (error) {
    console.error('Eroare la salvare în DB:', error);
    res.status(500).json({ message: 'Eroare la trimitere în baza de date!' });
  }
});

// Тестовый маршрут
app.get('/', (req, res) => {
  res.send('Backend merge cu PostgreSQL!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Backend работает на http://localhost:${PORT}`);
});