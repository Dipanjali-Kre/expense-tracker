import React from 'react';
import './ExpenseItem.css';

function ExpenseItem({ expense, onDeleteExpense }) {
  const formattedDate = new Date(expense.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li className="expense-item">
      <div className="expense-details">
        <span className="expense-category">{expense.category}</span>
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
        <span className="expense-date">{formattedDate}</span>
      </div>
      <button onClick={() => onDeleteExpense(expense.id)} className="delete-button">Delete</button>
    </li>
  );
}

export default ExpenseItem;
