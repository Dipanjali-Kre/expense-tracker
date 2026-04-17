import React, { useMemo } from 'react';
import './CategoryBreakdown.css';

function CategoryBreakdown({ expenses }) {
  const categoryData = useMemo(() => {
    const breakdown = {};
    let total = 0;

    expenses.forEach((expense) => {
      const category = expense.category.toLowerCase();
      breakdown[category] = (breakdown[category] || 0) + expense.amount;
      total += expense.amount;
    });

    if (total === 0) return [];

    return Object.keys(breakdown).map((category) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      amount: breakdown[category],
      percentage: (breakdown[category] / total) * 100,
    })).sort((a, b) => b.amount - a.amount);
  }, [expenses]);

  return (
    <div className="category-breakdown-container card">
      <h2>Category Breakdown</h2>
      {categoryData.length === 0 ? (
        <p>No expenses to categorize.</p>
      ) : (
        <div className="chart-wrapper">
          {categoryData.map((data, index) => (
            <div key={index} className="category-bar-item">
              <div className="category-info">
                <span className="category-name">{data.category}</span>
                <span className="category-percentage">{data.percentage.toFixed(1)}%</span>
              </div>
              <div className="bar-background">
                <div
                  className="bar-fill"
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryBreakdown;
