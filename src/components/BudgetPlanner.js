import React, { useState } from 'react';
import './BudgetPlanner.css';

const BudgetPlanner = () => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const addBudget = (e) => {
    e.preventDefault();
    const newBudget = { category, amount, date: new Date().toISOString() };
    setBudgets([...budgets, newBudget]);
    setCategory('');
    setAmount('');
  };

  return (
    <div className="budget-planner">
      <h1>Budget Planner</h1>
      <form onSubmit={addBudget}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Budget Amount"
          required
        />
        <button type="submit">Set Budget</button>
      </form>
      <h2>Current Budgets</h2>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            <span className="budget-date">{new Date(budget.date).toLocaleDateString()}</span>
            <span className="budget-category">{budget.category}</span>
            <span className="budget-amount">{budget.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetPlanner;
