import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/expenses">Expense Tracker</Link></li>
          <li><Link to="/budget">Budget Planner</Link></li>
          <li><Link to="/savings">Savings Goals</Link></li>
          <li><Link to="/investments">Investment Education</Link></li>
          <li><Link to="/signin">Sign Out</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;