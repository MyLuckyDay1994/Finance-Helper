import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import BudgetPlanner from './components/BudgetPlanner';
import SavingsGoals from './components/SavingsGoals';
import InvestmentEducation from './components/InvestmentEducation';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/expenses" element={<ProtectedRoute><ExpenseTracker /></ProtectedRoute>} />
        <Route path="/budget" element={<ProtectedRoute><BudgetPlanner /></ProtectedRoute>} />
        <Route path="/savings" element={<ProtectedRoute><SavingsGoals /></ProtectedRoute>} />
        <Route path="/investments" element={<ProtectedRoute><InvestmentEducation /></ProtectedRoute>} />
      </Routes>
    </div>
  </Router>
);

export default App;