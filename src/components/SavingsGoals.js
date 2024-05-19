import React, { useState } from 'react';
import './SavingsGoals.css';

const SavingsGoals = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');

  const addGoal = (e) => {
    e.preventDefault();
    const newGoal = { goalName, goalAmount, currentAmount, date: new Date().toISOString() };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setGoalAmount('');
    setCurrentAmount('');
  };

  return (
    <div className="savings-goals">
      <h1>Savings Goals</h1>
      <form onSubmit={addGoal}>
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          placeholder="Goal Name"
          required
        />
        <input
          type="number"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          placeholder="Goal Amount"
          required
        />
        <input
          type="number"
          value={currentAmount}
          onChange={(e) => setCurrentAmount(e.target.value)}
          placeholder="Current Amount"
          required
        />
        <button type="submit">Add Goal</button>
      </form>
      <h2>Current Savings Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <span className="goal-date">{new Date(goal.date).toLocaleDateString()}</span>
            <span className="goal-name">{goal.goalName}</span>
            <span className="goal-amount">{goal.goalAmount}</span>
            <span className="current-amount">{goal.currentAmount}</span>
            <span className="goal-progress">{((goal.currentAmount / goal.goalAmount) * 100).toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsGoals;