import React, { useState, useEffect, useMemo } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import CategoryBreakdown from './components/CategoryBreakdown';
import DateFilter from './components/DateFilter';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const start = filterStartDate ? new Date(filterStartDate) : null;
      const end = filterEndDate ? new Date(filterEndDate) : null;

      if (start && expenseDate < start) return false;
      if (end && expenseDate > end) return false;
      return true;
    });
  }, [expenses, filterStartDate, filterEndDate]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <div className="left-panel">
          <ExpenseForm onAddExpense={addExpense} />
          <DateFilter
            startDate={filterStartDate}
            endDate={filterEndDate}
            onStartDateChange={setFilterStartDate}
            onEndDateChange={setFilterEndDate}
          />
          <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
        </div>
        <div className="right-panel">
          <Summary expenses={filteredExpenses} />
          <CategoryBreakdown expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
