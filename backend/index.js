const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Простой тестовый маршрут
app.get('/', (req, res) => {
  res.send('Backend merge!');
});

// Приём формы записи
app.post('/api/appointment', (req, res) => {
  const data = req.body;
  console.log('Принятые данные:', data);
  res.status(200).json({ message: 'Заявка получена!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Backend работает на http://localhost:${PORT}`);
});