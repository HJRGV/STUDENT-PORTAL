import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      console.log('Login response:', res.data);
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}> {/* Add className here */}
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
