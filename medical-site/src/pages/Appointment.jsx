// src/pages/Appointment.jsx
import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    procedure: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message); // Покажет "Заявка получена!"
  } catch (error) {
    console.error('Ошибка при отправке:', error);
    alert('Eroare la trimitere!');
  }
};

  return (
    <section id="appointment-form" style={{ padding: '40px 20px' }}>
      <h2>Faceți o programare</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="text" name="firstName" placeholder="Prenume" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Nume" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefon" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Gmail" onChange={handleChange} required />
        <select name="procedure" onChange={handleChange} required>
          <option value="">Alege procedura</option>
          <option value="Cardiologie">Cardiologie</option>
          <option value="Dermatologie">Dermatologie</option>
          <option value="Ginecologie">Ginecologie</option>
          <option value="Ortopedie">Ortopedie</option>
        </select>
        <input type="text" name="address" placeholder="Adresa preferată" onChange={handleChange} required />
        <button type="submit">Trimite</button>
      </form>
    </section>
  );
};

export default Appointment;