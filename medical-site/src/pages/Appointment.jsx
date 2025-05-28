import React, { useState } from 'react';
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
  });

  const [showDoctor, setShowDoctor] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Если выбрана "Analize medicale" — показать доктора
    if (name === 'procedure') {
      setShowDoctor(value === 'Analize medicale');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      // Очистка формы
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        procedure: '',
        address: '',
      });

      setShowDoctor(false); // Сбросим отображение доктора
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Eroare la trimitere!');
    }
  };

  return (
    <>

      <section className="appointment-form-container">
        <h2>Faceți o programare</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Prenume"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nume de familie"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Număr de telefon"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Выбор процедуры */}
          <select
            name="procedure"
            value={formData.procedure}
            onChange={handleChange}
            required
          >
            <option value="">Selectează procedura</option>
            <option value="Stomatologie">Stomatologie</option>
            <option value="Cardiologie">Cardiologie</option>
            <option value="Ginecologie">Ginecologie</option>
            <option value="Dermatologie">Dermatologie</option>
            <option value="Oftalmologie">Oftalmologie</option>
            <option value="Analize medicale">Analize medicale</option>
          </select>

          {/* Выбор адреса */}
          <select
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          >
            <option value="">Alege adresa</option>
            <option value="Chișinău, Str. Test 1">Chișinău, Str. Test 1</option>
            <option value="Chișinău, Str. Centrală">Chișinău, Str. Centrală</option>
            <option value="Bălți, Str. Principală">Bălți, Str. Principală</option>
          </select>

          {/* Показывать имя врача если выбраны "Analize medicale" */}
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