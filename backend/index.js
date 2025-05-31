const express = require('express');
const cors = require('cors');
const pool = require('./db');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Настройка Gmail с App Password
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'grijaavem@gmail.com', // Тот же, что ты указал в Google
pass: 'edbk bbcb jlfa cbsd' // ВСТАВЬ СЮДА ТОЧНЫЙ 16-ЗНАЧНЫЙ КОД
}
});

// ✅ Получение занятых часов
app.get('/api/booked-times', async (req, res) => {
const { date } = req.query;

if (!date) {
return res.status(400).json({ message: 'Data este necesară.' });
}

try {
const result = await pool.query(
'SELECT time FROM appointments WHERE date = $1',
[date]
);
const times = result.rows.map(row => row.time);
res.json(times);
} catch (error) {
console.error('❌ Eroare la preluarea orelor:', error);
res.status(500).json({ message: 'Eroare la server!' });
}
});

// ✅ Обработка формы и отправка email
app.post('/api/appointment', async (req, res) => {
try {
const {
firstName, lastName, phone, email,
procedure, address, date, time
} = req.body;

// Сохраняем в PostgreSQL
await pool.query(
`INSERT INTO appointments
(first_name, last_name, phone, email, procedure, address, date, time)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
[firstName, lastName, phone, email, procedure, address, date, time]
);

// Формируем письмо
const mailOptions = {
from: 'grijaavem@gmail.com',
to: email,
subject: 'Confirmarea programării',
text: `Dragă ${firstName} ${lastName},\n\nAm primit solicitarea dvs. pentru programare la procedura: ${procedure}.\nData: ${date}, Ora: ${time}\nLocația: ${address}\n\nVă așteptăm cu drag!\nCentrul AvemGrija`
};

// Пытаемся отправить
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.error('❌ Eroare la trimitere email:', error);
return res.status(500).json({ message: 'Eroare la trimitere email!' });
} else {
console.log('✅ Email trimis:', info.response);
return res.status(200).json({ message: 'Datele au fost trimise cu succes! Emailul a fost expediat.' });
}
});

} catch (error) {
console.error('❌ Eroare generală:', error);
res.status(500).json({ message: 'Eroare la trimitere în baza de date sau email!' });
}
});

// Тестовый маршрут
app.get('/', (req, res) => {
res.send('Backend merge cu PostgreSQL!');
});

app.listen(PORT, () => {
console.log(`✅ Backend merge pe http://localhost:${PORT}`);
});