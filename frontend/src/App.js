import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RaiseTicket from './pages/RaiseTicket';
import TicketList from './pages/TicketList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/raise-ticket" element={<RaiseTicket />} />
        <Route path="/tickets" element={<TicketList />} />
      </Routes>
    </Router>
  );
}

export default App;
