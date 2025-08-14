import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.includes('@')) return alert('Invalid email');
    if (form.phone.length !== 10) return alert('Invalid phone number');

    try {
      await registerUser(form);
      alert('Registered successfully!');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}> {/*  Add className */}
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
