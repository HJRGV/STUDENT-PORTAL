import React, { useState } from 'react';
import { createTicket } from '../api/ticket';
import { toast } from 'react-toastify';
import './RaiseTicket.css'; 

const RaiseTicket = () => {
  const [ticket, setTicket] = useState({ title: '', description: '' });

  const handleChange = (e) =>
    setTicket({ ...ticket, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket(ticket);
      toast.success('Ticket raised');
      setTicket({ title: '', description: '' });
    } catch {
      toast.error('Error creating ticket');
    }
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}> {/* Add className here */}
      <input
        name="title"
        placeholder="Title"
        value={ticket.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={ticket.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Raise Ticket</button>
    </form>
  );
};

export default RaiseTicket;
