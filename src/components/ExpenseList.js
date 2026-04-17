import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list-container card">
      <h2>Expense History</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded yet.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
