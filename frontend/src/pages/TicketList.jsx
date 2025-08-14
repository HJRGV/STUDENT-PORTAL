import React, { useEffect, useState } from 'react';
import { getTickets } from '../api/ticket';
import './TicketList.css'; // ✅ Import the CSS file here

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await getTickets();
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="ticket-list"> {}
      <h2>Your Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <strong>{ticket.title}</strong>: {ticket.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
