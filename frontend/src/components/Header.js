import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>SweetShop</h1>
      <nav>
        <Link to="/">Home</Link>
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && <button onClick={handleLogout}>Logout</button>}
        {token && <Link to="/admin">Admin</Link>}
      </nav>
    </header>
  );
}
