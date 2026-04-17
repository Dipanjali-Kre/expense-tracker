import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount || !date) {
      alert('Please fill in all fields.');
      return;
    }
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Amount must be a positive number.');
      return;
    }

    onAddExpense({
      category,
      amount: parseFloat(amount),
      date,
    });

    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="expense-form-container card">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Food, Transport"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 25.50"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-button">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
