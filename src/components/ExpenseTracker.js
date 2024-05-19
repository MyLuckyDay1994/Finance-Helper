import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = { amount, category, description, date: new Date().toISOString() };
    setExpenses([...expenses, newExpense]);
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <h2>Logged Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span className="expense-date">{new Date(expense.date).toLocaleDateString()}</span>
            <span className="expense-category">{expense.category}</span>
            <span className="expense-amount">{expense.amount}</span>
            <span className="expense-description">{expense.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
