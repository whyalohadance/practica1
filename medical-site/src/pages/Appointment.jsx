import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Appointment = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
phone: '',
email: '',
procedure: '',
address: '',
date: '',
time: '',
});

const [showDoctor, setShowDoctor] = useState(false);
const [errorTime, setErrorTime] = useState('');
const [suggestion, setSuggestion] = useState('');
const timeSlots = [
'10:00', '11:00', '12:00', '13:00',
'14:00', '15:00', '16:00', '17:00',
'18:00', '19:00', '20:00'
];

// изменение полей
const handleChange = (e) => {
const { name, value } = e.target;

if (name === 'procedure') {
setShowDoctor(value === 'Analize medicale');
}

setFormData(prev => ({
...prev,
[name]: value,
}));

if (name === 'date' || name === 'time') {
setErrorTime('');
setSuggestion('');
}
};

// проверка занятости времени
useEffect(() => {
const checkAvailability = async () => {
if (!formData.date || !formData.time) return;

try {
const res = await fetch(`http://localhost:5000/api/booked-times?date=${formData.date}`);
const bookedTimes = await res.json();

if (bookedTimes.includes(formData.time)) {
setErrorTime('Acest timp este ocupat.');
const nextDate = new Date(formData.date);
nextDate.setDate(nextDate.getDate() + 2);
const formatted = nextDate.toISOString().split('T')[0];
setSuggestion(`Vă putem propune data de poimâine (${formatted}) la aceeași oră.`);
} else {
setErrorTime('');
setSuggestion('');
}
} catch (err) {
console.error('Eroare la verificarea timpului:', err);
}
};

checkAvailability();
}, [formData.date, formData.time]);

const handleSubmit = async (e) => {
e.preventDefault();

if (errorTime) {
alert('Te rugăm să alegi alt timp.');
return;
}

try {
// отправка в PostgreSQL
await fetch('http://localhost:5000/api/appointment', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(formData),
});

// отправка в Formspree
await fetch('https://formspree.io/f/xkgbwqyr', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
...formData,
message: `Programare pentru procedura: ${formData.procedure}, la data: ${formData.date}, ora: ${formData.time}, la adresa: ${formData.address}`
})
});

alert('Datele au fost trimise cu succes!');

setFormData({
firstName: '',
lastName: '',
phone: '',
email: '',
procedure: '',
address: '',
date: '',
time: '',
});
setShowDoctor(false);
setErrorTime('');
setSuggestion('');
} catch (error) {
console.error('Eroare la trimitere:', error);
alert('Eroare la trimitere!');
}
};

return (
<>

<section className="appointment-form-container">
<h2>Faceți o programare</h2>
<form className="appointment-form" onSubmit={handleSubmit}>
<input type="text" name="firstName" placeholder="Prenume" value={formData.firstName} onChange={handleChange} required />
<input type="text" name="lastName" placeholder="Nume de familie" value={formData.lastName} onChange={handleChange} required />
<input type="tel" name="phone" placeholder="Număr de telefon" value={formData.phone} onChange={handleChange} required />
<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

<select name="procedure" value={formData.procedure} onChange={handleChange} required>
<option value="">Selectează procedura</option>
<option value="Stomatologie">Stomatologie</option>
<option value="Cardiologie">Cardiologie</option>
<option value="Ginecologie">Ginecologie</option>
<option value="Dermatologie">Dermatologie</option>
<option value="Oftalmologie">Oftalmologie</option>
<option value="Analize medicale">Analize medicale</option>
</select>

<select name="address" value={formData.address} onChange={handleChange} required>
<option value="">Alege adresa</option>
<option value="Chișinău, Str. Test 1">Chișinău, Str. Test 1</option>
<option value="Chișinău, Str. Centrală">Chișinău, Str. Centrală</option>
<option value="Bălți, Str. Principală">Bălți, Str. Principală</option>
</select>

<input type="date" name="date" value={formData.date} onChange={handleChange} required />

<select name="time" value={formData.time} onChange={handleChange} required>
<option value="">Alege ora</option>
{timeSlots.map((t) => (
<option key={t} value={t}>{t}</option>
))}
</select>

{errorTime && <p style={{ color: 'red' }}>{errorTime}</p>}
{suggestion && <p style={{ color: 'blue' }}>{suggestion}</p>}

{showDoctor && (
<div className="doctor-box">
<p><strong>Doctor responsabil:</strong> Dr. Andrei Popescu</p>
</div>
)}

<button type="submit">Trimite</button>
</form>
</section>

</>
);
};

export default Appointment;