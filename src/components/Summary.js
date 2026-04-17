import React, { useMemo } from 'react';
import './Summary.css';

function Summary({ expenses }) {
  const totalSpending = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  return (
    <div className="summary-container card">
      <h2>Summary</h2>
      <p className="total-spending">Total Spending: <span>${totalSpending.toFixed(2)}</span></p>
    </div>
  );
}

export default Summary;
